import { DiagnosticSeverity, Position, Range } from "vscode-languageserver";
import {
	AST,
	Fix,
	NormalizedExpressions,
	PossibleTypes,
	TableFields,
	TableKey,
	TableType,
	TypeDefinition
} from "../../types";
import {
	findVariable,
	getCleanRawValue,
	isTableField,
	isTypeDefinition,
	log,
	logTable,
	tableFieldsToString,
	tableKeyToString
} from "../../utilities";
import {
	Expression1Context,
	ExpressionContext,
	NameAndArgsContext,
	PrefixexpContext,
	TableconstructorContext,
	VarSuffixContext
} from "../LuauGrammar/LuauParser";
import { buildFunction } from "./as-function";
import { asType, getTypeFromValue } from "./as-type";
import { addDiagnostic, getCurrentUri } from "../../diagnostics";
import { PossibleTypesBuilder, TypeDefinitionBuilder } from "../../classes";
import { globals } from "../env";

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
		let keyLocation: Range;

		const expressions = field.expression();
		const name = field.NAME();
		if (name) {
			// a = <expression>
			keyLocation = Range.create(start, getEnd(name.text, start));
			key = name.text;

		} else if (field.CLOSE_SQUARE_BRACKETS()) {
			// [<expression>] = <expression>
			const expression = expressions.shift();
			const value = normalizeExpression([expression!], AST)[0].Value;
			key = {
				Type: "Value",
				Value: value,
			};
			keyLocation = Range.create(start, getEnd(expression!.text, start));

		} else {
			// <expression>
			while (usedIndices.includes(String(index))) {
				index++;
			}

			keyLocation = Range.create(start, start);
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

			// return;
		}
		usedIndices.push(key);

		const value: PossibleTypes = normalizeExpression([expressions[0]], AST)[0].Value;

		tableFields.push({
			Key: key,
			Value: value,
			Type: getTypeFromValue(value)[0],
			References: [],
			Start: location.start,
			End: location.end,
			NameStart: keyLocation.start,
			NameEnd: keyLocation.end,
		});
	});
	parsedTable.RawValue = tableFieldsToString(tableFields);

	return parsedTable;
}

