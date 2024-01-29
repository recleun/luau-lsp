parser grammar LuauParser;

options {
	tokenVocab = LuauLexer;
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

setExpressionVar: NAME varSuffix*;
setExpressionVarList: setExpressionVar (COMMA setExpressionVar)*;
setExpression: setExpressionVarList EQUAL expressionList;
compoundSetExpression: setExpressionVar CompoundOperations expression;

doBlock: DO block END;
whileExpression: WHILE expression doBlock;
repeatBlock: REPEAT block UNTIL expression;

ifStatement: ifExpression elseIfExpression* elseExpression? END;
ifExpression: IF expression THEN block;
elseIfExpression: ELSEIF expression THEN block;
elseExpression: (ELSE block);

forExpression: FOR optionalTypedName EQUAL expression COMMA expression (COMMA expression)? doBlock;
forInExpression: FOR allNamesList IN (globalIteratorFunction | expressionList) doBlock;

globalFunction: FUNCTION funcname funcbody;
localFunction: LOCAL FUNCTION NAME funcbody;

variableDeclaration: LOCAL allNamesList ((EQUAL expressionList) | doBlock)?;
typeDeclaration: EXPORT? TYPE NAME (OPEN_ANGLE_BRACKET genericTypeListWithDefaults CLOSE_ANGLE_BRACKET)? EQUAL type;

funcname: NAME (DOT NAME)* (COLON NAME)?;

varList1: var (COMMA var)*;

nameList: NAME (COMMA NAME)*;
typedNameList: typedName (COMMA typedName)*;
mixedNamesList: optionalTypedName (COMMA optionalTypedName)*;
allNamesList: nameList | typedNameList | mixedNamesList;
allNamesListType: typedNameList | typeList;

expressionList: (expression COMMA)* expression;

expression1: (NIL | FALSE | TRUE | NUMBER | STRING | VARIADIC_EXPRESSION | function | prefixexp | tableconstructor | (UnaryOperations | NegativeSign) expression1) ((BinaryOperations | NegativeSign) expression1)*;
expression: expression1 (DOUBLE_COLON type)?;

var: (NAME | OPEN_PARENTHESIS expression CLOSE_PARENTHESIS varSuffix) varSuffix*;

prefixexp: varOrExp nameAndArgs*;
globalIteratorFunction: NAME args;
functioncall: varOrExp nameAndArgs+;
varOrExp: var | OPEN_PARENTHESIS expression CLOSE_PARENTHESIS;

nameAndArgs: (COLON NAME)? args;
varSuffix: nameAndArgs* (OPEN_SQUARE_BRACKETS expression CLOSE_SQUARE_BRACKETS | DOT NAME);
args: OPEN_PARENTHESIS (expressionList)? CLOSE_PARENTHESIS | tableconstructor | STRING;

function: FUNCTION funcbody;
funcbody: (OPEN_ANGLE_BRACKET genericTypeList CLOSE_ANGLE_BRACKET)? functionParameters (COLON functionReturns)? NEWLINE* block NEWLINE* END;

functionParameters: OPEN_PARENTHESIS (parameterList)? CLOSE_PARENTHESIS;
parameterList: allNamesList (COMMA variadicParameter)? | variadicParameter;
variadicParameter: VARIADIC_EXPRESSION (COLON type VARIADIC_EXPRESSION?)?;

functionParametersType: OPEN_PARENTHESIS (parameterListType)? CLOSE_PARENTHESIS;
parameterListType: allNamesListType (COMMA variadicParameterType)? | variadicParameterType;
variadicParameterType: VARIADIC_EXPRESSION type;

functionReturns: (OPEN_PARENTHESIS returnList? CLOSE_PARENTHESIS) | type | variadicReturn;
returnList: typeList (COMMA variadicReturn)? | variadicReturn;
variadicReturn: VARIADIC_EXPRESSION type;

tableconstructor: OPEN_CURLY_BRACKETS fieldList? CLOSE_CURLY_BRACKETS;
fieldList: field (fieldsep field)* (fieldsep)?;
field: OPEN_SQUARE_BRACKETS expression CLOSE_SQUARE_BRACKETS EQUAL expression |
	NAME EQUAL expression |
	expression;
fieldsep: (COMMA | SEMI_COLON);

simpleType:
	NIL |
	singletonType |
	NAME (DOT NAME)? (OPEN_ANGLE_BRACKET typeParams? CLOSE_ANGLE_BRACKET)? |
	TYPEOF OPEN_PARENTHESIS expression CLOSE_PARENTHESIS |
	tableType |
	functionType |
	OPEN_PARENTHESIS type CLOSE_PARENTHESIS;

singletonType: STRING | NAME | TRUE | FALSE;

unionSuffix: (UNION simpleType OPTIONAL?)*;
intersectionSuffix: (INTERSECTION simpleType)*;
type: simpleType OPTIONAL? (unionSuffix | intersectionSuffix);

genericTypePackParameter: NAME VARIADIC_EXPRESSION;
genericTypeList: NAME (COMMA genericTypeList)? | genericTypePackParameter (COMMA genericTypePackParameter)*;

genericTypePackParameterWithDefault: NAME VARIADIC_EXPRESSION EQUAL (typePack | variadicTypePack | genericTypePack);
genericTypeListWithDefaults:
	genericTypeList (COMMA genericTypePackParameterWithDefault)* |
	NAME (COMMA NAME)* (COMMA NAME EQUAL type)* (COMMA genericTypePackParameterWithDefault)* |
	NAME EQUAL type (COMMA genericTypePackParameterWithDefault)* |
	genericTypePackParameterWithDefault (COMMA genericTypePackParameterWithDefault)*;

typeList: type (COMMA typeList)? | VARIADIC_EXPRESSION type;
typeParams: (type | typePack | variadicTypePack | genericTypePack) (COMMA typeParams)?;
typePack: OPEN_PARENTHESIS (typeList)? CLOSE_PARENTHESIS;
genericTypePack: NAME VARIADIC_EXPRESSION;
variadicTypePack: VARIADIC_EXPRESSION type;
functionType: (OPEN_ANGLE_BRACKET genericTypeList CLOSE_ANGLE_BRACKET)? functionParametersType ARROW functionReturns;

tableIndexer: OPEN_SQUARE_BRACKETS type CLOSE_SQUARE_BRACKETS COLON type;
tableProperty: NAME COLON type;
tablePropOrIndexer: tableIndexer | tableProperty;
propList: tablePropOrIndexer (fieldsep tablePropOrIndexer)* (fieldsep)?;
tableType: OPEN_CURLY_BRACKETS (type | propList)? CLOSE_CURLY_BRACKETS;

typedName: NAME COLON type;
optionalTypedName: NAME (COLON type)?;

comment: (SINGLE_LINE_COMMENT | MULTI_LINE_COMMENT);
