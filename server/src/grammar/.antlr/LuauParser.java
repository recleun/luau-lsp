// Generated from d:/3bdo/Abdulrehman - DO NOT TOUCH/Coding Projects/Visual Studio Code/extensions/Roblox-Luau [parser test]/server/src/grammar/Luau.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class LuauParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, STRING=31, 
		LUA_STRING=32, DOUBLE_QUOTES_STRING=33, SINGLE_QUOTES_STRING=34, MULTI_LINE_STRING=35, 
		INTERPOLATED_STRING=36, NUMBER=37, INT=38, FLOAT_1=39, FLOAT_2=40, FLOAT_3=41, 
		FLOAT=42, SCIENTIFIC_NOTATION=43, HEX_NUMBER=44, BINARY_NUMBER=45, OCTAL_NUMBER=46, 
		NIL=47, FALSE=48, TRUE=49, RETURN=50, END=51, BREAK=52, IF=53, ELSEIF=54, 
		THEN=55, ELSE=56, WHILE=57, DO=58, FOR=59, IN=60, REPEAT=61, UNTIL=62, 
		LOCAL=63, FUNCTION=64, NAME=65, TYPE=66, TYPEOF=67, EXPORT=68, EscapeSequence=69, 
		NormalEscape=70, HexadecimalEscape=71, UnicodeEscape=72, SpaceEscape=73, 
		OctalEscape=74, MULTI_LINE_COMMENT=75, SINGLE_LINE_COMMENT=76, WS=77, 
		NEWLINE=78, SEMI_COLON=79, COLON=80, DOUBLE_COLON=81, EQUAL=82, DOT=83, 
		COMMA=84, OPEN_PARENTHESIS=85, CLOSE_PARENTHESIS=86, CLOSE_SQUARE_BRACKETS=87, 
		OPEN_CURLY_BRACKETS=88, CLOSE_CURLY_BRACKETS=89, ARROW=90, INTERSECTION=91, 
		UNION=92, OPTIONAL=93;
	public static final int
		RULE_file = 0, RULE_chunk = 1, RULE_block = 2, RULE_statement = 3, RULE_lastStatement = 4, 
		RULE_setExpression = 5, RULE_compoundSetExpression = 6, RULE_doBlock = 7, 
		RULE_whileExpression = 8, RULE_repeatBlock = 9, RULE_ifStatement = 10, 
		RULE_forExpression = 11, RULE_forInExpression = 12, RULE_globalFunction = 13, 
		RULE_localFunction = 14, RULE_variableDeclaration = 15, RULE_typeDeclaration = 16, 
		RULE_funcname = 17, RULE_varList1 = 18, RULE_nextExpression = 19, RULE_nameList = 20, 
		RULE_typedNameList = 21, RULE_mixedNamesList = 22, RULE_allNamesList = 23, 
		RULE_allNamesListType = 24, RULE_expressionList1 = 25, RULE_expressionList2 = 26, 
		RULE_expressionList = 27, RULE_expression1 = 28, RULE_expression2 = 29, 
		RULE_expression = 30, RULE_var = 31, RULE_prefixexp = 32, RULE_globalIteratorFunction = 33, 
		RULE_functioncall = 34, RULE_varOrExp = 35, RULE_nameAndArgs = 36, RULE_varSuffix = 37, 
		RULE_args = 38, RULE_function = 39, RULE_funcbody = 40, RULE_functionParameters = 41, 
		RULE_functionParametersType = 42, RULE_functionReturns = 43, RULE_parameterList = 44, 
		RULE_parameterListType = 45, RULE_returnList = 46, RULE_variadicParameter = 47, 
		RULE_variadicParameterType = 48, RULE_variadicReturn = 49, RULE_tableconstructor = 50, 
		RULE_fieldList = 51, RULE_field = 52, RULE_fieldsep = 53, RULE_compound_operations = 54, 
		RULE_binary_operations = 55, RULE_unary_operations = 56, RULE_simpleType = 57, 
		RULE_singletonType = 58, RULE_unionSuffix = 59, RULE_intersectionSuffix = 60, 
		RULE_type = 61, RULE_genericTypePackParameter = 62, RULE_genericTypeList = 63, 
		RULE_genericTypePackParameterWithDefault = 64, RULE_genericTypeListWithDefaults = 65, 
		RULE_typeList = 66, RULE_typeParams = 67, RULE_typePack = 68, RULE_genericTypePack = 69, 
		RULE_variadicTypePack = 70, RULE_functionType = 71, RULE_tableIndexer = 72, 
		RULE_tableProperty = 73, RULE_tablePropOrIndexer = 74, RULE_propList = 75, 
		RULE_tableType = 76, RULE_typedName = 77, RULE_optionalTypedName = 78, 
		RULE_comment = 79;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "chunk", "block", "statement", "lastStatement", "setExpression", 
			"compoundSetExpression", "doBlock", "whileExpression", "repeatBlock", 
			"ifStatement", "forExpression", "forInExpression", "globalFunction", 
			"localFunction", "variableDeclaration", "typeDeclaration", "funcname", 
			"varList1", "nextExpression", "nameList", "typedNameList", "mixedNamesList", 
			"allNamesList", "allNamesListType", "expressionList1", "expressionList2", 
			"expressionList", "expression1", "expression2", "expression", "var", 
			"prefixexp", "globalIteratorFunction", "functioncall", "varOrExp", "nameAndArgs", 
			"varSuffix", "args", "function", "funcbody", "functionParameters", "functionParametersType", 
			"functionReturns", "parameterList", "parameterListType", "returnList", 
			"variadicParameter", "variadicParameterType", "variadicReturn", "tableconstructor", 
			"fieldList", "field", "fieldsep", "compound_operations", "binary_operations", 
			"unary_operations", "simpleType", "singletonType", "unionSuffix", "intersectionSuffix", 
			"type", "genericTypePackParameter", "genericTypeList", "genericTypePackParameterWithDefault", 
			"genericTypeListWithDefaults", "typeList", "typeParams", "typePack", 
			"genericTypePack", "variadicTypePack", "functionType", "tableIndexer", 
			"tableProperty", "tablePropOrIndexer", "propList", "tableType", "typedName", 
			"optionalTypedName", "comment"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'<'", "'>'", "'...'", "'['", "'.'", "'+='", "'-='", "'*='", "'/='", 
			"'^='", "'%='", "'..='", "'+'", "'-'", "'*'", "'/'", "'//'", "'^'", "'%'", 
			"'..'", "'<='", "'>='", "'=='", "'~='", "'and'", "'or'", "'not'", "'#'", 
			"'true'", "'false'", null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "'--'", null, null, null, null, null, "'='", null, null, null, 
			null, "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "STRING", "LUA_STRING", "DOUBLE_QUOTES_STRING", 
			"SINGLE_QUOTES_STRING", "MULTI_LINE_STRING", "INTERPOLATED_STRING", "NUMBER", 
			"INT", "FLOAT_1", "FLOAT_2", "FLOAT_3", "FLOAT", "SCIENTIFIC_NOTATION", 
			"HEX_NUMBER", "BINARY_NUMBER", "OCTAL_NUMBER", "NIL", "FALSE", "TRUE", 
			"RETURN", "END", "BREAK", "IF", "ELSEIF", "THEN", "ELSE", "WHILE", "DO", 
			"FOR", "IN", "REPEAT", "UNTIL", "LOCAL", "FUNCTION", "NAME", "TYPE", 
			"TYPEOF", "EXPORT", "EscapeSequence", "NormalEscape", "HexadecimalEscape", 
			"UnicodeEscape", "SpaceEscape", "OctalEscape", "MULTI_LINE_COMMENT", 
			"SINGLE_LINE_COMMENT", "WS", "NEWLINE", "SEMI_COLON", "COLON", "DOUBLE_COLON", 
			"EQUAL", "DOT", "COMMA", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "CLOSE_SQUARE_BRACKETS", 
			"OPEN_CURLY_BRACKETS", "CLOSE_CURLY_BRACKETS", "ARROW", "INTERSECTION", 
			"UNION", "OPTIONAL"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Luau.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LuauParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public ChunkContext chunk() {
			return getRuleContext(ChunkContext.class,0);
		}
		public TerminalNode EOF() { return getToken(LuauParser.EOF, 0); }
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			chunk();
			setState(161);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ChunkContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public LastStatementContext lastStatement() {
			return getRuleContext(LastStatementContext.class,0);
		}
		public List<TerminalNode> SEMI_COLON() { return getTokens(LuauParser.SEMI_COLON); }
		public TerminalNode SEMI_COLON(int i) {
			return getToken(LuauParser.SEMI_COLON, i);
		}
		public ChunkContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chunk; }
	}

	public final ChunkContext chunk() throws RecognitionException {
		ChunkContext _localctx = new ChunkContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_chunk);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 53)) & ~0x3f) == 0 && ((1L << (_la - 53)) & 4307598705L) != 0)) {
				{
				{
				setState(163);
				statement();
				setState(165);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI_COLON) {
					{
					setState(164);
					match(SEMI_COLON);
					}
				}

				}
				}
				setState(171);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RETURN || _la==BREAK) {
				{
				setState(172);
				lastStatement();
				setState(174);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMI_COLON) {
					{
					setState(173);
					match(SEMI_COLON);
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public ChunkContext chunk() {
			return getRuleContext(ChunkContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			chunk();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public SetExpressionContext setExpression() {
			return getRuleContext(SetExpressionContext.class,0);
		}
		public CompoundSetExpressionContext compoundSetExpression() {
			return getRuleContext(CompoundSetExpressionContext.class,0);
		}
		public FunctioncallContext functioncall() {
			return getRuleContext(FunctioncallContext.class,0);
		}
		public DoBlockContext doBlock() {
			return getRuleContext(DoBlockContext.class,0);
		}
		public WhileExpressionContext whileExpression() {
			return getRuleContext(WhileExpressionContext.class,0);
		}
		public RepeatBlockContext repeatBlock() {
			return getRuleContext(RepeatBlockContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public ForExpressionContext forExpression() {
			return getRuleContext(ForExpressionContext.class,0);
		}
		public ForInExpressionContext forInExpression() {
			return getRuleContext(ForInExpressionContext.class,0);
		}
		public GlobalFunctionContext globalFunction() {
			return getRuleContext(GlobalFunctionContext.class,0);
		}
		public LocalFunctionContext localFunction() {
			return getRuleContext(LocalFunctionContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_statement);
		try {
			setState(194);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(180);
				setExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(181);
				compoundSetExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(182);
				functioncall();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(183);
				doBlock();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(184);
				whileExpression();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(185);
				repeatBlock();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(186);
				ifStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(187);
				forExpression();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(188);
				forInExpression();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(189);
				globalFunction();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(190);
				localFunction();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(191);
				variableDeclaration();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(192);
				typeDeclaration();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(193);
				comment();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LastStatementContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(LuauParser.RETURN, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode BREAK() { return getToken(LuauParser.BREAK, 0); }
		public LastStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lastStatement; }
	}

	public final LastStatementContext lastStatement() throws RecognitionException {
		LastStatementContext _localctx = new LastStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_lastStatement);
		int _la;
		try {
			setState(201);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case RETURN:
				enterOuterAlt(_localctx, 1);
				{
				setState(196);
				match(RETURN);
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 985302407593992L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 18874371L) != 0)) {
					{
					setState(197);
					expressionList();
					}
				}

				}
				break;
			case BREAK:
				enterOuterAlt(_localctx, 2);
				{
				setState(200);
				match(BREAK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SetExpressionContext extends ParserRuleContext {
		public VarList1Context varList1() {
			return getRuleContext(VarList1Context.class,0);
		}
		public TerminalNode EQUAL() { return getToken(LuauParser.EQUAL, 0); }
		public ExpressionList1Context expressionList1() {
			return getRuleContext(ExpressionList1Context.class,0);
		}
		public SetExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setExpression; }
	}

	public final SetExpressionContext setExpression() throws RecognitionException {
		SetExpressionContext _localctx = new SetExpressionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_setExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			varList1();
			setState(204);
			match(EQUAL);
			setState(205);
			expressionList1();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompoundSetExpressionContext extends ParserRuleContext {
		public VarContext var() {
			return getRuleContext(VarContext.class,0);
		}
		public Compound_operationsContext compound_operations() {
			return getRuleContext(Compound_operationsContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CompoundSetExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundSetExpression; }
	}

	public final CompoundSetExpressionContext compoundSetExpression() throws RecognitionException {
		CompoundSetExpressionContext _localctx = new CompoundSetExpressionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_compoundSetExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			var();
			setState(208);
			compound_operations();
			setState(209);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DoBlockContext extends ParserRuleContext {
		public TerminalNode DO() { return getToken(LuauParser.DO, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode END() { return getToken(LuauParser.END, 0); }
		public DoBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doBlock; }
	}

	public final DoBlockContext doBlock() throws RecognitionException {
		DoBlockContext _localctx = new DoBlockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_doBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(DO);
			setState(212);
			block();
			setState(213);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileExpressionContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(LuauParser.WHILE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DoBlockContext doBlock() {
			return getRuleContext(DoBlockContext.class,0);
		}
		public WhileExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileExpression; }
	}

	public final WhileExpressionContext whileExpression() throws RecognitionException {
		WhileExpressionContext _localctx = new WhileExpressionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_whileExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(WHILE);
			setState(216);
			expression();
			setState(217);
			doBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RepeatBlockContext extends ParserRuleContext {
		public TerminalNode REPEAT() { return getToken(LuauParser.REPEAT, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode UNTIL() { return getToken(LuauParser.UNTIL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public RepeatBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repeatBlock; }
	}

	public final RepeatBlockContext repeatBlock() throws RecognitionException {
		RepeatBlockContext _localctx = new RepeatBlockContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_repeatBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(REPEAT);
			setState(220);
			block();
			setState(221);
			match(UNTIL);
			setState(222);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(LuauParser.IF, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> THEN() { return getTokens(LuauParser.THEN); }
		public TerminalNode THEN(int i) {
			return getToken(LuauParser.THEN, i);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public TerminalNode END() { return getToken(LuauParser.END, 0); }
		public List<TerminalNode> ELSEIF() { return getTokens(LuauParser.ELSEIF); }
		public TerminalNode ELSEIF(int i) {
			return getToken(LuauParser.ELSEIF, i);
		}
		public TerminalNode ELSE() { return getToken(LuauParser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			match(IF);
			setState(225);
			expression();
			setState(226);
			match(THEN);
			setState(227);
			block();
			setState(235);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSEIF) {
				{
				{
				setState(228);
				match(ELSEIF);
				setState(229);
				expression();
				setState(230);
				match(THEN);
				setState(231);
				block();
				}
				}
				setState(237);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(240);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(238);
				match(ELSE);
				setState(239);
				block();
				}
			}

			setState(242);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForExpressionContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(LuauParser.FOR, 0); }
		public OptionalTypedNameContext optionalTypedName() {
			return getRuleContext(OptionalTypedNameContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(LuauParser.EQUAL, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public DoBlockContext doBlock() {
			return getRuleContext(DoBlockContext.class,0);
		}
		public ForExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forExpression; }
	}

	public final ForExpressionContext forExpression() throws RecognitionException {
		ForExpressionContext _localctx = new ForExpressionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_forExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			match(FOR);
			setState(245);
			optionalTypedName();
			setState(246);
			match(EQUAL);
			setState(247);
			expression();
			setState(248);
			match(COMMA);
			setState(249);
			expression();
			setState(252);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(250);
				match(COMMA);
				setState(251);
				expression();
				}
			}

			setState(254);
			doBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForInExpressionContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(LuauParser.FOR, 0); }
		public AllNamesListContext allNamesList() {
			return getRuleContext(AllNamesListContext.class,0);
		}
		public TerminalNode IN() { return getToken(LuauParser.IN, 0); }
		public DoBlockContext doBlock() {
			return getRuleContext(DoBlockContext.class,0);
		}
		public GlobalIteratorFunctionContext globalIteratorFunction() {
			return getRuleContext(GlobalIteratorFunctionContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForInExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forInExpression; }
	}

	public final ForInExpressionContext forInExpression() throws RecognitionException {
		ForInExpressionContext _localctx = new ForInExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_forInExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			match(FOR);
			setState(257);
			allNamesList();
			setState(258);
			match(IN);
			setState(261);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(259);
				globalIteratorFunction();
				}
				break;
			case 2:
				{
				setState(260);
				expressionList();
				}
				break;
			}
			setState(263);
			doBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GlobalFunctionContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(LuauParser.FUNCTION, 0); }
		public FuncnameContext funcname() {
			return getRuleContext(FuncnameContext.class,0);
		}
		public FuncbodyContext funcbody() {
			return getRuleContext(FuncbodyContext.class,0);
		}
		public GlobalFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_globalFunction; }
	}

	public final GlobalFunctionContext globalFunction() throws RecognitionException {
		GlobalFunctionContext _localctx = new GlobalFunctionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_globalFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			match(FUNCTION);
			setState(266);
			funcname();
			setState(267);
			funcbody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LocalFunctionContext extends ParserRuleContext {
		public TerminalNode LOCAL() { return getToken(LuauParser.LOCAL, 0); }
		public TerminalNode FUNCTION() { return getToken(LuauParser.FUNCTION, 0); }
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public FuncbodyContext funcbody() {
			return getRuleContext(FuncbodyContext.class,0);
		}
		public LocalFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localFunction; }
	}

	public final LocalFunctionContext localFunction() throws RecognitionException {
		LocalFunctionContext _localctx = new LocalFunctionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_localFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			match(LOCAL);
			setState(270);
			match(FUNCTION);
			setState(271);
			match(NAME);
			setState(272);
			funcbody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends ParserRuleContext {
		public TerminalNode LOCAL() { return getToken(LuauParser.LOCAL, 0); }
		public AllNamesListContext allNamesList() {
			return getRuleContext(AllNamesListContext.class,0);
		}
		public DoBlockContext doBlock() {
			return getRuleContext(DoBlockContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(LuauParser.EQUAL, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(LOCAL);
			setState(275);
			allNamesList();
			setState(279);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				{
				setState(276);
				match(EQUAL);
				setState(277);
				expressionList();
				}
				}
				break;
			case 2:
				{
				setState(278);
				doBlock();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeDeclarationContext extends ParserRuleContext {
		public TerminalNode TYPE() { return getToken(LuauParser.TYPE, 0); }
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public TerminalNode EQUAL() { return getToken(LuauParser.EQUAL, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode EXPORT() { return getToken(LuauParser.EXPORT, 0); }
		public GenericTypeListWithDefaultsContext genericTypeListWithDefaults() {
			return getRuleContext(GenericTypeListWithDefaultsContext.class,0);
		}
		public TypeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDeclaration; }
	}

	public final TypeDeclarationContext typeDeclaration() throws RecognitionException {
		TypeDeclarationContext _localctx = new TypeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_typeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXPORT) {
				{
				setState(281);
				match(EXPORT);
				}
			}

			setState(284);
			match(TYPE);
			setState(285);
			match(NAME);
			setState(290);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(286);
				match(T__0);
				setState(287);
				genericTypeListWithDefaults();
				setState(288);
				match(T__1);
				}
			}

			setState(292);
			match(EQUAL);
			setState(293);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncnameContext extends ParserRuleContext {
		public List<TerminalNode> NAME() { return getTokens(LuauParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(LuauParser.NAME, i);
		}
		public List<TerminalNode> DOT() { return getTokens(LuauParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(LuauParser.DOT, i);
		}
		public TerminalNode COLON() { return getToken(LuauParser.COLON, 0); }
		public FuncnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcname; }
	}

	public final FuncnameContext funcname() throws RecognitionException {
		FuncnameContext _localctx = new FuncnameContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_funcname);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(NAME);
			setState(300);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(296);
				match(DOT);
				setState(297);
				match(NAME);
				}
				}
				setState(302);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(305);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(303);
				match(COLON);
				setState(304);
				match(NAME);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarList1Context extends ParserRuleContext {
		public List<VarContext> var() {
			return getRuleContexts(VarContext.class);
		}
		public VarContext var(int i) {
			return getRuleContext(VarContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public VarList1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varList1; }
	}

	public final VarList1Context varList1() throws RecognitionException {
		VarList1Context _localctx = new VarList1Context(_ctx, getState());
		enterRule(_localctx, 36, RULE_varList1);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			var();
			setState(312);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(308);
				match(COMMA);
				setState(309);
				var();
				}
				}
				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NextExpressionContext extends ParserRuleContext {
		public List<TerminalNode> NAME() { return getTokens(LuauParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(LuauParser.NAME, i);
		}
		public TerminalNode COMMA() { return getToken(LuauParser.COMMA, 0); }
		public TableconstructorContext tableconstructor() {
			return getRuleContext(TableconstructorContext.class,0);
		}
		public NextExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nextExpression; }
	}

	public final NextExpressionContext nextExpression() throws RecognitionException {
		NextExpressionContext _localctx = new NextExpressionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_nextExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			match(NAME);
			setState(316);
			match(COMMA);
			setState(319);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				{
				setState(317);
				match(NAME);
				}
				break;
			case OPEN_CURLY_BRACKETS:
				{
				setState(318);
				tableconstructor();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NameListContext extends ParserRuleContext {
		public List<TerminalNode> NAME() { return getTokens(LuauParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(LuauParser.NAME, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public NameListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameList; }
	}

	public final NameListContext nameList() throws RecognitionException {
		NameListContext _localctx = new NameListContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_nameList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			match(NAME);
			setState(326);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(322);
					match(COMMA);
					setState(323);
					match(NAME);
					}
					} 
				}
				setState(328);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypedNameListContext extends ParserRuleContext {
		public List<TypedNameContext> typedName() {
			return getRuleContexts(TypedNameContext.class);
		}
		public TypedNameContext typedName(int i) {
			return getRuleContext(TypedNameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public TypedNameListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typedNameList; }
	}

	public final TypedNameListContext typedNameList() throws RecognitionException {
		TypedNameListContext _localctx = new TypedNameListContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_typedNameList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(329);
			typedName();
			setState(334);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(330);
					match(COMMA);
					setState(331);
					typedName();
					}
					} 
				}
				setState(336);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MixedNamesListContext extends ParserRuleContext {
		public List<OptionalTypedNameContext> optionalTypedName() {
			return getRuleContexts(OptionalTypedNameContext.class);
		}
		public OptionalTypedNameContext optionalTypedName(int i) {
			return getRuleContext(OptionalTypedNameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public MixedNamesListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixedNamesList; }
	}

	public final MixedNamesListContext mixedNamesList() throws RecognitionException {
		MixedNamesListContext _localctx = new MixedNamesListContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_mixedNamesList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			optionalTypedName();
			setState(342);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(338);
					match(COMMA);
					setState(339);
					optionalTypedName();
					}
					} 
				}
				setState(344);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AllNamesListContext extends ParserRuleContext {
		public NameListContext nameList() {
			return getRuleContext(NameListContext.class,0);
		}
		public TypedNameListContext typedNameList() {
			return getRuleContext(TypedNameListContext.class,0);
		}
		public MixedNamesListContext mixedNamesList() {
			return getRuleContext(MixedNamesListContext.class,0);
		}
		public AllNamesListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_allNamesList; }
	}

	public final AllNamesListContext allNamesList() throws RecognitionException {
		AllNamesListContext _localctx = new AllNamesListContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_allNamesList);
		try {
			setState(348);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(345);
				nameList();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(346);
				typedNameList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(347);
				mixedNamesList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AllNamesListTypeContext extends ParserRuleContext {
		public TypedNameListContext typedNameList() {
			return getRuleContext(TypedNameListContext.class,0);
		}
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public AllNamesListTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_allNamesListType; }
	}

	public final AllNamesListTypeContext allNamesListType() throws RecognitionException {
		AllNamesListTypeContext _localctx = new AllNamesListTypeContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_allNamesListType);
		try {
			setState(352);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(350);
				typedNameList();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(351);
				typeList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionList1Context extends ParserRuleContext {
		public List<Expression1Context> expression1() {
			return getRuleContexts(Expression1Context.class);
		}
		public Expression1Context expression1(int i) {
			return getRuleContext(Expression1Context.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public ExpressionList1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList1; }
	}

	public final ExpressionList1Context expressionList1() throws RecognitionException {
		ExpressionList1Context _localctx = new ExpressionList1Context(_ctx, getState());
		enterRule(_localctx, 50, RULE_expressionList1);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(359);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(354);
					expression1();
					setState(355);
					match(COMMA);
					}
					} 
				}
				setState(361);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(362);
			expression1();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionList2Context extends ParserRuleContext {
		public List<Expression2Context> expression2() {
			return getRuleContexts(Expression2Context.class);
		}
		public Expression2Context expression2(int i) {
			return getRuleContext(Expression2Context.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public ExpressionList2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList2; }
	}

	public final ExpressionList2Context expressionList2() throws RecognitionException {
		ExpressionList2Context _localctx = new ExpressionList2Context(_ctx, getState());
		enterRule(_localctx, 52, RULE_expressionList2);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(364);
					expression2();
					setState(365);
					match(COMMA);
					}
					} 
				}
				setState(371);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			setState(372);
			expression2();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_expressionList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(374);
					expression();
					setState(375);
					match(COMMA);
					}
					} 
				}
				setState(381);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			}
			setState(382);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Expression1Context extends ParserRuleContext {
		public TerminalNode NIL() { return getToken(LuauParser.NIL, 0); }
		public TerminalNode FALSE() { return getToken(LuauParser.FALSE, 0); }
		public TerminalNode TRUE() { return getToken(LuauParser.TRUE, 0); }
		public TerminalNode NUMBER() { return getToken(LuauParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(LuauParser.STRING, 0); }
		public FunctionContext function() {
			return getRuleContext(FunctionContext.class,0);
		}
		public PrefixexpContext prefixexp() {
			return getRuleContext(PrefixexpContext.class,0);
		}
		public TableconstructorContext tableconstructor() {
			return getRuleContext(TableconstructorContext.class,0);
		}
		public Unary_operationsContext unary_operations() {
			return getRuleContext(Unary_operationsContext.class,0);
		}
		public List<Expression1Context> expression1() {
			return getRuleContexts(Expression1Context.class);
		}
		public Expression1Context expression1(int i) {
			return getRuleContext(Expression1Context.class,i);
		}
		public List<Binary_operationsContext> binary_operations() {
			return getRuleContexts(Binary_operationsContext.class);
		}
		public Binary_operationsContext binary_operations(int i) {
			return getRuleContext(Binary_operationsContext.class,i);
		}
		public Expression1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression1; }
	}

	public final Expression1Context expression1() throws RecognitionException {
		Expression1Context _localctx = new Expression1Context(_ctx, getState());
		enterRule(_localctx, 56, RULE_expression1);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(396);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NIL:
				{
				setState(384);
				match(NIL);
				}
				break;
			case FALSE:
				{
				setState(385);
				match(FALSE);
				}
				break;
			case TRUE:
				{
				setState(386);
				match(TRUE);
				}
				break;
			case NUMBER:
				{
				setState(387);
				match(NUMBER);
				}
				break;
			case STRING:
				{
				setState(388);
				match(STRING);
				}
				break;
			case T__2:
				{
				setState(389);
				match(T__2);
				}
				break;
			case FUNCTION:
				{
				setState(390);
				function();
				}
				break;
			case NAME:
			case OPEN_PARENTHESIS:
				{
				setState(391);
				prefixexp();
				}
				break;
			case OPEN_CURLY_BRACKETS:
				{
				setState(392);
				tableconstructor();
				}
				break;
			case T__13:
			case T__26:
			case T__27:
				{
				setState(393);
				unary_operations();
				setState(394);
				expression1();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(403);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(398);
					binary_operations();
					setState(399);
					expression1();
					}
					} 
				}
				setState(405);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Expression2Context extends ParserRuleContext {
		public Expression1Context expression1() {
			return getRuleContext(Expression1Context.class,0);
		}
		public TerminalNode DOUBLE_COLON() { return getToken(LuauParser.DOUBLE_COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public Expression2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression2; }
	}

	public final Expression2Context expression2() throws RecognitionException {
		Expression2Context _localctx = new Expression2Context(_ctx, getState());
		enterRule(_localctx, 58, RULE_expression2);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
			expression1();
			setState(407);
			match(DOUBLE_COLON);
			setState(408);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public Expression1Context expression1() {
			return getRuleContext(Expression1Context.class,0);
		}
		public TerminalNode DOUBLE_COLON() { return getToken(LuauParser.DOUBLE_COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
			expression1();
			setState(413);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DOUBLE_COLON) {
				{
				setState(411);
				match(DOUBLE_COLON);
				setState(412);
				type();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(LuauParser.OPEN_PARENTHESIS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
		public List<VarSuffixContext> varSuffix() {
			return getRuleContexts(VarSuffixContext.class);
		}
		public VarSuffixContext varSuffix(int i) {
			return getRuleContext(VarSuffixContext.class,i);
		}
		public VarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var; }
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_var);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(421);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				{
				setState(415);
				match(NAME);
				}
				break;
			case OPEN_PARENTHESIS:
				{
				setState(416);
				match(OPEN_PARENTHESIS);
				setState(417);
				expression();
				setState(418);
				match(CLOSE_PARENTHESIS);
				setState(419);
				varSuffix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(426);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(423);
					varSuffix();
					}
					} 
				}
				setState(428);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrefixexpContext extends ParserRuleContext {
		public VarOrExpContext varOrExp() {
			return getRuleContext(VarOrExpContext.class,0);
		}
		public List<NameAndArgsContext> nameAndArgs() {
			return getRuleContexts(NameAndArgsContext.class);
		}
		public NameAndArgsContext nameAndArgs(int i) {
			return getRuleContext(NameAndArgsContext.class,i);
		}
		public PrefixexpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefixexp; }
	}

	public final PrefixexpContext prefixexp() throws RecognitionException {
		PrefixexpContext _localctx = new PrefixexpContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_prefixexp);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(429);
			varOrExp();
			setState(433);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(430);
					nameAndArgs();
					}
					} 
				}
				setState(435);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GlobalIteratorFunctionContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public ArgsContext args() {
			return getRuleContext(ArgsContext.class,0);
		}
		public GlobalIteratorFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_globalIteratorFunction; }
	}

	public final GlobalIteratorFunctionContext globalIteratorFunction() throws RecognitionException {
		GlobalIteratorFunctionContext _localctx = new GlobalIteratorFunctionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_globalIteratorFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			match(NAME);
			setState(437);
			args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctioncallContext extends ParserRuleContext {
		public VarOrExpContext varOrExp() {
			return getRuleContext(VarOrExpContext.class,0);
		}
		public List<NameAndArgsContext> nameAndArgs() {
			return getRuleContexts(NameAndArgsContext.class);
		}
		public NameAndArgsContext nameAndArgs(int i) {
			return getRuleContext(NameAndArgsContext.class,i);
		}
		public FunctioncallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functioncall; }
	}

	public final FunctioncallContext functioncall() throws RecognitionException {
		FunctioncallContext _localctx = new FunctioncallContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_functioncall);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			varOrExp();
			setState(441); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(440);
					nameAndArgs();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(443); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarOrExpContext extends ParserRuleContext {
		public VarContext var() {
			return getRuleContext(VarContext.class,0);
		}
		public TerminalNode OPEN_PARENTHESIS() { return getToken(LuauParser.OPEN_PARENTHESIS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
		public VarOrExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varOrExp; }
	}

	public final VarOrExpContext varOrExp() throws RecognitionException {
		VarOrExpContext _localctx = new VarOrExpContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_varOrExp);
		try {
			setState(450);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(445);
				var();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(446);
				match(OPEN_PARENTHESIS);
				setState(447);
				expression();
				setState(448);
				match(CLOSE_PARENTHESIS);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NameAndArgsContext extends ParserRuleContext {
		public ArgsContext args() {
			return getRuleContext(ArgsContext.class,0);
		}
		public TerminalNode COLON() { return getToken(LuauParser.COLON, 0); }
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public NameAndArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameAndArgs; }
	}

	public final NameAndArgsContext nameAndArgs() throws RecognitionException {
		NameAndArgsContext _localctx = new NameAndArgsContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_nameAndArgs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(452);
				match(COLON);
				setState(453);
				match(NAME);
				}
			}

			setState(456);
			args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VarSuffixContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CLOSE_SQUARE_BRACKETS() { return getToken(LuauParser.CLOSE_SQUARE_BRACKETS, 0); }
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public List<NameAndArgsContext> nameAndArgs() {
			return getRuleContexts(NameAndArgsContext.class);
		}
		public NameAndArgsContext nameAndArgs(int i) {
			return getRuleContext(NameAndArgsContext.class,i);
		}
		public VarSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varSuffix; }
	}

	public final VarSuffixContext varSuffix() throws RecognitionException {
		VarSuffixContext _localctx = new VarSuffixContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_varSuffix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(461);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 31)) & ~0x3f) == 0 && ((1L << (_la - 31)) & 162692536538759169L) != 0)) {
				{
				{
				setState(458);
				nameAndArgs();
				}
				}
				setState(463);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(470);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				{
				setState(464);
				match(T__3);
				setState(465);
				expression();
				setState(466);
				match(CLOSE_SQUARE_BRACKETS);
				}
				break;
			case T__4:
				{
				setState(468);
				match(T__4);
				setState(469);
				match(NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgsContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(LuauParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TableconstructorContext tableconstructor() {
			return getRuleContext(TableconstructorContext.class,0);
		}
		public TerminalNode STRING() { return getToken(LuauParser.STRING, 0); }
		public ArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_args; }
	}

	public final ArgsContext args() throws RecognitionException {
		ArgsContext _localctx = new ArgsContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_args);
		int _la;
		try {
			setState(479);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_PARENTHESIS:
				enterOuterAlt(_localctx, 1);
				{
				setState(472);
				match(OPEN_PARENTHESIS);
				setState(474);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 985302407593992L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 18874371L) != 0)) {
					{
					setState(473);
					expressionList();
					}
				}

				setState(476);
				match(CLOSE_PARENTHESIS);
				}
				break;
			case OPEN_CURLY_BRACKETS:
				enterOuterAlt(_localctx, 2);
				{
				setState(477);
				tableconstructor();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(478);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(LuauParser.FUNCTION, 0); }
		public FuncbodyContext funcbody() {
			return getRuleContext(FuncbodyContext.class,0);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			match(FUNCTION);
			setState(482);
			funcbody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncbodyContext extends ParserRuleContext {
		public FunctionParametersContext functionParameters() {
			return getRuleContext(FunctionParametersContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode END() { return getToken(LuauParser.END, 0); }
		public GenericTypeListContext genericTypeList() {
			return getRuleContext(GenericTypeListContext.class,0);
		}
		public TerminalNode COLON() { return getToken(LuauParser.COLON, 0); }
		public FunctionReturnsContext functionReturns() {
			return getRuleContext(FunctionReturnsContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(LuauParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(LuauParser.NEWLINE, i);
		}
		public FuncbodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcbody; }
	}

	public final FuncbodyContext funcbody() throws RecognitionException {
		FuncbodyContext _localctx = new FuncbodyContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_funcbody);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(488);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(484);
				match(T__0);
				setState(485);
				genericTypeList();
				setState(486);
				match(T__1);
				}
			}

			setState(490);
			functionParameters();
			setState(493);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(491);
				match(COLON);
				setState(492);
				functionReturns();
				}
			}

			setState(498);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(495);
					match(NEWLINE);
					}
					} 
				}
				setState(500);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
			}
			setState(501);
			block();
			setState(505);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(502);
				match(NEWLINE);
				}
				}
				setState(507);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(508);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionParametersContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(LuauParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public FunctionParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionParameters; }
	}

	public final FunctionParametersContext functionParameters() throws RecognitionException {
		FunctionParametersContext _localctx = new FunctionParametersContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_functionParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(510);
			match(OPEN_PARENTHESIS);
			setState(512);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2 || _la==NAME) {
				{
				setState(511);
				parameterList();
				}
			}

			setState(514);
			match(CLOSE_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionParametersTypeContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(LuauParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
		public ParameterListTypeContext parameterListType() {
			return getRuleContext(ParameterListTypeContext.class,0);
		}
		public FunctionParametersTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionParametersType; }
	}

	public final FunctionParametersTypeContext functionParametersType() throws RecognitionException {
		FunctionParametersTypeContext _localctx = new FunctionParametersTypeContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_functionParametersType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(516);
			match(OPEN_PARENTHESIS);
			setState(518);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 140741246451722L) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & 9437189L) != 0)) {
				{
				setState(517);
				parameterListType();
				}
			}

			setState(520);
			match(CLOSE_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionReturnsContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(LuauParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
		public ReturnListContext returnList() {
			return getRuleContext(ReturnListContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public VariadicReturnContext variadicReturn() {
			return getRuleContext(VariadicReturnContext.class,0);
		}
		public FunctionReturnsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionReturns; }
	}

	public final FunctionReturnsContext functionReturns() throws RecognitionException {
		FunctionReturnsContext _localctx = new FunctionReturnsContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_functionReturns);
		int _la;
		try {
			setState(529);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(522);
				match(OPEN_PARENTHESIS);
				setState(524);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 140741246451722L) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & 9437189L) != 0)) {
					{
					setState(523);
					returnList();
					}
				}

				setState(526);
				match(CLOSE_PARENTHESIS);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(527);
				type();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(528);
				variadicReturn();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterListContext extends ParserRuleContext {
		public AllNamesListContext allNamesList() {
			return getRuleContext(AllNamesListContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(LuauParser.COMMA, 0); }
		public VariadicParameterContext variadicParameter() {
			return getRuleContext(VariadicParameterContext.class,0);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_parameterList);
		int _la;
		try {
			setState(537);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(531);
				allNamesList();
				setState(534);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(532);
					match(COMMA);
					setState(533);
					variadicParameter();
					}
				}

				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(536);
				variadicParameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterListTypeContext extends ParserRuleContext {
		public AllNamesListTypeContext allNamesListType() {
			return getRuleContext(AllNamesListTypeContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(LuauParser.COMMA, 0); }
		public VariadicParameterTypeContext variadicParameterType() {
			return getRuleContext(VariadicParameterTypeContext.class,0);
		}
		public ParameterListTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterListType; }
	}

	public final ParameterListTypeContext parameterListType() throws RecognitionException {
		ParameterListTypeContext _localctx = new ParameterListTypeContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_parameterListType);
		int _la;
		try {
			setState(545);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(539);
				allNamesListType();
				setState(542);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(540);
					match(COMMA);
					setState(541);
					variadicParameterType();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(544);
				variadicParameterType();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnListContext extends ParserRuleContext {
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(LuauParser.COMMA, 0); }
		public VariadicReturnContext variadicReturn() {
			return getRuleContext(VariadicReturnContext.class,0);
		}
		public ReturnListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnList; }
	}

	public final ReturnListContext returnList() throws RecognitionException {
		ReturnListContext _localctx = new ReturnListContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_returnList);
		int _la;
		try {
			setState(553);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(547);
				typeList();
				setState(550);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(548);
					match(COMMA);
					setState(549);
					variadicReturn();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(552);
				variadicReturn();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariadicParameterContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(LuauParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public VariadicParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variadicParameter; }
	}

	public final VariadicParameterContext variadicParameter() throws RecognitionException {
		VariadicParameterContext _localctx = new VariadicParameterContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_variadicParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(555);
			match(T__2);
			setState(558);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(556);
				match(COLON);
				setState(557);
				type();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariadicParameterTypeContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public VariadicParameterTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variadicParameterType; }
	}

	public final VariadicParameterTypeContext variadicParameterType() throws RecognitionException {
		VariadicParameterTypeContext _localctx = new VariadicParameterTypeContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_variadicParameterType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(560);
			match(T__2);
			setState(561);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariadicReturnContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public VariadicReturnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variadicReturn; }
	}

	public final VariadicReturnContext variadicReturn() throws RecognitionException {
		VariadicReturnContext _localctx = new VariadicReturnContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_variadicReturn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(563);
			match(T__2);
			setState(564);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TableconstructorContext extends ParserRuleContext {
		public TerminalNode OPEN_CURLY_BRACKETS() { return getToken(LuauParser.OPEN_CURLY_BRACKETS, 0); }
		public TerminalNode CLOSE_CURLY_BRACKETS() { return getToken(LuauParser.CLOSE_CURLY_BRACKETS, 0); }
		public FieldListContext fieldList() {
			return getRuleContext(FieldListContext.class,0);
		}
		public TableconstructorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableconstructor; }
	}

	public final TableconstructorContext tableconstructor() throws RecognitionException {
		TableconstructorContext _localctx = new TableconstructorContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_tableconstructor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(566);
			match(OPEN_CURLY_BRACKETS);
			setState(568);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 985302407594008L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 18874371L) != 0)) {
				{
				setState(567);
				fieldList();
				}
			}

			setState(570);
			match(CLOSE_CURLY_BRACKETS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldListContext extends ParserRuleContext {
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public List<FieldsepContext> fieldsep() {
			return getRuleContexts(FieldsepContext.class);
		}
		public FieldsepContext fieldsep(int i) {
			return getRuleContext(FieldsepContext.class,i);
		}
		public FieldListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldList; }
	}

	public final FieldListContext fieldList() throws RecognitionException {
		FieldListContext _localctx = new FieldListContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_fieldList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(572);
			field();
			setState(578);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(573);
					fieldsep();
					setState(574);
					field();
					}
					} 
				}
				setState(580);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			}
			setState(582);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI_COLON || _la==COMMA) {
				{
				setState(581);
				fieldsep();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldContext extends ParserRuleContext {
		public List<Expression1Context> expression1() {
			return getRuleContexts(Expression1Context.class);
		}
		public Expression1Context expression1(int i) {
			return getRuleContext(Expression1Context.class,i);
		}
		public TerminalNode CLOSE_SQUARE_BRACKETS() { return getToken(LuauParser.CLOSE_SQUARE_BRACKETS, 0); }
		public TerminalNode EQUAL() { return getToken(LuauParser.EQUAL, 0); }
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_field);
		try {
			setState(594);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(584);
				match(T__3);
				setState(585);
				expression1();
				setState(586);
				match(CLOSE_SQUARE_BRACKETS);
				setState(587);
				match(EQUAL);
				setState(588);
				expression1();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(590);
				match(NAME);
				setState(591);
				match(EQUAL);
				setState(592);
				expression1();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(593);
				expression1();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldsepContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(LuauParser.COMMA, 0); }
		public TerminalNode SEMI_COLON() { return getToken(LuauParser.SEMI_COLON, 0); }
		public FieldsepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldsep; }
	}

	public final FieldsepContext fieldsep() throws RecognitionException {
		FieldsepContext _localctx = new FieldsepContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_fieldsep);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(596);
			_la = _input.LA(1);
			if ( !(_la==SEMI_COLON || _la==COMMA) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Compound_operationsContext extends ParserRuleContext {
		public Compound_operationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compound_operations; }
	}

	public final Compound_operationsContext compound_operations() throws RecognitionException {
		Compound_operationsContext _localctx = new Compound_operationsContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_compound_operations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(598);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8128L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Binary_operationsContext extends ParserRuleContext {
		public Binary_operationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binary_operations; }
	}

	public final Binary_operationsContext binary_operations() throws RecognitionException {
		Binary_operationsContext _localctx = new Binary_operationsContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_binary_operations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(600);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 134209542L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Unary_operationsContext extends ParserRuleContext {
		public Unary_operationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary_operations; }
	}

	public final Unary_operationsContext unary_operations() throws RecognitionException {
		Unary_operationsContext _localctx = new Unary_operationsContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_unary_operations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(602);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 402669568L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SimpleTypeContext extends ParserRuleContext {
		public TerminalNode NIL() { return getToken(LuauParser.NIL, 0); }
		public SingletonTypeContext singletonType() {
			return getRuleContext(SingletonTypeContext.class,0);
		}
		public List<TerminalNode> NAME() { return getTokens(LuauParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(LuauParser.NAME, i);
		}
		public TerminalNode DOT() { return getToken(LuauParser.DOT, 0); }
		public TypeParamsContext typeParams() {
			return getRuleContext(TypeParamsContext.class,0);
		}
		public TerminalNode TYPEOF() { return getToken(LuauParser.TYPEOF, 0); }
		public TerminalNode OPEN_PARENTHESIS() { return getToken(LuauParser.OPEN_PARENTHESIS, 0); }
		public Expression1Context expression1() {
			return getRuleContext(Expression1Context.class,0);
		}
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
		public TableTypeContext tableType() {
			return getRuleContext(TableTypeContext.class,0);
		}
		public FunctionTypeContext functionType() {
			return getRuleContext(FunctionTypeContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public SimpleTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleType; }
	}

	public final SimpleTypeContext simpleType() throws RecognitionException {
		SimpleTypeContext _localctx = new SimpleTypeContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_simpleType);
		int _la;
		try {
			setState(629);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(604);
				match(NIL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(605);
				singletonType();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(606);
				match(NAME);
				setState(609);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOT) {
					{
					setState(607);
					match(DOT);
					setState(608);
					match(NAME);
					}
				}

				setState(616);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(611);
					match(T__0);
					setState(613);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 140741246451722L) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & 9437189L) != 0)) {
						{
						setState(612);
						typeParams();
						}
					}

					setState(615);
					match(T__1);
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(618);
				match(TYPEOF);
				setState(619);
				match(OPEN_PARENTHESIS);
				setState(620);
				expression1();
				setState(621);
				match(CLOSE_PARENTHESIS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(623);
				tableType();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(624);
				functionType();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(625);
				match(OPEN_PARENTHESIS);
				setState(626);
				type();
				setState(627);
				match(CLOSE_PARENTHESIS);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SingletonTypeContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(LuauParser.STRING, 0); }
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public SingletonTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singletonType; }
	}

	public final SingletonTypeContext singletonType() throws RecognitionException {
		SingletonTypeContext _localctx = new SingletonTypeContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_singletonType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(631);
			_la = _input.LA(1);
			if ( !(((((_la - 29)) & ~0x3f) == 0 && ((1L << (_la - 29)) & 68719476743L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnionSuffixContext extends ParserRuleContext {
		public List<TerminalNode> UNION() { return getTokens(LuauParser.UNION); }
		public TerminalNode UNION(int i) {
			return getToken(LuauParser.UNION, i);
		}
		public List<SimpleTypeContext> simpleType() {
			return getRuleContexts(SimpleTypeContext.class);
		}
		public SimpleTypeContext simpleType(int i) {
			return getRuleContext(SimpleTypeContext.class,i);
		}
		public List<TerminalNode> OPTIONAL() { return getTokens(LuauParser.OPTIONAL); }
		public TerminalNode OPTIONAL(int i) {
			return getToken(LuauParser.OPTIONAL, i);
		}
		public UnionSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionSuffix; }
	}

	public final UnionSuffixContext unionSuffix() throws RecognitionException {
		UnionSuffixContext _localctx = new UnionSuffixContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_unionSuffix);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(640);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(633);
					match(UNION);
					setState(634);
					simpleType();
					setState(636);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
					case 1:
						{
						setState(635);
						match(OPTIONAL);
						}
						break;
					}
					}
					} 
				}
				setState(642);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IntersectionSuffixContext extends ParserRuleContext {
		public List<TerminalNode> INTERSECTION() { return getTokens(LuauParser.INTERSECTION); }
		public TerminalNode INTERSECTION(int i) {
			return getToken(LuauParser.INTERSECTION, i);
		}
		public List<SimpleTypeContext> simpleType() {
			return getRuleContexts(SimpleTypeContext.class);
		}
		public SimpleTypeContext simpleType(int i) {
			return getRuleContext(SimpleTypeContext.class,i);
		}
		public IntersectionSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intersectionSuffix; }
	}

	public final IntersectionSuffixContext intersectionSuffix() throws RecognitionException {
		IntersectionSuffixContext _localctx = new IntersectionSuffixContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_intersectionSuffix);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(647);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(643);
					match(INTERSECTION);
					setState(644);
					simpleType();
					}
					} 
				}
				setState(649);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeContext extends ParserRuleContext {
		public SimpleTypeContext simpleType() {
			return getRuleContext(SimpleTypeContext.class,0);
		}
		public UnionSuffixContext unionSuffix() {
			return getRuleContext(UnionSuffixContext.class,0);
		}
		public IntersectionSuffixContext intersectionSuffix() {
			return getRuleContext(IntersectionSuffixContext.class,0);
		}
		public TerminalNode OPTIONAL() { return getToken(LuauParser.OPTIONAL, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(650);
			simpleType();
			setState(652);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,65,_ctx) ) {
			case 1:
				{
				setState(651);
				match(OPTIONAL);
				}
				break;
			}
			setState(656);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				{
				setState(654);
				unionSuffix();
				}
				break;
			case 2:
				{
				setState(655);
				intersectionSuffix();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GenericTypePackParameterContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public GenericTypePackParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericTypePackParameter; }
	}

	public final GenericTypePackParameterContext genericTypePackParameter() throws RecognitionException {
		GenericTypePackParameterContext _localctx = new GenericTypePackParameterContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_genericTypePackParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(658);
			match(NAME);
			setState(659);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GenericTypeListContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public GenericTypeListContext genericTypeList() {
			return getRuleContext(GenericTypeListContext.class,0);
		}
		public List<GenericTypePackParameterContext> genericTypePackParameter() {
			return getRuleContexts(GenericTypePackParameterContext.class);
		}
		public GenericTypePackParameterContext genericTypePackParameter(int i) {
			return getRuleContext(GenericTypePackParameterContext.class,i);
		}
		public GenericTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericTypeList; }
	}

	public final GenericTypeListContext genericTypeList() throws RecognitionException {
		GenericTypeListContext _localctx = new GenericTypeListContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_genericTypeList);
		try {
			int _alt;
			setState(674);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(661);
				match(NAME);
				setState(664);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,67,_ctx) ) {
				case 1:
					{
					setState(662);
					match(COMMA);
					setState(663);
					genericTypeList();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(666);
				genericTypePackParameter();
				setState(671);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(667);
						match(COMMA);
						setState(668);
						genericTypePackParameter();
						}
						} 
					}
					setState(673);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GenericTypePackParameterWithDefaultContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public TerminalNode EQUAL() { return getToken(LuauParser.EQUAL, 0); }
		public TypePackContext typePack() {
			return getRuleContext(TypePackContext.class,0);
		}
		public VariadicTypePackContext variadicTypePack() {
			return getRuleContext(VariadicTypePackContext.class,0);
		}
		public GenericTypePackContext genericTypePack() {
			return getRuleContext(GenericTypePackContext.class,0);
		}
		public GenericTypePackParameterWithDefaultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericTypePackParameterWithDefault; }
	}

	public final GenericTypePackParameterWithDefaultContext genericTypePackParameterWithDefault() throws RecognitionException {
		GenericTypePackParameterWithDefaultContext _localctx = new GenericTypePackParameterWithDefaultContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_genericTypePackParameterWithDefault);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(676);
			match(NAME);
			setState(677);
			match(T__2);
			setState(678);
			match(EQUAL);
			setState(682);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_PARENTHESIS:
				{
				setState(679);
				typePack();
				}
				break;
			case T__2:
				{
				setState(680);
				variadicTypePack();
				}
				break;
			case NAME:
				{
				setState(681);
				genericTypePack();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GenericTypeListWithDefaultsContext extends ParserRuleContext {
		public GenericTypeListContext genericTypeList() {
			return getRuleContext(GenericTypeListContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(LuauParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LuauParser.COMMA, i);
		}
		public List<GenericTypePackParameterWithDefaultContext> genericTypePackParameterWithDefault() {
			return getRuleContexts(GenericTypePackParameterWithDefaultContext.class);
		}
		public GenericTypePackParameterWithDefaultContext genericTypePackParameterWithDefault(int i) {
			return getRuleContext(GenericTypePackParameterWithDefaultContext.class,i);
		}
		public List<TerminalNode> NAME() { return getTokens(LuauParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(LuauParser.NAME, i);
		}
		public List<TerminalNode> EQUAL() { return getTokens(LuauParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(LuauParser.EQUAL, i);
		}
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public GenericTypeListWithDefaultsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericTypeListWithDefaults; }
	}

	public final GenericTypeListWithDefaultsContext genericTypeListWithDefaults() throws RecognitionException {
		GenericTypeListWithDefaultsContext _localctx = new GenericTypeListWithDefaultsContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_genericTypeListWithDefaults);
		int _la;
		try {
			int _alt;
			setState(734);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(684);
				genericTypeList();
				setState(689);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(685);
					match(COMMA);
					setState(686);
					genericTypePackParameterWithDefault();
					}
					}
					setState(691);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(692);
				match(NAME);
				setState(697);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(693);
						match(COMMA);
						setState(694);
						match(NAME);
						}
						} 
					}
					setState(699);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
				}
				setState(706);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(700);
						match(COMMA);
						setState(701);
						match(NAME);
						setState(702);
						match(EQUAL);
						setState(703);
						type();
						}
						} 
					}
					setState(708);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
				}
				setState(713);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(709);
					match(COMMA);
					setState(710);
					genericTypePackParameterWithDefault();
					}
					}
					setState(715);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(716);
				match(NAME);
				setState(717);
				match(EQUAL);
				setState(718);
				type();
				setState(723);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(719);
					match(COMMA);
					setState(720);
					genericTypePackParameterWithDefault();
					}
					}
					setState(725);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(726);
				genericTypePackParameterWithDefault();
				setState(731);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(727);
					match(COMMA);
					setState(728);
					genericTypePackParameterWithDefault();
					}
					}
					setState(733);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeListContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(LuauParser.COMMA, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeList; }
	}

	public final TypeListContext typeList() throws RecognitionException {
		TypeListContext _localctx = new TypeListContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_typeList);
		try {
			setState(743);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__28:
			case T__29:
			case STRING:
			case NIL:
			case NAME:
			case TYPEOF:
			case OPEN_PARENTHESIS:
			case OPEN_CURLY_BRACKETS:
				enterOuterAlt(_localctx, 1);
				{
				setState(736);
				type();
				setState(739);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
				case 1:
					{
					setState(737);
					match(COMMA);
					setState(738);
					typeList();
					}
					break;
				}
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(741);
				match(T__2);
				setState(742);
				type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeParamsContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TypePackContext typePack() {
			return getRuleContext(TypePackContext.class,0);
		}
		public VariadicTypePackContext variadicTypePack() {
			return getRuleContext(VariadicTypePackContext.class,0);
		}
		public GenericTypePackContext genericTypePack() {
			return getRuleContext(GenericTypePackContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(LuauParser.COMMA, 0); }
		public TypeParamsContext typeParams() {
			return getRuleContext(TypeParamsContext.class,0);
		}
		public TypeParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParams; }
	}

	public final TypeParamsContext typeParams() throws RecognitionException {
		TypeParamsContext _localctx = new TypeParamsContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_typeParams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(749);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
			case 1:
				{
				setState(745);
				type();
				}
				break;
			case 2:
				{
				setState(746);
				typePack();
				}
				break;
			case 3:
				{
				setState(747);
				variadicTypePack();
				}
				break;
			case 4:
				{
				setState(748);
				genericTypePack();
				}
				break;
			}
			setState(753);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(751);
				match(COMMA);
				setState(752);
				typeParams();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypePackContext extends ParserRuleContext {
		public TerminalNode OPEN_PARENTHESIS() { return getToken(LuauParser.OPEN_PARENTHESIS, 0); }
		public TerminalNode CLOSE_PARENTHESIS() { return getToken(LuauParser.CLOSE_PARENTHESIS, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TypePackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typePack; }
	}

	public final TypePackContext typePack() throws RecognitionException {
		TypePackContext _localctx = new TypePackContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_typePack);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(755);
			match(OPEN_PARENTHESIS);
			setState(757);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 140741246451722L) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & 9437189L) != 0)) {
				{
				setState(756);
				typeList();
				}
			}

			setState(759);
			match(CLOSE_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GenericTypePackContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public GenericTypePackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericTypePack; }
	}

	public final GenericTypePackContext genericTypePack() throws RecognitionException {
		GenericTypePackContext _localctx = new GenericTypePackContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_genericTypePack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(761);
			match(NAME);
			setState(762);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariadicTypePackContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public VariadicTypePackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variadicTypePack; }
	}

	public final VariadicTypePackContext variadicTypePack() throws RecognitionException {
		VariadicTypePackContext _localctx = new VariadicTypePackContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_variadicTypePack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(764);
			match(T__2);
			setState(765);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionTypeContext extends ParserRuleContext {
		public FunctionParametersTypeContext functionParametersType() {
			return getRuleContext(FunctionParametersTypeContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(LuauParser.ARROW, 0); }
		public FunctionReturnsContext functionReturns() {
			return getRuleContext(FunctionReturnsContext.class,0);
		}
		public GenericTypeListContext genericTypeList() {
			return getRuleContext(GenericTypeListContext.class,0);
		}
		public FunctionTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionType; }
	}

	public final FunctionTypeContext functionType() throws RecognitionException {
		FunctionTypeContext _localctx = new FunctionTypeContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_functionType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(771);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(767);
				match(T__0);
				setState(768);
				genericTypeList();
				setState(769);
				match(T__1);
				}
			}

			setState(773);
			functionParametersType();
			setState(774);
			match(ARROW);
			setState(775);
			functionReturns();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TableIndexerContext extends ParserRuleContext {
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public TerminalNode CLOSE_SQUARE_BRACKETS() { return getToken(LuauParser.CLOSE_SQUARE_BRACKETS, 0); }
		public TerminalNode COLON() { return getToken(LuauParser.COLON, 0); }
		public TableIndexerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableIndexer; }
	}

	public final TableIndexerContext tableIndexer() throws RecognitionException {
		TableIndexerContext _localctx = new TableIndexerContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_tableIndexer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(777);
			match(T__3);
			setState(778);
			type();
			setState(779);
			match(CLOSE_SQUARE_BRACKETS);
			setState(780);
			match(COLON);
			setState(781);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TablePropertyContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public TerminalNode COLON() { return getToken(LuauParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TablePropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableProperty; }
	}

	public final TablePropertyContext tableProperty() throws RecognitionException {
		TablePropertyContext _localctx = new TablePropertyContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_tableProperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(783);
			match(NAME);
			setState(784);
			match(COLON);
			setState(785);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TablePropOrIndexerContext extends ParserRuleContext {
		public TableIndexerContext tableIndexer() {
			return getRuleContext(TableIndexerContext.class,0);
		}
		public TablePropertyContext tableProperty() {
			return getRuleContext(TablePropertyContext.class,0);
		}
		public TablePropOrIndexerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tablePropOrIndexer; }
	}

	public final TablePropOrIndexerContext tablePropOrIndexer() throws RecognitionException {
		TablePropOrIndexerContext _localctx = new TablePropOrIndexerContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_tablePropOrIndexer);
		try {
			setState(789);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(787);
				tableIndexer();
				}
				break;
			case NAME:
				enterOuterAlt(_localctx, 2);
				{
				setState(788);
				tableProperty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropListContext extends ParserRuleContext {
		public List<TablePropOrIndexerContext> tablePropOrIndexer() {
			return getRuleContexts(TablePropOrIndexerContext.class);
		}
		public TablePropOrIndexerContext tablePropOrIndexer(int i) {
			return getRuleContext(TablePropOrIndexerContext.class,i);
		}
		public List<FieldsepContext> fieldsep() {
			return getRuleContexts(FieldsepContext.class);
		}
		public FieldsepContext fieldsep(int i) {
			return getRuleContext(FieldsepContext.class,i);
		}
		public PropListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propList; }
	}

	public final PropListContext propList() throws RecognitionException {
		PropListContext _localctx = new PropListContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_propList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(791);
			tablePropOrIndexer();
			setState(797);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,85,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(792);
					fieldsep();
					setState(793);
					tablePropOrIndexer();
					}
					} 
				}
				setState(799);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,85,_ctx);
			}
			setState(801);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI_COLON || _la==COMMA) {
				{
				setState(800);
				fieldsep();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TableTypeContext extends ParserRuleContext {
		public TerminalNode OPEN_CURLY_BRACKETS() { return getToken(LuauParser.OPEN_CURLY_BRACKETS, 0); }
		public TerminalNode CLOSE_CURLY_BRACKETS() { return getToken(LuauParser.CLOSE_CURLY_BRACKETS, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public PropListContext propList() {
			return getRuleContext(PropListContext.class,0);
		}
		public TableTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableType; }
	}

	public final TableTypeContext tableType() throws RecognitionException {
		TableTypeContext _localctx = new TableTypeContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_tableType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(803);
			match(OPEN_CURLY_BRACKETS);
			setState(806);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,87,_ctx) ) {
			case 1:
				{
				setState(804);
				type();
				}
				break;
			case 2:
				{
				setState(805);
				propList();
				}
				break;
			}
			setState(808);
			match(CLOSE_CURLY_BRACKETS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypedNameContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public TerminalNode COLON() { return getToken(LuauParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TypedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typedName; }
	}

	public final TypedNameContext typedName() throws RecognitionException {
		TypedNameContext _localctx = new TypedNameContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_typedName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(810);
			match(NAME);
			setState(811);
			match(COLON);
			setState(812);
			type();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OptionalTypedNameContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(LuauParser.NAME, 0); }
		public TerminalNode COLON() { return getToken(LuauParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public OptionalTypedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalTypedName; }
	}

	public final OptionalTypedNameContext optionalTypedName() throws RecognitionException {
		OptionalTypedNameContext _localctx = new OptionalTypedNameContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_optionalTypedName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(814);
			match(NAME);
			setState(817);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(815);
				match(COLON);
				setState(816);
				type();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommentContext extends ParserRuleContext {
		public TerminalNode SINGLE_LINE_COMMENT() { return getToken(LuauParser.SINGLE_LINE_COMMENT, 0); }
		public TerminalNode MULTI_LINE_COMMENT() { return getToken(LuauParser.MULTI_LINE_COMMENT, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(819);
			_la = _input.LA(1);
			if ( !(_la==MULTI_LINE_COMMENT || _la==SINGLE_LINE_COMMENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001]\u0336\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007@\u0002"+
		"A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007E\u0002"+
		"F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007J\u0002"+
		"K\u0007K\u0002L\u0007L\u0002M\u0007M\u0002N\u0007N\u0002O\u0007O\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003\u0001\u00a6"+
		"\b\u0001\u0005\u0001\u00a8\b\u0001\n\u0001\f\u0001\u00ab\t\u0001\u0001"+
		"\u0001\u0001\u0001\u0003\u0001\u00af\b\u0001\u0003\u0001\u00b1\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u00c3\b\u0003"+
		"\u0001\u0004\u0001\u0004\u0003\u0004\u00c7\b\u0004\u0001\u0004\u0003\u0004"+
		"\u00ca\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0005\n\u00ea\b\n\n\n\f\n\u00ed\t\n\u0001\n\u0001\n\u0003\n"+
		"\u00f1\b\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u00fd\b\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003"+
		"\f\u0106\b\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u0118\b\u000f\u0001\u0010"+
		"\u0003\u0010\u011b\b\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0003\u0010\u0123\b\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0005\u0011\u012b\b\u0011"+
		"\n\u0011\f\u0011\u012e\t\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u0132"+
		"\b\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012\u0137\b\u0012"+
		"\n\u0012\f\u0012\u013a\t\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0003\u0013\u0140\b\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0005"+
		"\u0014\u0145\b\u0014\n\u0014\f\u0014\u0148\t\u0014\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0005\u0015\u014d\b\u0015\n\u0015\f\u0015\u0150\t\u0015\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u0155\b\u0016\n\u0016\f\u0016"+
		"\u0158\t\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u015d\b"+
		"\u0017\u0001\u0018\u0001\u0018\u0003\u0018\u0161\b\u0018\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0005\u0019\u0166\b\u0019\n\u0019\f\u0019\u0169\t\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0005\u001a"+
		"\u0170\b\u001a\n\u001a\f\u001a\u0173\t\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001b\u0001\u001b\u0001\u001b\u0005\u001b\u017a\b\u001b\n\u001b\f\u001b"+
		"\u017d\t\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u018d\b\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001c\u0005\u001c\u0192\b\u001c\n\u001c\f\u001c\u0195"+
		"\t\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001"+
		"\u001e\u0001\u001e\u0003\u001e\u019e\b\u001e\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u01a6\b\u001f\u0001"+
		"\u001f\u0005\u001f\u01a9\b\u001f\n\u001f\f\u001f\u01ac\t\u001f\u0001 "+
		"\u0001 \u0005 \u01b0\b \n \f \u01b3\t \u0001!\u0001!\u0001!\u0001\"\u0001"+
		"\"\u0004\"\u01ba\b\"\u000b\"\f\"\u01bb\u0001#\u0001#\u0001#\u0001#\u0001"+
		"#\u0003#\u01c3\b#\u0001$\u0001$\u0003$\u01c7\b$\u0001$\u0001$\u0001%\u0005"+
		"%\u01cc\b%\n%\f%\u01cf\t%\u0001%\u0001%\u0001%\u0001%\u0001%\u0001%\u0003"+
		"%\u01d7\b%\u0001&\u0001&\u0003&\u01db\b&\u0001&\u0001&\u0001&\u0003&\u01e0"+
		"\b&\u0001\'\u0001\'\u0001\'\u0001(\u0001(\u0001(\u0001(\u0003(\u01e9\b"+
		"(\u0001(\u0001(\u0001(\u0003(\u01ee\b(\u0001(\u0005(\u01f1\b(\n(\f(\u01f4"+
		"\t(\u0001(\u0001(\u0005(\u01f8\b(\n(\f(\u01fb\t(\u0001(\u0001(\u0001)"+
		"\u0001)\u0003)\u0201\b)\u0001)\u0001)\u0001*\u0001*\u0003*\u0207\b*\u0001"+
		"*\u0001*\u0001+\u0001+\u0003+\u020d\b+\u0001+\u0001+\u0001+\u0003+\u0212"+
		"\b+\u0001,\u0001,\u0001,\u0003,\u0217\b,\u0001,\u0003,\u021a\b,\u0001"+
		"-\u0001-\u0001-\u0003-\u021f\b-\u0001-\u0003-\u0222\b-\u0001.\u0001.\u0001"+
		".\u0003.\u0227\b.\u0001.\u0003.\u022a\b.\u0001/\u0001/\u0001/\u0003/\u022f"+
		"\b/\u00010\u00010\u00010\u00011\u00011\u00011\u00012\u00012\u00032\u0239"+
		"\b2\u00012\u00012\u00013\u00013\u00013\u00013\u00053\u0241\b3\n3\f3\u0244"+
		"\t3\u00013\u00033\u0247\b3\u00014\u00014\u00014\u00014\u00014\u00014\u0001"+
		"4\u00014\u00014\u00014\u00034\u0253\b4\u00015\u00015\u00016\u00016\u0001"+
		"7\u00017\u00018\u00018\u00019\u00019\u00019\u00019\u00019\u00039\u0262"+
		"\b9\u00019\u00019\u00039\u0266\b9\u00019\u00039\u0269\b9\u00019\u0001"+
		"9\u00019\u00019\u00019\u00019\u00019\u00019\u00019\u00019\u00019\u0003"+
		"9\u0276\b9\u0001:\u0001:\u0001;\u0001;\u0001;\u0003;\u027d\b;\u0005;\u027f"+
		"\b;\n;\f;\u0282\t;\u0001<\u0001<\u0005<\u0286\b<\n<\f<\u0289\t<\u0001"+
		"=\u0001=\u0003=\u028d\b=\u0001=\u0001=\u0003=\u0291\b=\u0001>\u0001>\u0001"+
		">\u0001?\u0001?\u0001?\u0003?\u0299\b?\u0001?\u0001?\u0001?\u0005?\u029e"+
		"\b?\n?\f?\u02a1\t?\u0003?\u02a3\b?\u0001@\u0001@\u0001@\u0001@\u0001@"+
		"\u0001@\u0003@\u02ab\b@\u0001A\u0001A\u0001A\u0005A\u02b0\bA\nA\fA\u02b3"+
		"\tA\u0001A\u0001A\u0001A\u0005A\u02b8\bA\nA\fA\u02bb\tA\u0001A\u0001A"+
		"\u0001A\u0001A\u0005A\u02c1\bA\nA\fA\u02c4\tA\u0001A\u0001A\u0005A\u02c8"+
		"\bA\nA\fA\u02cb\tA\u0001A\u0001A\u0001A\u0001A\u0001A\u0005A\u02d2\bA"+
		"\nA\fA\u02d5\tA\u0001A\u0001A\u0001A\u0005A\u02da\bA\nA\fA\u02dd\tA\u0003"+
		"A\u02df\bA\u0001B\u0001B\u0001B\u0003B\u02e4\bB\u0001B\u0001B\u0003B\u02e8"+
		"\bB\u0001C\u0001C\u0001C\u0001C\u0003C\u02ee\bC\u0001C\u0001C\u0003C\u02f2"+
		"\bC\u0001D\u0001D\u0003D\u02f6\bD\u0001D\u0001D\u0001E\u0001E\u0001E\u0001"+
		"F\u0001F\u0001F\u0001G\u0001G\u0001G\u0001G\u0003G\u0304\bG\u0001G\u0001"+
		"G\u0001G\u0001G\u0001H\u0001H\u0001H\u0001H\u0001H\u0001H\u0001I\u0001"+
		"I\u0001I\u0001I\u0001J\u0001J\u0003J\u0316\bJ\u0001K\u0001K\u0001K\u0001"+
		"K\u0005K\u031c\bK\nK\fK\u031f\tK\u0001K\u0003K\u0322\bK\u0001L\u0001L"+
		"\u0001L\u0003L\u0327\bL\u0001L\u0001L\u0001M\u0001M\u0001M\u0001M\u0001"+
		"N\u0001N\u0001N\u0003N\u0332\bN\u0001O\u0001O\u0001O\u0000\u0000P\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c"+
		"\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084"+
		"\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c"+
		"\u009e\u0000\u0006\u0002\u0000OOTT\u0001\u0000\u0006\f\u0002\u0000\u0001"+
		"\u0002\r\u001a\u0002\u0000\u000e\u000e\u001b\u001c\u0002\u0000\u001d\u001f"+
		"AA\u0001\u0000KL\u0361\u0000\u00a0\u0001\u0000\u0000\u0000\u0002\u00a9"+
		"\u0001\u0000\u0000\u0000\u0004\u00b2\u0001\u0000\u0000\u0000\u0006\u00c2"+
		"\u0001\u0000\u0000\u0000\b\u00c9\u0001\u0000\u0000\u0000\n\u00cb\u0001"+
		"\u0000\u0000\u0000\f\u00cf\u0001\u0000\u0000\u0000\u000e\u00d3\u0001\u0000"+
		"\u0000\u0000\u0010\u00d7\u0001\u0000\u0000\u0000\u0012\u00db\u0001\u0000"+
		"\u0000\u0000\u0014\u00e0\u0001\u0000\u0000\u0000\u0016\u00f4\u0001\u0000"+
		"\u0000\u0000\u0018\u0100\u0001\u0000\u0000\u0000\u001a\u0109\u0001\u0000"+
		"\u0000\u0000\u001c\u010d\u0001\u0000\u0000\u0000\u001e\u0112\u0001\u0000"+
		"\u0000\u0000 \u011a\u0001\u0000\u0000\u0000\"\u0127\u0001\u0000\u0000"+
		"\u0000$\u0133\u0001\u0000\u0000\u0000&\u013b\u0001\u0000\u0000\u0000("+
		"\u0141\u0001\u0000\u0000\u0000*\u0149\u0001\u0000\u0000\u0000,\u0151\u0001"+
		"\u0000\u0000\u0000.\u015c\u0001\u0000\u0000\u00000\u0160\u0001\u0000\u0000"+
		"\u00002\u0167\u0001\u0000\u0000\u00004\u0171\u0001\u0000\u0000\u00006"+
		"\u017b\u0001\u0000\u0000\u00008\u018c\u0001\u0000\u0000\u0000:\u0196\u0001"+
		"\u0000\u0000\u0000<\u019a\u0001\u0000\u0000\u0000>\u01a5\u0001\u0000\u0000"+
		"\u0000@\u01ad\u0001\u0000\u0000\u0000B\u01b4\u0001\u0000\u0000\u0000D"+
		"\u01b7\u0001\u0000\u0000\u0000F\u01c2\u0001\u0000\u0000\u0000H\u01c6\u0001"+
		"\u0000\u0000\u0000J\u01cd\u0001\u0000\u0000\u0000L\u01df\u0001\u0000\u0000"+
		"\u0000N\u01e1\u0001\u0000\u0000\u0000P\u01e8\u0001\u0000\u0000\u0000R"+
		"\u01fe\u0001\u0000\u0000\u0000T\u0204\u0001\u0000\u0000\u0000V\u0211\u0001"+
		"\u0000\u0000\u0000X\u0219\u0001\u0000\u0000\u0000Z\u0221\u0001\u0000\u0000"+
		"\u0000\\\u0229\u0001\u0000\u0000\u0000^\u022b\u0001\u0000\u0000\u0000"+
		"`\u0230\u0001\u0000\u0000\u0000b\u0233\u0001\u0000\u0000\u0000d\u0236"+
		"\u0001\u0000\u0000\u0000f\u023c\u0001\u0000\u0000\u0000h\u0252\u0001\u0000"+
		"\u0000\u0000j\u0254\u0001\u0000\u0000\u0000l\u0256\u0001\u0000\u0000\u0000"+
		"n\u0258\u0001\u0000\u0000\u0000p\u025a\u0001\u0000\u0000\u0000r\u0275"+
		"\u0001\u0000\u0000\u0000t\u0277\u0001\u0000\u0000\u0000v\u0280\u0001\u0000"+
		"\u0000\u0000x\u0287\u0001\u0000\u0000\u0000z\u028a\u0001\u0000\u0000\u0000"+
		"|\u0292\u0001\u0000\u0000\u0000~\u02a2\u0001\u0000\u0000\u0000\u0080\u02a4"+
		"\u0001\u0000\u0000\u0000\u0082\u02de\u0001\u0000\u0000\u0000\u0084\u02e7"+
		"\u0001\u0000\u0000\u0000\u0086\u02ed\u0001\u0000\u0000\u0000\u0088\u02f3"+
		"\u0001\u0000\u0000\u0000\u008a\u02f9\u0001\u0000\u0000\u0000\u008c\u02fc"+
		"\u0001\u0000\u0000\u0000\u008e\u0303\u0001\u0000\u0000\u0000\u0090\u0309"+
		"\u0001\u0000\u0000\u0000\u0092\u030f\u0001\u0000\u0000\u0000\u0094\u0315"+
		"\u0001\u0000\u0000\u0000\u0096\u0317\u0001\u0000\u0000\u0000\u0098\u0323"+
		"\u0001\u0000\u0000\u0000\u009a\u032a\u0001\u0000\u0000\u0000\u009c\u032e"+
		"\u0001\u0000\u0000\u0000\u009e\u0333\u0001\u0000\u0000\u0000\u00a0\u00a1"+
		"\u0003\u0002\u0001\u0000\u00a1\u00a2\u0005\u0000\u0000\u0001\u00a2\u0001"+
		"\u0001\u0000\u0000\u0000\u00a3\u00a5\u0003\u0006\u0003\u0000\u00a4\u00a6"+
		"\u0005O\u0000\u0000\u00a5\u00a4\u0001\u0000\u0000\u0000\u00a5\u00a6\u0001"+
		"\u0000\u0000\u0000\u00a6\u00a8\u0001\u0000\u0000\u0000\u00a7\u00a3\u0001"+
		"\u0000\u0000\u0000\u00a8\u00ab\u0001\u0000\u0000\u0000\u00a9\u00a7\u0001"+
		"\u0000\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u00b0\u0001"+
		"\u0000\u0000\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ac\u00ae\u0003"+
		"\b\u0004\u0000\u00ad\u00af\u0005O\u0000\u0000\u00ae\u00ad\u0001\u0000"+
		"\u0000\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u00b1\u0001\u0000"+
		"\u0000\u0000\u00b0\u00ac\u0001\u0000\u0000\u0000\u00b0\u00b1\u0001\u0000"+
		"\u0000\u0000\u00b1\u0003\u0001\u0000\u0000\u0000\u00b2\u00b3\u0003\u0002"+
		"\u0001\u0000\u00b3\u0005\u0001\u0000\u0000\u0000\u00b4\u00c3\u0003\n\u0005"+
		"\u0000\u00b5\u00c3\u0003\f\u0006\u0000\u00b6\u00c3\u0003D\"\u0000\u00b7"+
		"\u00c3\u0003\u000e\u0007\u0000\u00b8\u00c3\u0003\u0010\b\u0000\u00b9\u00c3"+
		"\u0003\u0012\t\u0000\u00ba\u00c3\u0003\u0014\n\u0000\u00bb\u00c3\u0003"+
		"\u0016\u000b\u0000\u00bc\u00c3\u0003\u0018\f\u0000\u00bd\u00c3\u0003\u001a"+
		"\r\u0000\u00be\u00c3\u0003\u001c\u000e\u0000\u00bf\u00c3\u0003\u001e\u000f"+
		"\u0000\u00c0\u00c3\u0003 \u0010\u0000\u00c1\u00c3\u0003\u009eO\u0000\u00c2"+
		"\u00b4\u0001\u0000\u0000\u0000\u00c2\u00b5\u0001\u0000\u0000\u0000\u00c2"+
		"\u00b6\u0001\u0000\u0000\u0000\u00c2\u00b7\u0001\u0000\u0000\u0000\u00c2"+
		"\u00b8\u0001\u0000\u0000\u0000\u00c2\u00b9\u0001\u0000\u0000\u0000\u00c2"+
		"\u00ba\u0001\u0000\u0000\u0000\u00c2\u00bb\u0001\u0000\u0000\u0000\u00c2"+
		"\u00bc\u0001\u0000\u0000\u0000\u00c2\u00bd\u0001\u0000\u0000\u0000\u00c2"+
		"\u00be\u0001\u0000\u0000\u0000\u00c2\u00bf\u0001\u0000\u0000\u0000\u00c2"+
		"\u00c0\u0001\u0000\u0000\u0000\u00c2\u00c1\u0001\u0000\u0000\u0000\u00c3"+
		"\u0007\u0001\u0000\u0000\u0000\u00c4\u00c6\u00052\u0000\u0000\u00c5\u00c7"+
		"\u00036\u001b\u0000\u00c6\u00c5\u0001\u0000\u0000\u0000\u00c6\u00c7\u0001"+
		"\u0000\u0000\u0000\u00c7\u00ca\u0001\u0000\u0000\u0000\u00c8\u00ca\u0005"+
		"4\u0000\u0000\u00c9\u00c4\u0001\u0000\u0000\u0000\u00c9\u00c8\u0001\u0000"+
		"\u0000\u0000\u00ca\t\u0001\u0000\u0000\u0000\u00cb\u00cc\u0003$\u0012"+
		"\u0000\u00cc\u00cd\u0005R\u0000\u0000\u00cd\u00ce\u00032\u0019\u0000\u00ce"+
		"\u000b\u0001\u0000\u0000\u0000\u00cf\u00d0\u0003>\u001f\u0000\u00d0\u00d1"+
		"\u0003l6\u0000\u00d1\u00d2\u0003<\u001e\u0000\u00d2\r\u0001\u0000\u0000"+
		"\u0000\u00d3\u00d4\u0005:\u0000\u0000\u00d4\u00d5\u0003\u0004\u0002\u0000"+
		"\u00d5\u00d6\u00053\u0000\u0000\u00d6\u000f\u0001\u0000\u0000\u0000\u00d7"+
		"\u00d8\u00059\u0000\u0000\u00d8\u00d9\u0003<\u001e\u0000\u00d9\u00da\u0003"+
		"\u000e\u0007\u0000\u00da\u0011\u0001\u0000\u0000\u0000\u00db\u00dc\u0005"+
		"=\u0000\u0000\u00dc\u00dd\u0003\u0004\u0002\u0000\u00dd\u00de\u0005>\u0000"+
		"\u0000\u00de\u00df\u0003<\u001e\u0000\u00df\u0013\u0001\u0000\u0000\u0000"+
		"\u00e0\u00e1\u00055\u0000\u0000\u00e1\u00e2\u0003<\u001e\u0000\u00e2\u00e3"+
		"\u00057\u0000\u0000\u00e3\u00eb\u0003\u0004\u0002\u0000\u00e4\u00e5\u0005"+
		"6\u0000\u0000\u00e5\u00e6\u0003<\u001e\u0000\u00e6\u00e7\u00057\u0000"+
		"\u0000\u00e7\u00e8\u0003\u0004\u0002\u0000\u00e8\u00ea\u0001\u0000\u0000"+
		"\u0000\u00e9\u00e4\u0001\u0000\u0000\u0000\u00ea\u00ed\u0001\u0000\u0000"+
		"\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000\u00eb\u00ec\u0001\u0000\u0000"+
		"\u0000\u00ec\u00f0\u0001\u0000\u0000\u0000\u00ed\u00eb\u0001\u0000\u0000"+
		"\u0000\u00ee\u00ef\u00058\u0000\u0000\u00ef\u00f1\u0003\u0004\u0002\u0000"+
		"\u00f0\u00ee\u0001\u0000\u0000\u0000\u00f0\u00f1\u0001\u0000\u0000\u0000"+
		"\u00f1\u00f2\u0001\u0000\u0000\u0000\u00f2\u00f3\u00053\u0000\u0000\u00f3"+
		"\u0015\u0001\u0000\u0000\u0000\u00f4\u00f5\u0005;\u0000\u0000\u00f5\u00f6"+
		"\u0003\u009cN\u0000\u00f6\u00f7\u0005R\u0000\u0000\u00f7\u00f8\u0003<"+
		"\u001e\u0000\u00f8\u00f9\u0005T\u0000\u0000\u00f9\u00fc\u0003<\u001e\u0000"+
		"\u00fa\u00fb\u0005T\u0000\u0000\u00fb\u00fd\u0003<\u001e\u0000\u00fc\u00fa"+
		"\u0001\u0000\u0000\u0000\u00fc\u00fd\u0001\u0000\u0000\u0000\u00fd\u00fe"+
		"\u0001\u0000\u0000\u0000\u00fe\u00ff\u0003\u000e\u0007\u0000\u00ff\u0017"+
		"\u0001\u0000\u0000\u0000\u0100\u0101\u0005;\u0000\u0000\u0101\u0102\u0003"+
		".\u0017\u0000\u0102\u0105\u0005<\u0000\u0000\u0103\u0106\u0003B!\u0000"+
		"\u0104\u0106\u00036\u001b\u0000\u0105\u0103\u0001\u0000\u0000\u0000\u0105"+
		"\u0104\u0001\u0000\u0000\u0000\u0106\u0107\u0001\u0000\u0000\u0000\u0107"+
		"\u0108\u0003\u000e\u0007\u0000\u0108\u0019\u0001\u0000\u0000\u0000\u0109"+
		"\u010a\u0005@\u0000\u0000\u010a\u010b\u0003\"\u0011\u0000\u010b\u010c"+
		"\u0003P(\u0000\u010c\u001b\u0001\u0000\u0000\u0000\u010d\u010e\u0005?"+
		"\u0000\u0000\u010e\u010f\u0005@\u0000\u0000\u010f\u0110\u0005A\u0000\u0000"+
		"\u0110\u0111\u0003P(\u0000\u0111\u001d\u0001\u0000\u0000\u0000\u0112\u0113"+
		"\u0005?\u0000\u0000\u0113\u0117\u0003.\u0017\u0000\u0114\u0115\u0005R"+
		"\u0000\u0000\u0115\u0118\u00036\u001b\u0000\u0116\u0118\u0003\u000e\u0007"+
		"\u0000\u0117\u0114\u0001\u0000\u0000\u0000\u0117\u0116\u0001\u0000\u0000"+
		"\u0000\u0117\u0118\u0001\u0000\u0000\u0000\u0118\u001f\u0001\u0000\u0000"+
		"\u0000\u0119\u011b\u0005D\u0000\u0000\u011a\u0119\u0001\u0000\u0000\u0000"+
		"\u011a\u011b\u0001\u0000\u0000\u0000\u011b\u011c\u0001\u0000\u0000\u0000"+
		"\u011c\u011d\u0005B\u0000\u0000\u011d\u0122\u0005A\u0000\u0000\u011e\u011f"+
		"\u0005\u0001\u0000\u0000\u011f\u0120\u0003\u0082A\u0000\u0120\u0121\u0005"+
		"\u0002\u0000\u0000\u0121\u0123\u0001\u0000\u0000\u0000\u0122\u011e\u0001"+
		"\u0000\u0000\u0000\u0122\u0123\u0001\u0000\u0000\u0000\u0123\u0124\u0001"+
		"\u0000\u0000\u0000\u0124\u0125\u0005R\u0000\u0000\u0125\u0126\u0003z="+
		"\u0000\u0126!\u0001\u0000\u0000\u0000\u0127\u012c\u0005A\u0000\u0000\u0128"+
		"\u0129\u0005S\u0000\u0000\u0129\u012b\u0005A\u0000\u0000\u012a\u0128\u0001"+
		"\u0000\u0000\u0000\u012b\u012e\u0001\u0000\u0000\u0000\u012c\u012a\u0001"+
		"\u0000\u0000\u0000\u012c\u012d\u0001\u0000\u0000\u0000\u012d\u0131\u0001"+
		"\u0000\u0000\u0000\u012e\u012c\u0001\u0000\u0000\u0000\u012f\u0130\u0005"+
		"P\u0000\u0000\u0130\u0132\u0005A\u0000\u0000\u0131\u012f\u0001\u0000\u0000"+
		"\u0000\u0131\u0132\u0001\u0000\u0000\u0000\u0132#\u0001\u0000\u0000\u0000"+
		"\u0133\u0138\u0003>\u001f\u0000\u0134\u0135\u0005T\u0000\u0000\u0135\u0137"+
		"\u0003>\u001f\u0000\u0136\u0134\u0001\u0000\u0000\u0000\u0137\u013a\u0001"+
		"\u0000\u0000\u0000\u0138\u0136\u0001\u0000\u0000\u0000\u0138\u0139\u0001"+
		"\u0000\u0000\u0000\u0139%\u0001\u0000\u0000\u0000\u013a\u0138\u0001\u0000"+
		"\u0000\u0000\u013b\u013c\u0005A\u0000\u0000\u013c\u013f\u0005T\u0000\u0000"+
		"\u013d\u0140\u0005A\u0000\u0000\u013e\u0140\u0003d2\u0000\u013f\u013d"+
		"\u0001\u0000\u0000\u0000\u013f\u013e\u0001\u0000\u0000\u0000\u0140\'\u0001"+
		"\u0000\u0000\u0000\u0141\u0146\u0005A\u0000\u0000\u0142\u0143\u0005T\u0000"+
		"\u0000\u0143\u0145\u0005A\u0000\u0000\u0144\u0142\u0001\u0000\u0000\u0000"+
		"\u0145\u0148\u0001\u0000\u0000\u0000\u0146\u0144\u0001\u0000\u0000\u0000"+
		"\u0146\u0147\u0001\u0000\u0000\u0000\u0147)\u0001\u0000\u0000\u0000\u0148"+
		"\u0146\u0001\u0000\u0000\u0000\u0149\u014e\u0003\u009aM\u0000\u014a\u014b"+
		"\u0005T\u0000\u0000\u014b\u014d\u0003\u009aM\u0000\u014c\u014a\u0001\u0000"+
		"\u0000\u0000\u014d\u0150\u0001\u0000\u0000\u0000\u014e\u014c\u0001\u0000"+
		"\u0000\u0000\u014e\u014f\u0001\u0000\u0000\u0000\u014f+\u0001\u0000\u0000"+
		"\u0000\u0150\u014e\u0001\u0000\u0000\u0000\u0151\u0156\u0003\u009cN\u0000"+
		"\u0152\u0153\u0005T\u0000\u0000\u0153\u0155\u0003\u009cN\u0000\u0154\u0152"+
		"\u0001\u0000\u0000\u0000\u0155\u0158\u0001\u0000\u0000\u0000\u0156\u0154"+
		"\u0001\u0000\u0000\u0000\u0156\u0157\u0001\u0000\u0000\u0000\u0157-\u0001"+
		"\u0000\u0000\u0000\u0158\u0156\u0001\u0000\u0000\u0000\u0159\u015d\u0003"+
		"(\u0014\u0000\u015a\u015d\u0003*\u0015\u0000\u015b\u015d\u0003,\u0016"+
		"\u0000\u015c\u0159\u0001\u0000\u0000\u0000\u015c\u015a\u0001\u0000\u0000"+
		"\u0000\u015c\u015b\u0001\u0000\u0000\u0000\u015d/\u0001\u0000\u0000\u0000"+
		"\u015e\u0161\u0003*\u0015\u0000\u015f\u0161\u0003\u0084B\u0000\u0160\u015e"+
		"\u0001\u0000\u0000\u0000\u0160\u015f\u0001\u0000\u0000\u0000\u01611\u0001"+
		"\u0000\u0000\u0000\u0162\u0163\u00038\u001c\u0000\u0163\u0164\u0005T\u0000"+
		"\u0000\u0164\u0166\u0001\u0000\u0000\u0000\u0165\u0162\u0001\u0000\u0000"+
		"\u0000\u0166\u0169\u0001\u0000\u0000\u0000\u0167\u0165\u0001\u0000\u0000"+
		"\u0000\u0167\u0168\u0001\u0000\u0000\u0000\u0168\u016a\u0001\u0000\u0000"+
		"\u0000\u0169\u0167\u0001\u0000\u0000\u0000\u016a\u016b\u00038\u001c\u0000"+
		"\u016b3\u0001\u0000\u0000\u0000\u016c\u016d\u0003:\u001d\u0000\u016d\u016e"+
		"\u0005T\u0000\u0000\u016e\u0170\u0001\u0000\u0000\u0000\u016f\u016c\u0001"+
		"\u0000\u0000\u0000\u0170\u0173\u0001\u0000\u0000\u0000\u0171\u016f\u0001"+
		"\u0000\u0000\u0000\u0171\u0172\u0001\u0000\u0000\u0000\u0172\u0174\u0001"+
		"\u0000\u0000\u0000\u0173\u0171\u0001\u0000\u0000\u0000\u0174\u0175\u0003"+
		":\u001d\u0000\u01755\u0001\u0000\u0000\u0000\u0176\u0177\u0003<\u001e"+
		"\u0000\u0177\u0178\u0005T\u0000\u0000\u0178\u017a\u0001\u0000\u0000\u0000"+
		"\u0179\u0176\u0001\u0000\u0000\u0000\u017a\u017d\u0001\u0000\u0000\u0000"+
		"\u017b\u0179\u0001\u0000\u0000\u0000\u017b\u017c\u0001\u0000\u0000\u0000"+
		"\u017c\u017e\u0001\u0000\u0000\u0000\u017d\u017b\u0001\u0000\u0000\u0000"+
		"\u017e\u017f\u0003<\u001e\u0000\u017f7\u0001\u0000\u0000\u0000\u0180\u018d"+
		"\u0005/\u0000\u0000\u0181\u018d\u00050\u0000\u0000\u0182\u018d\u00051"+
		"\u0000\u0000\u0183\u018d\u0005%\u0000\u0000\u0184\u018d\u0005\u001f\u0000"+
		"\u0000\u0185\u018d\u0005\u0003\u0000\u0000\u0186\u018d\u0003N\'\u0000"+
		"\u0187\u018d\u0003@ \u0000\u0188\u018d\u0003d2\u0000\u0189\u018a\u0003"+
		"p8\u0000\u018a\u018b\u00038\u001c\u0000\u018b\u018d\u0001\u0000\u0000"+
		"\u0000\u018c\u0180\u0001\u0000\u0000\u0000\u018c\u0181\u0001\u0000\u0000"+
		"\u0000\u018c\u0182\u0001\u0000\u0000\u0000\u018c\u0183\u0001\u0000\u0000"+
		"\u0000\u018c\u0184\u0001\u0000\u0000\u0000\u018c\u0185\u0001\u0000\u0000"+
		"\u0000\u018c\u0186\u0001\u0000\u0000\u0000\u018c\u0187\u0001\u0000\u0000"+
		"\u0000\u018c\u0188\u0001\u0000\u0000\u0000\u018c\u0189\u0001\u0000\u0000"+
		"\u0000\u018d\u0193\u0001\u0000\u0000\u0000\u018e\u018f\u0003n7\u0000\u018f"+
		"\u0190\u00038\u001c\u0000\u0190\u0192\u0001\u0000\u0000\u0000\u0191\u018e"+
		"\u0001\u0000\u0000\u0000\u0192\u0195\u0001\u0000\u0000\u0000\u0193\u0191"+
		"\u0001\u0000\u0000\u0000\u0193\u0194\u0001\u0000\u0000\u0000\u01949\u0001"+
		"\u0000\u0000\u0000\u0195\u0193\u0001\u0000\u0000\u0000\u0196\u0197\u0003"+
		"8\u001c\u0000\u0197\u0198\u0005Q\u0000\u0000\u0198\u0199\u0003z=\u0000"+
		"\u0199;\u0001\u0000\u0000\u0000\u019a\u019d\u00038\u001c\u0000\u019b\u019c"+
		"\u0005Q\u0000\u0000\u019c\u019e\u0003z=\u0000\u019d\u019b\u0001\u0000"+
		"\u0000\u0000\u019d\u019e\u0001\u0000\u0000\u0000\u019e=\u0001\u0000\u0000"+
		"\u0000\u019f\u01a6\u0005A\u0000\u0000\u01a0\u01a1\u0005U\u0000\u0000\u01a1"+
		"\u01a2\u0003<\u001e\u0000\u01a2\u01a3\u0005V\u0000\u0000\u01a3\u01a4\u0003"+
		"J%\u0000\u01a4\u01a6\u0001\u0000\u0000\u0000\u01a5\u019f\u0001\u0000\u0000"+
		"\u0000\u01a5\u01a0\u0001\u0000\u0000\u0000\u01a6\u01aa\u0001\u0000\u0000"+
		"\u0000\u01a7\u01a9\u0003J%\u0000\u01a8\u01a7\u0001\u0000\u0000\u0000\u01a9"+
		"\u01ac\u0001\u0000\u0000\u0000\u01aa\u01a8\u0001\u0000\u0000\u0000\u01aa"+
		"\u01ab\u0001\u0000\u0000\u0000\u01ab?\u0001\u0000\u0000\u0000\u01ac\u01aa"+
		"\u0001\u0000\u0000\u0000\u01ad\u01b1\u0003F#\u0000\u01ae\u01b0\u0003H"+
		"$\u0000\u01af\u01ae\u0001\u0000\u0000\u0000\u01b0\u01b3\u0001\u0000\u0000"+
		"\u0000\u01b1\u01af\u0001\u0000\u0000\u0000\u01b1\u01b2\u0001\u0000\u0000"+
		"\u0000\u01b2A\u0001\u0000\u0000\u0000\u01b3\u01b1\u0001\u0000\u0000\u0000"+
		"\u01b4\u01b5\u0005A\u0000\u0000\u01b5\u01b6\u0003L&\u0000\u01b6C\u0001"+
		"\u0000\u0000\u0000\u01b7\u01b9\u0003F#\u0000\u01b8\u01ba\u0003H$\u0000"+
		"\u01b9\u01b8\u0001\u0000\u0000\u0000\u01ba\u01bb\u0001\u0000\u0000\u0000"+
		"\u01bb\u01b9\u0001\u0000\u0000\u0000\u01bb\u01bc\u0001\u0000\u0000\u0000"+
		"\u01bcE\u0001\u0000\u0000\u0000\u01bd\u01c3\u0003>\u001f\u0000\u01be\u01bf"+
		"\u0005U\u0000\u0000\u01bf\u01c0\u0003<\u001e\u0000\u01c0\u01c1\u0005V"+
		"\u0000\u0000\u01c1\u01c3\u0001\u0000\u0000\u0000\u01c2\u01bd\u0001\u0000"+
		"\u0000\u0000\u01c2\u01be\u0001\u0000\u0000\u0000\u01c3G\u0001\u0000\u0000"+
		"\u0000\u01c4\u01c5\u0005P\u0000\u0000\u01c5\u01c7\u0005A\u0000\u0000\u01c6"+
		"\u01c4\u0001\u0000\u0000\u0000\u01c6\u01c7\u0001\u0000\u0000\u0000\u01c7"+
		"\u01c8\u0001\u0000\u0000\u0000\u01c8\u01c9\u0003L&\u0000\u01c9I\u0001"+
		"\u0000\u0000\u0000\u01ca\u01cc\u0003H$\u0000\u01cb\u01ca\u0001\u0000\u0000"+
		"\u0000\u01cc\u01cf\u0001\u0000\u0000\u0000\u01cd\u01cb\u0001\u0000\u0000"+
		"\u0000\u01cd\u01ce\u0001\u0000\u0000\u0000\u01ce\u01d6\u0001\u0000\u0000"+
		"\u0000\u01cf\u01cd\u0001\u0000\u0000\u0000\u01d0\u01d1\u0005\u0004\u0000"+
		"\u0000\u01d1\u01d2\u0003<\u001e\u0000\u01d2\u01d3\u0005W\u0000\u0000\u01d3"+
		"\u01d7\u0001\u0000\u0000\u0000\u01d4\u01d5\u0005\u0005\u0000\u0000\u01d5"+
		"\u01d7\u0005A\u0000\u0000\u01d6\u01d0\u0001\u0000\u0000\u0000\u01d6\u01d4"+
		"\u0001\u0000\u0000\u0000\u01d7K\u0001\u0000\u0000\u0000\u01d8\u01da\u0005"+
		"U\u0000\u0000\u01d9\u01db\u00036\u001b\u0000\u01da\u01d9\u0001\u0000\u0000"+
		"\u0000\u01da\u01db\u0001\u0000\u0000\u0000\u01db\u01dc\u0001\u0000\u0000"+
		"\u0000\u01dc\u01e0\u0005V\u0000\u0000\u01dd\u01e0\u0003d2\u0000\u01de"+
		"\u01e0\u0005\u001f\u0000\u0000\u01df\u01d8\u0001\u0000\u0000\u0000\u01df"+
		"\u01dd\u0001\u0000\u0000\u0000\u01df\u01de\u0001\u0000\u0000\u0000\u01e0"+
		"M\u0001\u0000\u0000\u0000\u01e1\u01e2\u0005@\u0000\u0000\u01e2\u01e3\u0003"+
		"P(\u0000\u01e3O\u0001\u0000\u0000\u0000\u01e4\u01e5\u0005\u0001\u0000"+
		"\u0000\u01e5\u01e6\u0003~?\u0000\u01e6\u01e7\u0005\u0002\u0000\u0000\u01e7"+
		"\u01e9\u0001\u0000\u0000\u0000\u01e8\u01e4\u0001\u0000\u0000\u0000\u01e8"+
		"\u01e9\u0001\u0000\u0000\u0000\u01e9\u01ea\u0001\u0000\u0000\u0000\u01ea"+
		"\u01ed\u0003R)\u0000\u01eb\u01ec\u0005P\u0000\u0000\u01ec\u01ee\u0003"+
		"V+\u0000\u01ed\u01eb\u0001\u0000\u0000\u0000\u01ed\u01ee\u0001\u0000\u0000"+
		"\u0000\u01ee\u01f2\u0001\u0000\u0000\u0000\u01ef\u01f1\u0005N\u0000\u0000"+
		"\u01f0\u01ef\u0001\u0000\u0000\u0000\u01f1\u01f4\u0001\u0000\u0000\u0000"+
		"\u01f2\u01f0\u0001\u0000\u0000\u0000\u01f2\u01f3\u0001\u0000\u0000\u0000"+
		"\u01f3\u01f5\u0001\u0000\u0000\u0000\u01f4\u01f2\u0001\u0000\u0000\u0000"+
		"\u01f5\u01f9\u0003\u0004\u0002\u0000\u01f6\u01f8\u0005N\u0000\u0000\u01f7"+
		"\u01f6\u0001\u0000\u0000\u0000\u01f8\u01fb\u0001\u0000\u0000\u0000\u01f9"+
		"\u01f7\u0001\u0000\u0000\u0000\u01f9\u01fa\u0001\u0000\u0000\u0000\u01fa"+
		"\u01fc\u0001\u0000\u0000\u0000\u01fb\u01f9\u0001\u0000\u0000\u0000\u01fc"+
		"\u01fd\u00053\u0000\u0000\u01fdQ\u0001\u0000\u0000\u0000\u01fe\u0200\u0005"+
		"U\u0000\u0000\u01ff\u0201\u0003X,\u0000\u0200\u01ff\u0001\u0000\u0000"+
		"\u0000\u0200\u0201\u0001\u0000\u0000\u0000\u0201\u0202\u0001\u0000\u0000"+
		"\u0000\u0202\u0203\u0005V\u0000\u0000\u0203S\u0001\u0000\u0000\u0000\u0204"+
		"\u0206\u0005U\u0000\u0000\u0205\u0207\u0003Z-\u0000\u0206\u0205\u0001"+
		"\u0000\u0000\u0000\u0206\u0207\u0001\u0000\u0000\u0000\u0207\u0208\u0001"+
		"\u0000\u0000\u0000\u0208\u0209\u0005V\u0000\u0000\u0209U\u0001\u0000\u0000"+
		"\u0000\u020a\u020c\u0005U\u0000\u0000\u020b\u020d\u0003\\.\u0000\u020c"+
		"\u020b\u0001\u0000\u0000\u0000\u020c\u020d\u0001\u0000\u0000\u0000\u020d"+
		"\u020e\u0001\u0000\u0000\u0000\u020e\u0212\u0005V\u0000\u0000\u020f\u0212"+
		"\u0003z=\u0000\u0210\u0212\u0003b1\u0000\u0211\u020a\u0001\u0000\u0000"+
		"\u0000\u0211\u020f\u0001\u0000\u0000\u0000\u0211\u0210\u0001\u0000\u0000"+
		"\u0000\u0212W\u0001\u0000\u0000\u0000\u0213\u0216\u0003.\u0017\u0000\u0214"+
		"\u0215\u0005T\u0000\u0000\u0215\u0217\u0003^/\u0000\u0216\u0214\u0001"+
		"\u0000\u0000\u0000\u0216\u0217\u0001\u0000\u0000\u0000\u0217\u021a\u0001"+
		"\u0000\u0000\u0000\u0218\u021a\u0003^/\u0000\u0219\u0213\u0001\u0000\u0000"+
		"\u0000\u0219\u0218\u0001\u0000\u0000\u0000\u021aY\u0001\u0000\u0000\u0000"+
		"\u021b\u021e\u00030\u0018\u0000\u021c\u021d\u0005T\u0000\u0000\u021d\u021f"+
		"\u0003`0\u0000\u021e\u021c\u0001\u0000\u0000\u0000\u021e\u021f\u0001\u0000"+
		"\u0000\u0000\u021f\u0222\u0001\u0000\u0000\u0000\u0220\u0222\u0003`0\u0000"+
		"\u0221\u021b\u0001\u0000\u0000\u0000\u0221\u0220\u0001\u0000\u0000\u0000"+
		"\u0222[\u0001\u0000\u0000\u0000\u0223\u0226\u0003\u0084B\u0000\u0224\u0225"+
		"\u0005T\u0000\u0000\u0225\u0227\u0003b1\u0000\u0226\u0224\u0001\u0000"+
		"\u0000\u0000\u0226\u0227\u0001\u0000\u0000\u0000\u0227\u022a\u0001\u0000"+
		"\u0000\u0000\u0228\u022a\u0003b1\u0000\u0229\u0223\u0001\u0000\u0000\u0000"+
		"\u0229\u0228\u0001\u0000\u0000\u0000\u022a]\u0001\u0000\u0000\u0000\u022b"+
		"\u022e\u0005\u0003\u0000\u0000\u022c\u022d\u0005P\u0000\u0000\u022d\u022f"+
		"\u0003z=\u0000\u022e\u022c\u0001\u0000\u0000\u0000\u022e\u022f\u0001\u0000"+
		"\u0000\u0000\u022f_\u0001\u0000\u0000\u0000\u0230\u0231\u0005\u0003\u0000"+
		"\u0000\u0231\u0232\u0003z=\u0000\u0232a\u0001\u0000\u0000\u0000\u0233"+
		"\u0234\u0005\u0003\u0000\u0000\u0234\u0235\u0003z=\u0000\u0235c\u0001"+
		"\u0000\u0000\u0000\u0236\u0238\u0005X\u0000\u0000\u0237\u0239\u0003f3"+
		"\u0000\u0238\u0237\u0001\u0000\u0000\u0000\u0238\u0239\u0001\u0000\u0000"+
		"\u0000\u0239\u023a\u0001\u0000\u0000\u0000\u023a\u023b\u0005Y\u0000\u0000"+
		"\u023be\u0001\u0000\u0000\u0000\u023c\u0242\u0003h4\u0000\u023d\u023e"+
		"\u0003j5\u0000\u023e\u023f\u0003h4\u0000\u023f\u0241\u0001\u0000\u0000"+
		"\u0000\u0240\u023d\u0001\u0000\u0000\u0000\u0241\u0244\u0001\u0000\u0000"+
		"\u0000\u0242\u0240\u0001\u0000\u0000\u0000\u0242\u0243\u0001\u0000\u0000"+
		"\u0000\u0243\u0246\u0001\u0000\u0000\u0000\u0244\u0242\u0001\u0000\u0000"+
		"\u0000\u0245\u0247\u0003j5\u0000\u0246\u0245\u0001\u0000\u0000\u0000\u0246"+
		"\u0247\u0001\u0000\u0000\u0000\u0247g\u0001\u0000\u0000\u0000\u0248\u0249"+
		"\u0005\u0004\u0000\u0000\u0249\u024a\u00038\u001c\u0000\u024a\u024b\u0005"+
		"W\u0000\u0000\u024b\u024c\u0005R\u0000\u0000\u024c\u024d\u00038\u001c"+
		"\u0000\u024d\u0253\u0001\u0000\u0000\u0000\u024e\u024f\u0005A\u0000\u0000"+
		"\u024f\u0250\u0005R\u0000\u0000\u0250\u0253\u00038\u001c\u0000\u0251\u0253"+
		"\u00038\u001c\u0000\u0252\u0248\u0001\u0000\u0000\u0000\u0252\u024e\u0001"+
		"\u0000\u0000\u0000\u0252\u0251\u0001\u0000\u0000\u0000\u0253i\u0001\u0000"+
		"\u0000\u0000\u0254\u0255\u0007\u0000\u0000\u0000\u0255k\u0001\u0000\u0000"+
		"\u0000\u0256\u0257\u0007\u0001\u0000\u0000\u0257m\u0001\u0000\u0000\u0000"+
		"\u0258\u0259\u0007\u0002\u0000\u0000\u0259o\u0001\u0000\u0000\u0000\u025a"+
		"\u025b\u0007\u0003\u0000\u0000\u025bq\u0001\u0000\u0000\u0000\u025c\u0276"+
		"\u0005/\u0000\u0000\u025d\u0276\u0003t:\u0000\u025e\u0261\u0005A\u0000"+
		"\u0000\u025f\u0260\u0005S\u0000\u0000\u0260\u0262\u0005A\u0000\u0000\u0261"+
		"\u025f\u0001\u0000\u0000\u0000\u0261\u0262\u0001\u0000\u0000\u0000\u0262"+
		"\u0268\u0001\u0000\u0000\u0000\u0263\u0265\u0005\u0001\u0000\u0000\u0264"+
		"\u0266\u0003\u0086C\u0000\u0265\u0264\u0001\u0000\u0000\u0000\u0265\u0266"+
		"\u0001\u0000\u0000\u0000\u0266\u0267\u0001\u0000\u0000\u0000\u0267\u0269"+
		"\u0005\u0002\u0000\u0000\u0268\u0263\u0001\u0000\u0000\u0000\u0268\u0269"+
		"\u0001\u0000\u0000\u0000\u0269\u0276\u0001\u0000\u0000\u0000\u026a\u026b"+
		"\u0005C\u0000\u0000\u026b\u026c\u0005U\u0000\u0000\u026c\u026d\u00038"+
		"\u001c\u0000\u026d\u026e\u0005V\u0000\u0000\u026e\u0276\u0001\u0000\u0000"+
		"\u0000\u026f\u0276\u0003\u0098L\u0000\u0270\u0276\u0003\u008eG\u0000\u0271"+
		"\u0272\u0005U\u0000\u0000\u0272\u0273\u0003z=\u0000\u0273\u0274\u0005"+
		"V\u0000\u0000\u0274\u0276\u0001\u0000\u0000\u0000\u0275\u025c\u0001\u0000"+
		"\u0000\u0000\u0275\u025d\u0001\u0000\u0000\u0000\u0275\u025e\u0001\u0000"+
		"\u0000\u0000\u0275\u026a\u0001\u0000\u0000\u0000\u0275\u026f\u0001\u0000"+
		"\u0000\u0000\u0275\u0270\u0001\u0000\u0000\u0000\u0275\u0271\u0001\u0000"+
		"\u0000\u0000\u0276s\u0001\u0000\u0000\u0000\u0277\u0278\u0007\u0004\u0000"+
		"\u0000\u0278u\u0001\u0000\u0000\u0000\u0279\u027a\u0005\\\u0000\u0000"+
		"\u027a\u027c\u0003r9\u0000\u027b\u027d\u0005]\u0000\u0000\u027c\u027b"+
		"\u0001\u0000\u0000\u0000\u027c\u027d\u0001\u0000\u0000\u0000\u027d\u027f"+
		"\u0001\u0000\u0000\u0000\u027e\u0279\u0001\u0000\u0000\u0000\u027f\u0282"+
		"\u0001\u0000\u0000\u0000\u0280\u027e\u0001\u0000\u0000\u0000\u0280\u0281"+
		"\u0001\u0000\u0000\u0000\u0281w\u0001\u0000\u0000\u0000\u0282\u0280\u0001"+
		"\u0000\u0000\u0000\u0283\u0284\u0005[\u0000\u0000\u0284\u0286\u0003r9"+
		"\u0000\u0285\u0283\u0001\u0000\u0000\u0000\u0286\u0289\u0001\u0000\u0000"+
		"\u0000\u0287\u0285\u0001\u0000\u0000\u0000\u0287\u0288\u0001\u0000\u0000"+
		"\u0000\u0288y\u0001\u0000\u0000\u0000\u0289\u0287\u0001\u0000\u0000\u0000"+
		"\u028a\u028c\u0003r9\u0000\u028b\u028d\u0005]\u0000\u0000\u028c\u028b"+
		"\u0001\u0000\u0000\u0000\u028c\u028d\u0001\u0000\u0000\u0000\u028d\u0290"+
		"\u0001\u0000\u0000\u0000\u028e\u0291\u0003v;\u0000\u028f\u0291\u0003x"+
		"<\u0000\u0290\u028e\u0001\u0000\u0000\u0000\u0290\u028f\u0001\u0000\u0000"+
		"\u0000\u0291{\u0001\u0000\u0000\u0000\u0292\u0293\u0005A\u0000\u0000\u0293"+
		"\u0294\u0005\u0003\u0000\u0000\u0294}\u0001\u0000\u0000\u0000\u0295\u0298"+
		"\u0005A\u0000\u0000\u0296\u0297\u0005T\u0000\u0000\u0297\u0299\u0003~"+
		"?\u0000\u0298\u0296\u0001\u0000\u0000\u0000\u0298\u0299\u0001\u0000\u0000"+
		"\u0000\u0299\u02a3\u0001\u0000\u0000\u0000\u029a\u029f\u0003|>\u0000\u029b"+
		"\u029c\u0005T\u0000\u0000\u029c\u029e\u0003|>\u0000\u029d\u029b\u0001"+
		"\u0000\u0000\u0000\u029e\u02a1\u0001\u0000\u0000\u0000\u029f\u029d\u0001"+
		"\u0000\u0000\u0000\u029f\u02a0\u0001\u0000\u0000\u0000\u02a0\u02a3\u0001"+
		"\u0000\u0000\u0000\u02a1\u029f\u0001\u0000\u0000\u0000\u02a2\u0295\u0001"+
		"\u0000\u0000\u0000\u02a2\u029a\u0001\u0000\u0000\u0000\u02a3\u007f\u0001"+
		"\u0000\u0000\u0000\u02a4\u02a5\u0005A\u0000\u0000\u02a5\u02a6\u0005\u0003"+
		"\u0000\u0000\u02a6\u02aa\u0005R\u0000\u0000\u02a7\u02ab\u0003\u0088D\u0000"+
		"\u02a8\u02ab\u0003\u008cF\u0000\u02a9\u02ab\u0003\u008aE\u0000\u02aa\u02a7"+
		"\u0001\u0000\u0000\u0000\u02aa\u02a8\u0001\u0000\u0000\u0000\u02aa\u02a9"+
		"\u0001\u0000\u0000\u0000\u02ab\u0081\u0001\u0000\u0000\u0000\u02ac\u02b1"+
		"\u0003~?\u0000\u02ad\u02ae\u0005T\u0000\u0000\u02ae\u02b0\u0003\u0080"+
		"@\u0000\u02af\u02ad\u0001\u0000\u0000\u0000\u02b0\u02b3\u0001\u0000\u0000"+
		"\u0000\u02b1\u02af\u0001\u0000\u0000\u0000\u02b1\u02b2\u0001\u0000\u0000"+
		"\u0000\u02b2\u02df\u0001\u0000\u0000\u0000\u02b3\u02b1\u0001\u0000\u0000"+
		"\u0000\u02b4\u02b9\u0005A\u0000\u0000\u02b5\u02b6\u0005T\u0000\u0000\u02b6"+
		"\u02b8\u0005A\u0000\u0000\u02b7\u02b5\u0001\u0000\u0000\u0000\u02b8\u02bb"+
		"\u0001\u0000\u0000\u0000\u02b9\u02b7\u0001\u0000\u0000\u0000\u02b9\u02ba"+
		"\u0001\u0000\u0000\u0000\u02ba\u02c2\u0001\u0000\u0000\u0000\u02bb\u02b9"+
		"\u0001\u0000\u0000\u0000\u02bc\u02bd\u0005T\u0000\u0000\u02bd\u02be\u0005"+
		"A\u0000\u0000\u02be\u02bf\u0005R\u0000\u0000\u02bf\u02c1\u0003z=\u0000"+
		"\u02c0\u02bc\u0001\u0000\u0000\u0000\u02c1\u02c4\u0001\u0000\u0000\u0000"+
		"\u02c2\u02c0\u0001\u0000\u0000\u0000\u02c2\u02c3\u0001\u0000\u0000\u0000"+
		"\u02c3\u02c9\u0001\u0000\u0000\u0000\u02c4\u02c2\u0001\u0000\u0000\u0000"+
		"\u02c5\u02c6\u0005T\u0000\u0000\u02c6\u02c8\u0003\u0080@\u0000\u02c7\u02c5"+
		"\u0001\u0000\u0000\u0000\u02c8\u02cb\u0001\u0000\u0000\u0000\u02c9\u02c7"+
		"\u0001\u0000\u0000\u0000\u02c9\u02ca\u0001\u0000\u0000\u0000\u02ca\u02df"+
		"\u0001\u0000\u0000\u0000\u02cb\u02c9\u0001\u0000\u0000\u0000\u02cc\u02cd"+
		"\u0005A\u0000\u0000\u02cd\u02ce\u0005R\u0000\u0000\u02ce\u02d3\u0003z"+
		"=\u0000\u02cf\u02d0\u0005T\u0000\u0000\u02d0\u02d2\u0003\u0080@\u0000"+
		"\u02d1\u02cf\u0001\u0000\u0000\u0000\u02d2\u02d5\u0001\u0000\u0000\u0000"+
		"\u02d3\u02d1\u0001\u0000\u0000\u0000\u02d3\u02d4\u0001\u0000\u0000\u0000"+
		"\u02d4\u02df\u0001\u0000\u0000\u0000\u02d5\u02d3\u0001\u0000\u0000\u0000"+
		"\u02d6\u02db\u0003\u0080@\u0000\u02d7\u02d8\u0005T\u0000\u0000\u02d8\u02da"+
		"\u0003\u0080@\u0000\u02d9\u02d7\u0001\u0000\u0000\u0000\u02da\u02dd\u0001"+
		"\u0000\u0000\u0000\u02db\u02d9\u0001\u0000\u0000\u0000\u02db\u02dc\u0001"+
		"\u0000\u0000\u0000\u02dc\u02df\u0001\u0000\u0000\u0000\u02dd\u02db\u0001"+
		"\u0000\u0000\u0000\u02de\u02ac\u0001\u0000\u0000\u0000\u02de\u02b4\u0001"+
		"\u0000\u0000\u0000\u02de\u02cc\u0001\u0000\u0000\u0000\u02de\u02d6\u0001"+
		"\u0000\u0000\u0000\u02df\u0083\u0001\u0000\u0000\u0000\u02e0\u02e3\u0003"+
		"z=\u0000\u02e1\u02e2\u0005T\u0000\u0000\u02e2\u02e4\u0003\u0084B\u0000"+
		"\u02e3\u02e1\u0001\u0000\u0000\u0000\u02e3\u02e4\u0001\u0000\u0000\u0000"+
		"\u02e4\u02e8\u0001\u0000\u0000\u0000\u02e5\u02e6\u0005\u0003\u0000\u0000"+
		"\u02e6\u02e8\u0003z=\u0000\u02e7\u02e0\u0001\u0000\u0000\u0000\u02e7\u02e5"+
		"\u0001\u0000\u0000\u0000\u02e8\u0085\u0001\u0000\u0000\u0000\u02e9\u02ee"+
		"\u0003z=\u0000\u02ea\u02ee\u0003\u0088D\u0000\u02eb\u02ee\u0003\u008c"+
		"F\u0000\u02ec\u02ee\u0003\u008aE\u0000\u02ed\u02e9\u0001\u0000\u0000\u0000"+
		"\u02ed\u02ea\u0001\u0000\u0000\u0000\u02ed\u02eb\u0001\u0000\u0000\u0000"+
		"\u02ed\u02ec\u0001\u0000\u0000\u0000\u02ee\u02f1\u0001\u0000\u0000\u0000"+
		"\u02ef\u02f0\u0005T\u0000\u0000\u02f0\u02f2\u0003\u0086C\u0000\u02f1\u02ef"+
		"\u0001\u0000\u0000\u0000\u02f1\u02f2\u0001\u0000\u0000\u0000\u02f2\u0087"+
		"\u0001\u0000\u0000\u0000\u02f3\u02f5\u0005U\u0000\u0000\u02f4\u02f6\u0003"+
		"\u0084B\u0000\u02f5\u02f4\u0001\u0000\u0000\u0000\u02f5\u02f6\u0001\u0000"+
		"\u0000\u0000\u02f6\u02f7\u0001\u0000\u0000\u0000\u02f7\u02f8\u0005V\u0000"+
		"\u0000\u02f8\u0089\u0001\u0000\u0000\u0000\u02f9\u02fa\u0005A\u0000\u0000"+
		"\u02fa\u02fb\u0005\u0003\u0000\u0000\u02fb\u008b\u0001\u0000\u0000\u0000"+
		"\u02fc\u02fd\u0005\u0003\u0000\u0000\u02fd\u02fe\u0003z=\u0000\u02fe\u008d"+
		"\u0001\u0000\u0000\u0000\u02ff\u0300\u0005\u0001\u0000\u0000\u0300\u0301"+
		"\u0003~?\u0000\u0301\u0302\u0005\u0002\u0000\u0000\u0302\u0304\u0001\u0000"+
		"\u0000\u0000\u0303\u02ff\u0001\u0000\u0000\u0000\u0303\u0304\u0001\u0000"+
		"\u0000\u0000\u0304\u0305\u0001\u0000\u0000\u0000\u0305\u0306\u0003T*\u0000"+
		"\u0306\u0307\u0005Z\u0000\u0000\u0307\u0308\u0003V+\u0000\u0308\u008f"+
		"\u0001\u0000\u0000\u0000\u0309\u030a\u0005\u0004\u0000\u0000\u030a\u030b"+
		"\u0003z=\u0000\u030b\u030c\u0005W\u0000\u0000\u030c\u030d\u0005P\u0000"+
		"\u0000\u030d\u030e\u0003z=\u0000\u030e\u0091\u0001\u0000\u0000\u0000\u030f"+
		"\u0310\u0005A\u0000\u0000\u0310\u0311\u0005P\u0000\u0000\u0311\u0312\u0003"+
		"z=\u0000\u0312\u0093\u0001\u0000\u0000\u0000\u0313\u0316\u0003\u0090H"+
		"\u0000\u0314\u0316\u0003\u0092I\u0000\u0315\u0313\u0001\u0000\u0000\u0000"+
		"\u0315\u0314\u0001\u0000\u0000\u0000\u0316\u0095\u0001\u0000\u0000\u0000"+
		"\u0317\u031d\u0003\u0094J\u0000\u0318\u0319\u0003j5\u0000\u0319\u031a"+
		"\u0003\u0094J\u0000\u031a\u031c\u0001\u0000\u0000\u0000\u031b\u0318\u0001"+
		"\u0000\u0000\u0000\u031c\u031f\u0001\u0000\u0000\u0000\u031d\u031b\u0001"+
		"\u0000\u0000\u0000\u031d\u031e\u0001\u0000\u0000\u0000\u031e\u0321\u0001"+
		"\u0000\u0000\u0000\u031f\u031d\u0001\u0000\u0000\u0000\u0320\u0322\u0003"+
		"j5\u0000\u0321\u0320\u0001\u0000\u0000\u0000\u0321\u0322\u0001\u0000\u0000"+
		"\u0000\u0322\u0097\u0001\u0000\u0000\u0000\u0323\u0326\u0005X\u0000\u0000"+
		"\u0324\u0327\u0003z=\u0000\u0325\u0327\u0003\u0096K\u0000\u0326\u0324"+
		"\u0001\u0000\u0000\u0000\u0326\u0325\u0001\u0000\u0000\u0000\u0327\u0328"+
		"\u0001\u0000\u0000\u0000\u0328\u0329\u0005Y\u0000\u0000\u0329\u0099\u0001"+
		"\u0000\u0000\u0000\u032a\u032b\u0005A\u0000\u0000\u032b\u032c\u0005P\u0000"+
		"\u0000\u032c\u032d\u0003z=\u0000\u032d\u009b\u0001\u0000\u0000\u0000\u032e"+
		"\u0331\u0005A\u0000\u0000\u032f\u0330\u0005P\u0000\u0000\u0330\u0332\u0003"+
		"z=\u0000\u0331\u032f\u0001\u0000\u0000\u0000\u0331\u0332\u0001\u0000\u0000"+
		"\u0000\u0332\u009d\u0001\u0000\u0000\u0000\u0333\u0334\u0007\u0005\u0000"+
		"\u0000\u0334\u009f\u0001\u0000\u0000\u0000Y\u00a5\u00a9\u00ae\u00b0\u00c2"+
		"\u00c6\u00c9\u00eb\u00f0\u00fc\u0105\u0117\u011a\u0122\u012c\u0131\u0138"+
		"\u013f\u0146\u014e\u0156\u015c\u0160\u0167\u0171\u017b\u018c\u0193\u019d"+
		"\u01a5\u01aa\u01b1\u01bb\u01c2\u01c6\u01cd\u01d6\u01da\u01df\u01e8\u01ed"+
		"\u01f2\u01f9\u0200\u0206\u020c\u0211\u0216\u0219\u021e\u0221\u0226\u0229"+
		"\u022e\u0238\u0242\u0246\u0252\u0261\u0265\u0268\u0275\u027c\u0280\u0287"+
		"\u028c\u0290\u0298\u029f\u02a2\u02aa\u02b1\u02b9\u02c2\u02c9\u02d3\u02db"+
		"\u02de\u02e3\u02e7\u02ed\u02f1\u02f5\u0303\u0315\u031d\u0321\u0326\u0331";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}