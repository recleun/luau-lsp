import { Parameter, Parameters } from "../../types";

export function isParameter(obj: any): obj is Parameter {
	return typeof obj.Type === "string" && obj.Type === "FunctionParameter";
}

export function isParameters(obj: any): obj is Parameters {
	return obj.Content === "Parameters";
}