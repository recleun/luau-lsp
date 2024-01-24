import { DiagnosticSeverity, Position, Range } from "vscode-languageserver";
import {
	AST,
	Fix,
	NormalizedExpressions,
	ParsedType,
	ParsedValue,
	VariableDeclaration,
	PossibleTypes,
	TableFields,
	TableKey,
	TableType
} from "../../types";
import { findVariable, isParsedType, log, logTable, tableFieldsToString, tableKeyToString, toString } from "../../utilities";
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
import { addDiagnostic, getCurrentUri } from "../../diagnostics";

type AntlrNode = {
	start: {
		line: number,
		charPositionInLine: number,
	},
	stop?: {
		line: number,
		charPositionInLine: number,
	},
}

export function getEnd(text: string, start: Position): Position {
	const newLines = text.split('\n');

	return Position.create(
		start.line + newLines.length - 1,
		newLines.length === 1 ?
			newLines[newLines.length - 1].length + start.character :
			newLines[newLines.length - 1].length
	);
}

export function getLocation<T extends AntlrNode>(item: T, endOffset: number = 0): Range {
	return Range.create(
		Position.create(item.start.line - 1, item.start.charPositionInLine),
		Position.create(
			(item.stop?.line || item.start.line) - 1,
			item.stop?.charPositionInLine || (item.start.charPositionInLine + endOffset)
		)
	);
}

export function buildTable(table: TableconstructorContext, AST: AST): TableType {
	const tableFields: TableFields = [];
	tableFields.Content = "TableFields";

	const parsedTable: TableType = {
		Type: "Table",
		RawValue: "",
		Value: tableFields,
	};

	let index = 1;
	const usedIndices: TableKey[] = [];
	table.fieldList()?.field().forEach(field => {
		let key: TableKey = field.NAME()?.text ?? "";

		const start = Position.create(field.start.line - 1, field.start.charPositionInLine);
		const end = getEnd(field.text, start);
		const location: Range = Range.create(start, end);

		const expressions = field.expression1();
		const name = field.NAME();
		if (name) {
			// a = <expression>
			key = name.text;

		} else if (field.CLOSE_SQUARE_BRACKETS()) {
			// [<expression>] = <expression>
			const expression = expressions.shift();
			if (expression) {
				const value = normalizeExpression1([expression], AST)[0].Value;
				key = {
					Type: "Value",
					Value: value,
				};
			}

		} else {
			// <expression>
			while (usedIndices.includes(String(index))) {
				index++;
			}

			key = String(index);
			index++;
		}

		if (usedIndices.includes(key)) {
			// Index is already there, so send warning for duplicate key.
			const fixes: Fix[] = [
				{
					Fix: "",
					FixMessage: `Remove key.`
				}
			];

			let index = 2;
			while (usedIndices.includes(`${key}${index}`)) {
				index++;
			}

			const fixedKey = `${key}${index}`;
			fixes.push({
				Fix: fixedKey,
				FixMessage: `Change to ${fixedKey}`
			});

			addDiagnostic({
				message: "Duplicate defined key.",
				code: "duplicate-key",
				severity: DiagnosticSeverity.Warning,
				range: Range.create(
					location.start,
					Position.create(
						location.end.line,
						location.end.character + 1, // To include the , or ;
					)
				),
				data: {
					Fixes: fixes,
				},
			});

			return;
		}
		usedIndices.push(key);

		const value: PossibleTypes = normalizeExpression1([expressions[0]], AST)[0].Value;

		tableFields.push({
			Key: key,
			Value: value,
			Type: getTypeFromValue(value)[0],
			References: [],
			Start: location.start,
			End: location.end,
		});
	});
	parsedTable.RawValue = tableFieldsToString(tableFields, " = ");

	return parsedTable;
}

