import { Return, Returns } from "../../types";

export function isReturn(obj: any): obj is Return {
	return typeof obj.Type === "string" && obj.Type === "FunctionReturn";
}

export function isReturns(obj: any): obj is Returns {
	return obj.Content === "Returns";
}