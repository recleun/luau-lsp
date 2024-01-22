grammar Luau;

@lexer::header {
import { LuauCustomLexer } from './LuauCustomLexer';
}

file: chunk EOF;

chunk: (statement SEMI_COLON?)* (lastStatement SEMI_COLON?)?;

block: chunk;

statement: setExpression |
	compoundSetExpression |
	functioncall |
	doBlock |
	whileExpression |
	repeatBlock |
	ifStatement |
	forExpression |
	forInExpression |
	globalFunction |
	localFunction |
	variableDeclaration |
	typeDeclaration |
	comment;

lastStatement: RETURN expressionList? | BREAK;

setExpression: varList1 EQUAL expressionList1;
compoundSetExpression: var compound_operations expression;
doBlock: DO block END;
whileExpression: WHILE expression doBlock;
repeatBlock: REPEAT block UNTIL expression;
ifStatement: IF expression THEN block (ELSEIF expression THEN block)* (ELSE block)? END;
forExpression: FOR optionalTypedName EQUAL expression COMMA expression (COMMA expression)? doBlock;
forInExpression: FOR allNamesList IN (globalIteratorFunction | expressionList) doBlock;
globalFunction: FUNCTION funcname funcbody;
localFunction: LOCAL FUNCTION NAME funcbody;
variableDeclaration: LOCAL allNamesList ((EQUAL expressionList) | doBlock)?;
typeDeclaration: EXPORT? TYPE NAME ('<' genericTypeListWithDefaults '>')? EQUAL type;

funcname: NAME (DOT NAME)* (COLON NAME)?;

varList1: var (COMMA var)*;

nextExpression: NAME COMMA (NAME | tableconstructor);

nameList: NAME (COMMA NAME)*;
typedNameList: typedName (COMMA typedName)*;
mixedNamesList: optionalTypedName (COMMA optionalTypedName)*;
allNamesList: nameList | typedNameList | mixedNamesList;
allNamesListType: typedNameList | typeList;

expressionList1: (expression1 COMMA)* expression1;
expressionList2: (expression2 COMMA)* expression2;
expressionList: (expression COMMA)* expression;

expression1: (NIL | FALSE | TRUE | NUMBER | STRING | '...' | function | prefixexp | tableconstructor | unary_operations expression1) (binary_operations expression1)*;
expression2: expression1 DOUBLE_COLON type;
expression: expression1 (DOUBLE_COLON type)?;

var: (NAME | OPEN_PARENTHESIS expression CLOSE_PARENTHESIS varSuffix) varSuffix*;

prefixexp: varOrExp nameAndArgs*;
globalIteratorFunction: NAME args;
functioncall: varOrExp nameAndArgs+;
varOrExp: var | OPEN_PARENTHESIS expression CLOSE_PARENTHESIS;

nameAndArgs: (COLON NAME)? args;
varSuffix: nameAndArgs* ('[' expression ']' | '.' NAME);
args: OPEN_PARENTHESIS (expressionList)? CLOSE_PARENTHESIS | tableconstructor | STRING;

function: FUNCTION funcbody;
funcbody: ('<' genericTypeList '>')? functionParameters (COLON functionReturns)? NEWLINE* block NEWLINE* END;

functionParameters: OPEN_PARENTHESIS (parameterList)? CLOSE_PARENTHESIS;
functionParametersType: OPEN_PARENTHESIS (parameterListType)? CLOSE_PARENTHESIS;
functionReturns: (OPEN_PARENTHESIS returnList? CLOSE_PARENTHESIS) | type | variadicReturn;
parameterList: allNamesList (COMMA variadicParameter)? | variadicParameter;
parameterListType: allNamesListType (COMMA variadicParameterType)? | variadicParameterType;
returnList: typeList (COMMA variadicReturn)? | variadicReturn;
variadicParameter: '...' (COLON type)?;
variadicParameterType: '...' type;
variadicReturn: '...' type;

