import { functionTypeToString } from "../../utilities";
import {
	AST,
	FunctionType,
	Parameters,
	ParsedToken,
	ParsedType,
	ParsedVariableDeclaration,
	Returns
} from "../../types";
import { FuncbodyContext, FunctionParametersContext, FunctionParametersTypeContext, FunctionReturnsContext } from "../LuauGrammar/LuauParser";
import { normalizeAllNamesList, normalizeAllNamesListType } from "./as-names";
import { asType, asTypeList } from "./as-type";

export function buildFunctionParameters(functionParameters: FunctionParametersContext): Parameters {
	const parameters: Parameters = [];
	parameters.Content = "Parameters";

	const parametersList = functionParameters.parameterList();
	const parametersNameList = parametersList?.allNamesList();
	const variadicParameter = parametersList?.variadicParameter();

	if (parametersNameList) {
		normalizeAllNamesList(parametersNameList).forEach(normalizedName => {
			const type = normalizedName.Type ?? {
				Type: "Simple",
				RawValue: "any",
				Value: "any",
			};
			parameters.push({
				Type: "FunctionParameter",
				Name: normalizedName.Name,
				Optional: normalizedName.IsTypeOptional,
				IsVariadic: false,
				ParameterType: {
					Type: "Type",
					RawValue: type.RawValue,
					TypeName: "",
					TypeValue: {
						Type: type,
						AndTypes: [],
						OrTypes: [],
					},
					IsExported: false,
					Generics: [],
				},
			});
		});
	}
	if (variadicParameter) {
		const type = variadicParameter.type();
		let parameterType: ParsedType = {
			Type: "Type",
			RawValue: "any",
			Generics: [],
			TypeName: "",
			TypeValue: {
				Type: {
					Type: "Simple",
					Value: "any",
					RawValue: "any",
				},
				AndTypes: [],
				OrTypes: [],
			},
			IsExported: false,
		};
		if (type) {
			parameterType = asType(type);
		}
		parameters.push({
			Type: "FunctionParameter",
			Name: "",
			IsVariadic: true,
			Optional: true,
			ParameterType: parameterType,
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
			const type = normalizedName.Type ?? {
				Type: "Simple",
				RawValue: "any",
				Value: "any",
			};
			parameters.push({
				Type: "FunctionParameter",
				Name: normalizedName.Name,
				Optional: normalizedName.IsTypeOptional,
				IsVariadic: false,
				ParameterType: {
					Type: "Type",
					RawValue: type.RawValue,
					TypeName: "",
					TypeValue: {
						Type: type,
						AndTypes: [],
						OrTypes: [],
					},
					IsExported: false,
					Generics: [],
				},
			});
		});
	}
	if (variadicParameter) {
		const type = variadicParameter.type();
		let parameterType: ParsedType = {
			Type: "Type",
			RawValue: "any",
			Generics: [],
			TypeName: "",
			TypeValue: {
				Type: {
					Type: "Simple",
					Value: "any",
					RawValue: "any",
				},
				AndTypes: [],
				OrTypes: [],
			},
			IsExported: false,
		};
		if (type) {
			parameterType = asType(type);
		}
		parameters.push({
			Type: "FunctionParameter",
			Name: "",
			IsVariadic: true,
			Optional: true,
			ParameterType: parameterType,
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
	const parameters: Parameters = buildFunctionParameters(functionBody.functionParameters());
	const returns: Returns = buildFunctionReturns(functionBody.functionReturns());

	const parsedFunction: FunctionType = {
		Type: "Function",
		RawValue: "",
		Value: {
			Parameters: parameters,
			Returns: returns,
		},
		Body: AST ?? {
			Tokens: [],
		}
	};
	parsedFunction.RawValue = functionTypeToString(parsedFunction);

	return parsedFunction;
}

export function createFunctionPlaceholder(): [ParsedVariableDeclaration, FunctionType] {
	const functionType: FunctionType = {
		Type: "Function",
		RawValue: "",
		Value: {
			Parameters: [],
			Returns: [],
		},
		Body: {
			Tokens: [],
		},
	};
	const variable: ParsedVariableDeclaration = {
		Type: "Variable Declaration",
		RawValue: "",
		VariableName: "",
		VariableType: {
			Type: "Type",
			RawValue: "",
			TypeName: "",
			TypeValue: {
				Type: functionType,
				AndTypes: [],
				OrTypes: [],
			},
			IsExported: false,
			Generics: [],
		},
		VariableValue: {
			Type: "Value",
			Value: functionType,
		},
		IsGlobal: false,
	};

	return [variable, functionType];
}
