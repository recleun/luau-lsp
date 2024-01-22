// Generated from d:/3bdo/Abdulrehman - DO NOT TOUCH/Coding Projects/Visual Studio Code/extensions/Roblox-Luau [parser test]/server/src/grammar/Luau.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LuauParser}.
 */
public interface LuauListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LuauParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(LuauParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(LuauParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#chunk}.
	 * @param ctx the parse tree
	 */
	void enterChunk(LuauParser.ChunkContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#chunk}.
	 * @param ctx the parse tree
	 */
	void exitChunk(LuauParser.ChunkContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(LuauParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(LuauParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(LuauParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(LuauParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#lastStatement}.
	 * @param ctx the parse tree
	 */
	void enterLastStatement(LuauParser.LastStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#lastStatement}.
	 * @param ctx the parse tree
	 */
	void exitLastStatement(LuauParser.LastStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#setExpression}.
	 * @param ctx the parse tree
	 */
	void enterSetExpression(LuauParser.SetExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#setExpression}.
	 * @param ctx the parse tree
	 */
	void exitSetExpression(LuauParser.SetExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#compoundSetExpression}.
	 * @param ctx the parse tree
	 */
	void enterCompoundSetExpression(LuauParser.CompoundSetExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#compoundSetExpression}.
	 * @param ctx the parse tree
	 */
	void exitCompoundSetExpression(LuauParser.CompoundSetExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#doBlock}.
	 * @param ctx the parse tree
	 */
	void enterDoBlock(LuauParser.DoBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#doBlock}.
	 * @param ctx the parse tree
	 */
	void exitDoBlock(LuauParser.DoBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#whileExpression}.
	 * @param ctx the parse tree
	 */
	void enterWhileExpression(LuauParser.WhileExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#whileExpression}.
	 * @param ctx the parse tree
	 */
	void exitWhileExpression(LuauParser.WhileExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#repeatBlock}.
	 * @param ctx the parse tree
	 */
	void enterRepeatBlock(LuauParser.RepeatBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#repeatBlock}.
	 * @param ctx the parse tree
	 */
	void exitRepeatBlock(LuauParser.RepeatBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(LuauParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(LuauParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#forExpression}.
	 * @param ctx the parse tree
	 */
	void enterForExpression(LuauParser.ForExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#forExpression}.
	 * @param ctx the parse tree
	 */
	void exitForExpression(LuauParser.ForExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#forInExpression}.
	 * @param ctx the parse tree
	 */
	void enterForInExpression(LuauParser.ForInExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#forInExpression}.
	 * @param ctx the parse tree
	 */
	void exitForInExpression(LuauParser.ForInExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#globalFunction}.
	 * @param ctx the parse tree
	 */
	void enterGlobalFunction(LuauParser.GlobalFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#globalFunction}.
	 * @param ctx the parse tree
	 */
	void exitGlobalFunction(LuauParser.GlobalFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#localFunction}.
	 * @param ctx the parse tree
	 */
	void enterLocalFunction(LuauParser.LocalFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#localFunction}.
	 * @param ctx the parse tree
	 */
	void exitLocalFunction(LuauParser.LocalFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(LuauParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(LuauParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#typeDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterTypeDeclaration(LuauParser.TypeDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#typeDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitTypeDeclaration(LuauParser.TypeDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#funcname}.
	 * @param ctx the parse tree
	 */
	void enterFuncname(LuauParser.FuncnameContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#funcname}.
	 * @param ctx the parse tree
	 */
	void exitFuncname(LuauParser.FuncnameContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#varList1}.
	 * @param ctx the parse tree
	 */
	void enterVarList1(LuauParser.VarList1Context ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#varList1}.
	 * @param ctx the parse tree
	 */
	void exitVarList1(LuauParser.VarList1Context ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#nameList}.
	 * @param ctx the parse tree
	 */
	void enterNameList(LuauParser.NameListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#nameList}.
	 * @param ctx the parse tree
	 */
	void exitNameList(LuauParser.NameListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#typedNameList}.
	 * @param ctx the parse tree
	 */
	void enterTypedNameList(LuauParser.TypedNameListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#typedNameList}.
	 * @param ctx the parse tree
	 */
	void exitTypedNameList(LuauParser.TypedNameListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#mixedNamesList}.
	 * @param ctx the parse tree
	 */
	void enterMixedNamesList(LuauParser.MixedNamesListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#mixedNamesList}.
	 * @param ctx the parse tree
	 */
	void exitMixedNamesList(LuauParser.MixedNamesListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#allNamesList}.
	 * @param ctx the parse tree
	 */
	void enterAllNamesList(LuauParser.AllNamesListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#allNamesList}.
	 * @param ctx the parse tree
	 */
	void exitAllNamesList(LuauParser.AllNamesListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#expressionList1}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList1(LuauParser.ExpressionList1Context ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#expressionList1}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList1(LuauParser.ExpressionList1Context ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#expressionList2}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList2(LuauParser.ExpressionList2Context ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#expressionList2}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList2(LuauParser.ExpressionList2Context ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#expressionList3}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList3(LuauParser.ExpressionList3Context ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#expressionList3}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList3(LuauParser.ExpressionList3Context ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList(LuauParser.ExpressionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList(LuauParser.ExpressionListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#expression1}.
	 * @param ctx the parse tree
	 */
	void enterExpression1(LuauParser.Expression1Context ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#expression1}.
	 * @param ctx the parse tree
	 */
	void exitExpression1(LuauParser.Expression1Context ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#expression2}.
	 * @param ctx the parse tree
	 */
	void enterExpression2(LuauParser.Expression2Context ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#expression2}.
	 * @param ctx the parse tree
	 */
	void exitExpression2(LuauParser.Expression2Context ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(LuauParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(LuauParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#var}.
	 * @param ctx the parse tree
	 */
	void enterVar(LuauParser.VarContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#var}.
	 * @param ctx the parse tree
	 */
	void exitVar(LuauParser.VarContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#prefixexp}.
	 * @param ctx the parse tree
	 */
	void enterPrefixexp(LuauParser.PrefixexpContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#prefixexp}.
	 * @param ctx the parse tree
	 */
	void exitPrefixexp(LuauParser.PrefixexpContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#functioncall}.
	 * @param ctx the parse tree
	 */
	void enterFunctioncall(LuauParser.FunctioncallContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#functioncall}.
	 * @param ctx the parse tree
	 */
	void exitFunctioncall(LuauParser.FunctioncallContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#varOrExp}.
	 * @param ctx the parse tree
	 */
	void enterVarOrExp(LuauParser.VarOrExpContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#varOrExp}.
	 * @param ctx the parse tree
	 */
	void exitVarOrExp(LuauParser.VarOrExpContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#nameAndArgs}.
	 * @param ctx the parse tree
	 */
	void enterNameAndArgs(LuauParser.NameAndArgsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#nameAndArgs}.
	 * @param ctx the parse tree
	 */
	void exitNameAndArgs(LuauParser.NameAndArgsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#varSuffix}.
	 * @param ctx the parse tree
	 */
	void enterVarSuffix(LuauParser.VarSuffixContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#varSuffix}.
	 * @param ctx the parse tree
	 */
	void exitVarSuffix(LuauParser.VarSuffixContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#args}.
	 * @param ctx the parse tree
	 */
	void enterArgs(LuauParser.ArgsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#args}.
	 * @param ctx the parse tree
	 */
	void exitArgs(LuauParser.ArgsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#function}.
	 * @param ctx the parse tree
	 */
	void enterFunction(LuauParser.FunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#function}.
	 * @param ctx the parse tree
	 */
	void exitFunction(LuauParser.FunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#funcbody}.
	 * @param ctx the parse tree
	 */
	void enterFuncbody(LuauParser.FuncbodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#funcbody}.
	 * @param ctx the parse tree
	 */
	void exitFuncbody(LuauParser.FuncbodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#functionParameters}.
	 * @param ctx the parse tree
	 */
	void enterFunctionParameters(LuauParser.FunctionParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#functionParameters}.
	 * @param ctx the parse tree
	 */
	void exitFunctionParameters(LuauParser.FunctionParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#functionReturns}.
	 * @param ctx the parse tree
	 */
	void enterFunctionReturns(LuauParser.FunctionReturnsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#functionReturns}.
	 * @param ctx the parse tree
	 */
	void exitFunctionReturns(LuauParser.FunctionReturnsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void enterParameterList(LuauParser.ParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void exitParameterList(LuauParser.ParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#returnList}.
	 * @param ctx the parse tree
	 */
	void enterReturnList(LuauParser.ReturnListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#returnList}.
	 * @param ctx the parse tree
	 */
	void exitReturnList(LuauParser.ReturnListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#variadicParameter}.
	 * @param ctx the parse tree
	 */
	void enterVariadicParameter(LuauParser.VariadicParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#variadicParameter}.
	 * @param ctx the parse tree
	 */
	void exitVariadicParameter(LuauParser.VariadicParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#variadicReturn}.
	 * @param ctx the parse tree
	 */
	void enterVariadicReturn(LuauParser.VariadicReturnContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#variadicReturn}.
	 * @param ctx the parse tree
	 */
	void exitVariadicReturn(LuauParser.VariadicReturnContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#tableconstructor}.
	 * @param ctx the parse tree
	 */
	void enterTableconstructor(LuauParser.TableconstructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#tableconstructor}.
	 * @param ctx the parse tree
	 */
	void exitTableconstructor(LuauParser.TableconstructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#fieldList}.
	 * @param ctx the parse tree
	 */
	void enterFieldList(LuauParser.FieldListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#fieldList}.
	 * @param ctx the parse tree
	 */
	void exitFieldList(LuauParser.FieldListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#field}.
	 * @param ctx the parse tree
	 */
	void enterField(LuauParser.FieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#field}.
	 * @param ctx the parse tree
	 */
	void exitField(LuauParser.FieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#fieldsep}.
	 * @param ctx the parse tree
	 */
	void enterFieldsep(LuauParser.FieldsepContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#fieldsep}.
	 * @param ctx the parse tree
	 */
	void exitFieldsep(LuauParser.FieldsepContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#compound_operations}.
	 * @param ctx the parse tree
	 */
	void enterCompound_operations(LuauParser.Compound_operationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#compound_operations}.
	 * @param ctx the parse tree
	 */
	void exitCompound_operations(LuauParser.Compound_operationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#binary_operations}.
	 * @param ctx the parse tree
	 */
	void enterBinary_operations(LuauParser.Binary_operationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#binary_operations}.
	 * @param ctx the parse tree
	 */
	void exitBinary_operations(LuauParser.Binary_operationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#unary_operations}.
	 * @param ctx the parse tree
	 */
	void enterUnary_operations(LuauParser.Unary_operationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#unary_operations}.
	 * @param ctx the parse tree
	 */
	void exitUnary_operations(LuauParser.Unary_operationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(LuauParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(LuauParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#luaString}.
	 * @param ctx the parse tree
	 */
	void enterLuaString(LuauParser.LuaStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#luaString}.
	 * @param ctx the parse tree
	 */
	void exitLuaString(LuauParser.LuaStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(LuauParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(LuauParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#simpleType}.
	 * @param ctx the parse tree
	 */
	void enterSimpleType(LuauParser.SimpleTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#simpleType}.
	 * @param ctx the parse tree
	 */
	void exitSimpleType(LuauParser.SimpleTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#singletonType}.
	 * @param ctx the parse tree
	 */
	void enterSingletonType(LuauParser.SingletonTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#singletonType}.
	 * @param ctx the parse tree
	 */
	void exitSingletonType(LuauParser.SingletonTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#unionSuffix}.
	 * @param ctx the parse tree
	 */
	void enterUnionSuffix(LuauParser.UnionSuffixContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#unionSuffix}.
	 * @param ctx the parse tree
	 */
	void exitUnionSuffix(LuauParser.UnionSuffixContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#intersectionSuffix}.
	 * @param ctx the parse tree
	 */
	void enterIntersectionSuffix(LuauParser.IntersectionSuffixContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#intersectionSuffix}.
	 * @param ctx the parse tree
	 */
	void exitIntersectionSuffix(LuauParser.IntersectionSuffixContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(LuauParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(LuauParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#genericTypePackParameter}.
	 * @param ctx the parse tree
	 */
	void enterGenericTypePackParameter(LuauParser.GenericTypePackParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#genericTypePackParameter}.
	 * @param ctx the parse tree
	 */
	void exitGenericTypePackParameter(LuauParser.GenericTypePackParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#genericTypeList}.
	 * @param ctx the parse tree
	 */
	void enterGenericTypeList(LuauParser.GenericTypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#genericTypeList}.
	 * @param ctx the parse tree
	 */
	void exitGenericTypeList(LuauParser.GenericTypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#genericTypePackParameterWithDefault}.
	 * @param ctx the parse tree
	 */
	void enterGenericTypePackParameterWithDefault(LuauParser.GenericTypePackParameterWithDefaultContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#genericTypePackParameterWithDefault}.
	 * @param ctx the parse tree
	 */
	void exitGenericTypePackParameterWithDefault(LuauParser.GenericTypePackParameterWithDefaultContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#genericTypeListWithDefaults}.
	 * @param ctx the parse tree
	 */
	void enterGenericTypeListWithDefaults(LuauParser.GenericTypeListWithDefaultsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#genericTypeListWithDefaults}.
	 * @param ctx the parse tree
	 */
	void exitGenericTypeListWithDefaults(LuauParser.GenericTypeListWithDefaultsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#typeList}.
	 * @param ctx the parse tree
	 */
	void enterTypeList(LuauParser.TypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#typeList}.
	 * @param ctx the parse tree
	 */
	void exitTypeList(LuauParser.TypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#boundTypeList}.
	 * @param ctx the parse tree
	 */
	void enterBoundTypeList(LuauParser.BoundTypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#boundTypeList}.
	 * @param ctx the parse tree
	 */
	void exitBoundTypeList(LuauParser.BoundTypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#typeParams}.
	 * @param ctx the parse tree
	 */
	void enterTypeParams(LuauParser.TypeParamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#typeParams}.
	 * @param ctx the parse tree
	 */
	void exitTypeParams(LuauParser.TypeParamsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#typePack}.
	 * @param ctx the parse tree
	 */
	void enterTypePack(LuauParser.TypePackContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#typePack}.
	 * @param ctx the parse tree
	 */
	void exitTypePack(LuauParser.TypePackContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#genericTypePack}.
	 * @param ctx the parse tree
	 */
	void enterGenericTypePack(LuauParser.GenericTypePackContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#genericTypePack}.
	 * @param ctx the parse tree
	 */
	void exitGenericTypePack(LuauParser.GenericTypePackContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#variadicTypePack}.
	 * @param ctx the parse tree
	 */
	void enterVariadicTypePack(LuauParser.VariadicTypePackContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#variadicTypePack}.
	 * @param ctx the parse tree
	 */
	void exitVariadicTypePack(LuauParser.VariadicTypePackContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#returnType}.
	 * @param ctx the parse tree
	 */
	void enterReturnType(LuauParser.ReturnTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#returnType}.
	 * @param ctx the parse tree
	 */
	void exitReturnType(LuauParser.ReturnTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#functionType}.
	 * @param ctx the parse tree
	 */
	void enterFunctionType(LuauParser.FunctionTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#functionType}.
	 * @param ctx the parse tree
	 */
	void exitFunctionType(LuauParser.FunctionTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#tableIndexer}.
	 * @param ctx the parse tree
	 */
	void enterTableIndexer(LuauParser.TableIndexerContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#tableIndexer}.
	 * @param ctx the parse tree
	 */
	void exitTableIndexer(LuauParser.TableIndexerContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#tablePropOrIndexer}.
	 * @param ctx the parse tree
	 */
	void enterTablePropOrIndexer(LuauParser.TablePropOrIndexerContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#tablePropOrIndexer}.
	 * @param ctx the parse tree
	 */
	void exitTablePropOrIndexer(LuauParser.TablePropOrIndexerContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#propList}.
	 * @param ctx the parse tree
	 */
	void enterPropList(LuauParser.PropListContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#propList}.
	 * @param ctx the parse tree
	 */
	void exitPropList(LuauParser.PropListContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#tableType}.
	 * @param ctx the parse tree
	 */
	void enterTableType(LuauParser.TableTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#tableType}.
	 * @param ctx the parse tree
	 */
	void exitTableType(LuauParser.TableTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#typedName}.
	 * @param ctx the parse tree
	 */
	void enterTypedName(LuauParser.TypedNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#typedName}.
	 * @param ctx the parse tree
	 */
	void exitTypedName(LuauParser.TypedNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#multiLineComment}.
	 * @param ctx the parse tree
	 */
	void enterMultiLineComment(LuauParser.MultiLineCommentContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#multiLineComment}.
	 * @param ctx the parse tree
	 */
	void exitMultiLineComment(LuauParser.MultiLineCommentContext ctx);
	/**
	 * Enter a parse tree produced by {@link LuauParser#comment}.
	 * @param ctx the parse tree
	 */
	void enterComment(LuauParser.CommentContext ctx);
	/**
	 * Exit a parse tree produced by {@link LuauParser#comment}.
	 * @param ctx the parse tree
	 */
	void exitComment(LuauParser.CommentContext ctx);
}