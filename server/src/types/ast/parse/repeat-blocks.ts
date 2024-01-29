import { AST } from "../../parse-types";

export interface RepeatBlock {
	Type: "Repeat Block",
	EndingCondition: string,
	Body: AST,
}
