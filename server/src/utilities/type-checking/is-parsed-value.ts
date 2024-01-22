import { ParsedValue } from "../../types";

export function isParsedValue(obj: any): obj is ParsedValue {
	return typeof obj.Type === "string" && obj.Type === "Value";
}