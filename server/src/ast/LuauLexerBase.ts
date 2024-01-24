import { CharStream, Lexer } from "antlr4ts";
import { LuauLexer } from "./LuauGrammar/LuauLexer";
import { LuauParser } from "./LuauGrammar/LuauParser";
import { log, logTable } from "../utilities";

const NEW_LINE = '\n'.charCodeAt(0);
const EQUAL = '='.charCodeAt(0);
const OPEN_SQUARE_BRACKETS = '['.charCodeAt(0);
const CLOSE_SQUARE_BRACKETS = ']'.charCodeAt(0);

const stringEquals: number[] = [];

export abstract class LuauLexerBase extends Lexer {
	constructor(input: CharStream) {
		super(input);
	}

	HandleSingleComment() {
		let currentCharCode = this._input.LA(1);

		while ((currentCharCode = this._input.LA(1)) !== LuauParser.EOF &&
			currentCharCode !== NEW_LINE) {
			this._input.consume();
		}
	}

	HandleLongString() {
		// TODO: Fix not working when no `=`.
		// Test variables.lua in debug_folder for multi-line comments not working when no `=`
		// is there.
		let currentCharCode = this._input.LA(-1);
		if (currentCharCode === OPEN_SQUARE_BRACKETS) {
			stringEquals.push(0);
		} else {
			if (this.CountEquals()) {
				this._input.consume(); // Consome the `[` character after the equals.
			}
			// stringEquals[stringEquals.length - 1]++;
		}

		while ((currentCharCode = this._input.LA(1)) !== LuauParser.EOF) {
			this._input.consume();
			if (this._input.LA(-1) === CLOSE_SQUARE_BRACKETS) {
				if (this.CheckEqualsCount()) {
					break;
				}
			}
		}

		this._input.consume();
	}

	CountEquals() {
		let equalsCount = 1;

		while (this._input.LA(1) === EQUAL) {
			equalsCount++;
			this._input.consume();
		}

		if (this._input.LA(1) !== OPEN_SQUARE_BRACKETS) {
			for (let i = 0; i < equalsCount; i++) {
				this._input.LA(-1);
			}

			return false;
		}

		stringEquals.push(equalsCount);

		return true;
	}

	CheckEqualsCount() {
		let equalsCount = 0;

		while (this._input.LA(1) === EQUAL) {
			equalsCount++;
			this._input.consume();
		}

		log("\n");
		log(equalsCount);
		logTable(stringEquals);
		log("\n");

		if (equalsCount !== stringEquals[stringEquals.length - 1]) {
			return false;
		}

		stringEquals.pop();
		return true;
	}
}