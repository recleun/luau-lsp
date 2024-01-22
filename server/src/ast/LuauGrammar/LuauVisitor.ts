// Generated from ./server/src/grammar/Luau.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LuauParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LuauVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LuauParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.chunk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChunk?: (ctx: ChunkContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.lastStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastStatement?: (ctx: LastStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.setExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetExpression?: (ctx: SetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.compoundSetExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundSetExpression?: (ctx: CompoundSetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.doBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoBlock?: (ctx: DoBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.whileExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileExpression?: (ctx: WhileExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.repeatBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatBlock?: (ctx: RepeatBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.forExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForExpression?: (ctx: ForExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.forInExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInExpression?: (ctx: ForInExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.globalFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalFunction?: (ctx: GlobalFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.localFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalFunction?: (ctx: LocalFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.funcname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncname?: (ctx: FuncnameContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.varList1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarList1?: (ctx: VarList1Context) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.nextExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNextExpression?: (ctx: NextExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.nameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameList?: (ctx: NameListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.typedNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedNameList?: (ctx: TypedNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.mixedNamesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixedNamesList?: (ctx: MixedNamesListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.allNamesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllNamesList?: (ctx: AllNamesListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.allNamesListType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllNamesListType?: (ctx: AllNamesListTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.expressionList1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList1?: (ctx: ExpressionList1Context) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.expressionList2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList2?: (ctx: ExpressionList2Context) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.expression1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression1?: (ctx: Expression1Context) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.expression2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression2?: (ctx: Expression2Context) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.prefixexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixexp?: (ctx: PrefixexpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.globalIteratorFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalIteratorFunction?: (ctx: GlobalIteratorFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctioncall?: (ctx: FunctioncallContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.varOrExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrExp?: (ctx: VarOrExpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.nameAndArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameAndArgs?: (ctx: NameAndArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.varSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarSuffix?: (ctx: VarSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.funcbody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncbody?: (ctx: FuncbodyContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.functionParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.functionParametersType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParametersType?: (ctx: FunctionParametersTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.functionReturns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionReturns?: (ctx: FunctionReturnsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.parameterListType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterListType?: (ctx: ParameterListTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.returnList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnList?: (ctx: ReturnListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.variadicParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariadicParameter?: (ctx: VariadicParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.variadicParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariadicParameterType?: (ctx: VariadicParameterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.variadicReturn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariadicReturn?: (ctx: VariadicReturnContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.tableconstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableconstructor?: (ctx: TableconstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.fieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldList?: (ctx: FieldListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.fieldsep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldsep?: (ctx: FieldsepContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.compound_operations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_operations?: (ctx: Compound_operationsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.binary_operations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_operations?: (ctx: Binary_operationsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.unary_operations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operations?: (ctx: Unary_operationsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.simpleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleType?: (ctx: SimpleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.singletonType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingletonType?: (ctx: SingletonTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.unionSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionSuffix?: (ctx: UnionSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.intersectionSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectionSuffix?: (ctx: IntersectionSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.genericTypePackParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypePackParameter?: (ctx: GenericTypePackParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.genericTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypeList?: (ctx: GenericTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.genericTypePackParameterWithDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypePackParameterWithDefault?: (ctx: GenericTypePackParameterWithDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.genericTypeListWithDefaults`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypeListWithDefaults?: (ctx: GenericTypeListWithDefaultsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.typeParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParams?: (ctx: TypeParamsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.typePack`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePack?: (ctx: TypePackContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.genericTypePack`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypePack?: (ctx: GenericTypePackContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.variadicTypePack`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariadicTypePack?: (ctx: VariadicTypePackContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.tableIndexer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableIndexer?: (ctx: TableIndexerContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.tablePropOrIndexer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropOrIndexer?: (ctx: TablePropOrIndexerContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.propList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropList?: (ctx: PropListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.tableType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableType?: (ctx: TableTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.typedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedName?: (ctx: TypedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.optionalTypedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTypedName?: (ctx: OptionalTypedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `LuauParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

