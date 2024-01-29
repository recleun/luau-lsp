import { isTypeDefinition, isValue } from "../../utilities";
import { AST, ForIn, ForNumeric, VariableDeclaration, PossibleTypes, TableType, TypeDefinition } from "../../types";
import { globals } from "../env";
import { ForExpressionContext, ForInExpressionContext } from "../LuauGrammar/LuauParser";
import { buildTable, getEnd, normalizeExpression, normalizeExpression1 } from "./as-expression";
import { normalizeAllNamesList } from "./as-names";
import { areEqual } from "./as-type";
import { PossibleTypesBuilder, TypeDefinitionBuilder, ValueBuilder, VariableDeclarationBuilder } from "../../classes";
import { Position } from "vscode-languageserver";

function getTypesFromTable(value: TableType, index: number): TypeDefinition[] {
	const variableTypes: TypeDefinition[] = [];
	const field = value.Value[index];

	if (field) {
		if (isTypeDefinition(field.Key)) {
			variableTypes.push(field.Key);

		} else if (isValue(field.Key)) {
			variableTypes.push(TypeDefinitionBuilder.fromPossibleType(field.Key.Value));

		} else {
			variableTypes.push(TypeDefinitionBuilder.fromString(field.Key));
		}

		variableTypes.push(field.Type);
	}

	return variableTypes;
}

function getTypeAsTable(value: TableType): TypeDefinition[] {
	const variableTypes: TypeDefinition[] = [];
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

function mergeVariableTypes(variableTypes: TypeDefinition[], otherVariableTypes: TypeDefinition[]) {
	if (otherVariableTypes[0] && (!variableTypes[0] || variableTypes[0].RawValue === "any")) {
		variableTypes[0] = otherVariableTypes[0];
	}
	if (otherVariableTypes[1] && (!variableTypes[1] || variableTypes[1].RawValue === "any")) {
		variableTypes[1] = otherVariableTypes[1];
	}
}

export function asForInLoop(ast: AST, forInExpression: ForInExpressionContext, loopData: ForIn): ForIn {
	const variables: VariableDeclaration[] = [];
	const variableTypes: TypeDefinition[] = [];

	let expression; //TODO: ?
	const iteratorFunction = forInExpression.globalIteratorFunction();
	if (iteratorFunction) {
		const name = iteratorFunction.NAME().text;
		const args = iteratorFunction.args();

		const astTokens = [...ast.Tokens];
		while (ast.Parent) {
			ast = ast.Parent;

			astTokens.push(...ast.Tokens);
		}

		for (let i = 0; i < astTokens.length; i++) {
			const token = astTokens[i];
			if (token.Type !== "Variable Declaration") { continue; }
			if (token.VariableName !== name) { continue; }
			if (token.VariableType.TypeValue.Type.Type !== "Function") { break; }

			const actualIterator = token.VariableType.TypeValue.Type.Value.Returns[0];
			if (!actualIterator) { break; }
			if (actualIterator.ReturnType.TypeValue.Type.Type !== "Function") { break; }

			const returns = actualIterator.ReturnType.TypeValue.Type.Value.Returns;
			variableTypes[0] = returns[0].ReturnType;
			variableTypes[1] = returns[1].ReturnType;
		}

		const expression = args.expressionList()?.expression();
		let tableConstructor;
		if (expression) {
			const normalizedExpression = normalizeExpression(expression, ast)[0];
			if (normalizedExpression.Value.Type === "Simple") {
				const tableName = normalizedExpression.Value.RawValue;

				for (let i = 0; i < astTokens.length; i++) {
					const element = astTokens[i];
					if (element.Type !== "Variable Declaration") { continue; }
					if (element.VariableName !== tableName) { continue; }
					if (element.VariableType.TypeValue.Type.Type !== "Table") { break; }

					const _variableTypes = getTypeAsTable(element.VariableType.TypeValue.Type);
					mergeVariableTypes(variableTypes, _variableTypes);

					break;
				}
			} else if (normalizedExpression.Value.Type === "Table") {
				let _variableTypes: TypeDefinition[];

				if (normalizedExpression.Type?.TypeValue.Type.Type === "Table") {
					_variableTypes = getTypeAsTable(normalizedExpression.Type.TypeValue.Type);
				} else {
					_variableTypes = getTypeAsTable(normalizedExpression.Value);
				}

				mergeVariableTypes(variableTypes, _variableTypes);
			}

		} else if ((tableConstructor = args.tableconstructor())) {
			mergeVariableTypes(variableTypes, getTypeAsTable(buildTable(tableConstructor, ast)));
		}
	}

	const allNamesList = forInExpression.allNamesList();
	const separatedNames = allNamesList.text.split(",");

	let i = 0;
	let character = allNamesList.start.charPositionInLine;
	let line = allNamesList.start.line - 1;
	normalizeAllNamesList(allNamesList, ast).forEach(name => {
		const type = name.Type ?? variableTypes[i] ?? TypeDefinitionBuilder.fromString("any");
		const variable = VariableDeclarationBuilder.create(
			name.Name,
			false,
			type,
			ValueBuilder.fromTypeDefinition(type),
			`${name.Name}: ${type.RawValue}`,
		);
		variable.NameStart = Position.create(line, character);
		variable.NameEnd = getEnd(separatedNames[i], variable.NameStart);

		variables.push(variable);

		if (separatedNames[i].includes("\n")) {
			line++;
			character = 0;
		} else {
			character += separatedNames[i].trim().length;
		}

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

	const name = forExpression.optionalTypedName().NAME().text;
	const variable = VariableDeclarationBuilder.fromType(TypeDefinitionBuilder.fromString("number", "number"), name);

	loopData.LoopData.Variable = variable;
}

export function createForInPlaceholder(): ForIn {
	const loopData: ForIn = {
		Type: "ForIn",
		Variables: [],
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
			Variable: VariableDeclarationBuilder.default(),
			End: ValueBuilder.default(),
			Start: ValueBuilder.default(),
			Step: ValueBuilder.default(),
		},
		Body: {
			Tokens: [],
		},
	};

	return loopData;
}