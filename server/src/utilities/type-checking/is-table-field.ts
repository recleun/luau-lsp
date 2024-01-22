import { TableField, TableFields } from "../../types";

export function isTableField(obj: any): obj is TableField {
	return typeof obj.key !== "undefined" && typeof obj.value !== "undefined" ;
}

export function isTableFields(obj: any): obj is TableFields {
	return obj.Content === "TableFields";
}