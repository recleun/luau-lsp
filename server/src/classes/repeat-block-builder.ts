import { AST, RepeatBlock } from "../types";
import { AstBuilder } from "./ast-builder";

export class RepeatBlockBuilder {
	static create(body?: AST): RepeatBlock {
		return {
			Type: "Repeat Block",
			EndingCondition: "",
			Body: body ?? AstBuilder.default(),
		};
	}

	static withCondition(condition: string, body?: AST): RepeatBlock {
		return {
			Type: "Repeat Block",
			EndingCondition: condition,
			Body: body ?? AstBuilder.default(),
		};
	}
}