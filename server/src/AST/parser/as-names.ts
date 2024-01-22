import { NormalizedName, NormalizedNames } from "../../types";
import {
	AllNamesListContext,
	AllNamesListTypeContext,
	MixedNamesListContext,
	NameListContext,
	TypedNameListContext
} from "../LuauGrammar/LuauParser";
import { asType, asTypeList } from "./as-type";

export function normalizeNameList(namesList: NameListContext): NormalizedNames {
	const names: NormalizedNames = [];

	namesList.NAME().forEach(name => {
		names.push({
			Name: name.text,
			IsTypeOptional: name.text.endsWith("?"),
		});
	});

	return names;
}

export function normalizeTypedNameList(namesList: TypedNameListContext): NormalizedNames {
	const names: NormalizedNames = [];

	namesList.typedName().forEach(name => {
		const type = name.type();
		names.push({
			Name: name.NAME().text,
			Type: asType(type).TypeValue.Type,
			IsTypeOptional: type.text.endsWith("?"),
		});
	});

	return names;
}

export function normalizeMixedNamesList(namesList: MixedNamesListContext): NormalizedNames {
	const names: NormalizedNames = [];

	namesList.optionalTypedName().forEach(name => {
		const normalizedName: NormalizedName = {
			Name: name.NAME().text,
			IsTypeOptional: name.text.endsWith("?"),
		};

		let type;
		if ((type = name.type())) {
			normalizedName.Type = asType(type).TypeValue.Type;
			normalizedName.IsTypeOptional = type.text.endsWith("?");
		}

		names.push(normalizedName);
	});

	return names;
}

export function normalizeAllNamesList(allNamesList: AllNamesListContext): NormalizedNames {
	let names: NormalizedNames = [];
	let namesList;
	let typedNameList;
	let mixedNameList;
	if ((namesList = allNamesList.nameList())) {
		names = normalizeNameList(namesList);
	} else if ((typedNameList = allNamesList.typedNameList())) {
		names = normalizeTypedNameList(typedNameList);
	} else if ((mixedNameList = allNamesList.mixedNamesList())) {
		names = normalizeMixedNamesList(mixedNameList);
	}

	return names;
}

export function normalizeAllNamesListType(allNamesList: AllNamesListTypeContext): NormalizedNames {
	let names: NormalizedNames = [];
	let namesList;
	let typedNameList;
	if ((namesList = allNamesList.typeList())) {
		return asTypeList(namesList).map(type => {
			return {
				Name: "",
				IsTypeOptional: type.RawValue.endsWith("?"),
				Type: type.TypeValue.Type,
			};
		});
	} else if ((typedNameList = allNamesList.typedNameList())) {
		names = normalizeTypedNameList(typedNameList);
	}

	return names;
}