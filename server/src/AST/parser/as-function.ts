import {
	AST,
	FunctionType,
	Parameters,
	VariableDeclaration,
	Returns
} from "../../types";
import {
	FuncbodyContext,
	FunctionParametersContext,
	FunctionParametersTypeContext,
	FunctionReturnsContext
} from "../LuauGrammar/LuauParser";
import { normalizeAllNamesList, normalizeAllNamesListType } from "./as-names";
import { asType, asTypeList } from "./as-type";
import { AstBuilder, PossibleTypesBuilder, TypeDefinitionBuilder, ValueBuilder, VariableDeclarationBuilder } from "../../classes";

export function buildFunctionParameters(functionParameters: FunctionParametersContext): Parameters {
	const parameters: Parameters = [];
	parameters.Content = "Parameters";

	const parametersList = functionParameters.parameterList();
	const parametersNameList = parametersList?.allNamesList();
	const variadicParameter = parametersList?.variadicParameter();

	if (parametersNameList) {
		normalizeAllNamesList(parametersNameList).forEach(normalizedName => {
			const type = normalizedName.Type ?? PossibleTypesBuilder.asSimple("any");
			parameters.push({
				Type: "FunctionParameter",
				Name: normalizedName.Name,
				Optional: normalizedName.IsTypeOptional,
				IsVariadic: false,
				ParameterType: TypeDefinitionBuilder.fromPossibleType(type),
			});
		});
	}

	if (variadicParameter) {
		const type = variadicParameter.type();

		parameters.push({
			Type: "FunctionParameter",
			Name: "",
			IsVariadic: true,
			Optional: true,
			ParameterType: type ? asType(type) : TypeDefinitionBuilder.default(),
		});
	}

	return parameters;
}

export function buildFunctionParametersType(functionParametersType: FunctionParametersTypeContext): Parameters {
	const parameters: Parameters = [];
	parameters.Content = "Parameters";

	const parametersList = functionParametersType.parameterListType();
	const parametersNameList = parametersList?.allNamesListType();
	const variadicParameter = parametersList?.variadicParameterType();

	if (parametersNameList) {
		normalizeAllNamesListType(parametersNameList).forEach(normalizedName => {
			const type = normalizedName.Type ?? PossibleTypesBuilder.asSimple("any");
			parameters.push({
				Type: "FunctionParameter",
				Name: normalizedName.Name,
				Optional: normalizedName.IsTypeOptional,
				IsVariadic: false,
				ParameterType: TypeDefinitionBuilder.fromPossibleType(type),
			});
		});
	}

	if (variadicParameter) {
		parameters.push({
			Type: "FunctionParameter",
			Name: "",
			IsVariadic: true,
			Optional: true,
			ParameterType: asType(variadicParameter.type()),
		});
	}

	return parameters;
}

export function buildFunctionReturns(functionReturns?: FunctionReturnsContext): Returns {
	const returns: Returns = [];
	returns.Content = "Returns";

	const returnsList = functionReturns?.returnList();
	const returnsNameList = returnsList?.typeList();
	let returnValue;
	let variadicReturn;

	if (returnsNameList) {
		asTypeList(returnsNameList).forEach(type => {
			returns.push({
				Type: "FunctionReturn",
				IsVariadic: false,
				Optional: type.RawValue.endsWith("?"),
				ReturnType: type
			});
		});

	} else if ((returnValue = functionReturns?.type())) {
		const type = asType(returnValue);
		returns.push({
			Type: "FunctionReturn",
			Optional: type.RawValue.endsWith("?"),
			IsVariadic: false,
			ReturnType: type,
		});

	} else if ((variadicReturn = functionReturns?.variadicReturn() || returnsList?.variadicReturn())) {
		returns.push({
			Type: "FunctionReturn",
			Optional: true,
			IsVariadic: true,
			ReturnType: asType(variadicReturn.type())
		});
	}

	return returns;
}

export function buildFunction(functionBody: FuncbodyContext, AST?: AST): FunctionType {
	return PossibleTypesBuilder.asFunction(
		buildFunctionParameters(functionBody.functionParameters()),
		buildFunctionReturns(functionBody.functionReturns()),
		AST
	);
}

export function createFunctionPlaceholder(): [VariableDeclaration, FunctionType] {
	const functionType = PossibleTypesBuilder.asFunction([], [], AstBuilder.default(), "");
	const variable = VariableDeclarationBuilder.abstractCreate(
		ValueBuilder.fromPossibleType(functionType),
		TypeDefinitionBuilder.fromPossibleType(functionType),
	);

	return [variable, functionType];
}
