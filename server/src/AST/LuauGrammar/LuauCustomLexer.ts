import { CharStream } from "antlr4ts";
import { LuauLexer } from "./LuauLexer";
import { LuauParser } from "./LuauParser";

const NEW_LINE = '\n'.charCodeAt(0);
const EQUAL = '='.charCodeAt(0);
const OPEN_SQUARE_BRACKETS = '['.charCodeAt(0);
const CLOSE_SQUARE_BRACKETS = ']'.charCodeAt(0);

const stringEquals: number[] = [];

export class LuauCustomLexer extends LuauLexer {
	constructor(input: CharStream) {
		super(input);
	}

	static HandleSingleComment(lexer: LuauLexer) {
		let currentCharCode = lexer._input.LA(1);

		while ((currentCharCode = lexer._input.LA(1)) !== LuauParser.EOF &&
			currentCharCode !== NEW_LINE) {
			lexer._input.consume();
		}
	}

	static HandleLongString(lexer: LuauLexer) {
		lexer._input.LA(-1);
		// Go back one character (was used in the `.g4` file) so the parser can distinguish
		// between `[` of long strings/comments and of table indexers.

		let currentCharCode = lexer._input.LA(1);
		if (currentCharCode !== OPEN_SQUARE_BRACKETS) {
			this.CountEquals(lexer);
			lexer._input.consume(); // Consome the `[` character after the equals.
			stringEquals[stringEquals.length - 1]++;
		}

		while ((currentCharCode = lexer._input.LA(1)) !== LuauParser.EOF) {
			lexer._input.consume();
			if (lexer._input.LA(-1) === CLOSE_SQUARE_BRACKETS) {
				if (this.CheckEqualsCount(lexer)) {
					break;
				}
			}
		}

		lexer._input.consume();
	}

	static CountEquals(lexer: LuauLexer) {
		let equalsCount = 0;

		while (lexer._input.LA(1) === EQUAL) {
			equalsCount++;
			lexer._input.consume();
		}

		if (lexer._input.LA(1) !== OPEN_SQUARE_BRACKETS) {
			for (let i = 0; i < equalsCount; i++) {
				lexer._input.LA(-1);
			}

			return false;
		}

		stringEquals.push(equalsCount);
	}

	static CheckEqualsCount(lexer: LuauLexer) {
		let equalsCount = 0;

		while (lexer._input.LA(1) === EQUAL) {
			equalsCount++;
			lexer._input.consume();
		}

		if (equalsCount !== stringEquals[stringEquals.length - 1]) {
			return false;
		}

		return true;
	}
}