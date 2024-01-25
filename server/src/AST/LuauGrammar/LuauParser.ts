// Generated from ./server/src/grammar/LuauParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LuauParserListener } from "./LuauParserListener";
import { LuauParserVisitor } from "./LuauParserVisitor";


export class LuauParser extends Parser {
	public static readonly STRING = 1;
	public static readonly LUA_STRING = 2;
	public static readonly DOUBLE_QUOTES_STRING = 3;
	public static readonly SINGLE_QUOTES_STRING = 4;
	public static readonly MULTI_LINE_STRING = 5;
	public static readonly INTERPOLATED_STRING = 6;
	public static readonly NUMBER = 7;
	public static readonly INT = 8;
	public static readonly FLOAT_1 = 9;
	public static readonly FLOAT_2 = 10;
	public static readonly FLOAT_3 = 11;
	public static readonly FLOAT = 12;
	public static readonly SCIENTIFIC_NOTATION = 13;
	public static readonly HEX_NUMBER = 14;
	public static readonly BINARY_NUMBER = 15;
	public static readonly OCTAL_NUMBER = 16;
	public static readonly NIL = 17;
	public static readonly FALSE = 18;
	public static readonly TRUE = 19;
	public static readonly RETURN = 20;
	public static readonly END = 21;
	public static readonly BREAK = 22;
	public static readonly IF = 23;
	public static readonly ELSEIF = 24;
	public static readonly THEN = 25;
	public static readonly ELSE = 26;
	public static readonly WHILE = 27;
	public static readonly DO = 28;
	public static readonly FOR = 29;
	public static readonly IN = 30;
	public static readonly REPEAT = 31;
	public static readonly UNTIL = 32;
	public static readonly LOCAL = 33;
	public static readonly FUNCTION = 34;
	public static readonly NAME = 35;
	public static readonly TYPE = 36;
	public static readonly TYPEOF = 37;
	public static readonly EXPORT = 38;
	public static readonly EscapeSequence = 39;
	public static readonly NormalEscape = 40;
	public static readonly HexadecimalEscape = 41;
	public static readonly UnicodeEscape = 42;
	public static readonly SpaceEscape = 43;
	public static readonly OctalEscape = 44;
	public static readonly MULTI_LINE_COMMENT = 45;
	public static readonly SINGLE_LINE_COMMENT = 46;
	public static readonly WS = 47;
	public static readonly NEWLINE = 48;
	public static readonly SEMI_COLON = 49;
	public static readonly COLON = 50;
	public static readonly DOUBLE_COLON = 51;
	public static readonly EQUAL = 52;
	public static readonly DOT = 53;
	public static readonly COMMA = 54;
	public static readonly OPEN_PARENTHESIS = 55;
	public static readonly CLOSE_PARENTHESIS = 56;
	public static readonly OPEN_ANGLE_BRACKET = 57;
	public static readonly CLOSE_ANGLE_BRACKET = 58;
	public static readonly OPEN_SQUARE_BRACKETS = 59;
	public static readonly CLOSE_SQUARE_BRACKETS = 60;
	public static readonly OPEN_CURLY_BRACKETS = 61;
	public static readonly CLOSE_CURLY_BRACKETS = 62;
	public static readonly ARROW = 63;
	public static readonly INTERSECTION = 64;
	public static readonly UNION = 65;
	public static readonly OPTIONAL = 66;
	public static readonly VARIADIC_EXPRESSION = 67;
	public static readonly CompoundOperations = 68;
	public static readonly NegativeSign = 69;
	public static readonly UnaryOperations = 70;
	public static readonly BinaryOperations = 71;
	public static readonly RULE_file = 0;
	public static readonly RULE_chunk = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_lastStatement = 4;
	public static readonly RULE_setExpression = 5;
	public static readonly RULE_compoundSetExpression = 6;
	public static readonly RULE_doBlock = 7;
	public static readonly RULE_whileExpression = 8;
	public static readonly RULE_repeatBlock = 9;
	public static readonly RULE_ifStatement = 10;
	public static readonly RULE_forExpression = 11;
	public static readonly RULE_forInExpression = 12;
	public static readonly RULE_globalFunction = 13;
	public static readonly RULE_localFunction = 14;
	public static readonly RULE_variableDeclaration = 15;
	public static readonly RULE_typeDeclaration = 16;
	public static readonly RULE_funcname = 17;
	public static readonly RULE_varList1 = 18;
	public static readonly RULE_nameList = 19;
	public static readonly RULE_typedNameList = 20;
	public static readonly RULE_mixedNamesList = 21;
	public static readonly RULE_allNamesList = 22;
	public static readonly RULE_allNamesListType = 23;
	public static readonly RULE_expressionList = 24;
	public static readonly RULE_expression1 = 25;
	public static readonly RULE_expression = 26;
	public static readonly RULE_var = 27;
	public static readonly RULE_prefixexp = 28;
	public static readonly RULE_globalIteratorFunction = 29;
	public static readonly RULE_functioncall = 30;
	public static readonly RULE_varOrExp = 31;
	public static readonly RULE_nameAndArgs = 32;
	public static readonly RULE_varSuffix = 33;
	public static readonly RULE_args = 34;
	public static readonly RULE_function = 35;
	public static readonly RULE_funcbody = 36;
	public static readonly RULE_functionParameters = 37;
	public static readonly RULE_parameterList = 38;
	public static readonly RULE_variadicParameter = 39;
	public static readonly RULE_functionParametersType = 40;
	public static readonly RULE_parameterListType = 41;
	public static readonly RULE_variadicParameterType = 42;
	public static readonly RULE_functionReturns = 43;
	public static readonly RULE_returnList = 44;
	public static readonly RULE_variadicReturn = 45;
	public static readonly RULE_tableconstructor = 46;
	public static readonly RULE_fieldList = 47;
	public static readonly RULE_field = 48;
	public static readonly RULE_fieldsep = 49;
	public static readonly RULE_simpleType = 50;
	public static readonly RULE_singletonType = 51;
	public static readonly RULE_unionSuffix = 52;
	public static readonly RULE_intersectionSuffix = 53;
	public static readonly RULE_type = 54;
	public static readonly RULE_genericTypePackParameter = 55;
	public static readonly RULE_genericTypeList = 56;
	public static readonly RULE_genericTypePackParameterWithDefault = 57;
	public static readonly RULE_genericTypeListWithDefaults = 58;
	public static readonly RULE_typeList = 59;
	public static readonly RULE_typeParams = 60;
	public static readonly RULE_typePack = 61;
	public static readonly RULE_genericTypePack = 62;
	public static readonly RULE_variadicTypePack = 63;
	public static readonly RULE_functionType = 64;
	public static readonly RULE_tableIndexer = 65;
	public static readonly RULE_tableProperty = 66;
	public static readonly RULE_tablePropOrIndexer = 67;
	public static readonly RULE_propList = 68;
	public static readonly RULE_tableType = 69;
	public static readonly RULE_typedName = 70;
	public static readonly RULE_optionalTypedName = 71;
	public static readonly RULE_comment = 72;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "chunk", "block", "statement", "lastStatement", "setExpression", 
		"compoundSetExpression", "doBlock", "whileExpression", "repeatBlock", 
		"ifStatement", "forExpression", "forInExpression", "globalFunction", "localFunction", 
		"variableDeclaration", "typeDeclaration", "funcname", "varList1", "nameList", 
		"typedNameList", "mixedNamesList", "allNamesList", "allNamesListType", 
		"expressionList", "expression1", "expression", "var", "prefixexp", "globalIteratorFunction", 
		"functioncall", "varOrExp", "nameAndArgs", "varSuffix", "args", "function", 
		"funcbody", "functionParameters", "parameterList", "variadicParameter", 
		"functionParametersType", "parameterListType", "variadicParameterType", 
		"functionReturns", "returnList", "variadicReturn", "tableconstructor", 
		"fieldList", "field", "fieldsep", "simpleType", "singletonType", "unionSuffix", 
		"intersectionSuffix", "type", "genericTypePackParameter", "genericTypeList", 
		"genericTypePackParameterWithDefault", "genericTypeListWithDefaults", 
		"typeList", "typeParams", "typePack", "genericTypePack", "variadicTypePack", 
		"functionType", "tableIndexer", "tableProperty", "tablePropOrIndexer", 
		"propList", "tableType", "typedName", "optionalTypedName", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'--'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'['", "']'", undefined, undefined, undefined, 
		undefined, undefined, undefined, "'...'", undefined, "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "STRING", "LUA_STRING", "DOUBLE_QUOTES_STRING", "SINGLE_QUOTES_STRING", 
		"MULTI_LINE_STRING", "INTERPOLATED_STRING", "NUMBER", "INT", "FLOAT_1", 
		"FLOAT_2", "FLOAT_3", "FLOAT", "SCIENTIFIC_NOTATION", "HEX_NUMBER", "BINARY_NUMBER", 
		"OCTAL_NUMBER", "NIL", "FALSE", "TRUE", "RETURN", "END", "BREAK", "IF", 
		"ELSEIF", "THEN", "ELSE", "WHILE", "DO", "FOR", "IN", "REPEAT", "UNTIL", 
		"LOCAL", "FUNCTION", "NAME", "TYPE", "TYPEOF", "EXPORT", "EscapeSequence", 
		"NormalEscape", "HexadecimalEscape", "UnicodeEscape", "SpaceEscape", "OctalEscape", 
		"MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", "WS", "NEWLINE", "SEMI_COLON", 
		"COLON", "DOUBLE_COLON", "EQUAL", "DOT", "COMMA", "OPEN_PARENTHESIS", 
		"CLOSE_PARENTHESIS", "OPEN_ANGLE_BRACKET", "CLOSE_ANGLE_BRACKET", "OPEN_SQUARE_BRACKETS", 
		"CLOSE_SQUARE_BRACKETS", "OPEN_CURLY_BRACKETS", "CLOSE_CURLY_BRACKETS", 
		"ARROW", "INTERSECTION", "UNION", "OPTIONAL", "VARIADIC_EXPRESSION", "CompoundOperations", 
		"NegativeSign", "UnaryOperations", "BinaryOperations",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LuauParser._LITERAL_NAMES, LuauParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LuauParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LuauParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LuauParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LuauParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LuauParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LuauParser.RULE_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.chunk();
			this.state = 147;
			this.match(LuauParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chunk(): ChunkContext {
		let _localctx: ChunkContext = new ChunkContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LuauParser.RULE_chunk);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.IF) | (1 << LuauParser.WHILE) | (1 << LuauParser.DO) | (1 << LuauParser.FOR) | (1 << LuauParser.REPEAT))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuauParser.LOCAL - 33)) | (1 << (LuauParser.FUNCTION - 33)) | (1 << (LuauParser.NAME - 33)) | (1 << (LuauParser.TYPE - 33)) | (1 << (LuauParser.EXPORT - 33)) | (1 << (LuauParser.MULTI_LINE_COMMENT - 33)) | (1 << (LuauParser.SINGLE_LINE_COMMENT - 33)) | (1 << (LuauParser.OPEN_PARENTHESIS - 33)))) !== 0)) {
				{
				{
				this.state = 149;
				this.statement();
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuauParser.SEMI_COLON) {
					{
					this.state = 150;
					this.match(LuauParser.SEMI_COLON);
					}
				}

				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.RETURN || _la === LuauParser.BREAK) {
				{
				this.state = 158;
				this.lastStatement();
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuauParser.SEMI_COLON) {
					{
					this.state = 159;
					this.match(LuauParser.SEMI_COLON);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LuauParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.chunk();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LuauParser.RULE_statement);
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.setExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.compoundSetExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 168;
				this.functioncall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 169;
				this.doBlock();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 170;
				this.whileExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 171;
				this.repeatBlock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 172;
				this.ifStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 173;
				this.forExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 174;
				this.forInExpression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 175;
				this.globalFunction();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 176;
				this.localFunction();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 177;
				this.variableDeclaration();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 178;
				this.typeDeclaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 179;
				this.comment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastStatement(): LastStatementContext {
		let _localctx: LastStatementContext = new LastStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LuauParser.RULE_lastStatement);
		let _la: number;
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.RETURN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				this.match(LuauParser.RETURN);
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.STRING) | (1 << LuauParser.NUMBER) | (1 << LuauParser.NIL) | (1 << LuauParser.FALSE) | (1 << LuauParser.TRUE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (LuauParser.FUNCTION - 34)) | (1 << (LuauParser.NAME - 34)) | (1 << (LuauParser.OPEN_PARENTHESIS - 34)) | (1 << (LuauParser.OPEN_CURLY_BRACKETS - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (LuauParser.VARIADIC_EXPRESSION - 67)) | (1 << (LuauParser.NegativeSign - 67)) | (1 << (LuauParser.UnaryOperations - 67)))) !== 0)) {
					{
					this.state = 183;
					this.expressionList();
					}
				}

				}
				break;
			case LuauParser.BREAK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.match(LuauParser.BREAK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setExpression(): SetExpressionContext {
		let _localctx: SetExpressionContext = new SetExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LuauParser.RULE_setExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.varList1();
			this.state = 190;
			this.match(LuauParser.EQUAL);
			this.state = 191;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundSetExpression(): CompoundSetExpressionContext {
		let _localctx: CompoundSetExpressionContext = new CompoundSetExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LuauParser.RULE_compoundSetExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.var();
			this.state = 194;
			this.match(LuauParser.CompoundOperations);
			this.state = 195;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doBlock(): DoBlockContext {
		let _localctx: DoBlockContext = new DoBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LuauParser.RULE_doBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(LuauParser.DO);
			this.state = 198;
			this.block();
			this.state = 199;
			this.match(LuauParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileExpression(): WhileExpressionContext {
		let _localctx: WhileExpressionContext = new WhileExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LuauParser.RULE_whileExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(LuauParser.WHILE);
			this.state = 202;
			this.expression();
			this.state = 203;
			this.doBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatBlock(): RepeatBlockContext {
		let _localctx: RepeatBlockContext = new RepeatBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LuauParser.RULE_repeatBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(LuauParser.REPEAT);
			this.state = 206;
			this.block();
			this.state = 207;
			this.match(LuauParser.UNTIL);
			this.state = 208;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LuauParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(LuauParser.IF);
			this.state = 211;
			this.expression();
			this.state = 212;
			this.match(LuauParser.THEN);
			this.state = 213;
			this.block();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuauParser.ELSEIF) {
				{
				{
				this.state = 214;
				this.match(LuauParser.ELSEIF);
				this.state = 215;
				this.expression();
				this.state = 216;
				this.match(LuauParser.THEN);
				this.state = 217;
				this.block();
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.ELSE) {
				{
				this.state = 224;
				this.match(LuauParser.ELSE);
				this.state = 225;
				this.block();
				}
			}

			this.state = 228;
			this.match(LuauParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LuauParser.RULE_forExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(LuauParser.FOR);
			this.state = 231;
			this.optionalTypedName();
			this.state = 232;
			this.match(LuauParser.EQUAL);
			this.state = 233;
			this.expression();
			this.state = 234;
			this.match(LuauParser.COMMA);
			this.state = 235;
			this.expression();
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.COMMA) {
				{
				this.state = 236;
				this.match(LuauParser.COMMA);
				this.state = 237;
				this.expression();
				}
			}

			this.state = 240;
			this.doBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInExpression(): ForInExpressionContext {
		let _localctx: ForInExpressionContext = new ForInExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LuauParser.RULE_forInExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(LuauParser.FOR);
			this.state = 243;
			this.allNamesList();
			this.state = 244;
			this.match(LuauParser.IN);
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 245;
				this.globalIteratorFunction();
				}
				break;

			case 2:
				{
				this.state = 246;
				this.expressionList();
				}
				break;
			}
			this.state = 249;
			this.doBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalFunction(): GlobalFunctionContext {
		let _localctx: GlobalFunctionContext = new GlobalFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LuauParser.RULE_globalFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(LuauParser.FUNCTION);
			this.state = 252;
			this.funcname();
			this.state = 253;
			this.funcbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localFunction(): LocalFunctionContext {
		let _localctx: LocalFunctionContext = new LocalFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LuauParser.RULE_localFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.match(LuauParser.LOCAL);
			this.state = 256;
			this.match(LuauParser.FUNCTION);
			this.state = 257;
			this.match(LuauParser.NAME);
			this.state = 258;
			this.funcbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LuauParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(LuauParser.LOCAL);
			this.state = 261;
			this.allNamesList();
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				{
				this.state = 262;
				this.match(LuauParser.EQUAL);
				this.state = 263;
				this.expressionList();
				}
				}
				break;

			case 2:
				{
				this.state = 264;
				this.doBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LuauParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.EXPORT) {
				{
				this.state = 267;
				this.match(LuauParser.EXPORT);
				}
			}

			this.state = 270;
			this.match(LuauParser.TYPE);
			this.state = 271;
			this.match(LuauParser.NAME);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.OPEN_ANGLE_BRACKET) {
				{
				this.state = 272;
				this.match(LuauParser.OPEN_ANGLE_BRACKET);
				this.state = 273;
				this.genericTypeListWithDefaults();
				this.state = 274;
				this.match(LuauParser.CLOSE_ANGLE_BRACKET);
				}
			}

			this.state = 278;
			this.match(LuauParser.EQUAL);
			this.state = 279;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcname(): FuncnameContext {
		let _localctx: FuncnameContext = new FuncnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LuauParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(LuauParser.NAME);
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuauParser.DOT) {
				{
				{
				this.state = 282;
				this.match(LuauParser.DOT);
				this.state = 283;
				this.match(LuauParser.NAME);
				}
				}
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.COLON) {
				{
				this.state = 289;
				this.match(LuauParser.COLON);
				this.state = 290;
				this.match(LuauParser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varList1(): VarList1Context {
		let _localctx: VarList1Context = new VarList1Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, LuauParser.RULE_varList1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.var();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuauParser.COMMA) {
				{
				{
				this.state = 294;
				this.match(LuauParser.COMMA);
				this.state = 295;
				this.var();
				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameList(): NameListContext {
		let _localctx: NameListContext = new NameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LuauParser.RULE_nameList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(LuauParser.NAME);
			this.state = 306;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 302;
					this.match(LuauParser.COMMA);
					this.state = 303;
					this.match(LuauParser.NAME);
					}
					}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedNameList(): TypedNameListContext {
		let _localctx: TypedNameListContext = new TypedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LuauParser.RULE_typedNameList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.typedName();
			this.state = 314;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 310;
					this.match(LuauParser.COMMA);
					this.state = 311;
					this.typedName();
					}
					}
				}
				this.state = 316;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mixedNamesList(): MixedNamesListContext {
		let _localctx: MixedNamesListContext = new MixedNamesListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LuauParser.RULE_mixedNamesList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.optionalTypedName();
			this.state = 322;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 318;
					this.match(LuauParser.COMMA);
					this.state = 319;
					this.optionalTypedName();
					}
					}
				}
				this.state = 324;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allNamesList(): AllNamesListContext {
		let _localctx: AllNamesListContext = new AllNamesListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LuauParser.RULE_allNamesList);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this.nameList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 326;
				this.typedNameList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 327;
				this.mixedNamesList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allNamesListType(): AllNamesListTypeContext {
		let _localctx: AllNamesListTypeContext = new AllNamesListTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, LuauParser.RULE_allNamesListType);
		try {
			this.state = 332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.typedNameList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.typeList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LuauParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 334;
					this.expression();
					this.state = 335;
					this.match(LuauParser.COMMA);
					}
					}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 342;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression1(): Expression1Context {
		let _localctx: Expression1Context = new Expression1Context(this._ctx, this.state);
		this.enterRule(_localctx, 50, LuauParser.RULE_expression1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.NIL:
				{
				this.state = 344;
				this.match(LuauParser.NIL);
				}
				break;
			case LuauParser.FALSE:
				{
				this.state = 345;
				this.match(LuauParser.FALSE);
				}
				break;
			case LuauParser.TRUE:
				{
				this.state = 346;
				this.match(LuauParser.TRUE);
				}
				break;
			case LuauParser.NUMBER:
				{
				this.state = 347;
				this.match(LuauParser.NUMBER);
				}
				break;
			case LuauParser.STRING:
				{
				this.state = 348;
				this.match(LuauParser.STRING);
				}
				break;
			case LuauParser.VARIADIC_EXPRESSION:
				{
				this.state = 349;
				this.match(LuauParser.VARIADIC_EXPRESSION);
				}
				break;
			case LuauParser.FUNCTION:
				{
				this.state = 350;
				this.function();
				}
				break;
			case LuauParser.NAME:
			case LuauParser.OPEN_PARENTHESIS:
				{
				this.state = 351;
				this.prefixexp();
				}
				break;
			case LuauParser.OPEN_CURLY_BRACKETS:
				{
				this.state = 352;
				this.tableconstructor();
				}
				break;
			case LuauParser.NegativeSign:
			case LuauParser.UnaryOperations:
				{
				this.state = 353;
				_la = this._input.LA(1);
				if (!(_la === LuauParser.NegativeSign || _la === LuauParser.UnaryOperations)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 354;
				this.expression1();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 361;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 357;
					_la = this._input.LA(1);
					if (!(_la === LuauParser.NegativeSign || _la === LuauParser.BinaryOperations)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 358;
					this.expression1();
					}
					}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LuauParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.expression1();
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.DOUBLE_COLON) {
				{
				this.state = 365;
				this.match(LuauParser.DOUBLE_COLON);
				this.state = 366;
				this.type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, LuauParser.RULE_var);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.NAME:
				{
				this.state = 369;
				this.match(LuauParser.NAME);
				}
				break;
			case LuauParser.OPEN_PARENTHESIS:
				{
				this.state = 370;
				this.match(LuauParser.OPEN_PARENTHESIS);
				this.state = 371;
				this.expression();
				this.state = 372;
				this.match(LuauParser.CLOSE_PARENTHESIS);
				this.state = 373;
				this.varSuffix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 380;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 377;
					this.varSuffix();
					}
					}
				}
				this.state = 382;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixexp(): PrefixexpContext {
		let _localctx: PrefixexpContext = new PrefixexpContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, LuauParser.RULE_prefixexp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.varOrExp();
			this.state = 387;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 384;
					this.nameAndArgs();
					}
					}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalIteratorFunction(): GlobalIteratorFunctionContext {
		let _localctx: GlobalIteratorFunctionContext = new GlobalIteratorFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, LuauParser.RULE_globalIteratorFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(LuauParser.NAME);
			this.state = 391;
			this.args();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functioncall(): FunctioncallContext {
		let _localctx: FunctioncallContext = new FunctioncallContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, LuauParser.RULE_functioncall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this.varOrExp();
			this.state = 395;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 394;
					this.nameAndArgs();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varOrExp(): VarOrExpContext {
		let _localctx: VarOrExpContext = new VarOrExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, LuauParser.RULE_varOrExp);
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.var();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
				this.match(LuauParser.OPEN_PARENTHESIS);
				this.state = 401;
				this.expression();
				this.state = 402;
				this.match(LuauParser.CLOSE_PARENTHESIS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameAndArgs(): NameAndArgsContext {
		let _localctx: NameAndArgsContext = new NameAndArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, LuauParser.RULE_nameAndArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.COLON) {
				{
				this.state = 406;
				this.match(LuauParser.COLON);
				this.state = 407;
				this.match(LuauParser.NAME);
				}
			}

			this.state = 410;
			this.args();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varSuffix(): VarSuffixContext {
		let _localctx: VarSuffixContext = new VarSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, LuauParser.RULE_varSuffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuauParser.STRING || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (LuauParser.COLON - 50)) | (1 << (LuauParser.OPEN_PARENTHESIS - 50)) | (1 << (LuauParser.OPEN_CURLY_BRACKETS - 50)))) !== 0)) {
				{
				{
				this.state = 412;
				this.nameAndArgs();
				}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.OPEN_SQUARE_BRACKETS:
				{
				this.state = 418;
				this.match(LuauParser.OPEN_SQUARE_BRACKETS);
				this.state = 419;
				this.expression();
				this.state = 420;
				this.match(LuauParser.CLOSE_SQUARE_BRACKETS);
				}
				break;
			case LuauParser.DOT:
				{
				this.state = 422;
				this.match(LuauParser.DOT);
				this.state = 423;
				this.match(LuauParser.NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, LuauParser.RULE_args);
		let _la: number;
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.OPEN_PARENTHESIS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.match(LuauParser.OPEN_PARENTHESIS);
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.STRING) | (1 << LuauParser.NUMBER) | (1 << LuauParser.NIL) | (1 << LuauParser.FALSE) | (1 << LuauParser.TRUE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (LuauParser.FUNCTION - 34)) | (1 << (LuauParser.NAME - 34)) | (1 << (LuauParser.OPEN_PARENTHESIS - 34)) | (1 << (LuauParser.OPEN_CURLY_BRACKETS - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (LuauParser.VARIADIC_EXPRESSION - 67)) | (1 << (LuauParser.NegativeSign - 67)) | (1 << (LuauParser.UnaryOperations - 67)))) !== 0)) {
					{
					this.state = 427;
					this.expressionList();
					}
				}

				this.state = 430;
				this.match(LuauParser.CLOSE_PARENTHESIS);
				}
				break;
			case LuauParser.OPEN_CURLY_BRACKETS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 431;
				this.tableconstructor();
				}
				break;
			case LuauParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 432;
				this.match(LuauParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, LuauParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(LuauParser.FUNCTION);
			this.state = 436;
			this.funcbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcbody(): FuncbodyContext {
		let _localctx: FuncbodyContext = new FuncbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, LuauParser.RULE_funcbody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.OPEN_ANGLE_BRACKET) {
				{
				this.state = 438;
				this.match(LuauParser.OPEN_ANGLE_BRACKET);
				this.state = 439;
				this.genericTypeList();
				this.state = 440;
				this.match(LuauParser.CLOSE_ANGLE_BRACKET);
				}
			}

			this.state = 444;
			this.functionParameters();
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.COLON) {
				{
				this.state = 445;
				this.match(LuauParser.COLON);
				this.state = 446;
				this.functionReturns();
				}
			}

			this.state = 452;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 449;
					this.match(LuauParser.NEWLINE);
					}
					}
				}
				this.state = 454;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 455;
			this.block();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuauParser.NEWLINE) {
				{
				{
				this.state = 456;
				this.match(LuauParser.NEWLINE);
				}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 462;
			this.match(LuauParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParameters(): FunctionParametersContext {
		let _localctx: FunctionParametersContext = new FunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, LuauParser.RULE_functionParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.match(LuauParser.OPEN_PARENTHESIS);
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.NAME || _la === LuauParser.VARIADIC_EXPRESSION) {
				{
				this.state = 465;
				this.parameterList();
				}
			}

			this.state = 468;
			this.match(LuauParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, LuauParser.RULE_parameterList);
		let _la: number;
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 470;
				this.allNamesList();
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuauParser.COMMA) {
					{
					this.state = 471;
					this.match(LuauParser.COMMA);
					this.state = 472;
					this.variadicParameter();
					}
				}

				}
				break;
			case LuauParser.VARIADIC_EXPRESSION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 475;
				this.variadicParameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variadicParameter(): VariadicParameterContext {
		let _localctx: VariadicParameterContext = new VariadicParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, LuauParser.RULE_variadicParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(LuauParser.VARIADIC_EXPRESSION);
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.COLON) {
				{
				this.state = 479;
				this.match(LuauParser.COLON);
				this.state = 480;
				this.type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionParametersType(): FunctionParametersTypeContext {
		let _localctx: FunctionParametersTypeContext = new FunctionParametersTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, LuauParser.RULE_functionParametersType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(LuauParser.OPEN_PARENTHESIS);
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.STRING) | (1 << LuauParser.NIL) | (1 << LuauParser.FALSE) | (1 << LuauParser.TRUE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (LuauParser.NAME - 35)) | (1 << (LuauParser.TYPEOF - 35)) | (1 << (LuauParser.OPEN_PARENTHESIS - 35)) | (1 << (LuauParser.OPEN_ANGLE_BRACKET - 35)) | (1 << (LuauParser.OPEN_CURLY_BRACKETS - 35)))) !== 0) || _la === LuauParser.VARIADIC_EXPRESSION) {
				{
				this.state = 484;
				this.parameterListType();
				}
			}

			this.state = 487;
			this.match(LuauParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterListType(): ParameterListTypeContext {
		let _localctx: ParameterListTypeContext = new ParameterListTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, LuauParser.RULE_parameterListType);
		let _la: number;
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.allNamesListType();
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuauParser.COMMA) {
					{
					this.state = 490;
					this.match(LuauParser.COMMA);
					this.state = 491;
					this.variadicParameterType();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.variadicParameterType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variadicParameterType(): VariadicParameterTypeContext {
		let _localctx: VariadicParameterTypeContext = new VariadicParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, LuauParser.RULE_variadicParameterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(LuauParser.VARIADIC_EXPRESSION);
			this.state = 498;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionReturns(): FunctionReturnsContext {
		let _localctx: FunctionReturnsContext = new FunctionReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, LuauParser.RULE_functionReturns);
		let _la: number;
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 500;
				this.match(LuauParser.OPEN_PARENTHESIS);
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.STRING) | (1 << LuauParser.NIL) | (1 << LuauParser.FALSE) | (1 << LuauParser.TRUE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (LuauParser.NAME - 35)) | (1 << (LuauParser.TYPEOF - 35)) | (1 << (LuauParser.OPEN_PARENTHESIS - 35)) | (1 << (LuauParser.OPEN_ANGLE_BRACKET - 35)) | (1 << (LuauParser.OPEN_CURLY_BRACKETS - 35)))) !== 0) || _la === LuauParser.VARIADIC_EXPRESSION) {
					{
					this.state = 501;
					this.returnList();
					}
				}

				this.state = 504;
				this.match(LuauParser.CLOSE_PARENTHESIS);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.type();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 506;
				this.variadicReturn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnList(): ReturnListContext {
		let _localctx: ReturnListContext = new ReturnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, LuauParser.RULE_returnList);
		let _la: number;
		try {
			this.state = 515;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.typeList();
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuauParser.COMMA) {
					{
					this.state = 510;
					this.match(LuauParser.COMMA);
					this.state = 511;
					this.variadicReturn();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 514;
				this.variadicReturn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variadicReturn(): VariadicReturnContext {
		let _localctx: VariadicReturnContext = new VariadicReturnContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, LuauParser.RULE_variadicReturn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(LuauParser.VARIADIC_EXPRESSION);
			this.state = 518;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableconstructor(): TableconstructorContext {
		let _localctx: TableconstructorContext = new TableconstructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, LuauParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.match(LuauParser.OPEN_CURLY_BRACKETS);
			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.STRING) | (1 << LuauParser.NUMBER) | (1 << LuauParser.NIL) | (1 << LuauParser.FALSE) | (1 << LuauParser.TRUE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (LuauParser.FUNCTION - 34)) | (1 << (LuauParser.NAME - 34)) | (1 << (LuauParser.OPEN_PARENTHESIS - 34)) | (1 << (LuauParser.OPEN_SQUARE_BRACKETS - 34)) | (1 << (LuauParser.OPEN_CURLY_BRACKETS - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (LuauParser.VARIADIC_EXPRESSION - 67)) | (1 << (LuauParser.NegativeSign - 67)) | (1 << (LuauParser.UnaryOperations - 67)))) !== 0)) {
				{
				this.state = 521;
				this.fieldList();
				}
			}

			this.state = 524;
			this.match(LuauParser.CLOSE_CURLY_BRACKETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, LuauParser.RULE_fieldList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.field();
			this.state = 532;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 527;
					this.fieldsep();
					this.state = 528;
					this.field();
					}
					}
				}
				this.state = 534;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.SEMI_COLON || _la === LuauParser.COMMA) {
				{
				this.state = 535;
				this.fieldsep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, LuauParser.RULE_field);
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 538;
				this.match(LuauParser.OPEN_SQUARE_BRACKETS);
				this.state = 539;
				this.expression();
				this.state = 540;
				this.match(LuauParser.CLOSE_SQUARE_BRACKETS);
				this.state = 541;
				this.match(LuauParser.EQUAL);
				this.state = 542;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				this.match(LuauParser.NAME);
				this.state = 545;
				this.match(LuauParser.EQUAL);
				this.state = 546;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 547;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldsep(): FieldsepContext {
		let _localctx: FieldsepContext = new FieldsepContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, LuauParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			_la = this._input.LA(1);
			if (!(_la === LuauParser.SEMI_COLON || _la === LuauParser.COMMA)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleType(): SimpleTypeContext {
		let _localctx: SimpleTypeContext = new SimpleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, LuauParser.RULE_simpleType);
		let _la: number;
		try {
			this.state = 577;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 552;
				this.match(LuauParser.NIL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 553;
				this.singletonType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 554;
				this.match(LuauParser.NAME);
				this.state = 557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuauParser.DOT) {
					{
					this.state = 555;
					this.match(LuauParser.DOT);
					this.state = 556;
					this.match(LuauParser.NAME);
					}
				}

				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuauParser.OPEN_ANGLE_BRACKET) {
					{
					this.state = 559;
					this.match(LuauParser.OPEN_ANGLE_BRACKET);
					this.state = 561;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.STRING) | (1 << LuauParser.NIL) | (1 << LuauParser.FALSE) | (1 << LuauParser.TRUE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (LuauParser.NAME - 35)) | (1 << (LuauParser.TYPEOF - 35)) | (1 << (LuauParser.OPEN_PARENTHESIS - 35)) | (1 << (LuauParser.OPEN_ANGLE_BRACKET - 35)) | (1 << (LuauParser.OPEN_CURLY_BRACKETS - 35)))) !== 0) || _la === LuauParser.VARIADIC_EXPRESSION) {
						{
						this.state = 560;
						this.typeParams();
						}
					}

					this.state = 563;
					this.match(LuauParser.CLOSE_ANGLE_BRACKET);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 566;
				this.match(LuauParser.TYPEOF);
				this.state = 567;
				this.match(LuauParser.OPEN_PARENTHESIS);
				this.state = 568;
				this.expression();
				this.state = 569;
				this.match(LuauParser.CLOSE_PARENTHESIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 571;
				this.tableType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 572;
				this.functionType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 573;
				this.match(LuauParser.OPEN_PARENTHESIS);
				this.state = 574;
				this.type();
				this.state = 575;
				this.match(LuauParser.CLOSE_PARENTHESIS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singletonType(): SingletonTypeContext {
		let _localctx: SingletonTypeContext = new SingletonTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, LuauParser.RULE_singletonType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.STRING) | (1 << LuauParser.FALSE) | (1 << LuauParser.TRUE))) !== 0) || _la === LuauParser.NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unionSuffix(): UnionSuffixContext {
		let _localctx: UnionSuffixContext = new UnionSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, LuauParser.RULE_unionSuffix);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 581;
					this.match(LuauParser.UNION);
					this.state = 582;
					this.simpleType();
					this.state = 584;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
					case 1:
						{
						this.state = 583;
						this.match(LuauParser.OPTIONAL);
						}
						break;
					}
					}
					}
				}
				this.state = 590;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intersectionSuffix(): IntersectionSuffixContext {
		let _localctx: IntersectionSuffixContext = new IntersectionSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, LuauParser.RULE_intersectionSuffix);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 591;
					this.match(LuauParser.INTERSECTION);
					this.state = 592;
					this.simpleType();
					}
					}
				}
				this.state = 597;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, LuauParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.simpleType();
			this.state = 600;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 599;
				this.match(LuauParser.OPTIONAL);
				}
				break;
			}
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 602;
				this.unionSuffix();
				}
				break;

			case 2:
				{
				this.state = 603;
				this.intersectionSuffix();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericTypePackParameter(): GenericTypePackParameterContext {
		let _localctx: GenericTypePackParameterContext = new GenericTypePackParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, LuauParser.RULE_genericTypePackParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this.match(LuauParser.NAME);
			this.state = 607;
			this.match(LuauParser.VARIADIC_EXPRESSION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericTypeList(): GenericTypeListContext {
		let _localctx: GenericTypeListContext = new GenericTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, LuauParser.RULE_genericTypeList);
		try {
			let _alt: number;
			this.state = 622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 609;
				this.match(LuauParser.NAME);
				this.state = 612;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 610;
					this.match(LuauParser.COMMA);
					this.state = 611;
					this.genericTypeList();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 614;
				this.genericTypePackParameter();
				this.state = 619;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 615;
						this.match(LuauParser.COMMA);
						this.state = 616;
						this.genericTypePackParameter();
						}
						}
					}
					this.state = 621;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericTypePackParameterWithDefault(): GenericTypePackParameterWithDefaultContext {
		let _localctx: GenericTypePackParameterWithDefaultContext = new GenericTypePackParameterWithDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, LuauParser.RULE_genericTypePackParameterWithDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 624;
			this.match(LuauParser.NAME);
			this.state = 625;
			this.match(LuauParser.VARIADIC_EXPRESSION);
			this.state = 626;
			this.match(LuauParser.EQUAL);
			this.state = 630;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.OPEN_PARENTHESIS:
				{
				this.state = 627;
				this.typePack();
				}
				break;
			case LuauParser.VARIADIC_EXPRESSION:
				{
				this.state = 628;
				this.variadicTypePack();
				}
				break;
			case LuauParser.NAME:
				{
				this.state = 629;
				this.genericTypePack();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericTypeListWithDefaults(): GenericTypeListWithDefaultsContext {
		let _localctx: GenericTypeListWithDefaultsContext = new GenericTypeListWithDefaultsContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, LuauParser.RULE_genericTypeListWithDefaults);
		let _la: number;
		try {
			let _alt: number;
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 632;
				this.genericTypeList();
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuauParser.COMMA) {
					{
					{
					this.state = 633;
					this.match(LuauParser.COMMA);
					this.state = 634;
					this.genericTypePackParameterWithDefault();
					}
					}
					this.state = 639;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 640;
				this.match(LuauParser.NAME);
				this.state = 645;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 641;
						this.match(LuauParser.COMMA);
						this.state = 642;
						this.match(LuauParser.NAME);
						}
						}
					}
					this.state = 647;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				}
				this.state = 654;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 648;
						this.match(LuauParser.COMMA);
						this.state = 649;
						this.match(LuauParser.NAME);
						this.state = 650;
						this.match(LuauParser.EQUAL);
						this.state = 651;
						this.type();
						}
						}
					}
					this.state = 656;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				}
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuauParser.COMMA) {
					{
					{
					this.state = 657;
					this.match(LuauParser.COMMA);
					this.state = 658;
					this.genericTypePackParameterWithDefault();
					}
					}
					this.state = 663;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 664;
				this.match(LuauParser.NAME);
				this.state = 665;
				this.match(LuauParser.EQUAL);
				this.state = 666;
				this.type();
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuauParser.COMMA) {
					{
					{
					this.state = 667;
					this.match(LuauParser.COMMA);
					this.state = 668;
					this.genericTypePackParameterWithDefault();
					}
					}
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 674;
				this.genericTypePackParameterWithDefault();
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuauParser.COMMA) {
					{
					{
					this.state = 675;
					this.match(LuauParser.COMMA);
					this.state = 676;
					this.genericTypePackParameterWithDefault();
					}
					}
					this.state = 681;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, LuauParser.RULE_typeList);
		try {
			this.state = 691;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.STRING:
			case LuauParser.NIL:
			case LuauParser.FALSE:
			case LuauParser.TRUE:
			case LuauParser.NAME:
			case LuauParser.TYPEOF:
			case LuauParser.OPEN_PARENTHESIS:
			case LuauParser.OPEN_ANGLE_BRACKET:
			case LuauParser.OPEN_CURLY_BRACKETS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 684;
				this.type();
				this.state = 687;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 685;
					this.match(LuauParser.COMMA);
					this.state = 686;
					this.typeList();
					}
					break;
				}
				}
				break;
			case LuauParser.VARIADIC_EXPRESSION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 689;
				this.match(LuauParser.VARIADIC_EXPRESSION);
				this.state = 690;
				this.type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParams(): TypeParamsContext {
		let _localctx: TypeParamsContext = new TypeParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, LuauParser.RULE_typeParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 693;
				this.type();
				}
				break;

			case 2:
				{
				this.state = 694;
				this.typePack();
				}
				break;

			case 3:
				{
				this.state = 695;
				this.variadicTypePack();
				}
				break;

			case 4:
				{
				this.state = 696;
				this.genericTypePack();
				}
				break;
			}
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.COMMA) {
				{
				this.state = 699;
				this.match(LuauParser.COMMA);
				this.state = 700;
				this.typeParams();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePack(): TypePackContext {
		let _localctx: TypePackContext = new TypePackContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, LuauParser.RULE_typePack);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(LuauParser.OPEN_PARENTHESIS);
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuauParser.STRING) | (1 << LuauParser.NIL) | (1 << LuauParser.FALSE) | (1 << LuauParser.TRUE))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (LuauParser.NAME - 35)) | (1 << (LuauParser.TYPEOF - 35)) | (1 << (LuauParser.OPEN_PARENTHESIS - 35)) | (1 << (LuauParser.OPEN_ANGLE_BRACKET - 35)) | (1 << (LuauParser.OPEN_CURLY_BRACKETS - 35)))) !== 0) || _la === LuauParser.VARIADIC_EXPRESSION) {
				{
				this.state = 704;
				this.typeList();
				}
			}

			this.state = 707;
			this.match(LuauParser.CLOSE_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericTypePack(): GenericTypePackContext {
		let _localctx: GenericTypePackContext = new GenericTypePackContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, LuauParser.RULE_genericTypePack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.match(LuauParser.NAME);
			this.state = 710;
			this.match(LuauParser.VARIADIC_EXPRESSION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variadicTypePack(): VariadicTypePackContext {
		let _localctx: VariadicTypePackContext = new VariadicTypePackContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, LuauParser.RULE_variadicTypePack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(LuauParser.VARIADIC_EXPRESSION);
			this.state = 713;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, LuauParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.OPEN_ANGLE_BRACKET) {
				{
				this.state = 715;
				this.match(LuauParser.OPEN_ANGLE_BRACKET);
				this.state = 716;
				this.genericTypeList();
				this.state = 717;
				this.match(LuauParser.CLOSE_ANGLE_BRACKET);
				}
			}

			this.state = 721;
			this.functionParametersType();
			this.state = 722;
			this.match(LuauParser.ARROW);
			this.state = 723;
			this.functionReturns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableIndexer(): TableIndexerContext {
		let _localctx: TableIndexerContext = new TableIndexerContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, LuauParser.RULE_tableIndexer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.match(LuauParser.OPEN_SQUARE_BRACKETS);
			this.state = 726;
			this.type();
			this.state = 727;
			this.match(LuauParser.CLOSE_SQUARE_BRACKETS);
			this.state = 728;
			this.match(LuauParser.COLON);
			this.state = 729;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let _localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, LuauParser.RULE_tableProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(LuauParser.NAME);
			this.state = 732;
			this.match(LuauParser.COLON);
			this.state = 733;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropOrIndexer(): TablePropOrIndexerContext {
		let _localctx: TablePropOrIndexerContext = new TablePropOrIndexerContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, LuauParser.RULE_tablePropOrIndexer);
		try {
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuauParser.OPEN_SQUARE_BRACKETS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 735;
				this.tableIndexer();
				}
				break;
			case LuauParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.tableProperty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propList(): PropListContext {
		let _localctx: PropListContext = new PropListContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, LuauParser.RULE_propList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.tablePropOrIndexer();
			this.state = 745;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 740;
					this.fieldsep();
					this.state = 741;
					this.tablePropOrIndexer();
					}
					}
				}
				this.state = 747;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.SEMI_COLON || _la === LuauParser.COMMA) {
				{
				this.state = 748;
				this.fieldsep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableType(): TableTypeContext {
		let _localctx: TableTypeContext = new TableTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, LuauParser.RULE_tableType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.match(LuauParser.OPEN_CURLY_BRACKETS);
			this.state = 754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 752;
				this.type();
				}
				break;

			case 2:
				{
				this.state = 753;
				this.propList();
				}
				break;
			}
			this.state = 756;
			this.match(LuauParser.CLOSE_CURLY_BRACKETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedName(): TypedNameContext {
		let _localctx: TypedNameContext = new TypedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, LuauParser.RULE_typedName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.match(LuauParser.NAME);
			this.state = 759;
			this.match(LuauParser.COLON);
			this.state = 760;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalTypedName(): OptionalTypedNameContext {
		let _localctx: OptionalTypedNameContext = new OptionalTypedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, LuauParser.RULE_optionalTypedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			this.match(LuauParser.NAME);
			this.state = 765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuauParser.COLON) {
				{
				this.state = 763;
				this.match(LuauParser.COLON);
				this.state = 764;
				this.type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, LuauParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			_la = this._input.LA(1);
			if (!(_la === LuauParser.MULTI_LINE_COMMENT || _la === LuauParser.SINGLE_LINE_COMMENT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03I\u0304\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x05\x03\x9A\n\x03\x07\x03\x9C\n\x03\f\x03\x0E\x03\x9F\v\x03\x03\x03" +
		"\x03\x03\x05\x03\xA3\n\x03\x05\x03\xA5\n\x03\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05\xB7\n\x05\x03\x06\x03\x06\x05\x06" +
		"\xBB\n\x06\x03\x06\x05\x06\xBE\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x07\f\xDE\n\f\f\f\x0E\f\xE1\v\f\x03\f\x03\f\x05\f\xE5\n\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xF1\n\r" +
		"\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xFA\n\x0E" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u010C" +
		"\n\x11\x03\x12\x05\x12\u010F\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u0117\n\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x07\x13\u011F\n\x13\f\x13\x0E\x13\u0122\v\x13\x03\x13\x03\x13" +
		"\x05\x13\u0126\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\u012B\n\x14\f\x14" +
		"\x0E\x14\u012E\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0133\n\x15\f\x15" +
		"\x0E\x15\u0136\v\x15\x03\x16\x03\x16\x03\x16\x07\x16\u013B\n\x16\f\x16" +
		"\x0E\x16\u013E\v\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0143\n\x17\f\x17" +
		"\x0E\x17\u0146\v\x17\x03\x18\x03\x18\x03\x18\x05\x18\u014B\n\x18\x03\x19" +
		"\x03\x19\x05\x19\u014F\n\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0154\n\x1A" +
		"\f\x1A\x0E\x1A\u0157\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0166" +
		"\n\x1B\x03\x1B\x03\x1B\x07\x1B\u016A\n\x1B\f\x1B\x0E\x1B\u016D\v\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0172\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x05\x1D\u017A\n\x1D\x03\x1D\x07\x1D\u017D\n\x1D\f\x1D" +
		"\x0E\x1D\u0180\v\x1D\x03\x1E\x03\x1E\x07\x1E\u0184\n\x1E\f\x1E\x0E\x1E" +
		"\u0187\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x06 \u018E\n \r \x0E \u018F" +
		"\x03!\x03!\x03!\x03!\x03!\x05!\u0197\n!\x03\"\x03\"\x05\"\u019B\n\"\x03" +
		"\"\x03\"\x03#\x07#\u01A0\n#\f#\x0E#\u01A3\v#\x03#\x03#\x03#\x03#\x03#" +
		"\x03#\x05#\u01AB\n#\x03$\x03$\x05$\u01AF\n$\x03$\x03$\x03$\x05$\u01B4" +
		"\n$\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x05&\u01BD\n&\x03&\x03&\x03&\x05" +
		"&\u01C2\n&\x03&\x07&\u01C5\n&\f&\x0E&\u01C8\v&\x03&\x03&\x07&\u01CC\n" +
		"&\f&\x0E&\u01CF\v&\x03&\x03&\x03\'\x03\'\x05\'\u01D5\n\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x05(\u01DC\n(\x03(\x05(\u01DF\n(\x03)\x03)\x03)\x05)\u01E4" +
		"\n)\x03*\x03*\x05*\u01E8\n*\x03*\x03*\x03+\x03+\x03+\x05+\u01EF\n+\x03" +
		"+\x05+\u01F2\n+\x03,\x03,\x03,\x03-\x03-\x05-\u01F9\n-\x03-\x03-\x03-" +
		"\x05-\u01FE\n-\x03.\x03.\x03.\x05.\u0203\n.\x03.\x05.\u0206\n.\x03/\x03" +
		"/\x03/\x030\x030\x050\u020D\n0\x030\x030\x031\x031\x031\x031\x071\u0215" +
		"\n1\f1\x0E1\u0218\v1\x031\x051\u021B\n1\x032\x032\x032\x032\x032\x032" +
		"\x032\x032\x032\x032\x052\u0227\n2\x033\x033\x034\x034\x034\x034\x034" +
		"\x054\u0230\n4\x034\x034\x054\u0234\n4\x034\x054\u0237\n4\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x054\u0244\n4\x035\x035\x03" +
		"6\x036\x036\x056\u024B\n6\x076\u024D\n6\f6\x0E6\u0250\v6\x037\x037\x07" +
		"7\u0254\n7\f7\x0E7\u0257\v7\x038\x038\x058\u025B\n8\x038\x038\x058\u025F" +
		"\n8\x039\x039\x039\x03:\x03:\x03:\x05:\u0267\n:\x03:\x03:\x03:\x07:\u026C" +
		"\n:\f:\x0E:\u026F\v:\x05:\u0271\n:\x03;\x03;\x03;\x03;\x03;\x03;\x05;" +
		"\u0279\n;\x03<\x03<\x03<\x07<\u027E\n<\f<\x0E<\u0281\v<\x03<\x03<\x03" +
		"<\x07<\u0286\n<\f<\x0E<\u0289\v<\x03<\x03<\x03<\x03<\x07<\u028F\n<\f<" +
		"\x0E<\u0292\v<\x03<\x03<\x07<\u0296\n<\f<\x0E<\u0299\v<\x03<\x03<\x03" +
		"<\x03<\x03<\x07<\u02A0\n<\f<\x0E<\u02A3\v<\x03<\x03<\x03<\x07<\u02A8\n" +
		"<\f<\x0E<\u02AB\v<\x05<\u02AD\n<\x03=\x03=\x03=\x05=\u02B2\n=\x03=\x03" +
		"=\x05=\u02B6\n=\x03>\x03>\x03>\x03>\x05>\u02BC\n>\x03>\x03>\x05>\u02C0" +
		"\n>\x03?\x03?\x05?\u02C4\n?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x03" +
		"B\x03B\x03B\x03B\x05B\u02D2\nB\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03D\x03D\x03D\x03D\x03E\x03E\x05E\u02E4\nE\x03F\x03F\x03" +
		"F\x03F\x07F\u02EA\nF\fF\x0EF\u02ED\vF\x03F\x05F\u02F0\nF\x03G\x03G\x03" +
		"G\x05G\u02F5\nG\x03G\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x05I\u0300" +
		"\nI\x03J\x03J\x03J\x02\x02\x02K\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02" +
		"r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88" +
		"\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x02\x07\x03\x02GH\x04\x02" +
		"GGII\x04\x023388\x05\x02\x03\x03\x14\x15%%\x03\x02/0\x02\u0333\x02\x94" +
		"\x03\x02\x02\x02\x04\x9D\x03\x02\x02\x02\x06\xA6\x03\x02\x02\x02\b\xB6" +
		"\x03\x02\x02\x02\n\xBD\x03\x02\x02\x02\f\xBF\x03\x02\x02\x02\x0E\xC3\x03" +
		"\x02\x02\x02\x10\xC7\x03\x02\x02\x02\x12\xCB\x03\x02\x02\x02\x14\xCF\x03" +
		"\x02\x02\x02\x16\xD4\x03\x02\x02\x02\x18\xE8\x03\x02\x02\x02\x1A\xF4\x03" +
		"\x02\x02\x02\x1C\xFD\x03\x02\x02\x02\x1E\u0101\x03\x02\x02\x02 \u0106" +
		"\x03\x02\x02\x02\"\u010E\x03\x02\x02\x02$\u011B\x03\x02\x02\x02&\u0127" +
		"\x03\x02\x02\x02(\u012F\x03\x02\x02\x02*\u0137\x03\x02\x02\x02,\u013F" +
		"\x03\x02\x02\x02.\u014A\x03\x02\x02\x020\u014E\x03\x02\x02\x022\u0155" +
		"\x03\x02\x02\x024\u0165\x03\x02\x02\x026\u016E\x03\x02\x02\x028\u0179" +
		"\x03\x02\x02\x02:\u0181\x03\x02\x02\x02<\u0188\x03\x02\x02\x02>\u018B" +
		"\x03\x02\x02\x02@\u0196\x03\x02\x02\x02B\u019A\x03\x02\x02\x02D\u01A1" +
		"\x03\x02\x02\x02F\u01B3\x03\x02\x02\x02H\u01B5\x03\x02\x02\x02J\u01BC" +
		"\x03\x02\x02\x02L\u01D2\x03\x02\x02\x02N\u01DE\x03\x02\x02\x02P\u01E0" +
		"\x03\x02\x02\x02R\u01E5\x03\x02\x02\x02T\u01F1\x03\x02\x02\x02V\u01F3" +
		"\x03\x02\x02\x02X\u01FD\x03\x02\x02\x02Z\u0205\x03\x02\x02\x02\\\u0207" +
		"\x03\x02\x02\x02^\u020A\x03\x02\x02\x02`\u0210\x03\x02\x02\x02b\u0226" +
		"\x03\x02\x02\x02d\u0228\x03\x02\x02\x02f\u0243\x03\x02\x02\x02h\u0245" +
		"\x03\x02\x02\x02j\u024E\x03\x02\x02\x02l\u0255\x03\x02\x02\x02n\u0258" +
		"\x03\x02\x02\x02p\u0260\x03\x02\x02\x02r\u0270\x03\x02\x02\x02t\u0272" +
		"\x03\x02\x02\x02v\u02AC\x03\x02\x02\x02x\u02B5\x03\x02\x02\x02z\u02BB" +
		"\x03\x02\x02\x02|\u02C1\x03\x02\x02\x02~\u02C7\x03\x02\x02\x02\x80\u02CA" +
		"\x03\x02\x02\x02\x82\u02D1\x03\x02\x02\x02\x84\u02D7\x03\x02\x02\x02\x86" +
		"\u02DD\x03\x02\x02\x02\x88\u02E3\x03\x02\x02\x02\x8A\u02E5\x03\x02\x02" +
		"\x02\x8C\u02F1\x03\x02\x02\x02\x8E\u02F8\x03\x02\x02\x02\x90\u02FC\x03" +
		"\x02\x02\x02\x92\u0301\x03\x02\x02\x02\x94\x95\x05\x04\x03\x02\x95\x96" +
		"\x07\x02\x02\x03\x96\x03\x03\x02\x02\x02\x97\x99\x05\b\x05\x02\x98\x9A" +
		"\x073\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C" +
		"\x03\x02\x02\x02\x9B\x97\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B" +
		"\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA4\x03\x02\x02\x02\x9F\x9D" +
		"\x03\x02\x02\x02\xA0\xA2\x05\n\x06\x02\xA1\xA3\x073\x02\x02\xA2\xA1\x03" +
		"\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA0\x03" +
		"\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x05\x03\x02\x02\x02\xA6\xA7\x05" +
		"\x04\x03\x02\xA7\x07\x03\x02\x02\x02\xA8\xB7\x05\f\x07\x02\xA9\xB7\x05" +
		"\x0E\b\x02\xAA\xB7\x05> \x02\xAB\xB7\x05\x10\t\x02\xAC\xB7\x05\x12\n\x02" +
		"\xAD\xB7\x05\x14\v\x02\xAE\xB7\x05\x16\f\x02\xAF\xB7\x05\x18\r\x02\xB0" +
		"\xB7\x05\x1A\x0E\x02\xB1\xB7\x05\x1C\x0F\x02\xB2\xB7\x05\x1E\x10\x02\xB3" +
		"\xB7\x05 \x11\x02\xB4\xB7\x05\"\x12\x02\xB5\xB7\x05\x92J\x02\xB6\xA8\x03" +
		"\x02\x02\x02\xB6\xA9\x03\x02\x02\x02\xB6\xAA\x03\x02\x02\x02\xB6\xAB\x03" +
		"\x02\x02\x02\xB6\xAC\x03\x02\x02\x02\xB6\xAD\x03\x02\x02\x02\xB6\xAE\x03" +
		"\x02\x02\x02\xB6\xAF\x03\x02\x02\x02\xB6\xB0\x03\x02\x02\x02\xB6\xB1\x03" +
		"\x02\x02\x02\xB6\xB2\x03\x02\x02\x02\xB6\xB3\x03\x02\x02\x02\xB6\xB4\x03" +
		"\x02\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\t\x03\x02\x02\x02\xB8\xBA\x07" +
		"\x16\x02\x02\xB9\xBB\x052\x1A\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03" +
		"\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBE\x07\x18\x02\x02\xBD\xB8\x03" +
		"\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\v\x03\x02\x02\x02\xBF\xC0\x05" +
		"&\x14\x02\xC0\xC1\x076\x02\x02\xC1\xC2\x052\x1A\x02\xC2\r\x03\x02\x02" +
		"\x02\xC3\xC4\x058\x1D\x02\xC4\xC5\x07F\x02\x02\xC5\xC6\x056\x1C\x02\xC6" +
		"\x0F\x03\x02\x02\x02\xC7\xC8\x07\x1E\x02\x02\xC8\xC9\x05\x06\x04\x02\xC9" +
		"\xCA\x07\x17\x02\x02\xCA\x11\x03\x02\x02\x02\xCB\xCC\x07\x1D\x02\x02\xCC" +
		"\xCD\x056\x1C\x02\xCD\xCE\x05\x10\t\x02\xCE\x13\x03\x02\x02\x02\xCF\xD0" +
		"\x07!\x02\x02\xD0\xD1\x05\x06\x04\x02\xD1\xD2\x07\"\x02\x02\xD2\xD3\x05" +
		"6\x1C\x02\xD3\x15\x03\x02\x02\x02\xD4\xD5\x07\x19\x02\x02\xD5\xD6\x05" +
		"6\x1C\x02\xD6\xD7\x07\x1B\x02\x02\xD7\xDF\x05\x06\x04\x02\xD8\xD9\x07" +
		"\x1A\x02\x02\xD9\xDA\x056\x1C\x02\xDA\xDB\x07\x1B\x02\x02\xDB\xDC\x05" +
		"\x06\x04\x02\xDC\xDE\x03\x02\x02\x02\xDD\xD8\x03\x02\x02\x02\xDE\xE1\x03" +
		"\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE4\x03" +
		"\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE3\x07\x1C\x02\x02\xE3\xE5\x05" +
		"\x06\x04\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x03" +
		"\x02\x02\x02\xE6\xE7\x07\x17\x02\x02\xE7\x17\x03\x02\x02\x02\xE8\xE9\x07" +
		"\x1F\x02\x02\xE9\xEA\x05\x90I\x02\xEA\xEB\x076\x02\x02\xEB\xEC\x056\x1C" +
		"\x02\xEC\xED\x078\x02\x02\xED\xF0\x056\x1C\x02\xEE\xEF\x078\x02\x02\xEF" +
		"\xF1\x056\x1C\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1" +
		"\xF2\x03\x02\x02\x02\xF2\xF3\x05\x10\t\x02\xF3\x19\x03\x02\x02\x02\xF4" +
		"\xF5\x07\x1F\x02\x02\xF5\xF6\x05.\x18\x02\xF6\xF9\x07 \x02\x02\xF7\xFA" +
		"\x05<\x1F\x02\xF8\xFA\x052\x1A\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03" +
		"\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x05\x10\t\x02\xFC\x1B\x03" +
		"\x02\x02\x02\xFD\xFE\x07$\x02\x02\xFE\xFF\x05$\x13\x02\xFF\u0100\x05J" +
		"&\x02\u0100\x1D\x03\x02\x02\x02\u0101\u0102\x07#\x02\x02\u0102\u0103\x07" +
		"$\x02\x02\u0103\u0104\x07%\x02\x02\u0104\u0105\x05J&\x02\u0105\x1F\x03" +
		"\x02\x02\x02\u0106\u0107\x07#\x02\x02\u0107\u010B\x05.\x18\x02\u0108\u0109" +
		"\x076\x02\x02\u0109\u010C\x052\x1A\x02\u010A\u010C\x05\x10\t\x02\u010B" +
		"\u0108\x03\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C!\x03\x02\x02\x02\u010D\u010F\x07(\x02\x02\u010E\u010D\x03" +
		"\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u0111\x07&\x02\x02\u0111\u0116\x07%\x02\x02\u0112\u0113\x07;\x02\x02" +
		"\u0113\u0114\x05v<\x02\u0114\u0115\x07<\x02\x02\u0115\u0117\x03\x02\x02" +
		"\x02\u0116\u0112\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118" +
		"\x03\x02\x02\x02\u0118\u0119\x076\x02\x02\u0119\u011A\x05n8\x02\u011A" +
		"#\x03\x02\x02\x02\u011B\u0120\x07%\x02\x02\u011C\u011D\x077\x02\x02\u011D" +
		"\u011F\x07%\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0122\x03\x02\x02" +
		"\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0125" +
		"\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0124\x074\x02\x02" +
		"\u0124\u0126\x07%\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03" +
		"\x02\x02\x02\u0126%\x03\x02\x02\x02\u0127\u012C\x058\x1D\x02\u0128\u0129" +
		"\x078\x02\x02\u0129\u012B\x058\x1D\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02" +
		"\x02\x02\u012D\'\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0134" +
		"\x07%\x02\x02\u0130\u0131\x078\x02\x02\u0131\u0133\x07%\x02\x02\u0132" +
		"\u0130\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02" +
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135)\x03\x02\x02\x02\u0136\u0134" +
		"\x03\x02\x02\x02\u0137\u013C\x05\x8EH\x02\u0138\u0139\x078\x02\x02\u0139" +
		"\u013B\x05\x8EH\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013E\x03\x02\x02" +
		"\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D+\x03" +
		"\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0144\x05\x90I\x02\u0140" +
		"\u0141\x078\x02\x02\u0141\u0143\x05\x90I\x02\u0142\u0140\x03\x02\x02\x02" +
		"\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03" +
		"\x02\x02\x02\u0145-\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147" +
		"\u014B\x05(\x15\x02\u0148\u014B\x05*\x16\x02\u0149\u014B\x05,\x17\x02" +
		"\u014A\u0147\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u0149\x03" +
		"\x02\x02\x02\u014B/\x03\x02\x02\x02\u014C\u014F\x05*\x16\x02\u014D\u014F" +
		"\x05x=\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014D\x03\x02\x02\x02\u014F" +
		"1\x03\x02\x02\x02\u0150\u0151\x056\x1C\x02\u0151\u0152\x078\x02\x02\u0152" +
		"\u0154\x03\x02\x02\x02\u0153\u0150\x03\x02\x02\x02\u0154\u0157\x03\x02" +
		"\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
		"\u0158\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158\u0159\x056\x1C" +
		"\x02\u01593\x03\x02\x02\x02\u015A\u0166\x07\x13\x02\x02\u015B\u0166\x07" +
		"\x14\x02\x02\u015C\u0166\x07\x15\x02\x02\u015D\u0166\x07\t\x02\x02\u015E" +
		"\u0166\x07\x03\x02\x02\u015F\u0166\x07E\x02\x02\u0160\u0166\x05H%\x02" +
		"\u0161\u0166\x05:\x1E\x02\u0162\u0166\x05^0\x02\u0163\u0164\t\x02\x02" +
		"\x02\u0164\u0166\x054\x1B\x02\u0165\u015A\x03\x02\x02\x02\u0165\u015B" +
		"\x03\x02\x02\x02\u0165\u015C\x03\x02\x02\x02\u0165\u015D\x03\x02\x02\x02" +
		"\u0165\u015E\x03\x02\x02\x02\u0165\u015F\x03\x02\x02\x02\u0165\u0160\x03" +
		"\x02\x02\x02\u0165\u0161\x03\x02\x02\x02\u0165\u0162\x03\x02\x02\x02\u0165" +
		"\u0163\x03\x02\x02\x02\u0166\u016B\x03\x02\x02\x02\u0167\u0168\t\x03\x02" +
		"\x02\u0168\u016A\x054\x1B\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016D" +
		"\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
		"\u016C5\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0171\x054\x1B" +
		"\x02\u016F\u0170\x075\x02\x02\u0170\u0172\x05n8\x02\u0171\u016F\x03\x02" +
		"\x02\x02\u0171\u0172\x03\x02\x02\x02\u01727\x03\x02\x02\x02\u0173\u017A" +
		"\x07%\x02\x02\u0174\u0175\x079\x02\x02\u0175\u0176\x056\x1C\x02\u0176" +
		"\u0177\x07:\x02\x02\u0177\u0178\x05D#\x02\u0178\u017A\x03\x02\x02\x02" +
		"\u0179\u0173\x03\x02\x02\x02\u0179\u0174\x03\x02\x02\x02\u017A\u017E\x03" +
		"\x02\x02\x02\u017B\u017D\x05D#\x02\u017C\u017B\x03\x02\x02\x02\u017D\u0180" +
		"\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02" +
		"\u017F9\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0181\u0185\x05@!" +
		"\x02\u0182\u0184\x05B\"\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0187\x03" +
		"\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		";\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x07%\x02\x02" +
		"\u0189\u018A\x05F$\x02\u018A=\x03\x02\x02\x02\u018B\u018D\x05@!\x02\u018C" +
		"\u018E\x05B\"\x02\u018D\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02" +
		"\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190?\x03" +
		"\x02\x02\x02\u0191\u0197\x058\x1D\x02\u0192\u0193\x079\x02\x02\u0193\u0194" +
		"\x056\x1C\x02\u0194\u0195\x07:\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196" +
		"\u0191\x03\x02\x02\x02\u0196\u0192\x03\x02\x02\x02\u0197A\x03\x02\x02" +
		"\x02\u0198\u0199\x074\x02\x02\u0199\u019B\x07%\x02\x02\u019A\u0198\x03" +
		"\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C" +
		"\u019D\x05F$\x02\u019DC\x03\x02\x02\x02\u019E\u01A0\x05B\"\x02\u019F\u019E" +
		"\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02" +
		"\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01AA\x03\x02\x02\x02\u01A3\u01A1\x03" +
		"\x02\x02\x02\u01A4\u01A5\x07=\x02\x02\u01A5\u01A6\x056\x1C\x02\u01A6\u01A7" +
		"\x07>\x02\x02\u01A7\u01AB\x03\x02\x02\x02\u01A8\u01A9\x077\x02\x02\u01A9" +
		"\u01AB\x07%\x02\x02\u01AA\u01A4\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02" +
		"\x02\u01ABE\x03\x02\x02\x02\u01AC\u01AE\x079\x02\x02\u01AD\u01AF\x052" +
		"\x1A\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF" +
		"\u01B0\x03\x02\x02\x02\u01B0\u01B4\x07:\x02\x02\u01B1\u01B4\x05^0\x02" +
		"\u01B2\u01B4\x07\x03\x02\x02\u01B3\u01AC\x03\x02\x02\x02\u01B3\u01B1\x03" +
		"\x02\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4G\x03\x02\x02\x02\u01B5" +
		"\u01B6\x07$\x02\x02\u01B6\u01B7\x05J&\x02\u01B7I\x03\x02\x02\x02\u01B8" +
		"\u01B9\x07;\x02\x02\u01B9\u01BA\x05r:\x02\u01BA\u01BB\x07<\x02\x02\u01BB" +
		"\u01BD\x03\x02\x02\x02\u01BC\u01B8\x03\x02\x02\x02\u01BC\u01BD\x03\x02" +
		"\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C1\x05L\'\x02\u01BF\u01C0" +
		"\x074\x02\x02\u01C0\u01C2\x05X-\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1" +
		"\u01C2\x03\x02\x02\x02\u01C2\u01C6\x03\x02\x02\x02\u01C3\u01C5\x072\x02" +
		"\x02\u01C4\u01C3\x03\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02\u01C6\u01C4" +
		"\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02" +
		"\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01CD\x05\x06\x04\x02\u01CA\u01CC\x07" +
		"2\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD" +
		"\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D0\x03\x02" +
		"\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0\u01D1\x07\x17\x02\x02\u01D1" +
		"K\x03\x02\x02\x02\u01D2\u01D4\x079\x02\x02\u01D3\u01D5\x05N(\x02\u01D4" +
		"\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x03\x02" +
		"\x02\x02\u01D6\u01D7\x07:\x02\x02\u01D7M\x03\x02\x02\x02\u01D8\u01DB\x05" +
		".\x18\x02\u01D9\u01DA\x078\x02\x02\u01DA\u01DC\x05P)\x02\u01DB\u01D9\x03" +
		"\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD" +
		"\u01DF\x05P)\x02\u01DE\u01D8\x03\x02\x02\x02\u01DE\u01DD\x03\x02\x02\x02" +
		"\u01DFO\x03\x02\x02\x02\u01E0\u01E3\x07E\x02\x02\u01E1\u01E2\x074\x02" +
		"\x02\u01E2\u01E4\x05n8\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03" +
		"\x02\x02\x02\u01E4Q\x03\x02\x02\x02\u01E5\u01E7\x079\x02\x02\u01E6\u01E8" +
		"\x05T+\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8" +
		"\u01E9\x03\x02\x02\x02\u01E9\u01EA\x07:\x02\x02\u01EAS\x03\x02\x02\x02" +
		"\u01EB\u01EE\x050\x19\x02\u01EC\u01ED\x078\x02\x02\u01ED\u01EF\x05V,\x02" +
		"\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F2\x03" +
		"\x02\x02\x02\u01F0\u01F2\x05V,\x02\u01F1\u01EB\x03\x02\x02\x02\u01F1\u01F0" +
		"\x03\x02\x02\x02\u01F2U\x03\x02\x02\x02\u01F3\u01F4\x07E\x02\x02\u01F4" +
		"\u01F5\x05n8\x02\u01F5W\x03\x02\x02\x02\u01F6\u01F8\x079\x02\x02\u01F7" +
		"\u01F9\x05Z.\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02" +
		"\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FE\x07:\x02\x02\u01FB\u01FE\x05" +
		"n8\x02\u01FC\u01FE\x05\\/\x02\u01FD\u01F6\x03\x02\x02\x02\u01FD\u01FB" +
		"\x03\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FEY\x03\x02\x02\x02\u01FF" +
		"\u0202\x05x=\x02\u0200\u0201\x078\x02\x02\u0201\u0203\x05\\/\x02\u0202" +
		"\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0206\x03\x02" +
		"\x02\x02\u0204\u0206\x05\\/\x02\u0205\u01FF\x03\x02\x02\x02\u0205\u0204" +
		"\x03\x02\x02\x02\u0206[\x03\x02\x02\x02\u0207\u0208\x07E\x02\x02\u0208" +
		"\u0209\x05n8\x02\u0209]\x03\x02\x02\x02\u020A\u020C\x07?\x02\x02\u020B" +
		"\u020D\x05`1\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x07@\x02\x02\u020F_\x03" +
		"\x02\x02\x02\u0210\u0216\x05b2\x02\u0211\u0212\x05d3\x02\u0212\u0213\x05" +
		"b2\x02\u0213\u0215\x03\x02\x02\x02\u0214\u0211\x03\x02\x02\x02\u0215\u0218" +
		"\x03\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02" +
		"\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0219\u021B\x05" +
		"d3\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021Ba" +
		"\x03\x02\x02\x02\u021C\u021D\x07=\x02\x02\u021D\u021E\x056\x1C\x02\u021E" +
		"\u021F\x07>\x02\x02\u021F\u0220\x076\x02\x02\u0220\u0221\x056\x1C\x02" +
		"\u0221\u0227\x03\x02\x02\x02\u0222\u0223\x07%\x02\x02\u0223\u0224\x07" +
		"6\x02\x02\u0224\u0227\x056\x1C\x02\u0225\u0227\x056\x1C\x02\u0226\u021C" +
		"\x03\x02\x02\x02\u0226\u0222\x03\x02\x02\x02\u0226\u0225\x03\x02\x02\x02" +
		"\u0227c\x03\x02\x02\x02\u0228\u0229\t\x04\x02\x02\u0229e\x03\x02\x02\x02" +
		"\u022A\u0244\x07\x13\x02\x02\u022B\u0244\x05h5\x02\u022C\u022F\x07%\x02" +
		"\x02\u022D\u022E\x077\x02\x02\u022E\u0230\x07%\x02\x02\u022F\u022D\x03" +
		"\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0236\x03\x02\x02\x02\u0231" +
		"\u0233\x07;\x02\x02\u0232\u0234\x05z>\x02\u0233\u0232\x03\x02\x02\x02" +
		"\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0237\x07" +
		"<\x02\x02\u0236\u0231\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237" +
		"\u0244\x03\x02\x02\x02\u0238\u0239\x07\'\x02\x02\u0239\u023A\x079\x02" +
		"\x02\u023A\u023B\x056\x1C\x02\u023B\u023C\x07:\x02\x02\u023C\u0244\x03" +
		"\x02\x02\x02\u023D\u0244\x05\x8CG\x02\u023E\u0244\x05\x82B\x02\u023F\u0240" +
		"\x079\x02\x02\u0240\u0241\x05n8\x02\u0241\u0242\x07:\x02\x02\u0242\u0244" +
		"\x03\x02\x02\x02\u0243\u022A\x03\x02\x02\x02\u0243\u022B\x03\x02\x02\x02" +
		"\u0243\u022C\x03\x02\x02\x02\u0243\u0238\x03\x02\x02\x02\u0243\u023D\x03" +
		"\x02\x02\x02\u0243\u023E\x03\x02\x02\x02\u0243\u023F\x03\x02\x02\x02\u0244" +
		"g\x03\x02\x02\x02\u0245\u0246\t\x05\x02\x02\u0246i\x03\x02\x02\x02\u0247" +
		"\u0248\x07C\x02\x02\u0248\u024A\x05f4\x02\u0249\u024B\x07D\x02\x02\u024A" +
		"\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024D\x03\x02" +
		"\x02\x02\u024C\u0247\x03\x02\x02\x02\u024D\u0250\x03\x02\x02\x02\u024E" +
		"\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024Fk\x03\x02\x02" +
		"\x02\u0250\u024E\x03\x02\x02\x02\u0251\u0252\x07B\x02\x02\u0252\u0254" +
		"\x05f4\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255" +
		"\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256m\x03\x02\x02" +
		"\x02\u0257\u0255\x03\x02\x02\x02\u0258\u025A\x05f4\x02\u0259\u025B\x07" +
		"D\x02\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B" +
		"\u025E\x03\x02\x02\x02\u025C\u025F\x05j6\x02\u025D\u025F\x05l7\x02\u025E" +
		"\u025C\x03\x02\x02\x02\u025E\u025D\x03\x02\x02\x02\u025Fo\x03\x02\x02" +
		"\x02\u0260\u0261\x07%\x02\x02\u0261\u0262\x07E\x02\x02\u0262q\x03\x02" +
		"\x02\x02\u0263\u0266\x07%\x02\x02\u0264\u0265\x078\x02\x02\u0265\u0267" +
		"\x05r:\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267" +
		"\u0271\x03\x02\x02\x02\u0268\u026D\x05p9\x02\u0269\u026A\x078\x02\x02" +
		"\u026A\u026C\x05p9\x02\u026B\u0269\x03\x02\x02\x02\u026C\u026F\x03\x02" +
		"\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E" +
		"\u0271\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270\u0263\x03\x02" +
		"\x02\x02\u0270\u0268\x03\x02\x02\x02\u0271s\x03\x02\x02\x02\u0272\u0273" +
		"\x07%\x02\x02\u0273\u0274\x07E\x02\x02\u0274\u0278\x076\x02\x02\u0275" +
		"\u0279\x05|?\x02\u0276\u0279\x05\x80A\x02\u0277\u0279\x05~@\x02\u0278" +
		"\u0275\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0277\x03\x02" +
		"\x02\x02\u0279u\x03\x02\x02\x02\u027A\u027F\x05r:\x02\u027B\u027C\x07" +
		"8\x02\x02\u027C\u027E\x05t;\x02\u027D\u027B\x03\x02\x02\x02\u027E\u0281" +
		"\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02" +
		"\u0280\u02AD\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282\u0287\x07" +
		"%\x02\x02\u0283\u0284\x078\x02\x02\u0284\u0286\x07%\x02\x02\u0285\u0283" +
		"\x03\x02\x02\x02\u0286\u0289\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02" +
		"\u0287\u0288\x03\x02\x02\x02\u0288\u0290\x03\x02\x02\x02\u0289\u0287\x03" +
		"\x02\x02\x02\u028A\u028B\x078\x02\x02\u028B\u028C\x07%\x02\x02\u028C\u028D" +
		"\x076\x02\x02\u028D\u028F\x05n8\x02\u028E\u028A\x03\x02\x02\x02\u028F" +
		"\u0292\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02" +
		"\x02\x02\u0291\u0297\x03\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0293" +
		"\u0294\x078\x02\x02\u0294\u0296\x05t;\x02\u0295\u0293\x03\x02\x02\x02" +
		"\u0296\u0299\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03" +
		"\x02\x02\x02\u0298\u02AD\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u029A" +
		"\u029B\x07%\x02\x02\u029B\u029C\x076\x02\x02\u029C\u02A1\x05n8\x02\u029D" +
		"\u029E\x078\x02\x02\u029E\u02A0\x05t;\x02\u029F\u029D\x03\x02\x02\x02" +
		"\u02A0\u02A3\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03" +
		"\x02\x02\x02\u02A2\u02AD\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4" +
		"\u02A9\x05t;\x02\u02A5\u02A6\x078\x02\x02\u02A6\u02A8\x05t;\x02\u02A7" +
		"\u02A5\x03\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02A7\x03\x02" +
		"\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB" +
		"\u02A9\x03\x02\x02\x02\u02AC\u027A\x03\x02\x02\x02\u02AC\u0282\x03\x02" +
		"\x02\x02\u02AC\u029A\x03\x02\x02\x02\u02AC\u02A4\x03\x02\x02\x02\u02AD" +
		"w\x03\x02\x02\x02\u02AE\u02B1\x05n8\x02\u02AF\u02B0\x078\x02\x02\u02B0" +
		"\u02B2\x05x=\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02" +
		"\u02B2\u02B6\x03\x02\x02\x02\u02B3\u02B4\x07E\x02\x02\u02B4\u02B6\x05" +
		"n8\x02\u02B5\u02AE\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6y" +
		"\x03\x02\x02\x02\u02B7\u02BC\x05n8\x02\u02B8\u02BC\x05|?\x02\u02B9\u02BC" +
		"\x05\x80A\x02\u02BA\u02BC\x05~@\x02\u02BB\u02B7\x03\x02\x02\x02\u02BB" +
		"\u02B8\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB\u02BA\x03\x02" +
		"\x02\x02\u02BC\u02BF\x03\x02\x02\x02\u02BD\u02BE\x078\x02\x02\u02BE\u02C0" +
		"\x05z>\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
		"{\x03\x02\x02\x02\u02C1\u02C3\x079\x02\x02\u02C2\u02C4\x05x=\x02\u02C3" +
		"\u02C2\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C5\x03\x02" +
		"\x02\x02\u02C5\u02C6\x07:\x02\x02\u02C6}\x03\x02\x02\x02\u02C7\u02C8\x07" +
		"%\x02\x02\u02C8\u02C9\x07E\x02\x02\u02C9\x7F\x03\x02\x02\x02\u02CA\u02CB" +
		"\x07E\x02\x02\u02CB\u02CC\x05n8\x02\u02CC\x81\x03\x02\x02\x02\u02CD\u02CE" +
		"\x07;\x02\x02\u02CE\u02CF\x05r:\x02\u02CF\u02D0\x07<\x02\x02\u02D0\u02D2" +
		"\x03\x02\x02\x02\u02D1\u02CD\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02" +
		"\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D4\x05R*\x02\u02D4\u02D5\x07A\x02" +
		"\x02\u02D5\u02D6\x05X-\x02\u02D6\x83\x03\x02\x02\x02\u02D7\u02D8\x07=" +
		"\x02\x02\u02D8\u02D9\x05n8\x02\u02D9\u02DA\x07>\x02\x02\u02DA\u02DB\x07" +
		"4\x02\x02\u02DB\u02DC\x05n8\x02\u02DC\x85\x03\x02\x02\x02\u02DD\u02DE" +
		"\x07%\x02\x02\u02DE\u02DF\x074\x02\x02\u02DF\u02E0\x05n8\x02\u02E0\x87" +
		"\x03\x02\x02\x02\u02E1\u02E4\x05\x84C\x02\u02E2\u02E4\x05\x86D\x02\u02E3" +
		"\u02E1\x03\x02\x02\x02\u02E3\u02E2\x03\x02\x02\x02\u02E4\x89\x03\x02\x02" +
		"\x02\u02E5\u02EB\x05\x88E\x02\u02E6\u02E7\x05d3\x02\u02E7\u02E8\x05\x88" +
		"E\x02\u02E8\u02EA\x03\x02\x02\x02\u02E9\u02E6\x03\x02\x02\x02\u02EA\u02ED" +
		"\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02" +
		"\u02EC\u02EF\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02EE\u02F0\x05" +
		"d3\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\x8B" +
		"\x03\x02\x02\x02\u02F1\u02F4\x07?\x02\x02\u02F2\u02F5\x05n8\x02\u02F3" +
		"\u02F5\x05\x8AF\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F3\x03\x02\x02" +
		"\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x07@\x02\x02\u02F7\x8D\x03" +
		"\x02\x02\x02\u02F8\u02F9\x07%\x02\x02\u02F9\u02FA\x074\x02\x02\u02FA\u02FB" +
		"\x05n8\x02\u02FB\x8F\x03\x02\x02\x02\u02FC\u02FF\x07%\x02\x02\u02FD\u02FE" +
		"\x074\x02\x02\u02FE\u0300\x05n8\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF" +
		"\u0300\x03\x02\x02\x02\u0300\x91\x03\x02\x02\x02\u0301\u0302\t\x06\x02" +
		"\x02\u0302\x93\x03\x02\x02\x02X\x99\x9D\xA2\xA4\xB6\xBA\xBD\xDF\xE4\xF0" +
		"\xF9\u010B\u010E\u0116\u0120\u0125\u012C\u0134\u013C\u0144\u014A\u014E" +
		"\u0155\u0165\u016B\u0171\u0179\u017E\u0185\u018F\u0196\u019A\u01A1\u01AA" +
		"\u01AE\u01B3\u01BC\u01C1\u01C6\u01CD\u01D4\u01DB\u01DE\u01E3\u01E7\u01EE" +
		"\u01F1\u01F8\u01FD\u0202\u0205\u020C\u0216\u021A\u0226\u022F\u0233\u0236" +
		"\u0243\u024A\u024E\u0255\u025A\u025E\u0266\u026D\u0270\u0278\u027F\u0287" +
		"\u0290\u0297\u02A1\u02A9\u02AC\u02B1\u02B5\u02BB\u02BF\u02C3\u02D1\u02E3" +
		"\u02EB\u02EF\u02F4\u02FF";
	public static readonly _serializedATN: string = Utils.join(
		[
			LuauParser._serializedATNSegment0,
			LuauParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuauParser.__ATN) {
			LuauParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LuauParser._serializedATN));
		}

		return LuauParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public chunk(): ChunkContext {
		return this.getRuleContext(0, ChunkContext);
	}
	public EOF(): TerminalNode { return this.getToken(LuauParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_file; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChunkContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public lastStatement(): LastStatementContext | undefined {
		return this.tryGetRuleContext(0, LastStatementContext);
	}
	public SEMI_COLON(): TerminalNode[];
	public SEMI_COLON(i: number): TerminalNode;
	public SEMI_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.SEMI_COLON);
		} else {
			return this.getToken(LuauParser.SEMI_COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_chunk; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterChunk) {
			listener.enterChunk(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitChunk) {
			listener.exitChunk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitChunk) {
			return visitor.visitChunk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public chunk(): ChunkContext {
		return this.getRuleContext(0, ChunkContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_block; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public setExpression(): SetExpressionContext | undefined {
		return this.tryGetRuleContext(0, SetExpressionContext);
	}
	public compoundSetExpression(): CompoundSetExpressionContext | undefined {
		return this.tryGetRuleContext(0, CompoundSetExpressionContext);
	}
	public functioncall(): FunctioncallContext | undefined {
		return this.tryGetRuleContext(0, FunctioncallContext);
	}
	public doBlock(): DoBlockContext | undefined {
		return this.tryGetRuleContext(0, DoBlockContext);
	}
	public whileExpression(): WhileExpressionContext | undefined {
		return this.tryGetRuleContext(0, WhileExpressionContext);
	}
	public repeatBlock(): RepeatBlockContext | undefined {
		return this.tryGetRuleContext(0, RepeatBlockContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forExpression(): ForExpressionContext | undefined {
		return this.tryGetRuleContext(0, ForExpressionContext);
	}
	public forInExpression(): ForInExpressionContext | undefined {
		return this.tryGetRuleContext(0, ForInExpressionContext);
	}
	public globalFunction(): GlobalFunctionContext | undefined {
		return this.tryGetRuleContext(0, GlobalFunctionContext);
	}
	public localFunction(): LocalFunctionContext | undefined {
		return this.tryGetRuleContext(0, LocalFunctionContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_statement; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(LuauParser.RETURN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(LuauParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_lastStatement; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterLastStatement) {
			listener.enterLastStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitLastStatement) {
			listener.exitLastStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitLastStatement) {
			return visitor.visitLastStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetExpressionContext extends ParserRuleContext {
	public varList1(): VarList1Context {
		return this.getRuleContext(0, VarList1Context);
	}
	public EQUAL(): TerminalNode { return this.getToken(LuauParser.EQUAL, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_setExpression; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterSetExpression) {
			listener.enterSetExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitSetExpression) {
			listener.exitSetExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitSetExpression) {
			return visitor.visitSetExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundSetExpressionContext extends ParserRuleContext {
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	public CompoundOperations(): TerminalNode { return this.getToken(LuauParser.CompoundOperations, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_compoundSetExpression; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterCompoundSetExpression) {
			listener.enterCompoundSetExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitCompoundSetExpression) {
			listener.exitCompoundSetExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitCompoundSetExpression) {
			return visitor.visitCompoundSetExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoBlockContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(LuauParser.DO, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public END(): TerminalNode { return this.getToken(LuauParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_doBlock; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterDoBlock) {
			listener.enterDoBlock(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitDoBlock) {
			listener.exitDoBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitDoBlock) {
			return visitor.visitDoBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileExpressionContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(LuauParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public doBlock(): DoBlockContext {
		return this.getRuleContext(0, DoBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_whileExpression; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterWhileExpression) {
			listener.enterWhileExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitWhileExpression) {
			listener.exitWhileExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitWhileExpression) {
			return visitor.visitWhileExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatBlockContext extends ParserRuleContext {
	public REPEAT(): TerminalNode { return this.getToken(LuauParser.REPEAT, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public UNTIL(): TerminalNode { return this.getToken(LuauParser.UNTIL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_repeatBlock; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterRepeatBlock) {
			listener.enterRepeatBlock(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitRepeatBlock) {
			listener.exitRepeatBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitRepeatBlock) {
			return visitor.visitRepeatBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(LuauParser.IF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public THEN(): TerminalNode[];
	public THEN(i: number): TerminalNode;
	public THEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.THEN);
		} else {
			return this.getToken(LuauParser.THEN, i);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public END(): TerminalNode { return this.getToken(LuauParser.END, 0); }
	public ELSEIF(): TerminalNode[];
	public ELSEIF(i: number): TerminalNode;
	public ELSEIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.ELSEIF);
		} else {
			return this.getToken(LuauParser.ELSEIF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(LuauParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForExpressionContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(LuauParser.FOR, 0); }
	public optionalTypedName(): OptionalTypedNameContext {
		return this.getRuleContext(0, OptionalTypedNameContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(LuauParser.EQUAL, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.COMMA);
		} else {
			return this.getToken(LuauParser.COMMA, i);
		}
	}
	public doBlock(): DoBlockContext {
		return this.getRuleContext(0, DoBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_forExpression; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterForExpression) {
			listener.enterForExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitForExpression) {
			listener.exitForExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitForExpression) {
			return visitor.visitForExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInExpressionContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(LuauParser.FOR, 0); }
	public allNamesList(): AllNamesListContext {
		return this.getRuleContext(0, AllNamesListContext);
	}
	public IN(): TerminalNode { return this.getToken(LuauParser.IN, 0); }
	public doBlock(): DoBlockContext {
		return this.getRuleContext(0, DoBlockContext);
	}
	public globalIteratorFunction(): GlobalIteratorFunctionContext | undefined {
		return this.tryGetRuleContext(0, GlobalIteratorFunctionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_forInExpression; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterForInExpression) {
			listener.enterForInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitForInExpression) {
			listener.exitForInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitForInExpression) {
			return visitor.visitForInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalFunctionContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(LuauParser.FUNCTION, 0); }
	public funcname(): FuncnameContext {
		return this.getRuleContext(0, FuncnameContext);
	}
	public funcbody(): FuncbodyContext {
		return this.getRuleContext(0, FuncbodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_globalFunction; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterGlobalFunction) {
			listener.enterGlobalFunction(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitGlobalFunction) {
			listener.exitGlobalFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitGlobalFunction) {
			return visitor.visitGlobalFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalFunctionContext extends ParserRuleContext {
	public LOCAL(): TerminalNode { return this.getToken(LuauParser.LOCAL, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(LuauParser.FUNCTION, 0); }
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public funcbody(): FuncbodyContext {
		return this.getRuleContext(0, FuncbodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_localFunction; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterLocalFunction) {
			listener.enterLocalFunction(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitLocalFunction) {
			listener.exitLocalFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitLocalFunction) {
			return visitor.visitLocalFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public LOCAL(): TerminalNode { return this.getToken(LuauParser.LOCAL, 0); }
	public allNamesList(): AllNamesListContext {
		return this.getRuleContext(0, AllNamesListContext);
	}
	public doBlock(): DoBlockContext | undefined {
		return this.tryGetRuleContext(0, DoBlockContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(LuauParser.EQUAL, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(LuauParser.TYPE, 0); }
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public EQUAL(): TerminalNode { return this.getToken(LuauParser.EQUAL, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(LuauParser.EXPORT, 0); }
	public OPEN_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_ANGLE_BRACKET, 0); }
	public genericTypeListWithDefaults(): GenericTypeListWithDefaultsContext | undefined {
		return this.tryGetRuleContext(0, GenericTypeListWithDefaultsContext);
	}
	public CLOSE_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_ANGLE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.NAME);
		} else {
			return this.getToken(LuauParser.NAME, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.DOT);
		} else {
			return this.getToken(LuauParser.DOT, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_funcname; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFuncname) {
			listener.enterFuncname(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFuncname) {
			listener.exitFuncname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFuncname) {
			return visitor.visitFuncname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarList1Context extends ParserRuleContext {
	public var(): VarContext[];
	public var(i: number): VarContext;
	public var(i?: number): VarContext | VarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarContext);
		} else {
			return this.getRuleContext(i, VarContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.COMMA);
		} else {
			return this.getToken(LuauParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_varList1; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVarList1) {
			listener.enterVarList1(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVarList1) {
			listener.exitVarList1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVarList1) {
			return visitor.visitVarList1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameListContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.NAME);
		} else {
			return this.getToken(LuauParser.NAME, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.COMMA);
		} else {
			return this.getToken(LuauParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_nameList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterNameList) {
			listener.enterNameList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitNameList) {
			listener.exitNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitNameList) {
			return visitor.visitNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedNameListContext extends ParserRuleContext {
	public typedName(): TypedNameContext[];
	public typedName(i: number): TypedNameContext;
	public typedName(i?: number): TypedNameContext | TypedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypedNameContext);
		} else {
			return this.getRuleContext(i, TypedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.COMMA);
		} else {
			return this.getToken(LuauParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_typedNameList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTypedNameList) {
			listener.enterTypedNameList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTypedNameList) {
			listener.exitTypedNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTypedNameList) {
			return visitor.visitTypedNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixedNamesListContext extends ParserRuleContext {
	public optionalTypedName(): OptionalTypedNameContext[];
	public optionalTypedName(i: number): OptionalTypedNameContext;
	public optionalTypedName(i?: number): OptionalTypedNameContext | OptionalTypedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalTypedNameContext);
		} else {
			return this.getRuleContext(i, OptionalTypedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.COMMA);
		} else {
			return this.getToken(LuauParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_mixedNamesList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterMixedNamesList) {
			listener.enterMixedNamesList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitMixedNamesList) {
			listener.exitMixedNamesList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitMixedNamesList) {
			return visitor.visitMixedNamesList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllNamesListContext extends ParserRuleContext {
	public nameList(): NameListContext | undefined {
		return this.tryGetRuleContext(0, NameListContext);
	}
	public typedNameList(): TypedNameListContext | undefined {
		return this.tryGetRuleContext(0, TypedNameListContext);
	}
	public mixedNamesList(): MixedNamesListContext | undefined {
		return this.tryGetRuleContext(0, MixedNamesListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_allNamesList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterAllNamesList) {
			listener.enterAllNamesList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitAllNamesList) {
			listener.exitAllNamesList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitAllNamesList) {
			return visitor.visitAllNamesList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllNamesListTypeContext extends ParserRuleContext {
	public typedNameList(): TypedNameListContext | undefined {
		return this.tryGetRuleContext(0, TypedNameListContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_allNamesListType; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterAllNamesListType) {
			listener.enterAllNamesListType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitAllNamesListType) {
			listener.exitAllNamesListType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitAllNamesListType) {
			return visitor.visitAllNamesListType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.COMMA);
		} else {
			return this.getToken(LuauParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression1Context extends ParserRuleContext {
	public NIL(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NIL, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(LuauParser.FALSE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(LuauParser.TRUE, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(LuauParser.STRING, 0); }
	public VARIADIC_EXPRESSION(): TerminalNode | undefined { return this.tryGetToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public prefixexp(): PrefixexpContext | undefined {
		return this.tryGetRuleContext(0, PrefixexpContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public expression1(): Expression1Context[];
	public expression1(i: number): Expression1Context;
	public expression1(i?: number): Expression1Context | Expression1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Expression1Context);
		} else {
			return this.getRuleContext(i, Expression1Context);
		}
	}
	public UnaryOperations(): TerminalNode | undefined { return this.tryGetToken(LuauParser.UnaryOperations, 0); }
	public NegativeSign(): TerminalNode[];
	public NegativeSign(i: number): TerminalNode;
	public NegativeSign(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.NegativeSign);
		} else {
			return this.getToken(LuauParser.NegativeSign, i);
		}
	}
	public BinaryOperations(): TerminalNode[];
	public BinaryOperations(i: number): TerminalNode;
	public BinaryOperations(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.BinaryOperations);
		} else {
			return this.getToken(LuauParser.BinaryOperations, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_expression1; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterExpression1) {
			listener.enterExpression1(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitExpression1) {
			listener.exitExpression1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitExpression1) {
			return visitor.visitExpression1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression1(): Expression1Context {
		return this.getRuleContext(0, Expression1Context);
	}
	public DOUBLE_COLON(): TerminalNode | undefined { return this.tryGetToken(LuauParser.DOUBLE_COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_expression; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NAME, 0); }
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_PARENTHESIS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_PARENTHESIS, 0); }
	public varSuffix(): VarSuffixContext[];
	public varSuffix(i: number): VarSuffixContext;
	public varSuffix(i?: number): VarSuffixContext | VarSuffixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarSuffixContext);
		} else {
			return this.getRuleContext(i, VarSuffixContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_var; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixexpContext extends ParserRuleContext {
	public varOrExp(): VarOrExpContext {
		return this.getRuleContext(0, VarOrExpContext);
	}
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_prefixexp; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterPrefixexp) {
			listener.enterPrefixexp(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitPrefixexp) {
			listener.exitPrefixexp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitPrefixexp) {
			return visitor.visitPrefixexp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GlobalIteratorFunctionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_globalIteratorFunction; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterGlobalIteratorFunction) {
			listener.enterGlobalIteratorFunction(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitGlobalIteratorFunction) {
			listener.exitGlobalIteratorFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitGlobalIteratorFunction) {
			return visitor.visitGlobalIteratorFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctioncallContext extends ParserRuleContext {
	public varOrExp(): VarOrExpContext {
		return this.getRuleContext(0, VarOrExpContext);
	}
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_functioncall; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFunctioncall) {
			listener.enterFunctioncall(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFunctioncall) {
			listener.exitFunctioncall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFunctioncall) {
			return visitor.visitFunctioncall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarOrExpContext extends ParserRuleContext {
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_PARENTHESIS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_PARENTHESIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_varOrExp; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVarOrExp) {
			listener.enterVarOrExp(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVarOrExp) {
			listener.exitVarOrExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVarOrExp) {
			return visitor.visitVarOrExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameAndArgsContext extends ParserRuleContext {
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COLON, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_nameAndArgs; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterNameAndArgs) {
			listener.enterNameAndArgs(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitNameAndArgs) {
			listener.exitNameAndArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitNameAndArgs) {
			return visitor.visitNameAndArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarSuffixContext extends ParserRuleContext {
	public OPEN_SQUARE_BRACKETS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_SQUARE_BRACKETS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CLOSE_SQUARE_BRACKETS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_SQUARE_BRACKETS, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(LuauParser.DOT, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NAME, 0); }
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_varSuffix; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVarSuffix) {
			listener.enterVarSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVarSuffix) {
			listener.exitVarSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVarSuffix) {
			return visitor.visitVarSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_PARENTHESIS, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(LuauParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_args; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(LuauParser.FUNCTION, 0); }
	public funcbody(): FuncbodyContext {
		return this.getRuleContext(0, FuncbodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_function; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncbodyContext extends ParserRuleContext {
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public END(): TerminalNode { return this.getToken(LuauParser.END, 0); }
	public OPEN_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_ANGLE_BRACKET, 0); }
	public genericTypeList(): GenericTypeListContext | undefined {
		return this.tryGetRuleContext(0, GenericTypeListContext);
	}
	public CLOSE_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_ANGLE_BRACKET, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COLON, 0); }
	public functionReturns(): FunctionReturnsContext | undefined {
		return this.tryGetRuleContext(0, FunctionReturnsContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.NEWLINE);
		} else {
			return this.getToken(LuauParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_funcbody; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFuncbody) {
			listener.enterFuncbody(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFuncbody) {
			listener.exitFuncbody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFuncbody) {
			return visitor.visitFuncbody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParametersContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(LuauParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_functionParameters; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFunctionParameters) {
			listener.enterFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFunctionParameters) {
			listener.exitFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFunctionParameters) {
			return visitor.visitFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public allNamesList(): AllNamesListContext | undefined {
		return this.tryGetRuleContext(0, AllNamesListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COMMA, 0); }
	public variadicParameter(): VariadicParameterContext | undefined {
		return this.tryGetRuleContext(0, VariadicParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariadicParameterContext extends ParserRuleContext {
	public VARIADIC_EXPRESSION(): TerminalNode { return this.getToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_variadicParameter; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVariadicParameter) {
			listener.enterVariadicParameter(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVariadicParameter) {
			listener.exitVariadicParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVariadicParameter) {
			return visitor.visitVariadicParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParametersTypeContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(LuauParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
	public parameterListType(): ParameterListTypeContext | undefined {
		return this.tryGetRuleContext(0, ParameterListTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_functionParametersType; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFunctionParametersType) {
			listener.enterFunctionParametersType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFunctionParametersType) {
			listener.exitFunctionParametersType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFunctionParametersType) {
			return visitor.visitFunctionParametersType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListTypeContext extends ParserRuleContext {
	public allNamesListType(): AllNamesListTypeContext | undefined {
		return this.tryGetRuleContext(0, AllNamesListTypeContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COMMA, 0); }
	public variadicParameterType(): VariadicParameterTypeContext | undefined {
		return this.tryGetRuleContext(0, VariadicParameterTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_parameterListType; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterParameterListType) {
			listener.enterParameterListType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitParameterListType) {
			listener.exitParameterListType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitParameterListType) {
			return visitor.visitParameterListType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariadicParameterTypeContext extends ParserRuleContext {
	public VARIADIC_EXPRESSION(): TerminalNode { return this.getToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_variadicParameterType; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVariadicParameterType) {
			listener.enterVariadicParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVariadicParameterType) {
			listener.exitVariadicParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVariadicParameterType) {
			return visitor.visitVariadicParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionReturnsContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_PARENTHESIS, 0); }
	public returnList(): ReturnListContext | undefined {
		return this.tryGetRuleContext(0, ReturnListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public variadicReturn(): VariadicReturnContext | undefined {
		return this.tryGetRuleContext(0, VariadicReturnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_functionReturns; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFunctionReturns) {
			listener.enterFunctionReturns(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFunctionReturns) {
			listener.exitFunctionReturns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFunctionReturns) {
			return visitor.visitFunctionReturns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnListContext extends ParserRuleContext {
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COMMA, 0); }
	public variadicReturn(): VariadicReturnContext | undefined {
		return this.tryGetRuleContext(0, VariadicReturnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_returnList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterReturnList) {
			listener.enterReturnList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitReturnList) {
			listener.exitReturnList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitReturnList) {
			return visitor.visitReturnList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariadicReturnContext extends ParserRuleContext {
	public VARIADIC_EXPRESSION(): TerminalNode { return this.getToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_variadicReturn; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVariadicReturn) {
			listener.enterVariadicReturn(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVariadicReturn) {
			listener.exitVariadicReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVariadicReturn) {
			return visitor.visitVariadicReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableconstructorContext extends ParserRuleContext {
	public OPEN_CURLY_BRACKETS(): TerminalNode { return this.getToken(LuauParser.OPEN_CURLY_BRACKETS, 0); }
	public CLOSE_CURLY_BRACKETS(): TerminalNode { return this.getToken(LuauParser.CLOSE_CURLY_BRACKETS, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_tableconstructor; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTableconstructor) {
			listener.enterTableconstructor(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTableconstructor) {
			listener.exitTableconstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTableconstructor) {
			return visitor.visitTableconstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public fieldsep(): FieldsepContext[];
	public fieldsep(i: number): FieldsepContext;
	public fieldsep(i?: number): FieldsepContext | FieldsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldsepContext);
		} else {
			return this.getRuleContext(i, FieldsepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFieldList) {
			return visitor.visitFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public OPEN_SQUARE_BRACKETS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_SQUARE_BRACKETS, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CLOSE_SQUARE_BRACKETS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_SQUARE_BRACKETS, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(LuauParser.EQUAL, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_field; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldsepContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COMMA, 0); }
	public SEMI_COLON(): TerminalNode | undefined { return this.tryGetToken(LuauParser.SEMI_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_fieldsep; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFieldsep) {
			listener.enterFieldsep(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFieldsep) {
			listener.exitFieldsep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFieldsep) {
			return visitor.visitFieldsep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeContext extends ParserRuleContext {
	public NIL(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NIL, 0); }
	public singletonType(): SingletonTypeContext | undefined {
		return this.tryGetRuleContext(0, SingletonTypeContext);
	}
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.NAME);
		} else {
			return this.getToken(LuauParser.NAME, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(LuauParser.DOT, 0); }
	public OPEN_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_ANGLE_BRACKET, 0); }
	public CLOSE_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_ANGLE_BRACKET, 0); }
	public typeParams(): TypeParamsContext | undefined {
		return this.tryGetRuleContext(0, TypeParamsContext);
	}
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(LuauParser.TYPEOF, 0); }
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_PARENTHESIS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_PARENTHESIS, 0); }
	public tableType(): TableTypeContext | undefined {
		return this.tryGetRuleContext(0, TableTypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_simpleType; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterSimpleType) {
			listener.enterSimpleType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitSimpleType) {
			listener.exitSimpleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitSimpleType) {
			return visitor.visitSimpleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingletonTypeContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(LuauParser.STRING, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NAME, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(LuauParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(LuauParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_singletonType; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterSingletonType) {
			listener.enterSingletonType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitSingletonType) {
			listener.exitSingletonType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitSingletonType) {
			return visitor.visitSingletonType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionSuffixContext extends ParserRuleContext {
	public UNION(): TerminalNode[];
	public UNION(i: number): TerminalNode;
	public UNION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.UNION);
		} else {
			return this.getToken(LuauParser.UNION, i);
		}
	}
	public simpleType(): SimpleTypeContext[];
	public simpleType(i: number): SimpleTypeContext;
	public simpleType(i?: number): SimpleTypeContext | SimpleTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleTypeContext);
		} else {
			return this.getRuleContext(i, SimpleTypeContext);
		}
	}
	public OPTIONAL(): TerminalNode[];
	public OPTIONAL(i: number): TerminalNode;
	public OPTIONAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.OPTIONAL);
		} else {
			return this.getToken(LuauParser.OPTIONAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_unionSuffix; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterUnionSuffix) {
			listener.enterUnionSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitUnionSuffix) {
			listener.exitUnionSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitUnionSuffix) {
			return visitor.visitUnionSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntersectionSuffixContext extends ParserRuleContext {
	public INTERSECTION(): TerminalNode[];
	public INTERSECTION(i: number): TerminalNode;
	public INTERSECTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.INTERSECTION);
		} else {
			return this.getToken(LuauParser.INTERSECTION, i);
		}
	}
	public simpleType(): SimpleTypeContext[];
	public simpleType(i: number): SimpleTypeContext;
	public simpleType(i?: number): SimpleTypeContext | SimpleTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleTypeContext);
		} else {
			return this.getRuleContext(i, SimpleTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_intersectionSuffix; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterIntersectionSuffix) {
			listener.enterIntersectionSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitIntersectionSuffix) {
			listener.exitIntersectionSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitIntersectionSuffix) {
			return visitor.visitIntersectionSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public simpleType(): SimpleTypeContext {
		return this.getRuleContext(0, SimpleTypeContext);
	}
	public unionSuffix(): UnionSuffixContext | undefined {
		return this.tryGetRuleContext(0, UnionSuffixContext);
	}
	public intersectionSuffix(): IntersectionSuffixContext | undefined {
		return this.tryGetRuleContext(0, IntersectionSuffixContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPTIONAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_type; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericTypePackParameterContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public VARIADIC_EXPRESSION(): TerminalNode { return this.getToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_genericTypePackParameter; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterGenericTypePackParameter) {
			listener.enterGenericTypePackParameter(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitGenericTypePackParameter) {
			listener.exitGenericTypePackParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitGenericTypePackParameter) {
			return visitor.visitGenericTypePackParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericTypeListContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuauParser.NAME, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.COMMA);
		} else {
			return this.getToken(LuauParser.COMMA, i);
		}
	}
	public genericTypeList(): GenericTypeListContext | undefined {
		return this.tryGetRuleContext(0, GenericTypeListContext);
	}
	public genericTypePackParameter(): GenericTypePackParameterContext[];
	public genericTypePackParameter(i: number): GenericTypePackParameterContext;
	public genericTypePackParameter(i?: number): GenericTypePackParameterContext | GenericTypePackParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericTypePackParameterContext);
		} else {
			return this.getRuleContext(i, GenericTypePackParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_genericTypeList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterGenericTypeList) {
			listener.enterGenericTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitGenericTypeList) {
			listener.exitGenericTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitGenericTypeList) {
			return visitor.visitGenericTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericTypePackParameterWithDefaultContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public VARIADIC_EXPRESSION(): TerminalNode { return this.getToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	public EQUAL(): TerminalNode { return this.getToken(LuauParser.EQUAL, 0); }
	public typePack(): TypePackContext | undefined {
		return this.tryGetRuleContext(0, TypePackContext);
	}
	public variadicTypePack(): VariadicTypePackContext | undefined {
		return this.tryGetRuleContext(0, VariadicTypePackContext);
	}
	public genericTypePack(): GenericTypePackContext | undefined {
		return this.tryGetRuleContext(0, GenericTypePackContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_genericTypePackParameterWithDefault; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterGenericTypePackParameterWithDefault) {
			listener.enterGenericTypePackParameterWithDefault(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitGenericTypePackParameterWithDefault) {
			listener.exitGenericTypePackParameterWithDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitGenericTypePackParameterWithDefault) {
			return visitor.visitGenericTypePackParameterWithDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericTypeListWithDefaultsContext extends ParserRuleContext {
	public genericTypeList(): GenericTypeListContext | undefined {
		return this.tryGetRuleContext(0, GenericTypeListContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.COMMA);
		} else {
			return this.getToken(LuauParser.COMMA, i);
		}
	}
	public genericTypePackParameterWithDefault(): GenericTypePackParameterWithDefaultContext[];
	public genericTypePackParameterWithDefault(i: number): GenericTypePackParameterWithDefaultContext;
	public genericTypePackParameterWithDefault(i?: number): GenericTypePackParameterWithDefaultContext | GenericTypePackParameterWithDefaultContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericTypePackParameterWithDefaultContext);
		} else {
			return this.getRuleContext(i, GenericTypePackParameterWithDefaultContext);
		}
	}
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.NAME);
		} else {
			return this.getToken(LuauParser.NAME, i);
		}
	}
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuauParser.EQUAL);
		} else {
			return this.getToken(LuauParser.EQUAL, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_genericTypeListWithDefaults; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterGenericTypeListWithDefaults) {
			listener.enterGenericTypeListWithDefaults(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitGenericTypeListWithDefaults) {
			listener.exitGenericTypeListWithDefaults(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitGenericTypeListWithDefaults) {
			return visitor.visitGenericTypeListWithDefaults(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COMMA, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public VARIADIC_EXPRESSION(): TerminalNode | undefined { return this.tryGetToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_typeList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParamsContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public typePack(): TypePackContext | undefined {
		return this.tryGetRuleContext(0, TypePackContext);
	}
	public variadicTypePack(): VariadicTypePackContext | undefined {
		return this.tryGetRuleContext(0, VariadicTypePackContext);
	}
	public genericTypePack(): GenericTypePackContext | undefined {
		return this.tryGetRuleContext(0, GenericTypePackContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COMMA, 0); }
	public typeParams(): TypeParamsContext | undefined {
		return this.tryGetRuleContext(0, TypeParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_typeParams; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTypeParams) {
			listener.enterTypeParams(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTypeParams) {
			listener.exitTypeParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTypeParams) {
			return visitor.visitTypeParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePackContext extends ParserRuleContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(LuauParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_typePack; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTypePack) {
			listener.enterTypePack(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTypePack) {
			listener.exitTypePack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTypePack) {
			return visitor.visitTypePack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericTypePackContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public VARIADIC_EXPRESSION(): TerminalNode { return this.getToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_genericTypePack; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterGenericTypePack) {
			listener.enterGenericTypePack(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitGenericTypePack) {
			listener.exitGenericTypePack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitGenericTypePack) {
			return visitor.visitGenericTypePack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariadicTypePackContext extends ParserRuleContext {
	public VARIADIC_EXPRESSION(): TerminalNode { return this.getToken(LuauParser.VARIADIC_EXPRESSION, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_variadicTypePack; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterVariadicTypePack) {
			listener.enterVariadicTypePack(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitVariadicTypePack) {
			listener.exitVariadicTypePack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitVariadicTypePack) {
			return visitor.visitVariadicTypePack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public functionParametersType(): FunctionParametersTypeContext {
		return this.getRuleContext(0, FunctionParametersTypeContext);
	}
	public ARROW(): TerminalNode { return this.getToken(LuauParser.ARROW, 0); }
	public functionReturns(): FunctionReturnsContext {
		return this.getRuleContext(0, FunctionReturnsContext);
	}
	public OPEN_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(LuauParser.OPEN_ANGLE_BRACKET, 0); }
	public genericTypeList(): GenericTypeListContext | undefined {
		return this.tryGetRuleContext(0, GenericTypeListContext);
	}
	public CLOSE_ANGLE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(LuauParser.CLOSE_ANGLE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_functionType; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableIndexerContext extends ParserRuleContext {
	public OPEN_SQUARE_BRACKETS(): TerminalNode { return this.getToken(LuauParser.OPEN_SQUARE_BRACKETS, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public CLOSE_SQUARE_BRACKETS(): TerminalNode { return this.getToken(LuauParser.CLOSE_SQUARE_BRACKETS, 0); }
	public COLON(): TerminalNode { return this.getToken(LuauParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_tableIndexer; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTableIndexer) {
			listener.enterTableIndexer(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTableIndexer) {
			listener.exitTableIndexer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTableIndexer) {
			return visitor.visitTableIndexer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public COLON(): TerminalNode { return this.getToken(LuauParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTableProperty) {
			listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropOrIndexerContext extends ParserRuleContext {
	public tableIndexer(): TableIndexerContext | undefined {
		return this.tryGetRuleContext(0, TableIndexerContext);
	}
	public tableProperty(): TablePropertyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_tablePropOrIndexer; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTablePropOrIndexer) {
			listener.enterTablePropOrIndexer(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTablePropOrIndexer) {
			listener.exitTablePropOrIndexer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTablePropOrIndexer) {
			return visitor.visitTablePropOrIndexer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropListContext extends ParserRuleContext {
	public tablePropOrIndexer(): TablePropOrIndexerContext[];
	public tablePropOrIndexer(i: number): TablePropOrIndexerContext;
	public tablePropOrIndexer(i?: number): TablePropOrIndexerContext | TablePropOrIndexerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropOrIndexerContext);
		} else {
			return this.getRuleContext(i, TablePropOrIndexerContext);
		}
	}
	public fieldsep(): FieldsepContext[];
	public fieldsep(i: number): FieldsepContext;
	public fieldsep(i?: number): FieldsepContext | FieldsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldsepContext);
		} else {
			return this.getRuleContext(i, FieldsepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_propList; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterPropList) {
			listener.enterPropList(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitPropList) {
			listener.exitPropList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitPropList) {
			return visitor.visitPropList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableTypeContext extends ParserRuleContext {
	public OPEN_CURLY_BRACKETS(): TerminalNode { return this.getToken(LuauParser.OPEN_CURLY_BRACKETS, 0); }
	public CLOSE_CURLY_BRACKETS(): TerminalNode { return this.getToken(LuauParser.CLOSE_CURLY_BRACKETS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public propList(): PropListContext | undefined {
		return this.tryGetRuleContext(0, PropListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_tableType; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTableType) {
			listener.enterTableType(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTableType) {
			listener.exitTableType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTableType) {
			return visitor.visitTableType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public COLON(): TerminalNode { return this.getToken(LuauParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_typedName; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterTypedName) {
			listener.enterTypedName(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitTypedName) {
			listener.exitTypedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitTypedName) {
			return visitor.visitTypedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalTypedNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuauParser.NAME, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(LuauParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_optionalTypedName; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterOptionalTypedName) {
			listener.enterOptionalTypedName(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitOptionalTypedName) {
			listener.exitOptionalTypedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitOptionalTypedName) {
			return visitor.visitOptionalTypedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public SINGLE_LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(LuauParser.SINGLE_LINE_COMMENT, 0); }
	public MULTI_LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(LuauParser.MULTI_LINE_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuauParser.RULE_comment; }
	// @Override
	public enterRule(listener: LuauParserListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: LuauParserListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuauParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


