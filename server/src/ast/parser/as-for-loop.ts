import { isParsedType, isParsedValue, log, logTable, toString } from "../../utilities";
import { AST, ForIn, ForNumeric, ParsedTokens, ParsedType, ParsedVariableDeclaration, PossibleTypes, TableType } from "../../types";
import { globals } from "../env";
import { ForExpressionContext, ForInExpressionContext } from "../LuauGrammar/LuauParser";
import { buildTable, createParsedValuePlaceHolder, createVariablePlaceholder, normalizeExpression, normalizeExpression1 } from "./as-expression";
import { normalizeAllNamesList } from "./as-names";
import { areEqual } from "./as-type";

function getTypesFromTable(value: TableType, index: number) {
	const variableTypes: PossibleTypes[] = [];
	const field = value.Value[index];

	if (field) {
		if (isParsedType(field.Key)) {
			variableTypes.push(field.Key.TypeValue.Type);
		} else if (isParsedValue(field.Key)) {
			variableTypes.push(field.Key.Value);
		} else {
			variableTypes.push({
				Type: "Simple",
				RawValue: field.Key,
				Value: field.Key,
			});
		}

		if (isParsedType(field.Value)) {
			variableTypes.push(field.Value.TypeValue.Type);
		} else {
			variableTypes.push(field.Value);
		}
	}

	return variableTypes;
}

function getTypeAsTable(value: TableType): PossibleTypes[] {
	const variableTypes = [];
	const types1 = getTypesFromTable(value, 0);
	const types2 = getTypesFromTable(value, 1);

	if (types1.length > 0 && types2.length > 0) {
		if (areEqual(types1[0], types2[0]) && areEqual(types1[1], types2[1])) {
			variableTypes.push(...types1);
		}
	} else {
		const type = types1.length > 1 ? types1 : types2;
		variableTypes.push(...type);
	}

	return variableTypes;
}

function mergeVariableTypes(variableTypes: PossibleTypes[], otherVariableTypes: PossibleTypes[]) {
	if (otherVariableTypes[0] && (!variableTypes[0] || variableTypes[0].RawValue === "any")) {
		variableTypes[0] = otherVariableTypes[0];
	}
	if (otherVariableTypes[1] && (!variableTypes[1] || variableTypes[1].RawValue === "any")) {
		variableTypes[1] = otherVariableTypes[1];
	}
}

export function asForInLoop(currentAST: AST, forInExpression: ForInExpressionContext, loopData: ForIn): ForIn {
	const variables: ParsedVariableDeclaration[] = [];
	const variableTypes: PossibleTypes[] = [];

	let expression;
	const iteratorFunction = forInExpression.globalIteratorFunction();
	if (iteratorFunction) {
		const name = iteratorFunction.NAME().text;
		const args = iteratorFunction.args();

		const astTokens = [...currentAST.Tokens];
		while (currentAST.Parent) {
			currentAST = currentAST.Parent;

			astTokens.push(...currentAST.Tokens);
		}
		const allTokens = [...globals, ...astTokens.reverse()];

		for (let i = allTokens.length - 1; i >= 0; i--) {
			const token = allTokens[i];
			if (token.Type !== "Variable Declaration") { continue; }
			if (token.VariableName !== name) { continue; }
			if (token.VariableType.TypeValue.Type.Type !== "Function") { break; }

			const actualIterator = token.VariableType.TypeValue.Type.Value.Returns[0];
			if (!actualIterator) { break; }
			if (actualIterator.ReturnType.TypeValue.Type.Type !== "Function") { break; }

			const returns = actualIterator.ReturnType.TypeValue.Type.Value.Returns;
			variableTypes[0] = returns[0].ReturnType.TypeValue.Type;
			variableTypes[1] = returns[1].ReturnType.TypeValue.Type;
		}

		const expression = args.expressionList()?.expression();
		let tableConstructor;
		if (expression) {
			const normalizedExpression = normalizeExpression(expression, currentAST)[0];
			if (normalizedExpression.Value.Type === "Simple") {
				const tableName = normalizedExpression.Value.RawValue;

				for (let i = 0; i < allTokens.length; i++) {
					const element = allTokens[i];
					if (element.Type !== "Variable Declaration") { continue; }
					if (element.VariableName !== tableName) { continue; }
					if (element.VariableType.TypeValue.Type.Type !== "Table") { break; }

					const _variableTypes = getTypeAsTable(element.VariableType.TypeValue.Type);
					mergeVariableTypes(variableTypes, _variableTypes);

					break;
				}
			} else if (normalizedExpression.Value.Type === "Table") {
				let _variableTypes: PossibleTypes[];

				if (normalizedExpression.Type?.Type === "Table") {
					_variableTypes = getTypeAsTable(normalizedExpression.Type);
				} else {
					_variableTypes = getTypeAsTable(normalizedExpression.Value);
				}

				mergeVariableTypes(variableTypes, _variableTypes);
			}

		} else if ((tableConstructor = args.tableconstructor())) {
			mergeVariableTypes(variableTypes, getTypeAsTable(buildTable(tableConstructor, currentAST)));
		}
	}

	let i = 0;
	normalizeAllNamesList(forInExpression.allNamesList()).forEach(name => {
		const type = name.Type ?? variableTypes[i] ?? {
			Type: "Simple",
			Value: "any",
			RawValue: "any"
		};
		variables.push({
			Type: "Variable Declaration",
			IsGlobal: false,
			RawValue: `${name.Name}: ${type.RawValue ?? "any"}`,
			VariableName: name.Name,
			VariableType: {
				Type: "Type",
				RawValue: type.RawValue,
				TypeName: "",
				IsExported: false,
				TypeValue: {
					Type: type,
					AndTypes: [],
					OrTypes: [],
				},
				Generics: [],
			},
			VariableValue: {
				Type: "Value",
				Value: type,
			},
			References: [],
		});

		i += 1;
	});

	loopData.Variables = variables;

	return loopData;
}

export function asForLoop(currentAst: AST, forExpression: ForExpressionContext, loopData: ForNumeric) {
	let i = 0;
	normalizeExpression(forExpression.expression(), currentAst).forEach(expression => {
		if (i == 0) {
			loopData.LoopData.Start.Value = expression.Value;
		} else if (i == 1) {
			loopData.LoopData.End.Value = expression.Value;
		} else {
			loopData.LoopData.Step.Value = expression.Value;
		}

		i += 1;
	});

	const variable = createVariablePlaceholder();
	variable.VariableName = forExpression.optionalTypedName().NAME().text;
	variable.VariableType.RawValue = "number";
	variable.VariableType.TypeName = "number";
	variable.VariableType.TypeValue.Type.Value = "number";
	variable.VariableType.TypeValue.Type.RawValue = "number";

	loopData.LoopData.Variable = variable;
}

export function createForInPlaceholder(): ForIn {
	const loopData: ForIn = {
		Type: "ForIn",
		// LoopData: {
		// 	Type: "Table",
		Variables: [],
		// },
		Body: {
			Tokens: [],
		},
	};

	return loopData;
}

export function createForNumericPlaceholder(): ForNumeric {
	const loopData: ForNumeric = {
		Type: "ForNumeric",
		LoopData: {
			Variable: createVariablePlaceholder(),
			End: createParsedValuePlaceHolder(),
			Start: createParsedValuePlaceHolder(),
			Step: createParsedValuePlaceHolder(),
		},
		Body: {
			Tokens: [],
		},
	};

	return loopData;
}