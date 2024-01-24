import { TypeDefinition } from "../../types";

export function isParsedType(obj: any): obj is TypeDefinition {
	return typeof obj.Type === "string" && obj.Type === "Type";
}