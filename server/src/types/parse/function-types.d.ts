import { CustomArray } from "../global-types";
import { ParsedType } from "./possible-type";

export interface Parameter {
	Type: "FunctionParameter",
	Name: string,
	ParameterType: ParsedType,
	Optional: boolean,
	IsVariadic: boolean,
}

export interface Return {
	Type: "FunctionReturn",
	ReturnType: ParsedType,
	Optional: boolean,
	IsVariadic: boolean,
}

export type Parameters = CustomArray<Parameter, "Parameters">
export type Returns = CustomArray<Return, "Returns">
