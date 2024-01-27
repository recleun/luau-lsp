import { ConvertableTypes } from "../types";
import { isTypeDefinition, isValue, isParameters, isReturns } from "./type-checking";
import { parametersToString } from "./to-string/parameters-to-string";
import { returnsToString } from "./to-string/returns-to-string";
import { tableFieldToString, tableFieldsToString } from "./to-string/table-fields-to-string";
import { isTableField, isTableFields } from "./type-checking/is-table-field";

/**
 * Turn a type from the parsed types into a string representation while passing extra
 * characters to the functions, possible values for the first item are:
 * * boolean - passed as `excludeType` parameter for function parameters only.
 * * string - passed as `separator` character for table field**s** only.
 *
 * for the second item, only possible value is:
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
		return value.RawValue;
	}

	if (isParameters(value)) {
		return parametersToString(value, params[0] as boolean);
	} else if (isReturns(value)) {
		return returnsToString(value);
	} else if (isTableFields(value)) {
		return tableFieldsToString(value, params[0] as string);
	} else if (isTableField(value)) {
		return tableFieldToString(value, params[0] as string, params[0] as boolean);
	}

	return String(value);
}

export * from "./to-string/parameters-to-string";
export * from "./to-string/function-type-to-string";
export * from "./to-string/returns-to-string";
export * from "./to-string/table-fields-to-string";
export * from "./to-string/table-key-to-string";
