import { ApiParameter, Parameters } from "../../types";

export function isParameter(obj: any): obj is ApiParameter {
	return typeof obj.Type === "string" && obj.Type === "FunctionParameter";
}

export function isParameters(obj: any): obj is Parameters {
	return obj.Content === "Parameters";
}