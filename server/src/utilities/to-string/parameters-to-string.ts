import { Parameters } from "../../types";

export function parametersToString(parameters: Parameters, excludeTypes: boolean): string {
	return parameters.map(parameter => {
		let typeCharacter = ": ";
		let parameterType = parameter.ParameterType.RawValue;
		if (parameter.Name === "") { typeCharacter = ""; }
		if (excludeTypes) { typeCharacter = ""; parameterType = ""; }

		return `${parameter.Name}${typeCharacter}${parameterType}`;
	}).join(", ");
}