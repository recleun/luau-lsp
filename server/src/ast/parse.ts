import {
	AST,
	ForIn,
	ForNumeric,
	NormalizedExpressions,
	NormalizedNames,
	AstToken,
	VariableDeclaration,
	IfStatement,
	ElseIfStatement,
	TableFields,
	ASTNode,
} from "../types";
import {
	ElseExpressionContext,
	ElseIfExpressionContext,
	ForExpressionContext,
	ForInExpressionContext,
	GlobalFunctionContext,
	IfExpressionContext,
	IfStatementContext,
	LocalFunctionContext,
	LuauParser,
	RepeatBlockContext,
	SetExpressionContext,
	TypeDeclarationContext,
	VariableDeclarationContext,
	WhileExpressionContext,
} from './LuauGrammar/LuauParser';
import {
	ANTLRErrorListener,
	CharStreams,
	CommonTokenStream,
	ParserRuleContext,
	RecognitionException,
	Recognizer,
	Token,
} from 'antlr4ts';
import { getEnd, normalizeExpression } from "./parser/as-expression";
import { normalizeAllNamesList } from "./parser/as-names";
import { buildFunction, createFunctionPlaceholder } from "./parser/as-function";
import { functionTypeToString } from "../utilities/to-string/function-type-to-string";
import { asType, getTypeFromValue } from "./parser/as-type";
import { DiagnosticSeverity, Position, Range } from "vscode-languageserver";
import { asForInLoop, asForLoop, createForInPlaceholder, createForNumericPlaceholder } from "./parser/as-for-loop";
import { TextDocument } from "vscode-languageserver-textdocument";
import { findVariable, log, logTable, tableFieldsToString, tableKeyToString, toString } from "../utilities";
import { addDiagnostic, getCurrentUri, setFile } from "../diagnostics";
import { LuauLexer } from "./LuauGrammar/LuauLexer";
import { LuauParserListener as LuauListener } from './LuauGrammar/LuauParserListener';
import { AstBuilder, IfStatementBuilder, PossibleTypesBuilder, TypeDefinitionBuilder, ValueBuilder, VariableDeclarationBuilder } from "../classes";
import { Enums, Constructors, globals } from "./env";

let currentAst: AST;

function setNodeEnds(token: AstToken, context: ParserRuleContext): AstToken {
	token.Start = Position.create(context.start.line - 1, context.start.charPositionInLine);
	token.End = getEnd(context.text, token.Start);

	return token;
}

class ErrorListener implements ANTLRErrorListener<Token> {
	syntaxError(
		recognizer: Recognizer<Token, any>,
		offendingSymbol: Token | undefined,
		line: number,
		charPositionInLine: number,
		msg: string,
		e?: RecognitionException
	): void {
		const start = Position.create(line - 1, charPositionInLine);
		let end = start;
		if (offendingSymbol && offendingSymbol.text) {
			end = getEnd(offendingSymbol.text, start);
		}

		addDiagnostic({
			range: Range.create(start, end),
			message: msg,
			severity: DiagnosticSeverity.Error,
		});
	}
}

class Listener implements LuauListener {
	//TODO:
	exitSetExpression(ctx: SetExpressionContext) {
		if (ctx.exception) { return; }

		ctx.varList1().text;
		ctx.expressionList().text;
	}
	//TODO:
	exitWhileExpression(ctx: WhileExpressionContext) {
		if (ctx.exception) { return; }

		ctx.expression().text;
		ctx.doBlock().block().text;
	}
	//TODO:
	exitRepeatBlock(ctx: RepeatBlockContext) {
		if (ctx.exception) { return; }

		ctx.block().text;
		ctx.expression().text;
	}

