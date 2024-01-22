import { Returns } from "../../types";

export function returnsToString(returns: Returns): string {
	if (returns.length === 0) { return "nil"; }
	
	return returns.map(parameter => parameter.ReturnType.RawValue).join(", ");
}