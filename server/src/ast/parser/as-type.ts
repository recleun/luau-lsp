import { log, toString } from "../../utilities";
import { functionTypeToString } from "../../utilities";
import {
	DiagnosticData,
	FunctionType,
	Generic,
	TypeDefinition,
	Value,
	PossibleTypes,
	TableFields
} from "../../types";
import {
	GenericTypeListContext,
	SimpleTypeContext,
	TypeContext,
	TypeListContext
} from "../LuauGrammar/LuauParser";
import {
	buildFunctionParameters,
	buildFunctionParametersType,
	buildFunctionReturns
} from "./as-function";
import { DiagnosticSeverity, LSPAny } from "vscode-languageserver";

interface ErrorMessage {
	Text: string,
	Severity: DiagnosticSeverity,
	Offset: number,
	Index: number,
	Data?: DiagnosticData,
}
interface RegExpData {
	RegExp: RegExp,
	ErrorMessage?: string,
	GetFix?: (match: RegExpExecArray) => string,
}
interface EscapeSequenceError {
	RegExps: RegExpData[],
	ErrorMessage: string,
	GetFix: (match: RegExpExecArray) => string,
}

const HEX_DIGIT = /[a-fA-F0-9]/;

const INVALID_ESCAPE_SEQUENCES: EscapeSequenceError[] = [
	{
		ErrorMessage: "Invalid octal escape.",
		RegExps: [
			{ RegExp: /\\([1-9]\d{3,})/g }, // 4+ digits
			{ RegExp: /\\([2][5][6-9])/g }, // 256 to 259
			{ RegExp: /\\([2][6-9][0-9])/g }, // 260+
			{ RegExp: /\\(-[0-9]+)/g }, // Negative numbers
		],
		GetFix: (match: RegExpExecArray) => {
			return match[1].startsWith("-") && "\\0" || "\\255";
		},
	},
	{
		ErrorMessage: "Invalid unicode escape.",
		RegExps: [
			{
				RegExp: new RegExp(`\\\\u[^{]${HEX_DIGIT.source}*}?`, 'g'),
				ErrorMessage: "Unicode escape must start with an opening parenthesis.",
				GetFix(match) {
					let escape = `\\u{${match[0].substring(2, 8)}`; // \u{ + 5 digits
					if (!match[0].endsWith("}")) {
						escape += "}"; // + } (if not found)
					}
					return escape;
				},
			}, // no opening parenthesis
			{
				RegExp: /\\u{\s*}/g,
				ErrorMessage: "Unicode escapes must have atleast one hex digit.",
			}, // empty escape
			{
				RegExp: /\\u\{[a-fA-F0-9]{6,}}?/g,
				ErrorMessage: "Unicode escape must have less than or equal to 5 hex digits.",
				GetFix(match) {
					return `${match[0].substring(0, 8)}}`; // \u{ + 5 digits + }
				},
			}, // More than 5 digits
			{
				RegExp: new RegExp(`\\\\u{${HEX_DIGIT.source}*(?!${HEX_DIGIT.source}*})`, 'g'),
				ErrorMessage: "Unicode escape must end with a closing parenthesis.",
				GetFix(match) {
					if (!match[0].endsWith("}")) {
						// If there is no closing parenthesis (meaning another invalid escape
						// was matched) both `GetFix` functions will return the same exact
						// fix, it'll be enough to show one of the fixes, having both on the
						// same location with the same fix causes VSCode to go crazy,
						// for some reason.
						return "";
					}

					return `${match[0].substring(0, 8)}}`; // Ensure it's only 5 then add the brackets.
				},
			}, // No closing parenthesis
		],
		GetFix: (match: RegExpExecArray) => {
			// Each regex inside implements it's own fix as it's always different.
			// Excluding empty escape sequence as we can't fix a non-existing thing. We can
			// only add a random hex code which won't be the best tbf.
			return "";
		},
	},
	{
		ErrorMessage: "Unnecessary escape character.",
		RegExps: [
			{ RegExp: /\\([^abfnrtv\\'"`{uxz\d])/g }, // Non-escape characters
			{ RegExp: /(?<=".*)\\(['`[{])/g }, // Escaping quotes/backticks/square brackets/open brackets in double quotes.
			{ RegExp: /(?<='.*)\\(["`[{])/g }, // Escaping double quotes/backticks/square brackets/open brackets in quotes.
			{ RegExp: /(?<=`.*)\\(["'[])/g }, // Escaping quotes/double quotes/square brackets in backticks.
			{ RegExp: /(?<=\[.*)\\(["'`{])/g }, // Escaping quotes/double quotes/backticks/open brackets in square brackets.
		],
		GetFix: (match: RegExpExecArray) => {
			// Above regular expressions capture the item that shouldn't be escaped, so first index of the
			// result will be that item alone, so we just return it.
			return match[1];
		},
	},
];

export function getEscapeErrors(string: string): ErrorMessage[] {
	let regexResult: RegExpExecArray | null;
	const errors: ErrorMessage[] = [];

	INVALID_ESCAPE_SEQUENCES.forEach(patternData => {
		patternData.RegExps.forEach(regexData => {
			while ((regexResult = regexData.RegExp.exec(string)) !== null) {
				const fixedValue = (regexData.GetFix ?? patternData.GetFix)(regexResult);

				errors.push({
					Offset: regexResult[0].length,
					Index: regexResult.index,
					Severity: DiagnosticSeverity.Error,
					Text: regexData.ErrorMessage ?? patternData.ErrorMessage,
					Data: fixedValue === "" ? undefined : {
						Fixes: [
							{
								Fix: fixedValue,
								FixMessage: `Change to "${fixedValue}".`
							}
						]
					}
				});
			}
		});
	});


	return errors;
}

export function isString(text: string): boolean {
	return (
		text.startsWith("'") ||
		text.startsWith('"') ||
		text.startsWith("`") ||
		text.startsWith("[")
	);
}

export function getTypeFromArithmetic(text: string): PossibleTypes {
	// TODO: Use env/meta.luau (include in ENV.ts)
	return {
		Type: "Simple",
		RawValue: "number",
		Value: "number",
	};
}

export function isArithmetic(text: string): boolean {
	// Only return true when it's numbers, resolve for other types (like Vector2 and CFrame)
	// Use metatables when needed
	return (
		text.includes("+") ||
		text.includes("-") ||
		text.includes("*") ||
		text.includes("/") ||
		text.includes("^")
	);
}

export function getTypeFromValue(value: PossibleTypes): [PossibleTypes, ErrorMessage[]] {
	if (value.Type === "Table" || value.Type === "Function") {
		return [value, []];
	}

	if (isString(value.RawValue)) {
		return [{
			Type: "Simple",
			RawValue: "string",
			Value: "string",
		}, getEscapeErrors(value.RawValue)];
	} else if (value.RawValue === "true" || value.RawValue === "false") {
		return [{
			Type: "Simple",
			RawValue: "boolean",
			Value: "boolean",
		}, []];
	} else if (parseInt(value.RawValue)) {
		return [{
			Type: "Simple",
			RawValue: "number",
			Value: "number",
		}, []];
	} else if (isArithmetic(value.RawValue)) {
		// TODO: Get arithmetic errors and check for non-numbers (aka CFrames)
		return [{
			Type: "Simple",
			RawValue: "number",
			Value: "number",
		}, []];
	} else if (value.RawValue === "nil") {
		return [{
			Type: "Simple",
			RawValue: "nil",
			Value: "nil",
		}, []];
	} else {
		// TODO: Look for references to other variables and/or function calls and/or table
		// indexing.

		return [value, []];
	}
}

export function handleGenerics(list: GenericTypeListContext): Generic[] {
	const generics: Generic[] = [];

	const name = list.NAME();
	if (name) {
		generics.push({
			Name: name.text,
			Variadic: false,
		});

		const newList = list.genericTypeList();
		if (newList) {
			generics.push(...handleGenerics(newList));
		}
	} else {
		list.genericTypePackParameter().forEach(typePack => {
			generics.push({
				Name: typePack.NAME().text,
				Variadic: true,
			});
		});
	}

	return generics;
}

export function asSimpleType(type: SimpleTypeContext): TypeDefinition {
	let functionType;
	let tableType;
	let nestedType;
	if ((functionType = type.functionType())) {
		const type: FunctionType = {
			Type: "Function",
			Body: {
				Tokens: [],
			},
			Value: {
				Parameters: buildFunctionParametersType(functionType.functionParametersType()),
				Returns: buildFunctionReturns(functionType.functionReturns()),
			},
			RawValue: "",
		};
		const parsedType: TypeDefinition = {
			Type: "Type",
			TypeName: "",
			RawValue: "",
			IsExported: false,
			TypeValue: {
				Type: type,
				AndTypes: [],
				OrTypes: [],
			},
			Generics: [],
		};
		const rawValue = functionTypeToString(type);

		parsedType.RawValue = rawValue;
		type.RawValue = rawValue;

		const list = functionType.genericTypeList();
		if (list) {
			parsedType.Generics = handleGenerics(list);
		}

		return parsedType;

	} else if ((tableType = type.tableType())) {
		const tableFields: TableFields = [];
		tableFields.Content = "TableFields";

		let type;
		let fields;
		if ((type = tableType.type())) {
			tableFields.push({
				Key: {
					Type: "Value",
					Value: {
						Type: "Simple",
						RawValue: "number",
						Value: "number",
					},
				},
				Value: asType(type),
				References: [],
			});

		} else if ((fields = tableType.propList())) {
			fields.tablePropOrIndexer().forEach(property => {
				let fieldIndexer;
				let tableProperty;
				if ((fieldIndexer = property.tableIndexer())) {
					tableFields.push({
						Key: asType(fieldIndexer.type(0)),
						Value: asType(fieldIndexer.type(1)),
						References: [],
					});

				} else if ((tableProperty = property.tableProperty())) {
					const key = tableProperty.NAME().text;

					tableFields.push({
						Key: {
							Type: "Type",
							TypeName: "",
							RawValue: key,
							IsExported: false,
							TypeValue: {
								Type: {
									Type: "Simple",
									RawValue: key,
									Value: key,
								},
								AndTypes: [],
								OrTypes: [],
							},
							Generics: [],
						},
						Value: asType(tableProperty.type()),
						References: [],
					});
				}
			});
		}

		const rawValue = toString(tableFields, ": ");
		const parsedType: TypeDefinition = {
			Type: "Type",
			TypeName: "",
			RawValue: rawValue,
			IsExported: false,
			TypeValue: {
				Type: {
					Type: "Table",
					RawValue: rawValue,
					Value: tableFields,
				},
				AndTypes: [],
				OrTypes: [],
			},
			Generics: [],
		};

		return parsedType;
	} else if ((nestedType = type.type())) {
		return asType(nestedType);
	} else {
		return {
			Type: "Type",
			RawValue: type.text,
			TypeName: "",
			IsExported: false,
			TypeValue: {
				Type: {
					Type: "Simple",
					RawValue: type.text,
					Value: type.text,
				},
				AndTypes: [],
				OrTypes: [],
			},
			Generics: [],
		};
	}
	// TODO: Continue the rest.
}

export function asType(typeContext: TypeContext): TypeDefinition {
	const type = asSimpleType(typeContext.simpleType());
	const union = typeContext.unionSuffix();
	const intersection = typeContext.intersectionSuffix();

	if (union) {
		union.simpleType().forEach(unionType => {
			type.TypeValue.OrTypes.push(asSimpleType(unionType));
		});
	}
	if (intersection) {
		intersection.simpleType().forEach(intersectionType => {
			type.TypeValue.AndTypes.push(asSimpleType(intersectionType));
		});
	}

	return type;
}

export function asTypeList(typeList: TypeListContext): TypeDefinition[] {
	const types = [asType(typeList.type())];
	const list = typeList.typeList();
	if (list) {
		types.push(...asTypeList(list));
	}

	return types;
}

export function areEqual(type1: PossibleTypes, type2: PossibleTypes) {
	return type1.RawValue === type2.RawValue;
}