	enterIfExpression(ctx: IfExpressionContext) {
		const ifStatement = IfStatementBuilder.default(AstBuilder.withParent(currentAst));
		currentAst.Tokens.push(ifStatement);
		currentAst = ifStatement.Body;
	}
	enterElseIfExpression(ctx: ElseIfExpressionContext) {
		const parentTokens = currentAst.Parent!.Tokens;
		const ifStatement = parentTokens[parentTokens.length - 1] as IfStatement;

		const elseIfStatement = IfStatementBuilder.elseIf(AstBuilder.withParent(currentAst.Parent!));
		currentAst = elseIfStatement.Body;

		ifStatement.ElseIfStatements.push(elseIfStatement);
	}
	exitElseIfExpression(ctx: ElseIfExpressionContext) {
		const parentTokens = currentAst.Parent!.Tokens;
		const ifStatement = parentTokens[parentTokens.length - 1] as IfStatement;
		const elseIfStatement = ifStatement.ElseIfStatements[ifStatement.ElseIfStatements.length - 1];
		elseIfStatement.Condition = normalizeExpression([ctx.expression()], currentAst)[0].Value.RawValue;
	}
	enterElseExpression(ctx: ElseExpressionContext) {
		const parentTokens = currentAst.Parent!.Tokens;
		const ifStatement = parentTokens[parentTokens.length - 1] as IfStatement;

		const elseStatement = IfStatementBuilder.else(AstBuilder.withParent(currentAst.Parent!));
		currentAst = elseStatement.Body;

		ifStatement.Else = elseStatement;
	}
	exitIfExpression(ctx: IfExpressionContext) {
		if (ctx.exception) { return; }

		const parentTokens = currentAst.Parent!.Tokens;
		const ifStatement = parentTokens[parentTokens.length - 1] as IfStatement;
		ifStatement.Condition = normalizeExpression([ctx.expression()], currentAst)[0].Value.RawValue;
	}

	enterForExpression(ctx: ForExpressionContext) {
		const forIn = createForNumericPlaceholder();
		forIn.Body.Parent = currentAst;

		currentAst.Tokens.push(forIn);
		currentAst = forIn.Body;
	}
	exitForExpression(ctx: ForExpressionContext) {
		if (ctx.exception) { return; }

		currentAst = currentAst.Parent!;
		const parsedToken = setNodeEnds(currentAst.Tokens[currentAst.Tokens.length - 1], ctx);
		asForLoop(currentAst, ctx, parsedToken as ForNumeric);
		//TODO: Check for wrong direction looping (start + step will never reach or pass end)
	}

	enterForInExpression(ctx: ForInExpressionContext) {
		const forIn = createForInPlaceholder();
		forIn.Body.Parent = currentAst;

		currentAst.Tokens.push(forIn);
		currentAst = forIn.Body;
	}
	exitForInExpression(ctx: ForInExpressionContext) {
		if (ctx.exception) { return; }

		currentAst = currentAst.Parent!;
		const parsedToken = setNodeEnds(currentAst.Tokens[currentAst.Tokens.length - 1], ctx);
		asForInLoop(currentAst, ctx, parsedToken as ForIn);
		//TODO: Check for non-numerical tables + ipairs and send diagnostics
	}

