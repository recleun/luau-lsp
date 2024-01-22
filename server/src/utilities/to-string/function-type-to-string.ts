import { FunctionType, Parameters, Returns } from "../../types";
import { toString } from "../to-string";

export function functionTypeToString(value: FunctionType): string {
	return parametersReturnsToString(value.Value.Parameters, value.Value.Returns);
}

export function parametersReturnsToString(parameters: Parameters, returns: Returns): string {
	let rawValue = `(${toString(parameters)})`;

	// if (returns.length > 0) {
		const openingParenthesis = returns.length > 1 ? "(" : "";
		const closingParenthesis = returns.length > 1 ? ")" : "";

		rawValue += ` -> ${openingParenthesis}${toString(returns)}${closingParenthesis}`;
	// }

	return rawValue;
}