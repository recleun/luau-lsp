import {
	isTypeDefinition,
	isValue,
	isParameters,
	isReturns,
	isTableField,
	isTableFields,
	isVariableDeclaration
} from "./type-checking";
import { parametersToString } from "./to-string/parameters-to-string";
import { returnsToString } from "./to-string/returns-to-string";
import { tableFieldToString, tableFieldsToString } from "./to-string/table-fields-to-string";

/**
 * Turn a type from one of the parsed types into a string representation while passing extra
 * parameters to the functions associated with the type, possible values for the first argument
 * are:
 * * boolean - to the main function, regenerates the `RawValue` for variable declarations
 * 	and type definitions only.
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
		return value.Value.RawValue;
	} else if (isTypeDefinition(value)) {
		//TODO:
		return value.RawValue;
	} else if (isVariableDeclaration(value)) {
		if (params[0] as boolean) {
			let rawValue = `local ${value.VariableName}`;
			if (value.VariableType.TypeName !== "") {
				rawValue += `: ${value.VariableType.TypeName}`;
			}
			if (
				value.VariableValue.Value.RawValue !== ""
				&& value.VariableValue.Value.RawValue !== "nil"
			) {
				rawValue += ` = ${value.VariableValue.Value.RawValue}`;
			}

			return rawValue;
		} else {
			return value.RawValue;
		}
	}

	if (isParameters(value)) {
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
