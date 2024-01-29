import { VariableDeclaration } from "../../types";

export function isVariableDeclaration(obj: any): obj is VariableDeclaration {
	return obj.Type === "Variable Declaration";
}
