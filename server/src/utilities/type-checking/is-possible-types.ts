import { FunctionType, SimpleType, TableType } from "../../types";

export function isSimpleType(obj: any): obj is SimpleType {
	return obj.Type === "Simple";
}

export function isTableType(obj: any): obj is TableType {
	return obj.Type === "Table";
}

export function isFunctionType(obj: any): obj is FunctionType {
	return obj.Type === "Function";
}
