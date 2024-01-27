import {
	Parameters,
	AstTokens,
	VariableDeclaration,
	PossibleTypes,
	Returns,
	SimpleType,
	TableFields,
	TableType,
	TypeDefinition
} from "../types";
import { APIDump } from "../types/ast/env/api-dump";
import { DataTypes } from "../types/ast/env/data-types";
import { parse } from "./parse";
import { readFile } from "fs";
import * as path from "path";
import { getTypeFromValue } from "./parser/as-type";
import { PossibleTypesBuilder, TypeDefinitionBuilder, ValueBuilder, VariableDeclarationBuilder } from "../classes";
import { logTable } from "../utilities";

const ApiDumb: APIDump = require("../api/api-dump.json");
const DataTypesJson: DataTypes = require("../api/data-types.json");

const Enums: VariableDeclaration = VariableDeclarationBuilder.create(
	"Enum",
	true,
	TypeDefinitionBuilder.fromPossibleType(PossibleTypesBuilder.asTable([], "")),
	ValueBuilder.fromPossibleType(PossibleTypesBuilder.asTable([], "")),
	"Enum"
);
const Constructors: VariableDeclaration[] = [];
const globalTypes: TypeDefinition[] = [];

ApiDumb.Enums.forEach(enumItem => {
	if (Enums.VariableValue.Value.Type !== "Table") { return; }
	if (Enums.VariableType.TypeValue.Type.Type !== "Table") { return; }
	// Above cases are never true but just to shut TypeScript.

	const items: TableType = {
		Type: "Table",
		RawValue: `Enum.${enumItem.Name}`,
		Value: []
	};

	enumItem.Items.forEach(item => {
		const value: SimpleType = PossibleTypesBuilder.asSimple(item.Name, `Enum.${enumItem.Name}.${item.Name}`);
		items.Value.push({
			Key: item.Name,
			Value: value,
			Type: TypeDefinitionBuilder.fromPossibleType(value),
			References: [],
		});
	});

	Enums.VariableValue.Value.Value.push({
		Key: enumItem.Name,
		Value: items,
		Type: TypeDefinitionBuilder.fromPossibleType(items),
		References: [],
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
					ParameterType: TypeDefinitionBuilder.fromString(parameter.Type.Name, parameter.Type.Name),
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
					ReturnType: TypeDefinitionBuilder.fromString(returnItem.Name, returnItem.Name),
				});
			});

			value = PossibleTypesBuilder.asFunction(parameters, returns);
		} else {
			value = member.ValueType
				? PossibleTypesBuilder.asSimple(member.ValueType.Name)
				: PossibleTypesBuilder.asSimple("any");
		}

		constructorData.push({
			Key: key,
			Value: value,
			Type: getTypeFromValue(value)[0],
			References: [],
		});
	});

	const type = PossibleTypesBuilder.asTable(constructorData);
	Constructors.push(VariableDeclarationBuilder.create(
		constructor.Name,
		true,
		TypeDefinitionBuilder.fromPossibleType(type),
		ValueBuilder.fromPossibleType(type),
		constructor.Name,
	));
});
DataTypesJson.DataTypes.forEach(dataType => {
	const fields: TableFields = [];
	dataType.Members.forEach(member => {
		if (member.MemberType === "Function") {
			const parameters: Parameters = [];
			const returns: Returns = [];

			member.Parameters?.forEach(parameter => {
				parameters.push({
					Type: "FunctionParameter",
					Name: parameter.Name,
					Optional: false,
					ParameterType: TypeDefinitionBuilder.fromString(parameter.Type.Name, parameter.Type.Name),
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
					ReturnType: TypeDefinitionBuilder.fromString(returnItem.Name, returnItem.Name),
				});
			});

			fields.push({
				Key: member.Name,
				Value: TypeDefinitionBuilder.fromPossibleType(PossibleTypesBuilder.asFunction(parameters, returns)),
				References: [],
			});
		} else {
			fields.push({
				Key: member.Name,
				Value: TypeDefinitionBuilder.fromPossibleType(PossibleTypesBuilder.asSimple(member.ValueType?.Name || "any")),
				References: [],
			});
		}
	});

	const tableType = PossibleTypesBuilder.asTable(fields, dataType.Name);
	globalTypes.push(TypeDefinitionBuilder.fromPossibleType(tableType, dataType.Name));
});

const globals: AstTokens = [];
const metatables: AstTokens = [];

readFile(path.join(path.resolve(__dirname, '..'), "env/env.luau"), "utf8", (err, code) => {
	if (err) throw err;

	const AST = parse(code, false);
	// AST.Tokens.map(token => {
	// 	if (token.Type === "Variable Declaration") {
	// 		token.IsGlobal = true;
	// 	}
	// 	if (token.Type === "Type") {
	// 		if (token.TypeName === "Type") {
	// 			token.TypeName = "type";
	// 		} else if (token.TypeName === "Typeof") {
	// 			token.TypeName = "typeof";
	// 		}

	// 		return VariableDeclarationBuilder.create(
	// 			token.TypeName,
	// 			true,
	// 			token,
	// 			ValueBuilder.fromTypeDefinition(token),
	// 			token.RawValue.replace(/type (.*?)\s*:/, "$1")
	// 		);
	// 	}

	// 	return token;
	// });

	// for (const node of AST.Tokens) {
	// 	if (node.Type !== "Type" || node.TypeName !== "string") {
	// 		continue;
	// 	}
	// 	globalTypes.push(node);
	// 	break;
	// }

	globals.push(...AST.Tokens);
});
readFile(path.join(path.resolve(__dirname, '..'), "env/meta.luau"), "utf8", (err, code) => {
	if (err) throw err;

	const AST = parse(code, true);
	// AST.Tokens.map(token => {
	// 	if (token.Type === "Type") {
	// 		return VariableDeclarationBuilder.create(
	// 			token.TypeName,
	// 			true,
	// 			token,
	// 			ValueBuilder.fromTypeDefinition(token),
	// 			token.RawValue.replace(/type (.*?)\s*:/, "$1")
	// 		);
	// 	}

	// 	return token;
	// });

	metatables.push(...AST.Tokens);
});

// logTable(globals);

export {
	Constructors,
	Enums,
	globals,
	metatables,
	globalTypes,
};
