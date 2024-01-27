import { TableFields, TableField, TableFieldType } from "../../types";
import { tableKeyToString, toString } from "../to-string";
import { isTypeDefinition } from "../type-checking";

export function tableFieldToString(field: TableField | TableFieldType, separator: string, excludeKey: boolean): string {
	const stringField = (
		isTypeDefinition(field.Value) && toString(field.Value) || field.Value.RawValue
	).split("\n").join("\n\t");
	const stringKey = tableKeyToString(field.Key);

	let key = "";
	if (!excludeKey && stringKey !== "") {
		key = `${stringKey}${separator}`;
	}

	return `${key}${stringField}`;
}

export function tableFieldsToString(value: TableFields, separator: string): string {
	if (value.length === 0) { return "{}"; }

	let index = 1;
	const result = value.map(field => {
		let excludeKey = false;
		if (typeof field.Key === "string") {
			const number = parseInt(field.Key);
			if (number && number === index) {
				index++;
				excludeKey = true;
			}
		}

		return `\t ${tableFieldToString(field, separator, excludeKey)}`;
	}).join(",\n");

	if (value.length === 1 && typeof value[0].Key === "string" && parseInt(value[0].Key)) {
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
