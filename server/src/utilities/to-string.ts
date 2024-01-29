import {
	isTypeDefinition,
	isValue,
	isParameters,
	isReturns,
	isTableField,
	isTableFields,
	isVariableDeclaration,
	isSimpleType,
	isTableType,
	isFunctionType
} from "./type-checking";
import { parametersToString } from "./to-string/parameters-to-string";
import { returnsToString } from "./to-string/returns-to-string";
import { tableFieldToString, tableFieldsToString } from "./to-string/table-fields-to-string";
import { functionTypeToString } from "./to-string/function-type-to-string";

/**
 * Turn a type from one of the parsed types into a string representation while passing extra
 * parameters to the functions associated with the type, possible values for the first argument
 * are:
 * * boolean - to the main function, regenerates the `RawValue` for variable declarations,
 * 	values and type definitions only.
 * * boolean - passed as `excludeType` parameter for function parameters only.
 * * boolean - passed as `excludeKey` to table field only.
 *
 * @param value
 * @param params
 * @returns
 */
export function toString(value: any, ...params: any[]): string {
	if (typeof value === "string") { return value; }

	if (isValue(value)) {
		if (params[0]) {
			if (value.Value.Type === "Table") {
				value.Value.RawValue = tableFieldsToString(value.Value.Value);
			}
		}

		return value.Value.RawValue;

	} else if (isTypeDefinition(value)) {
		if (params[0]) {
			// if (value.Value.Type === "Table") {
				value.RawValue = value.TypeName !== "" ? `type ${value.TypeName}` : "";
				value.RawValue += `${toString(value.TypeValue.Type)}`;
				value.RawValue += value.TypeValue.AndTypes.map(type => toString(type)).join(" & ");
				value.RawValue += value.TypeValue.OrTypes.map(type => toString(type)).join(" | ");
			// }
		}

		return value.RawValue;

	} else if (isVariableDeclaration(value)) {
		if (params[0]) {
			value.VariableType.RawValue = toString(value.VariableType.RawValue, true);

			let rawValue = `local ${value.VariableName}`;
			if (value.VariableType.TypeName !== "") {
				rawValue += `: ${value.VariableType.TypeName}`;
			}
			if (
				value.VariableValue.Value.RawValue !== ""
				&& value.VariableValue.Value.RawValue !== "nil"
			) {
				rawValue += ` = ${toString(value.VariableValue, true)}`;
			}

			value.RawValue = rawValue;
		}

		return value.RawValue;
		
	} else if (isSimpleType(value)) {
		return value.RawValue;
	} else if (isTableType(value)) {
		return tableFieldsToString(value.Value);
	} else if (isFunctionType(value)) {
		return functionTypeToString(value);
	} else if (isParameters(value)) {
		return parametersToString(value, params[0] as boolean);
	} else if (isReturns(value)) {
		return returnsToString(value);
	} else if (isTableFields(value)) {
		return tableFieldsToString(value);
	} else if (isTableField(value)) {
		return tableFieldToString(value, params[0] as boolean);
	}

	return String(value);
}

export * from "./to-string/parameters-to-string";
export * from "./to-string/function-type-to-string";
export * from "./to-string/returns-to-string";
export * from "./to-string/table-fields-to-string";
export * from "./to-string/table-key-to-string";