export function normalizeExpression1(expressions: Expression1Context[], ast: AST): NormalizedExpressions {
	const normalizedExpressions: NormalizedExpressions = [];

	expressions.forEach(expression => {
		let table;
		let functionContext;
		let string;
		let number;
		let prefixExp;

		if ((table = expression.tableconstructor())) {
			normalizedExpressions.push({
				Value: buildTable(table, ast)
			});
		} else if ((functionContext = expression.function())) {
			normalizedExpressions.push({
				Value: buildFunction(functionContext.funcbody(), ast)
			});
		} else if ((string = expression.STRING())) {
			normalizedExpressions.push({
				Value: {
					Type: "Simple",
					RawValue: string.text,
					Value: string.text
				},
			});
		} else if ((number = expression.NUMBER())) {
			normalizedExpressions.push({
				Value: {
					Type: "Simple",
					RawValue: number.text,
					Value: number.text
				},
				Type: TypeDefinitionBuilder.fromPossibleType({
					Type: "Simple",
					RawValue: "number",
					Value: "number",
				}),
			});
		} else if ((prefixExp = expression.prefixexp())) {
			const [types, value] = handlePrefixExp(ast, prefixExp);
			for (const [i, type] of types.entries()) {
				normalizedExpressions.push({
					Value: value[i],
					Type: type, //getTypeFromValue(value)[0],
				});
			}

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

export function normalizeExpression(expressions: ExpressionContext[], ast: AST): NormalizedExpressions {
	const normalizedExpressions: NormalizedExpressions = [];

	let i = 0;
	expressions.forEach(expression => {
		const expression1 = expression.expression1();
		const normalizedExpression1s = normalizeExpression1([expression1], ast);

		let type;
		if ((type = expression.type()) || normalizedExpression1s.length === 1) {
			normalizedExpression1s[0].Type = type
				? asType(type, ast)
				: normalizedExpression1s[0].Type;
			normalizedExpressions[i] = normalizedExpression1s[0];

		} else {
			normalizedExpressions.push(...normalizedExpression1s);
		}
		i++;
	});

	return normalizedExpressions;
}

export function handlePrefixExp(ast: AST, prefixExp: PrefixexpContext): [TypeDefinition[], PossibleTypes[]] {
	const varOrExp = prefixExp.varOrExp();
	const variable = varOrExp.var();
	let expression: ExpressionContext | undefined;

	const startPosition = Position.create(prefixExp.start.line - 1, prefixExp.start.charPositionInLine);
	const endPosition = getEnd(prefixExp.text, startPosition);
	const currentLocation = Range.create(startPosition, endPosition);

	let finalTypes: TypeDefinition[] | undefined;
	let finalValues: PossibleTypes[] | undefined;

	if (variable) {
		const name = variable.NAME();
		let expression;

		if (name) {
			const variable = findVariable(name.text, ast, currentLocation);
			if (variable) {
				finalTypes = [ variable.VariableType ];
				finalValues = [ variable.VariableValue.Value ];
			}

		} else if ((expression = variable.expression())) {
			const name = normalizeExpression([expression], ast)[0].Value.RawValue;
			const variable = findVariable(name, ast, currentLocation);
			if (variable?.VariableType.TypeValue.Type.Type === "Table") {
				finalTypes = [ variable.VariableType ];
				finalValues = [ variable.VariableType.TypeValue.Type ];
			}
		}

		for (const suffex of variable.varSuffix()) {
			if (!finalTypes) {
				break;
			}

			const result = handleVarSuffex(suffex, finalTypes, ast);
			if (!result) {
				break;
			}

			[finalTypes, finalValues] = result;
		}

	} else if ((expression = varOrExp.expression())) {
		const normalizedExpression = normalizeExpression([expression], ast)[0];

		const [type, errorMessages] = getTypeFromValue(normalizedExpression.Value);
		finalTypes = [ normalizedExpression.Type ?? type ];
		finalValues = [ normalizedExpression.Value ];

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
		if (!finalTypes) {
			break;
		}

		const results = handleNameAndArgs(nameAndArgs, finalTypes);
		if (results) {
			[finalTypes, finalValues] = results;
		} else {
			[finalTypes, finalValues] = [undefined, undefined];
		}
	}

	return [
		finalTypes ?? [ TypeDefinitionBuilder.fromString("any") ],
		finalValues ?? [ PossibleTypesBuilder.asSimple("") ],
	];
}

export function handleVarSuffex(varSuffex: VarSuffixContext, currentFinalTypes: TypeDefinition[], ast: AST): [TypeDefinition[], PossibleTypes[]] | undefined {
	let finalTypes: TypeDefinition[] | undefined = currentFinalTypes;
	let finalValues: PossibleTypes[] | undefined = [];

	for (const nameAndArgs of varSuffex.nameAndArgs()) {
		if (!finalTypes) {
			break;
		}

		[finalTypes, finalValues] = handleNameAndArgs(nameAndArgs, finalTypes);
	}
	if (!finalTypes || !finalTypes[0]) {
		return;
	}

	let indexedKey;
	let offset = 0;

	const name = varSuffex.NAME();
	let expression;
	if (name) {
		indexedKey = name.text;
	} else if ((expression = varSuffex.expression())) {
		const rawValue = normalizeExpression([expression], ast)[0].Value.RawValue;
		indexedKey = getCleanRawValue(rawValue);
		offset = rawValue.length - indexedKey.length;
	}

	if (indexedKey) {
		if (finalTypes[0].TypeValue.Type.Type !== "Table") {
			return;
		}

		for (const field of finalTypes[0].TypeValue.Type.Value) {
			const key = tableKeyToString(field.Key);
			if (key === indexedKey) {

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
							character: varSuffex.start.charPositionInLine + 1 + key.length + offset,
						},
					});
				}

				return [[ field.Type ], [
					isTableField(field) ? field.Value : field.Type.TypeValue.Type
				]];
			}
		}
	}

	return [finalTypes, finalValues ?? finalTypes.map((_) => PossibleTypesBuilder.asSimple(""))];
}

export function handleNameAndArgs(nameAndArgs: NameAndArgsContext, finalTypes: TypeDefinition[]): [TypeDefinition[], PossibleTypes[]] | undefined {
	const name = nameAndArgs.NAME();
	let finalType = finalTypes[0];
	let finalValues: PossibleTypes[] = [];
	if (name && finalType.TypeValue.Type.Type === "Table") {
		for (const field of finalType.TypeValue.Type.Value) {
			const key = tableKeyToString(field.Key);
			if (key === name.text) {
				finalType = field.Type as TypeDefinition;
				finalValues = [ field.Type.TypeValue.Type ];

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

	if (finalType.TypeValue.Type.Type === "Function") {
		finalTypes = [];
		finalValues = [];

		finalType.TypeValue.Type.Value.Returns.forEach((_return) => {
			finalTypes.push(_return.ReturnType);
			finalValues.push(PossibleTypesBuilder.asSimple(""));
		});

		return [ finalTypes, finalValues ];
	}
	// TODO: Make it return both type and value separately.
}