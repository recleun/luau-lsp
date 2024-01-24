lexer grammar LuauLexer;

@lexer::header {import { LuauLexerBase } from '../LuauLexerBase';}

// tokens { ARROW_LEFT, ARROW_RIGHT }
options {
	superClass = LuauLexerBase;
}
channels {
WHITE_SPACES
}

// Strings
STRING: LUA_STRING | INTERPOLATED_STRING;
LUA_STRING: DOUBLE_QUOTES_STRING | SINGLE_QUOTES_STRING | MULTI_LINE_STRING;

DOUBLE_QUOTES_STRING: '"' (EscapeSequence | ~('\n'|'\r'|'"'))* (~('\\') | '\\\\') '"' | '""';
SINGLE_QUOTES_STRING: '\'' (EscapeSequence | ~('\n'|'\r'|'\''))* (~('\\') | '\\\\') '\'' | '\'\'';
MULTI_LINE_STRING: '[' ('=' | '[') {this.HandleLongString()};

fragment INTERPOLATED_STRING_ESCAPE_SEQUENCE: ('\\`' | '\\z' '\r'? '\n' | ~('\n'|'\r'|'"'));
fragment INTERPOLATED_STRING_CLOSE_CHARACTERS: ~('{'|'`'|'\n'|'\r');
fragment INTERPOLATED_STRING_BODY: (INTERPOLATED_STRING_CLOSE_CHARACTERS | INTERPOLATED_STRING_ESCAPE_SEQUENCE)*;
INTERPOLATED_STRING: '`' (EscapeSequence | '{' (~'}' | '\\}')*? '}' | ~('\n'|'\r'|'"'))* (~('\\') | '\\\\') '`' | '``';

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
MULTI_LINE_COMMENT: '--[' ('=' | '[') {this.HandleLongString()};
SINGLE_LINE_COMMENT: '--' {this.HandleSingleComment()};

WS: (' ' | '\t' | '\u000C') -> channel(WHITE_SPACES);
NEWLINE: ('\r'? '\n' | '\r') -> channel(WHITE_SPACES);
fragment SPACES: (WS|NEWLINE)*;

// Symbols
SEMI_COLON: SPACES ';' SPACES;
COLON: SPACES ':' SPACES;
DOUBLE_COLON: SPACES '::' SPACES;
EQUAL: SPACES '=' SPACES;

DOT: SPACES '.' SPACES;
COMMA: SPACES ',' SPACES;

OPEN_PARENTHESIS: SPACES '(' SPACES;
CLOSE_PARENTHESIS: SPACES ')' SPACES;

OPEN_ANGLE_BRACKET: SPACES '<' SPACES;
CLOSE_ANGLE_BRACKET: SPACES '>' SPACES;

OPEN_SQUARE_BRACKETS: '[';
CLOSE_SQUARE_BRACKETS: ']';

OPEN_CURLY_BRACKETS: SPACES '{' SPACES;
CLOSE_CURLY_BRACKETS: SPACES '}' SPACES;

ARROW: SPACES '->' SPACES;
INTERSECTION: SPACES '&' SPACES;
UNION: SPACES '|' SPACES;
OPTIONAL: SPACES '?' SPACES;

VARIADIC_EXPRESSION: '...';

CompoundOperations: '+=' | '-=' | '*=' | '/=' | '^=' | '%=' | '..=';
NegativeSign: '-';
UnaryOperations: 'not' | '#';
BinaryOperations:
	'+' | '*' | '/' | '//' | '^' | '%' | '..' |
	'<' | '<=' | '>' | '>=' | '==' | '~=' |
	'and' | 'or';
