import { Value } from "../../types";

export function isValue(obj: any): obj is Value {
	return typeof obj.Type === "string" && obj.Type === "Value";
}