import { TableFields, TableField } from "../../types";
import { tableKeyToString, toString } from "../to-string";

export function tableFieldToString(field: TableField, separator: string, excludeKey: boolean): string {
	const stringField = toString(field.value, separator).split("\n").join("\n\t");
	let key = "";
	if (!excludeKey && field.key !== "") {
		key = `${tableKeyToString(field.key)}${separator}`;
	}

	return `${key}${stringField}`;
}

export function tableFieldsToString(value: TableFields, separator: string): string {
	if (value.length === 0) { return "{}"; }

	const result = value.map(field => `\t ${tableFieldToString(field, separator, false)}`).join(",\n");

	if (value.length === 1 && value[0].key === "") {
		// const isTable = (
		// 	value[0].value.Type === "Type" && value[0].value.TypeValue.Type.Type === "Table" ||
		// 	value[0].value.Type === "Value" && value[0].value.Value.Type === "Table"
		// );

		// if (!isTable) {
			// If there's only one element and it isn't a table we display it as { type }
			return `{ ${result.trim()} }`;
		// }
	}

	return `{\n${result}\n}`;
}
