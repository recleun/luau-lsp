import { AST, ElseIfStatement, ElseStatement, IfStatement } from "../types";
import { AstBuilder } from "./ast-builder";

export class IfStatementBuilder {
	static default(body?: AST): IfStatement {
		return {
			Type: "If Statement",
			Condition: "",
			Body: body ?? AstBuilder.default(),
			ElseIfStatements: [],
		};
	}

	static withCondition(condition: string, body?: AST): IfStatement {
		return {
			Type: "If Statement",
			Condition: condition,
			Body: body ?? AstBuilder.default(),
			ElseIfStatements: [],
		};
	}

	static elseIf(body?: AST): ElseIfStatement {
		return {
			Type: "ElseIf Statement",
			Condition: "",
			Body: body ?? AstBuilder.default(),
		};
	}

	static elseIfWithCondition(condition: string, body?: AST): ElseIfStatement {
		return {
			Type: "ElseIf Statement",
			Condition: condition,
			Body: body ?? AstBuilder.default(),
		};
	}

	static else(body?: AST): ElseStatement {
		return {
			Type: "Else Statement",
			Body: body ?? AstBuilder.default(),
		};
	}
}