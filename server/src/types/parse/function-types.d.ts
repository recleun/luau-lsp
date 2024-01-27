import { CustomArray } from "../global-types";
import { TypeDefinition } from "./possible-type";

export interface Parameter {
	Type: "FunctionParameter",
	Name: string,
	ParameterType: TypeDefinition,
	Optional: boolean,
	IsVariadic: boolean,
}

export interface Return {
	Type: "FunctionReturn",
	ReturnType: TypeDefinition,
	Optional: boolean,
	IsVariadic: boolean,
}

export type Parameters = CustomArray<Parameter, "Parameters">
export type Returns = CustomArray<Return, "Returns">
