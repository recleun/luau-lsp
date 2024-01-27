import { TableKey } from "../../types";

export function tableKeyToString(key: TableKey): string {
	if (typeof key === "string") {
		return key;
	} else if (key.Type === "Value" && key.Value.Type === "Simple") {
		key = key.Value.RawValue;
	} else if (key.Type === "Type" && key.TypeValue.Type.Type === "Simple") {
		key = key.RawValue;
	}

	return "";
}