tableconstructor: OPEN_CURLY_BRACKETS fieldList? CLOSE_CURLY_BRACKETS;
fieldList: field (fieldsep field)* (fieldsep)?;
field: '[' expression1 CLOSE_SQUARE_BRACKETS EQUAL expression1 |
	NAME EQUAL expression1 |
	expression1;
fieldsep: (COMMA | SEMI_COLON);

// Luau-only operations
compound_operations: '+=' | '-=' | '*=' | '/=' | '^=' | '%=' | '..=';
binary_operations:
	'+' | '-' | '*' | '/' | '//' | '^' | '%' | '..' |
	'<' | '<=' | '>' | '>=' | '==' | '~=' |
	'and' | 'or';

unary_operations: '-' | 'not' | '#';

simpleType:
	NIL |
	singletonType |
	NAME (DOT NAME)? ('<' typeParams? '>')? |
	TYPEOF OPEN_PARENTHESIS expression1 CLOSE_PARENTHESIS |
	tableType |
	functionType |
	OPEN_PARENTHESIS type CLOSE_PARENTHESIS;

singletonType: STRING | NAME | 'true' | 'false';

unionSuffix: (UNION simpleType OPTIONAL?)*;
intersectionSuffix: (INTERSECTION simpleType)*;
type: simpleType OPTIONAL? (unionSuffix | intersectionSuffix);

genericTypePackParameter: NAME '...';
genericTypeList: NAME (COMMA genericTypeList)? | genericTypePackParameter (COMMA genericTypePackParameter)*;

genericTypePackParameterWithDefault: NAME '...' EQUAL (typePack | variadicTypePack | genericTypePack);
genericTypeListWithDefaults:
	genericTypeList (COMMA genericTypePackParameterWithDefault)* |
	NAME (COMMA NAME)* (COMMA NAME EQUAL type)* (COMMA genericTypePackParameterWithDefault)* |
	NAME EQUAL type (COMMA genericTypePackParameterWithDefault)* |
	genericTypePackParameterWithDefault (COMMA genericTypePackParameterWithDefault)*;

typeList: type (COMMA typeList)? | '...' type;
typeParams: (type | typePack | variadicTypePack | genericTypePack) (COMMA typeParams)?;
typePack: OPEN_PARENTHESIS (typeList)? CLOSE_PARENTHESIS;
genericTypePack: NAME '...';
variadicTypePack: '...' type;
functionType: ('<' genericTypeList '>')? functionParametersType ARROW functionReturns;

tableIndexer: '[' type ']' COLON type;
tableProperty: NAME COLON type;
tablePropOrIndexer: tableIndexer | tableProperty;
propList: tablePropOrIndexer (fieldsep tablePropOrIndexer)* (fieldsep)?;
tableType: OPEN_CURLY_BRACKETS (type | propList) CLOSE_CURLY_BRACKETS;

// LEXER

// Strings
STRING: LUA_STRING | INTERPOLATED_STRING;
LUA_STRING: DOUBLE_QUOTES_STRING | SINGLE_QUOTES_STRING | MULTI_LINE_STRING;

DOUBLE_QUOTES_STRING: '"' (EscapeSequence | ~('\n'|'\r'|'"'))* (~('\\') | '\\\\') '"';
SINGLE_QUOTES_STRING: '\'' (EscapeSequence | ~('\n'|'\r'|'\''))* (~('\\') | '\\\\') '\'';
MULTI_LINE_STRING: '[' ('=' | '[') {LuauCustomLexer.HandleLongString(this)};

fragment INTERPOLATED_STRING_ESCAPE_SEQUENCE: ('\\`' | '\\z' '\r'? '\n' | ~('\n'|'\r'|'"'));
fragment INTERPOLATED_STRING_CLOSE_CHARACTERS: ~('{'|'`'|'\n'|'\r');
fragment INTERPOLATED_STRING_BODY: (INTERPOLATED_STRING_CLOSE_CHARACTERS | INTERPOLATED_STRING_ESCAPE_SEQUENCE)*;
INTERPOLATED_STRING: '`' (EscapeSequence | '{' (~'}' | '\\}')*? '}' | ~('\n'|'\r'|'"'))* (~('\\') | '\\\\') '`';

