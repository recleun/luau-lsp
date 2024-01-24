import { Value } from "../../types";

export function isParsedValue(obj: any): obj is Value {
	return typeof obj.Type === "string" && obj.Type === "Value";
}