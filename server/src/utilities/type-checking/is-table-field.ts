import { TableField, TableFieldType, TableFields } from "../../types";

export function isTableField(obj: any): obj is TableField {
	return (
		typeof obj.Key !== "undefined"
		&& typeof obj.Type !== "undefined"
		&& typeof obj.Value !== "undefined"
	);
}

export function isTableFieldType(obj: any): obj is TableFieldType {
	return typeof obj.Key !== "undefined" && typeof obj.Type !== "undefined";
}

export function isTableFields(obj: any): obj is TableFields {
	return obj.Content === "TableFields";
}