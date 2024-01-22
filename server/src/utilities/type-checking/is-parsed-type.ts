import { ParsedType } from "../../types";

export function isParsedType(obj: any): obj is ParsedType {
	return typeof obj.Type === "string" && obj.Type === "Type";
}