// Numbers
NUMBER: INT | FLOAT | SCIENTIFIC_NOTATION | HEX_NUMBER | BINARY_NUMBER | OCTAL_NUMBER;

INT: [0-9]+;
FLOAT_1: '.' INT;
FLOAT_2: INT '.';
FLOAT_3: INT '.' INT;
FLOAT: FLOAT_1 | FLOAT_2 | FLOAT_3;
SCIENTIFIC_NOTATION: INT ('.' INT)? ([eE] [+\-]? INT)?;
HEX_NUMBER: '0x' HexDigit+;
BINARY_NUMBER: '0b' [01]+;
OCTAL_NUMBER: '0' [0-7]+;

// Reserved keywords
NIL: SPACES 'nil' SPACES;
FALSE: SPACES 'false' SPACES;
TRUE: SPACES 'true' SPACES;

RETURN: SPACES 'return' SPACES;
END: SPACES 'end' SPACES;
BREAK: SPACES 'break' SPACES;

IF: SPACES 'if' SPACES;
ELSEIF: SPACES 'elseif' SPACES;
THEN: SPACES 'then' SPACES;
ELSE: SPACES 'else' SPACES;

WHILE: SPACES 'while' SPACES;
DO: SPACES 'do' SPACES;

FOR: SPACES 'for' SPACES;
IN: SPACES 'in' SPACES;

REPEAT: SPACES 'repeat' SPACES;
UNTIL: SPACES 'until' SPACES;

LOCAL: SPACES 'local' SPACES;
FUNCTION: SPACES 'function' SPACES;

// Other words
NAME: [a-zA-Z_] [a-zA-Z0-9_]*;
TYPE: SPACES 'type' SPACES;
TYPEOF: SPACES 'typeof' SPACES;
EXPORT: SPACES 'export' SPACES;
typedName: NAME COLON type;
optionalTypedName: NAME (COLON type)?;

EscapeSequence
	: NormalEscape
	| '\\u'
	| '\\x'
	| OctalEscape
	| SpaceEscape;

NormalEscape: '\\' ('a' | 'b' | 'f' | 'n' | 'r' | 't' | 'v' | '\\' | '"' | '\'' | '`');
HexadecimalEscape: '\\x' HexDigit HexDigit;
UnicodeEscape: '\\u{' HexDigit HexDigit? HexDigit? HexDigit? HexDigit? '}';
SpaceEscape: '\\z' SPACES;
OctalEscape: '\\'INT INT? INT?;

fragment HexDigit: [a-fA-F0-9];

// Multi line comments are just long strings with `--` before them!
MULTI_LINE_COMMENT: '--[' ('=' | '[') {LuauCustomLexer.HandleLongString(this)};
SINGLE_LINE_COMMENT: '--' {LuauCustomLexer.HandleSingleComment(this)};
comment: (SINGLE_LINE_COMMENT | MULTI_LINE_COMMENT);

WS: (' ' | '\t' | '\u000C') -> skip;
NEWLINE: ('\r'? '\n' | '\r') -> skip;
fragment SPACES: (WS|NEWLINE)*;

// Symbols
SEMI_COLON: SPACES ';' SPACES;
COLON: SPACES ':' SPACES;
DOUBLE_COLON: SPACES '::' SPACES;
EQUAL: '=';

DOT: SPACES '.' SPACES;
COMMA: SPACES ',' SPACES;

OPEN_PARENTHESIS: SPACES '(' SPACES;
CLOSE_PARENTHESIS: SPACES ')' SPACES;

// OPEN_SQUARE_BRACKETS: '[';
CLOSE_SQUARE_BRACKETS: ']';

OPEN_CURLY_BRACKETS: SPACES '{' SPACES;
CLOSE_CURLY_BRACKETS: SPACES '}' SPACES;

ARROW: SPACES '->' SPACES;
INTERSECTION: SPACES '&' SPACES;
UNION: SPACES '|' SPACES;
OPTIONAL: SPACES '?' SPACES;
