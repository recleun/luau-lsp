import {
	AST,
	ForIn,
	ForNumeric,
	NormalizedExpressions,
	NormalizedNames,
	ParsedToken,
	VariableDeclaration,
} from "../types";
import {
	ForExpressionContext,
	ForInExpressionContext,
	GlobalFunctionContext,
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
import { asType } from "./parser/as-type";
import { DiagnosticSeverity, Position, Range } from "vscode-languageserver";
import { asForInLoop, asForLoop, createForInPlaceholder, createForNumericPlaceholder } from "./parser/as-for-loop";
import { TextDocument } from "vscode-languageserver-textdocument";
import { log, logTable } from "../utilities";
import { addDiagnostic, setFile } from "../diagnostics";
import { LuauLexer } from "./LuauGrammar/LuauLexer";
import { LuauParserListener as LuauListener } from './LuauGrammar/LuauParserListener';

let currentAst: AST;

function setNodeEnds(token: ParsedToken, context: ParserRuleContext): ParsedToken {
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
		// (e?.message ?? "").replace(/[\r]?[\n\s]$/g, match => {
		// 	switch (match) {
		// 		case "\\s":
		// 			charPositionInLine--;
		// 			break;
		// 		default:
		// 			line--;
		// 			break;
		// 	}

		// 	return "";
		// });
		// if (offendingSymbol) {
		// 	log(offendingSymbol.startIndex);
		// 	const inputStream = recognizer.inputStream!.toString();
		// 	const lines = inputStream.split('\n');
		// 	logTable(lines);

		// 	for (let i = offendingSymbol.startIndex; i > offendingSymbol.stopIndex; i--) {
		// 		if (charPositionInLine === 0) {
		// 			line--;
		// 			charPositionInLine = lines[line - 1].length - 1;
		// 		} else {
		// 			charPositionInLine--;
		// 		}
		// 	}
		// }

		const position = Position.create(line, charPositionInLine);

		addDiagnostic({
			range: Range.create(position, position),
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
		ctx.expressionList1().text;
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
	//TODO:
	exitIfStatement(ctx: IfStatementContext) {
		if (ctx.exception) { return; }

		ctx.expression();
		ctx.block();
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
	}

	enterGlobalFunction(ctx: GlobalFunctionContext) {
		const [variable, functionPlaceholder] = createFunctionPlaceholder();
		functionPlaceholder.Body.Parent = currentAst;

		currentAst.Tokens.push(variable);
		currentAst = functionPlaceholder.Body;
	}
	exitGlobalFunction(ctx: GlobalFunctionContext) {
		if (ctx.exception) { return; }

		const functionData = buildFunction(ctx.funcbody(), currentAst);
		currentAst = currentAst.Parent!;

		const parsedToken = setNodeEnds(currentAst.Tokens[currentAst.Tokens.length - 1], ctx);

		const variable = parsedToken as VariableDeclaration;
		variable.VariableName = ctx.funcname().text;
		variable.VariableValue = {
			Type: "Value",
			Value: functionData
		};
		variable.VariableType = {
			Type: "Type",
			RawValue: functionTypeToString(functionData),
			TypeName: "",
			IsExported: false,
			TypeValue: {
				Type: functionData,
				AndTypes: [],
				OrTypes: [],
			},
			Generics: [],
		};
		variable.RawValue = `function ${variable.VariableName}${variable.VariableType.RawValue}`;
	}

	enterLocalFunction(ctx: LocalFunctionContext) {
		const [variable, functionPlaceholder] = createFunctionPlaceholder();
		functionPlaceholder.Body.Parent = currentAst;

		currentAst.Tokens.push(variable);
		currentAst = functionPlaceholder.Body;
	}
	exitLocalFunction(ctx: LocalFunctionContext) {
		if (ctx.exception) { return; }

		const functionData = buildFunction(ctx.funcbody(), currentAst);
		currentAst = currentAst.Parent!;

		const variable = setNodeEnds(
			currentAst.Tokens[currentAst.Tokens.length - 1],
			ctx
		) as VariableDeclaration;
		variable.VariableName = ctx.NAME().text;
		variable.VariableValue = {
			Type: "Value",
			Value: functionData
		};
		variable.VariableType = {
			Type: "Type",
			RawValue: functionTypeToString(functionData),
			TypeName: "",
			IsExported: false,
			TypeValue: {
				Type: functionData,
				AndTypes: [],
				OrTypes: [],
			},
			Generics: [],
		};
		variable.RawValue = `function ${variable.VariableName}${variable.VariableType.RawValue}`;
	}

	exitVariableDeclaration(ctx: VariableDeclarationContext) {
		if (ctx.exception) { return; }

		const names: NormalizedNames = normalizeAllNamesList(ctx.allNamesList());
		const expressions = ctx.expressionList();
		let values: NormalizedExpressions = [];

		if (expressions) {
			values = normalizeExpression(expressions.expression(), currentAst);
		}

		let i = 0;
		names.forEach(name => {
			const value = values[i]?.Value ?? {
				Type: "Simple",
				Value: "nil",
				RawValue: "nil",
			};
			const type = values[i]?.Type ?? name.Type ?? value;
			const variable: VariableDeclaration = {
				IsGlobal: false,
				Type: "Variable Declaration",
				VariableName: name.Name,
				RawValue: `local ${name.Name}`,
				VariableValue: {
					Type: "Value",
					Value: value,
				},
				VariableType: {
					Type: "Type",
					TypeName: "",
					RawValue: type.RawValue,
					TypeValue: {
						Type: type,
						AndTypes: [],
						OrTypes: [],
					},
					IsExported: false,
					Generics: [],
				},
				References: [],
			};

			if (variable.VariableValue.Value.RawValue !== "") {
				variable.RawValue += ` = ${variable.VariableValue.Value.RawValue}`;
			} else if (variable.VariableType.RawValue !== "") {
				variable.RawValue += `: ${variable.VariableType.RawValue}`;
			}

			i += 1;
			currentAst.Tokens.push(setNodeEnds(variable, ctx));
		});

		// TODO: Try getting value from inside do blocks.
	}
	exitTypeDeclaration(ctx: TypeDeclarationContext) {
		if (ctx.exception) { return; }

		const type = asType(ctx.type());
		type.TypeName = ctx.NAME().text;
		type.RawValue = `type ${type.TypeName} = ${type.RawValue}`;
		type.IsExported = ctx.EXPORT() !== undefined;

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
	};
	currentAst = AST;

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
