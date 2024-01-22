import { RawTokens } from "../types";

const includesExpression = (element: string, arr: string[]): boolean => {
	return arr.some((expression) => element.includes(expression));
};

export function getExpressionEnd(
	tokens: RawTokens,
	startIndex: number,
	expressionStarters: string[],
	expressionEnds: string[],
): number {
	let expressionsFound = 0;
	let length = startIndex;

	for (let i = startIndex; i < tokens.length; i++) {
		length = i;
		const element = tokens[i];
		if (includesExpression(element, expressionEnds)) {
			if (expressionsFound === 0) { break; }
			expressionsFound--;
		}
		if (includesExpression(element, expressionStarters)) {
			expressionsFound++;
		}
	}

	return length;
}