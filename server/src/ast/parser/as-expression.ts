import { Position, Range } from "vscode-languageserver";
import {
	AST,
	NormalizedExpressions,
	ParsedType,
	ParsedValue,
	ParsedVariableDeclaration,
	PossibleTypes,
	TableFields,
	TableType
} from "../../types";
import { findVariable, log, logTable, tableKeyToString } from "../../utilities";
import {
	Expression1Context,
	Expression2Context,
	ExpressionContext,
	NameAndArgsContext,
	PrefixexpContext,
	TableconstructorContext,
	VarSuffixContext
} from "../LuauGrammar/LuauParser";
import { buildFunction } from "./as-function";
import { asType, getTypeFromValue } from "./as-type";
import { addDiagnostic } from "../../diagnostics";

export function buildTable(table: TableconstructorContext, AST: AST): TableType {
	const tableFields: TableFields = [];
	tableFields.Content = "TableFields";

	const parsedTable: TableType = {
		Type: "Table",
		RawValue: "",
		Value: tableFields,
	};

	table.fieldList()?.field().forEach(field => {
		const expressions = field.expression1();

		let key: ParsedType | ParsedValue | string = field.NAME()?.text ?? "";
		if (field.CLOSE_SQUARE_BRACKETS()) {
			const expression = expressions.shift();
			if (expression) {
				const value = normalizeExpression1([expression], AST)[0].Value;
				key = {
					Type: "Value",
					Value: value,
				};
			}
		}

		const value: ParsedValue = {
			Type: "Value",
			Value: normalizeExpression1([expressions[0]], AST)[0].Value,
		};

		tableFields.push({
			key: key,
			value: value,
		});
	});

	return parsedTable;
}

export function normalizeExpression1(expressions: Expression1Context[], AST: AST): NormalizedExpressions {
	const normalizedExpressions: NormalizedExpressions = [];

	expressions.forEach(expression => {
		let table;
		let functionContext;
		let prefixExp;

		if ((table = expression.tableconstructor())) {
			normalizedExpressions.push({
				Value: buildTable(table, AST)
			});
		} else if ((functionContext = expression.function())) {
			normalizedExpressions.push({
				Value: buildFunction(functionContext.funcbody())
			});
		} else if ((prefixExp = expression.prefixexp())) {
			const [value, type] = handlePrefixExp(AST, prefixExp);

			normalizedExpressions.push({
				Value: value,
				Type: type, //getTypeFromValue(value)[0],
			});
		} else {
			const value: PossibleTypes = {
				Type: "Simple",
				Value: expression.text,
				RawValue: expression.text,
			};
			const [possibleType, errorMessages] = getTypeFromValue(value);

			errorMessages.forEach((errorMessage) => {
				addDiagnostic({
					message: errorMessage.Text,
					severity: errorMessage.Severity,
					range: Range.create(
						Position.create(
							expression.start.line - 1,
							expression.start.charPositionInLine + errorMessage.Index,
						),
						Position.create(
							expression.start.line - 1,
							expression.start.charPositionInLine + errorMessage.Index + errorMessage.Offset,
						)
					),
					data: errorMessage.Data,
				});
			});

			normalizedExpressions.push({
				Value: value,
				Type: possibleType,
			});
		}
	});

	return normalizedExpressions;
}

export function normalizeExpression2(expressions: Expression2Context[], AST: AST): NormalizedExpressions {
	const normalizedExpressions: NormalizedExpressions = [];

	expressions.forEach(expression => {
		const type = asType(expression.type());
		const value = normalizeExpression1([expression.expression1()], AST)[0].Value;

		normalizedExpressions.push({
			Type: type.TypeValue.Type,
			Value: value,
		});
	});

	return normalizedExpressions;
}

export function normalizeExpression(expressions: ExpressionContext[], AST: AST): NormalizedExpressions {
	const normalizedExpressions: NormalizedExpressions = [];

	expressions.forEach(expression => {
		const expression1 = expression.expression1();
		const normalizeExpression = normalizeExpression1([expression1], AST)[0];

		let type;
		if ((type = expression.type())) {
			normalizeExpression.Type = asType(type).TypeValue.Type;
		}

		normalizedExpressions.push(normalizeExpression);
	});

	return normalizedExpressions;
}

export function createParsedValuePlaceHolder(): ParsedValue {
	const value: ParsedValue = {
		Type: "Value",
		Value: {
			Type: "Simple",
			RawValue: "",
			Value: "",
		}
	};

	return value;
}