	enterGlobalFunction(ctx: GlobalFunctionContext) {
		const [variable, functionPlaceholder] = createFunctionPlaceholder();
		functionPlaceholder.Body.Parent = currentAst;

		currentAst.Tokens.push(variable);
		currentAst = functionPlaceholder.Body;
	}
	exitGlobalFunction(ctx: GlobalFunctionContext) {
		if (ctx.exception) { return; }

		const functionData = buildFunction(ctx.funcbody(), currentAst.Parent!, currentAst);
		currentAst = currentAst.Parent!;
		const funcName = ctx.funcname();
		const start = getEnd(
			ctx.FUNCTION().text,
			Position.create(ctx.start.line - 1, ctx.start.charPositionInLine)
		);
		const end = getEnd(funcName.text, start);

		const variable = setNodeEnds(currentAst.Tokens.pop()!, ctx) as (ASTNode & VariableDeclaration);
		variable.VariableName = ctx.funcname().text;
		variable.VariableValue = ValueBuilder.fromPossibleType(functionData);
		variable.VariableType = TypeDefinitionBuilder.fromPossibleType(functionData, "");
		variable.RawValue = `function ${variable.VariableName}${variable.VariableType.RawValue}`;
		variable.NameStart = start;
		variable.NameEnd = end;

		// let character = funcName.start.charPositionInLine;
		// let line = funcName.start.line - 1;

		// let enclosingTable: VariableDeclaration | undefined;
		// let tableFields: TableFields | null | undefined;
		// let lastName: string | undefined;
		// for (const name of funcName.NAME()) {

		// 	lastName = name.text;
		// 	// if (lastName) {
		// 		if (lastName.includes("\n")) {
		// 			character = 0;
		// 			let index = 0;
		// 			while ((index = lastName.indexOf("\n", index + 1)) !== -1) {
		// 				line++;
		// 			}
		// 		} else {
		// 			character += lastName.length + 1;
		// 		}
		// 		if (tableFields) {
		// 			for (const field of tableFields) {
		// 				tableFields = null;

		// 				const key = tableKeyToString(field.Key);
		// 				if (key === lastName) {
		// 					if (field.Type.TypeValue.Type.Type === "Table") {
		// 						const start = Position.create(line, character - 1);
		// 						const end = getEnd(lastName, start);

		// 						tableFields = field.Type.TypeValue.Type.Value;
		// 						field.References.push({
		// 							FileUri: getCurrentUri()!,
		// 							Start: start,
		// 							End: end
		// 						});
		// 					}

		// 					break;
		// 				}
		// 			}
		// 		} else {
		// 			const start = Position.create(line, character - 2);
		// 			const currentLocation = Range.create(start, getEnd(lastName, start));

		// 			const table = findVariable(lastName, currentAst, currentLocation);
		// 			if (!table || table.VariableType.TypeValue.Type.Type !== "Table") {
		// 				addDiagnostic({
		// 					message: "Creating function in a non-table value.",
		// 					code: "no-parent-table",
		// 					range: currentLocation,
		// 					severity: DiagnosticSeverity.Warning,
		// 				});
		// 			} else {
		// 				enclosingTable = table;
		// 				tableFields = table.VariableType.TypeValue.Type.Value;
		// 			}
		// 		}
		// 	// }
		// }

		// if (tableFields === null) {
		// 	// Missing table, send diagnostics!
		// 	return;
		// }

		// variable.VariableName = lastName!;
		// if (tableFields === undefined) {
		// 	currentAst.Tokens.push(variable);
		// } else {
		// 	tableFields.push({
		// 		Key: lastName!,
		// 		Type: variable.VariableType,
		// 		Value: variable.VariableValue.Value,
		// 		Start: variable.Start,
		// 		End: variable.End,
		// 		NameStart: variable.NameStart,
		// 		NameEnd: variable.NameEnd,
		// 		References: [],
		// 	});
		// 	enclosingTable!.VariableType.RawValue = toString(enclosingTable!.VariableType.TypeValue.Type.Value);
		// 	enclosingTable!.VariableValue = ValueBuilder.fromTypeDefinition(enclosingTable!.VariableType);
		// 	enclosingTable!.RawValue = toString(enclosingTable, true);
		// }

		let character = funcName.start.charPositionInLine;
		let line = funcName.start.line - 1;

		let name;
		let enclosingTable: VariableDeclaration | undefined;
		let tableFields: TableFields | undefined;
		for (const chainedName of funcName.NAME()) {
			if (name) {
				if (name.includes("\n")) {
					character = 0;
					let index = 0;
					while ((index = name.indexOf("\n", index + 1)) !== -1) {
						line++;
					}
				} else {
					character += name.length + 1;
				}

				const start = Position.create(line, character);
				const location = Range.create(start, getEnd(name, start));

				if (enclosingTable && tableFields) {
					for (const field of tableFields) {
						const key = tableKeyToString(field.Key);
						if (key !== name) {
							tableFields = undefined;
							continue;
						}
						if (field.Type.TypeValue.Type.Type !== "Table") {
							continue;
						}

						tableFields = field.Type.TypeValue.Type.Value;
						break;
					}
				} else {
					enclosingTable = findVariable(name, currentAst, location);
					if (!enclosingTable || enclosingTable.VariableType.TypeValue.Type.Type !== "Table") {
						break;
					}

					tableFields = enclosingTable.VariableType.TypeValue.Type.Value;
				}
			}

			name = chainedName.text;
		}

		name = name!.trim();

		variable.VariableName = name!;
		if (tableFields === undefined) {
			currentAst.Tokens.push(variable);
		} else {
			tableFields.push({
				Key: name!,
				Type: variable.VariableType,
				Value: variable.VariableValue.Value,
				Start: variable.Start,
				End: variable.End,
				NameStart: variable.NameStart,
				NameEnd: variable.NameEnd,
				References: [],
			});
			enclosingTable!.RawValue = toString(enclosingTable, true);
		}
	}

