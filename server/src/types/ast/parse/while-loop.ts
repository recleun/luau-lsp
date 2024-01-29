import { AST } from "../../parse-types";

export interface WhileLoop {
	Type: "While Loop",
	EndingCondition: string,
	Body: AST,
}
