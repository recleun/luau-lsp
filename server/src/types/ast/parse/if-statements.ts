import { AST, ASTNode } from "../../parse-types";

interface IfNode<T> extends ASTNode {
	Body: AST,
	Condition: T,
}

export interface ElseStatement extends Omit<IfNode<undefined>, "Condition"> {
	Type: "Else Statement",
}

export interface ElseIfStatement extends IfNode<string> {
	Type: "ElseIf Statement",
}

export interface IfStatement extends IfNode<string> {
	Type: "If Statement",
	ElseIfStatements: ElseIfStatement[],
	Else?: ElseStatement,
}
