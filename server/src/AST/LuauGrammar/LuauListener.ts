// Generated from ./server/src/grammar/Luau.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./LuauParser";
import { ChunkContext } from "./LuauParser";
import { BlockContext } from "./LuauParser";
import { StatementContext } from "./LuauParser";
import { LastStatementContext } from "./LuauParser";
import { SetExpressionContext } from "./LuauParser";
import { CompoundSetExpressionContext } from "./LuauParser";
import { DoBlockContext } from "./LuauParser";
import { WhileExpressionContext } from "./LuauParser";
import { RepeatBlockContext } from "./LuauParser";
import { IfStatementContext } from "./LuauParser";
import { ForExpressionContext } from "./LuauParser";
import { ForInExpressionContext } from "./LuauParser";
import { GlobalFunctionContext } from "./LuauParser";
import { LocalFunctionContext } from "./LuauParser";
import { VariableDeclarationContext } from "./LuauParser";
import { TypeDeclarationContext } from "./LuauParser";
import { FuncnameContext } from "./LuauParser";
import { VarList1Context } from "./LuauParser";
import { NextExpressionContext } from "./LuauParser";
import { NameListContext } from "./LuauParser";
import { TypedNameListContext } from "./LuauParser";
import { MixedNamesListContext } from "./LuauParser";
import { AllNamesListContext } from "./LuauParser";
import { AllNamesListTypeContext } from "./LuauParser";
import { ExpressionList1Context } from "./LuauParser";
import { ExpressionList2Context } from "./LuauParser";
import { ExpressionListContext } from "./LuauParser";
import { Expression1Context } from "./LuauParser";
import { Expression2Context } from "./LuauParser";
import { ExpressionContext } from "./LuauParser";
import { VarContext } from "./LuauParser";
import { PrefixexpContext } from "./LuauParser";
import { GlobalIteratorFunctionContext } from "./LuauParser";
import { FunctioncallContext } from "./LuauParser";
import { VarOrExpContext } from "./LuauParser";
import { NameAndArgsContext } from "./LuauParser";
import { VarSuffixContext } from "./LuauParser";
import { ArgsContext } from "./LuauParser";
import { FunctionContext } from "./LuauParser";
import { FuncbodyContext } from "./LuauParser";
import { FunctionParametersContext } from "./LuauParser";
import { FunctionParametersTypeContext } from "./LuauParser";
import { FunctionReturnsContext } from "./LuauParser";
import { ParameterListContext } from "./LuauParser";
import { ParameterListTypeContext } from "./LuauParser";
import { ReturnListContext } from "./LuauParser";
import { VariadicParameterContext } from "./LuauParser";
import { VariadicParameterTypeContext } from "./LuauParser";
import { VariadicReturnContext } from "./LuauParser";
import { TableconstructorContext } from "./LuauParser";
import { FieldListContext } from "./LuauParser";
import { FieldContext } from "./LuauParser";
import { FieldsepContext } from "./LuauParser";
import { Compound_operationsContext } from "./LuauParser";
import { Binary_operationsContext } from "./LuauParser";
import { Unary_operationsContext } from "./LuauParser";
import { SimpleTypeContext } from "./LuauParser";
import { SingletonTypeContext } from "./LuauParser";
import { UnionSuffixContext } from "./LuauParser";
import { IntersectionSuffixContext } from "./LuauParser";
import { TypeContext } from "./LuauParser";
import { GenericTypePackParameterContext } from "./LuauParser";
import { GenericTypeListContext } from "./LuauParser";
import { GenericTypePackParameterWithDefaultContext } from "./LuauParser";
import { GenericTypeListWithDefaultsContext } from "./LuauParser";
import { TypeListContext } from "./LuauParser";
import { TypeParamsContext } from "./LuauParser";
import { TypePackContext } from "./LuauParser";
import { GenericTypePackContext } from "./LuauParser";
import { VariadicTypePackContext } from "./LuauParser";
import { FunctionTypeContext } from "./LuauParser";
import { TableIndexerContext } from "./LuauParser";
import { TablePropertyContext } from "./LuauParser";
import { TablePropOrIndexerContext } from "./LuauParser";
import { PropListContext } from "./LuauParser";
import { TableTypeContext } from "./LuauParser";
import { TypedNameContext } from "./LuauParser";
import { OptionalTypedNameContext } from "./LuauParser";
import { CommentContext } from "./LuauParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LuauParser`.
 */