export function createVariablePlaceholder(type?: string): ParsedVariableDeclaration {
	const variable: ParsedVariableDeclaration = {
		Type: "Variable Declaration",
		IsGlobal: false,
		RawValue: "",
		VariableName: "",
		VariableType: {
			Type: "Type",
			TypeName: "",
			RawValue: type ?? "",
			IsExported: false,
			TypeValue: {
				Type: {
					Type: "Simple",
					RawValue: type ?? "",
					Value: type ?? "",
				},
				AndTypes: [],
				OrTypes: []
			},
			Generics: [],
		},
		VariableValue: createParsedValuePlaceHolder(),
	};

	return variable;
}

export function handlePrefixExp(currentAst: AST, prefixExp: PrefixexpContext): [PossibleTypes, PossibleTypes] {
	const varOrExp = prefixExp.varOrExp();
	const variable = varOrExp.var();
	let expression: ExpressionContext|undefined;

	// const startPosition = Position.create(prefixExp.start.line, prefixExp.start.charPositionInLine);
	const startPosition = Position.create(prefixExp.start.line - 1, prefixExp.start.charPositionInLine);
	const endPosition = Position.create(
		prefixExp.start.line - 1,
		startPosition.character + prefixExp.text.trim().length,
	);
	const currentLocation = Range.create(startPosition, endPosition);
	let finalType: PossibleTypes | undefined;
	let finalValue: PossibleTypes | undefined;

	if (variable) {
		const name = variable.NAME();
		let expression;

		if (name) {
			finalType = findVariable(name.text, currentAst, currentLocation)?.VariableType.TypeValue.Type;

		} else if ((expression = variable.expression())) {
			const name = normalizeExpression([expression], currentAst)[0].Value.RawValue;
			const table = findVariable(name, currentAst, currentLocation);
			if (table?.VariableType.TypeValue.Type.Type === "Table") {
				variable.varSuffix().forEach(suffex => {
					suffex.NAME();
				});

				finalType = findVariable(name, currentAst, currentLocation)?.VariableType.TypeValue.Type;
			}
		}

		for (const suffex of variable.varSuffix()) {
			if (!finalType) {
				break;
			}

			finalType = handleVarSuffex(suffex, finalType);
		}

	} else if ((expression = varOrExp.expression())) {
		const normalizedExpression = normalizeExpression([expression], currentAst)[0];

		const [type, errorMessages] = getTypeFromValue(normalizedExpression.Value);
		finalValue = normalizedExpression.Value;
		finalType = normalizedExpression.Type ?? type;

		errorMessages.forEach((errorMessage => {
			addDiagnostic({
				message: errorMessage.Text,
				severity: errorMessage.Severity,
				range: Range.create(
					Position.create(
						expression!.start.line - 1,
						expression!.start.charPositionInLine + errorMessage.Index,
					),
					Position.create(
						expression!.start.line - 1,
						expression!.start.charPositionInLine + errorMessage.Index + errorMessage.Offset,
					)
				),
				data: errorMessage.Data,
			});
		}));
	}

	for (const nameAndArgs of prefixExp.nameAndArgs()) {
		if (!finalType) {
			break;
		}

		finalType = handleNameAndArgs(nameAndArgs, finalType);
	}

	return [
		finalValue ?? {
			Type: "Simple",
			RawValue: "",
			Value: ""
		},
		finalType ?? {
			Type: "Simple",
			RawValue: "any",
			Value: "any",
		}
	];
}

export function handleVarSuffex(varSuffex: VarSuffixContext, finalType: PossibleTypes): PossibleTypes | undefined {
	const name = varSuffex.NAME();
	if (name && finalType.Type === "Table") {
		for (const field of finalType.Value) {
			if (tableKeyToString(field.key) === name.text) {
				return (field.value as ParsedValue).Value;
			}
		}

	} else if (!name && finalType.Type === "Function") {
		return finalType.Value.Returns[0].ReturnType.TypeValue.Type;
	}
}

export function handleNameAndArgs(nameAndArgs: NameAndArgsContext, finalType: PossibleTypes): PossibleTypes | undefined {
	const name = nameAndArgs.NAME();
	if (name && finalType.Type === "Table") {
		for (const field of finalType.Value) {
			if (tableKeyToString(field.key) === name.text) {
				finalType = (field.value as ParsedValue).Value;
			}
		}
	}

	if (finalType.Type === "Function") {
		return finalType.Value.Returns[0].ReturnType.TypeValue.Type;
	}
	// TODO: Make it return both type and value separately.
}