export function normalizeExpression1(expressions: Expression1Context[], AST: AST): NormalizedExpressions {
	const normalizedExpressions: NormalizedExpressions = [];

	expressions.forEach(expression => {
		let table;
		let functionContext;
		let string;
		let number;
		let prefixExp;

		if ((table = expression.tableconstructor())) {
			normalizedExpressions.push({
				Value: buildTable(table, AST)
			});
		} else if ((functionContext = expression.function())) {
			normalizedExpressions.push({
				Value: buildFunction(functionContext.funcbody())
			});
		} /* else if ((string = expression.STRING())) {
			normalizedExpressions.push({
				Value: {
					Type: "Simple",
					RawValue: string.text,
					Value: string.text
				},
				Type: {
					Type: "Simple",
					RawValue: "string",
					Value: "string",
				},
			});
		} else if ((number = expression.NUMBER())) {
			normalizedExpressions.push({
				Value: {
					Type: "Simple",
					RawValue: number.text,
					Value: number.text
				},
				Type: {
					Type: "Simple",
					RawValue: "number",
					Value: "number",
				},
			});
		} */ else if ((prefixExp = expression.prefixexp())) {
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

export function createVariablePlaceholder(type?: string): VariableDeclaration {
	const variable: VariableDeclaration = {
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
		References: [],
	};

	return variable;
}

export function handlePrefixExp(currentAst: AST, prefixExp: PrefixexpContext): [PossibleTypes, PossibleTypes] {
	const varOrExp = prefixExp.varOrExp();
	const variable = varOrExp.var();
	let expression: ExpressionContext | undefined;

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
			const variable = findVariable(name.text, currentAst, currentLocation);
			if (variable) {
				finalType = variable.VariableType.TypeValue.Type;
				finalValue = variable.VariableValue.Value;
			}

		} else if ((expression = variable.expression())) {
			const name = normalizeExpression([expression], currentAst)[0].Value.RawValue;
			const table = findVariable(name, currentAst, currentLocation);
			if (table?.VariableType.TypeValue.Type.Type === "Table") {
				finalType = findVariable(name, currentAst, currentLocation)?.VariableType.TypeValue.Type;
			}
		}

		for (const suffex of variable.varSuffix()) {
			if (!finalType) {
				break;
			}

			const result = handleVarSuffex(suffex, finalType);
			if (!result) {
				break;
			}

			[finalType, finalValue] = result;
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

		finalValue = undefined;
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

export function handleVarSuffex(varSuffex: VarSuffixContext, currentFinalType: PossibleTypes): [PossibleTypes, PossibleTypes | undefined] | undefined {
	let finalType: PossibleTypes | undefined = currentFinalType;
	for (const nameAndArgs of varSuffex.nameAndArgs()) {
		if (!finalType) {
			break;
		}

		finalType = handleNameAndArgs(nameAndArgs, finalType);
	}
	if (!finalType) {
		return;
	}

	const name = varSuffex.NAME();
	if (name && finalType.Type === "Table") {
		for (const field of finalType.Value) {
			const key = tableKeyToString(field.Key);
			if (key === name.text) {

				const uri = getCurrentUri();

				if (uri && varSuffex.stop) {
					field.References.push({
						FileUri: uri,
						Start: {
							line: varSuffex.start.line - 1,
							character: varSuffex.start.charPositionInLine + 1,
						},
						End: {
							line: varSuffex.stop.line - 1,
							character: varSuffex.start.charPositionInLine + 1 + key.length,
						},
					});
				}

				const value = field.Value as PossibleTypes;

				return (
					isParsedType(field.Value)
					&& [field.Value.TypeValue.Type, undefined]
					|| [getTypeFromValue(value)[0], value]
				);
			}
		}

	}
}

export function handleNameAndArgs(nameAndArgs: NameAndArgsContext, finalType: PossibleTypes): PossibleTypes | undefined {
	const name = nameAndArgs.NAME();
	if (name && finalType.Type === "Table") {
		for (const field of finalType.Value) {
			const key = tableKeyToString(field.Key);
			if (key === name.text) {
				finalType = field.Value as PossibleTypes;

				const uri = getCurrentUri();

				if (uri && nameAndArgs.stop) {
					field.References.push({
						FileUri: uri,
						Start: {
							line: nameAndArgs.start.line - 1,
							character: nameAndArgs.start.charPositionInLine + 1,
						},
						End: {
							line: nameAndArgs.stop.line - 1,
							character: nameAndArgs.start.charPositionInLine + 1 + key.length,
						},
					});
				}

				break;
			}
		}
	}

	if (finalType.Type === "Function") {
		return finalType.Value.Returns[0].ReturnType.TypeValue.Type;
	}
	// TODO: Make it return both type and value separately.
}
