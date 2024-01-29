import { AST, WhileLoop } from "../types";
import { AstBuilder } from "./ast-builder";

export class WhileLoopBuilder {
	static create(body?: AST): WhileLoop {
		return {
			Type: "While Loop",
			EndingCondition: "",
			Body: body || AstBuilder.default(),
		};
	}

	static withCondition(condition: string, body?: AST): WhileLoop {
		return {
			Type: "While Loop",
			EndingCondition: condition,
			Body: body ?? AstBuilder.default(),
		};
	}
}