export interface LuauListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LuauParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.chunk`.
	 * @param ctx the parse tree
	 */
	enterChunk?: (ctx: ChunkContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.chunk`.
	 * @param ctx the parse tree
	 */
	exitChunk?: (ctx: ChunkContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.lastStatement`.
	 * @param ctx the parse tree
	 */
	enterLastStatement?: (ctx: LastStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.lastStatement`.
	 * @param ctx the parse tree
	 */
	exitLastStatement?: (ctx: LastStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.setExpression`.
	 * @param ctx the parse tree
	 */
	enterSetExpression?: (ctx: SetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.setExpression`.
	 * @param ctx the parse tree
	 */
	exitSetExpression?: (ctx: SetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.compoundSetExpression`.
	 * @param ctx the parse tree
	 */
	enterCompoundSetExpression?: (ctx: CompoundSetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.compoundSetExpression`.
	 * @param ctx the parse tree
	 */
	exitCompoundSetExpression?: (ctx: CompoundSetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.doBlock`.
	 * @param ctx the parse tree
	 */
	enterDoBlock?: (ctx: DoBlockContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.doBlock`.
	 * @param ctx the parse tree
	 */
	exitDoBlock?: (ctx: DoBlockContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.whileExpression`.
	 * @param ctx the parse tree
	 */
	enterWhileExpression?: (ctx: WhileExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.whileExpression`.
	 * @param ctx the parse tree
	 */
	exitWhileExpression?: (ctx: WhileExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.repeatBlock`.
	 * @param ctx the parse tree
	 */
	enterRepeatBlock?: (ctx: RepeatBlockContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.repeatBlock`.
	 * @param ctx the parse tree
	 */
	exitRepeatBlock?: (ctx: RepeatBlockContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.forExpression`.
	 * @param ctx the parse tree
	 */
	enterForExpression?: (ctx: ForExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.forExpression`.
	 * @param ctx the parse tree
	 */
	exitForExpression?: (ctx: ForExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.forInExpression`.
	 * @param ctx the parse tree
	 */
	enterForInExpression?: (ctx: ForInExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.forInExpression`.
	 * @param ctx the parse tree
	 */
	exitForInExpression?: (ctx: ForInExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.globalFunction`.
	 * @param ctx the parse tree
	 */
	enterGlobalFunction?: (ctx: GlobalFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.globalFunction`.
	 * @param ctx the parse tree
	 */
	exitGlobalFunction?: (ctx: GlobalFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.localFunction`.
	 * @param ctx the parse tree
	 */
	enterLocalFunction?: (ctx: LocalFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.localFunction`.
	 * @param ctx the parse tree
	 */
	exitLocalFunction?: (ctx: LocalFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.varList1`.
	 * @param ctx the parse tree
	 */
	enterVarList1?: (ctx: VarList1Context) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.varList1`.
	 * @param ctx the parse tree
	 */
	exitVarList1?: (ctx: VarList1Context) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.nextExpression`.
	 * @param ctx the parse tree
	 */
	enterNextExpression?: (ctx: NextExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.nextExpression`.
	 * @param ctx the parse tree
	 */
	exitNextExpression?: (ctx: NextExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.nameList`.
	 * @param ctx the parse tree
	 */
	enterNameList?: (ctx: NameListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.nameList`.
	 * @param ctx the parse tree
	 */
	exitNameList?: (ctx: NameListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.typedNameList`.
	 * @param ctx the parse tree
	 */
	enterTypedNameList?: (ctx: TypedNameListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.typedNameList`.
	 * @param ctx the parse tree
	 */
	exitTypedNameList?: (ctx: TypedNameListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.mixedNamesList`.
	 * @param ctx the parse tree
	 */
	enterMixedNamesList?: (ctx: MixedNamesListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.mixedNamesList`.
	 * @param ctx the parse tree
	 */
	exitMixedNamesList?: (ctx: MixedNamesListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.allNamesList`.
	 * @param ctx the parse tree
	 */
	enterAllNamesList?: (ctx: AllNamesListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.allNamesList`.
	 * @param ctx the parse tree
	 */
	exitAllNamesList?: (ctx: AllNamesListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.allNamesListType`.
	 * @param ctx the parse tree
	 */
	enterAllNamesListType?: (ctx: AllNamesListTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.allNamesListType`.
	 * @param ctx the parse tree
	 */
	exitAllNamesListType?: (ctx: AllNamesListTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.expressionList1`.
	 * @param ctx the parse tree
	 */
	enterExpressionList1?: (ctx: ExpressionList1Context) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.expressionList1`.
	 * @param ctx the parse tree
	 */
	exitExpressionList1?: (ctx: ExpressionList1Context) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.expressionList2`.
	 * @param ctx the parse tree
	 */
	enterExpressionList2?: (ctx: ExpressionList2Context) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.expressionList2`.
	 * @param ctx the parse tree
	 */
	exitExpressionList2?: (ctx: ExpressionList2Context) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.expression1`.
	 * @param ctx the parse tree
	 */
	enterExpression1?: (ctx: Expression1Context) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.expression1`.
	 * @param ctx the parse tree
	 */
	exitExpression1?: (ctx: Expression1Context) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.expression2`.
	 * @param ctx the parse tree
	 */
	enterExpression2?: (ctx: Expression2Context) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.expression2`.
	 * @param ctx the parse tree
	 */
	exitExpression2?: (ctx: Expression2Context) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp?: (ctx: PrefixexpContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp?: (ctx: PrefixexpContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.globalIteratorFunction`.
	 * @param ctx the parse tree
	 */
	enterGlobalIteratorFunction?: (ctx: GlobalIteratorFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.globalIteratorFunction`.
	 * @param ctx the parse tree
	 */
	exitGlobalIteratorFunction?: (ctx: GlobalIteratorFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFunctioncall?: (ctx: FunctioncallContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFunctioncall?: (ctx: FunctioncallContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.varOrExp`.
	 * @param ctx the parse tree
	 */
	enterVarOrExp?: (ctx: VarOrExpContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.varOrExp`.
	 * @param ctx the parse tree
	 */
	exitVarOrExp?: (ctx: VarOrExpContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.nameAndArgs`.
	 * @param ctx the parse tree
	 */
	enterNameAndArgs?: (ctx: NameAndArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.nameAndArgs`.
	 * @param ctx the parse tree
	 */
	exitNameAndArgs?: (ctx: NameAndArgsContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.varSuffix`.
	 * @param ctx the parse tree
	 */
	enterVarSuffix?: (ctx: VarSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.varSuffix`.
	 * @param ctx the parse tree
	 */
	exitVarSuffix?: (ctx: VarSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.funcbody`.
	 * @param ctx the parse tree
	 */
	enterFuncbody?: (ctx: FuncbodyContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.funcbody`.
	 * @param ctx the parse tree
	 */
	exitFuncbody?: (ctx: FuncbodyContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameters?: (ctx: FunctionParametersContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.functionParametersType`.
	 * @param ctx the parse tree
	 */
	enterFunctionParametersType?: (ctx: FunctionParametersTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.functionParametersType`.
	 * @param ctx the parse tree
	 */
	exitFunctionParametersType?: (ctx: FunctionParametersTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.functionReturns`.
	 * @param ctx the parse tree
	 */
	enterFunctionReturns?: (ctx: FunctionReturnsContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.functionReturns`.
	 * @param ctx the parse tree
	 */
	exitFunctionReturns?: (ctx: FunctionReturnsContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.parameterListType`.
	 * @param ctx the parse tree
	 */
	enterParameterListType?: (ctx: ParameterListTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.parameterListType`.
	 * @param ctx the parse tree
	 */
	exitParameterListType?: (ctx: ParameterListTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.returnList`.
	 * @param ctx the parse tree
	 */
	enterReturnList?: (ctx: ReturnListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.returnList`.
	 * @param ctx the parse tree
	 */
	exitReturnList?: (ctx: ReturnListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.variadicParameter`.
	 * @param ctx the parse tree
	 */
	enterVariadicParameter?: (ctx: VariadicParameterContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.variadicParameter`.
	 * @param ctx the parse tree
	 */
	exitVariadicParameter?: (ctx: VariadicParameterContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.variadicParameterType`.
	 * @param ctx the parse tree
	 */
	enterVariadicParameterType?: (ctx: VariadicParameterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.variadicParameterType`.
	 * @param ctx the parse tree
	 */
	exitVariadicParameterType?: (ctx: VariadicParameterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.variadicReturn`.
	 * @param ctx the parse tree
	 */
	enterVariadicReturn?: (ctx: VariadicReturnContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.variadicReturn`.
	 * @param ctx the parse tree
	 */
	exitVariadicReturn?: (ctx: VariadicReturnContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	enterTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	exitTableconstructor?: (ctx: TableconstructorContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	enterFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	exitFieldsep?: (ctx: FieldsepContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.compound_operations`.
	 * @param ctx the parse tree
	 */
	enterCompound_operations?: (ctx: Compound_operationsContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.compound_operations`.
	 * @param ctx the parse tree
	 */
	exitCompound_operations?: (ctx: Compound_operationsContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.binary_operations`.
	 * @param ctx the parse tree
	 */
	enterBinary_operations?: (ctx: Binary_operationsContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.binary_operations`.
	 * @param ctx the parse tree
	 */
	exitBinary_operations?: (ctx: Binary_operationsContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.unary_operations`.
	 * @param ctx the parse tree
	 */
	enterUnary_operations?: (ctx: Unary_operationsContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.unary_operations`.
	 * @param ctx the parse tree
	 */
	exitUnary_operations?: (ctx: Unary_operationsContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.simpleType`.
	 * @param ctx the parse tree
	 */
	enterSimpleType?: (ctx: SimpleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.simpleType`.
	 * @param ctx the parse tree
	 */
	exitSimpleType?: (ctx: SimpleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.singletonType`.
	 * @param ctx the parse tree
	 */
	enterSingletonType?: (ctx: SingletonTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.singletonType`.
	 * @param ctx the parse tree
	 */
	exitSingletonType?: (ctx: SingletonTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.unionSuffix`.
	 * @param ctx the parse tree
	 */
	enterUnionSuffix?: (ctx: UnionSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.unionSuffix`.
	 * @param ctx the parse tree
	 */
	exitUnionSuffix?: (ctx: UnionSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.intersectionSuffix`.
	 * @param ctx the parse tree
	 */
	enterIntersectionSuffix?: (ctx: IntersectionSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.intersectionSuffix`.
	 * @param ctx the parse tree
	 */
	exitIntersectionSuffix?: (ctx: IntersectionSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.genericTypePackParameter`.
	 * @param ctx the parse tree
	 */
	enterGenericTypePackParameter?: (ctx: GenericTypePackParameterContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.genericTypePackParameter`.
	 * @param ctx the parse tree
	 */
	exitGenericTypePackParameter?: (ctx: GenericTypePackParameterContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.genericTypeList`.
	 * @param ctx the parse tree
	 */
	enterGenericTypeList?: (ctx: GenericTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.genericTypeList`.
	 * @param ctx the parse tree
	 */
	exitGenericTypeList?: (ctx: GenericTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.genericTypePackParameterWithDefault`.
	 * @param ctx the parse tree
	 */
	enterGenericTypePackParameterWithDefault?: (ctx: GenericTypePackParameterWithDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.genericTypePackParameterWithDefault`.
	 * @param ctx the parse tree
	 */
	exitGenericTypePackParameterWithDefault?: (ctx: GenericTypePackParameterWithDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.genericTypeListWithDefaults`.
	 * @param ctx the parse tree
	 */
	enterGenericTypeListWithDefaults?: (ctx: GenericTypeListWithDefaultsContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.genericTypeListWithDefaults`.
	 * @param ctx the parse tree
	 */
	exitGenericTypeListWithDefaults?: (ctx: GenericTypeListWithDefaultsContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.typeParams`.
	 * @param ctx the parse tree
	 */
	enterTypeParams?: (ctx: TypeParamsContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.typeParams`.
	 * @param ctx the parse tree
	 */
	exitTypeParams?: (ctx: TypeParamsContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.typePack`.
	 * @param ctx the parse tree
	 */
	enterTypePack?: (ctx: TypePackContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.typePack`.
	 * @param ctx the parse tree
	 */
	exitTypePack?: (ctx: TypePackContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.genericTypePack`.
	 * @param ctx the parse tree
	 */
	enterGenericTypePack?: (ctx: GenericTypePackContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.genericTypePack`.
	 * @param ctx the parse tree
	 */
	exitGenericTypePack?: (ctx: GenericTypePackContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.variadicTypePack`.
	 * @param ctx the parse tree
	 */
	enterVariadicTypePack?: (ctx: VariadicTypePackContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.variadicTypePack`.
	 * @param ctx the parse tree
	 */
	exitVariadicTypePack?: (ctx: VariadicTypePackContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.tableIndexer`.
	 * @param ctx the parse tree
	 */
	enterTableIndexer?: (ctx: TableIndexerContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.tableIndexer`.
	 * @param ctx the parse tree
	 */
	exitTableIndexer?: (ctx: TableIndexerContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	enterTableProperty?: (ctx: TablePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	exitTableProperty?: (ctx: TablePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.tablePropOrIndexer`.
	 * @param ctx the parse tree
	 */
	enterTablePropOrIndexer?: (ctx: TablePropOrIndexerContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.tablePropOrIndexer`.
	 * @param ctx the parse tree
	 */
	exitTablePropOrIndexer?: (ctx: TablePropOrIndexerContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.propList`.
	 * @param ctx the parse tree
	 */
	enterPropList?: (ctx: PropListContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.propList`.
	 * @param ctx the parse tree
	 */
	exitPropList?: (ctx: PropListContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.tableType`.
	 * @param ctx the parse tree
	 */
	enterTableType?: (ctx: TableTypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.tableType`.
	 * @param ctx the parse tree
	 */
	exitTableType?: (ctx: TableTypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.typedName`.
	 * @param ctx the parse tree
	 */
	enterTypedName?: (ctx: TypedNameContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.typedName`.
	 * @param ctx the parse tree
	 */
	exitTypedName?: (ctx: TypedNameContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.optionalTypedName`.
	 * @param ctx the parse tree
	 */
	enterOptionalTypedName?: (ctx: OptionalTypedNameContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.optionalTypedName`.
	 * @param ctx the parse tree
	 */
	exitOptionalTypedName?: (ctx: OptionalTypedNameContext) => void;

	/**
	 * Enter a parse tree produced by `LuauParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `LuauParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