	enterLocalFunction(ctx: LocalFunctionContext) {
		const [variable, functionPlaceholder] = createFunctionPlaceholder();
		functionPlaceholder.Body.Parent = currentAst;

		currentAst.Tokens.push(variable);
		currentAst = functionPlaceholder.Body;
	}
	exitLocalFunction(ctx: LocalFunctionContext) {
		if (ctx.exception) { return; }

		const functionData = buildFunction(ctx.funcbody(), currentAst.Parent!, currentAst);
		currentAst = currentAst.Parent!;

		const name = ctx.NAME();
		const start = getEnd(
			`${ctx.LOCAL().text}${ctx.FUNCTION().text}`,
			Position.create(ctx.start.line - 1, ctx.start.charPositionInLine)
		);
		const end = getEnd(name.text, start);

		const parsedToken = setNodeEnds(currentAst.Tokens[currentAst.Tokens.length - 1], ctx);
		const variable = parsedToken as VariableDeclaration;
		variable.VariableName = ctx.NAME().text;
		variable.VariableValue = ValueBuilder.fromPossibleType(functionData);
		variable.VariableType = TypeDefinitionBuilder.fromPossibleType(functionData, "");
		variable.RawValue = `function ${variable.VariableName}${variable.VariableType.RawValue}`;
		variable.NameStart = start;
		variable.NameEnd = end;
	}

	exitVariableDeclaration(ctx: VariableDeclarationContext) {
		if (ctx.exception) { return; }

		const allNamesList = ctx.allNamesList();
		const names: NormalizedNames = normalizeAllNamesList(allNamesList, currentAst);
		const separatedNames = allNamesList.text.split(",");

		const expressions = ctx.expressionList();
		let values: NormalizedExpressions = [];

		if (expressions) {
			values = normalizeExpression(expressions.expression(), currentAst);
		}

		let i = 0;
		let character = allNamesList.start.charPositionInLine;
		let line = allNamesList.start.line - 1;
		names.forEach(name => {
			const value = values[i]?.Value ?? PossibleTypesBuilder.asSimple("nil", "nil");
			const type = values[i]?.Type ?? name.Type ?? getTypeFromValue(value)[0]; // TODO: Send errors.
			const variable: VariableDeclaration = VariableDeclarationBuilder.create(
				name.Name,
				false,
				type,
				ValueBuilder.fromPossibleType(value),
				`local ${name.Name}`,
			);
			variable.NameStart = Position.create(line, character);
			variable.NameEnd = getEnd(separatedNames[i], variable.NameStart);
			variable.RawValue = toString(variable, true);

			if (separatedNames[i].includes("\n")) {
				character = 0;
				let index = 0;
				while ((index = separatedNames[i].indexOf("\n", index + 1)) !== -1) {
					line++;
				}
			} else {
				character += separatedNames[i].trim().length;
			}
			i += 1;
			currentAst.Tokens.push(setNodeEnds(variable, ctx));
		});

		// TODO: Try getting value from inside do blocks.
	}
	exitTypeDeclaration(ctx: TypeDeclarationContext) {
		if (ctx.exception) { return; }

		const name = ctx.NAME();
		const start = getEnd(
			`${ctx.EXPORT()?.text ?? ""}${ctx.TYPE().text}`,
			Position.create(ctx.start.line - 1, ctx.start.charPositionInLine)
		);
		const end = getEnd(name.text, start);

		const type = asType(ctx.type(), currentAst);
		type.TypeName = name.text;
		type.RawValue = `type ${type.TypeName} = ${type.RawValue}`;
		type.IsExported = ctx.EXPORT() !== undefined;
		type.NameStart = start;
		type.NameEnd = end;

		currentAst.Tokens.push(setNodeEnds(type, ctx));
	}

	// exitComment(ctx: CommentContext) {
	// 	log("\nCOMMENT:\n");
	// 	log(ctx.text);
	// 	log("\nCOMMENT END\n");
	// }
}

export function parse(code: string, stopLog?: boolean): AST {
	const AST: AST = {
		Tokens: [],
		Returns: [],
	};
	currentAst = AST;
	// if (stopLog) {
	// 	AST.Tokens = [Enums, ...Constructors, ...globals];
	// }

	const lexer = new LuauLexer(CharStreams.fromString(code));
	const tokens = new CommonTokenStream(lexer);
	const parser = new LuauParser(tokens);

	parser.addErrorListener(new ErrorListener());
	parser.addParseListener(new Listener() as LuauListener);

	const tree = parser.file();

	if (!stopLog) {
		logTable(AST);
	}

	return AST;
}

export function parseFile(document: TextDocument, stopLog?: boolean): AST {
	setFile(document);
	return parse(document.getText(), stopLog);
}
