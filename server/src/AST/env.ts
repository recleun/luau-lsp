import { functionTypeToString } from "../utilities/to-string/function-type-to-string";
import { FunctionType, Parameters, ParsedTokens, ParsedValue, ParsedVariableDeclaration, PossibleTypes, Returns, TableFields } from "../types";
import { APIDump } from "../types/api/api-dump";
import { DataTypes } from "../types/api/data-types";
import { parse } from "./parse";
import { readFile } from "fs";
import * as path from "path";

const ApiDumb: APIDump = require("../api/API-Dump.json");
const DataTypesJson: DataTypes = require("../api/DataTypes.json");

const Enums: ParsedVariableDeclaration = {
	Type: "Variable Declaration",
	IsGlobal: true,
	RawValue: "Enum",
	VariableName: "Enum",
	VariableValue: {
		Type: "Value",
		Value: {
			Type: "Table",
			RawValue: "",
			Value: []
		}
	},
	VariableType: {
		Type: "Type",
		RawValue: "",
		TypeName: "",
		IsExported: false,
		TypeValue: {
			Type: {
				Type: "Table",
				RawValue: "",
				Value: []
			},
			AndTypes: [],
			OrTypes: [],
		},
		Generics: [],
	},
};
const Constructors: ParsedVariableDeclaration[] = [];

ApiDumb.Enums.forEach(enumItem => {
	if (Enums.VariableValue.Value.Type !== "Table") { return; }
	if (Enums.VariableType.TypeValue.Type.Type !== "Table") { return; }
	// Above cases are never true but just to shut TypeScript.

	const items: ParsedValue = {
		Type: "Value",
		Value: {
			Type: "Table",
			RawValue: `Enum.${enumItem.Name}`,
			Value: []
		}
	};

	enumItem.Items.forEach(item => {
		if (items.Value.Type !== "Table") { return; }
		// Above case is never true but just to shut TypeScript.

		items.Value.Value.push({
			key: item.Name,
			value: {
				Type: "Value",
				Value: {
					Type: "Simple",
					Value: item.Name,
					RawValue: `Enum.${enumItem.Name}.${item.Name}`,
				},
			}
		});
	});

	Enums.VariableValue.Value.Value.push({
		key: enumItem.Name,
		value: items
	});
});
DataTypesJson.Constructors.forEach(constructor => {
	const constructorData: TableFields = [];

	constructor.Members.forEach(member => {
		const key = member.Name;
		let value: PossibleTypes;

		if (member.MemberType === "Function") {
			const parameters: Parameters = [];
			const returns: Returns = [];

			member.Parameters?.forEach(parameter => {
				parameters.push({
					Type: "FunctionParameter",
					Name: parameter.Name,
					Optional: parameter.Default !== null,
					ParameterType: {
						Type: "Type",
						RawValue: parameter.Type.Name,
						TypeName: "",
						TypeValue: {
							Type: {
								Type: "Simple",
								Value: parameter.Type.Name,
								RawValue: parameter.Type.Name,
							},
							AndTypes: [],
							OrTypes: [],
						},
						IsExported: false,
						Generics: [],
					},
					IsVariadic: false,
				});
			});

			const allReturns = member.TupleReturns || [];

			if (member.ReturnType !== undefined) {
				allReturns.push({ Name: member.ReturnType.Name });
			}

			allReturns.forEach(returnItem => {
				returns.push({
					Type: "FunctionReturn",
					IsVariadic: false,
					Optional: false,
					ReturnType: {
						Type: "Type",
						TypeName: "",
						TypeValue: {
							Type: {
								Type: "Simple",
								Value: returnItem.Name,
								RawValue: returnItem.Name,
							},
							AndTypes: [],
							OrTypes: [],
						},
						IsExported: false,
						RawValue: returnItem.Name,
						Generics: [],
					}
				});
			});

			value = {
				Type: "Function",
				Value: {
					Parameters: parameters,
					Returns: returns
				},
				RawValue: "",
				Body: {
					Tokens: [],
				},
			};
			value.RawValue = functionTypeToString(value);
		} else {
			value = {
				Type: "Simple",
				RawValue: member.ValueType?.Name ?? "any",
				Value: member.ValueType?.Name ?? "any",
			};
		}

		constructorData.push({
			key: key,
			value: {
				Type: "Value",
				Value: value,
			},
		});
	});

	Constructors.push({
		Type: "Variable Declaration",
		RawValue: constructor.Name,
		VariableName: constructor.Name,
		VariableType: {
			Type: "Type",
			TypeName: "",
			RawValue: "",
			TypeValue: {
				Type: {
					Type: "Table",
					Value: constructorData,
					RawValue: "",
				},
				AndTypes: [],
				OrTypes: [],
			},
			IsExported: true,
			Generics: [],
		},
		VariableValue: {
			Type: "Value",
			Value: {
				Type: "Table",
				RawValue: "",
				Value: constructorData
			}
		},
		IsGlobal: true
	});
});

const globals: ParsedTokens = [];
const metatables: ParsedTokens = [];

readFile(path.join(path.resolve(__dirname, '..'), "env/env.luau"), "utf8", (err, code) => {
	if (err) throw err;

	const AST = parse(code, true);
	AST.Tokens.map(token => {
		if (token.Type === "Type") {
			if (token.TypeName === "Type") {
				token.TypeName = "type";
			} else if (token.TypeName === "Typeof") {
				token.TypeName = "typeof";
			}

			const variable: ParsedVariableDeclaration = {
				Type: "Variable Declaration",
				RawValue: token.RawValue.replace(/type (.*?)\s*:/, "local $1 ="),
				IsGlobal: true,
				VariableName: token.TypeName,
				VariableType: token,
				VariableValue: {
					Type: "Value",
					Value: token.TypeValue.Type,
				}
			};

			return variable;
		}

		return token;
	});
	globals.push(...AST.Tokens);
});
readFile(path.join(path.resolve(__dirname, '..'), "env/meta.luau"), "utf8", (err, code) => {
	if (err) throw err;

	const AST = parse(code, true);
	AST.Tokens.map(token => {
		if (token.Type === "Type") {
			const variable: ParsedVariableDeclaration = {
				Type: "Variable Declaration",
				RawValue: token.RawValue.replace(/type (.*?)\s*:/, "local $1 ="),
				IsGlobal: true,
				VariableName: token.TypeName,
				VariableType: token,
				VariableValue: {
					Type: "Value",
					Value: token.TypeValue.Type,
				}
			};

			return variable;
		}

		return token;
	});

	metatables.push(...AST.Tokens);
});

export {
	Constructors,
	Enums,
	globals,
	metatables,
};