export interface APIDump {
	Classes: Class[];
	Enums: Enum[];
	Version: number;
}

export interface Class {
	Members: Member[];
	MemoryCategory: MemoryCategory;
	Name: string;
	Superclass: string;
	Tags?: ClassTag[];
}

export interface Member {
	Category?: string;
	MemberType: ApiMemberType;
	Name: string;
	Security: SecurityClass | Security;
	Serialization?: Serialization;
	ThreadSafety: ThreadSafety;
	ValueType?: ApiType;
	Tags?: MemberTag[];
	Parameters?: ApiParameter[];
	ReturnType?: ApiType;
}

export enum ApiMemberType {
	Callback = "Callback",
	Event = "Event",
	Function = "Function",
	Property = "Property",
}

export interface ApiParameter {
	Name: string;
	Type: ApiType;
	Default?: string;
}

export interface ApiType {
	Category: ApiCategory;
	Name: string;
}

export enum ApiCategory {
	Class = "Class",
	DataType = "DataType",
	Enum = "Enum",
	Group = "Group",
	Primitive = "Primitive",
}

export interface SecurityClass {
	Read: Security;
	Write: Security;
}

export enum Security {
	LocalUserSecurity = "LocalUserSecurity",
	None = "None",
	NotAccessibleSecurity = "NotAccessibleSecurity",
	PluginSecurity = "PluginSecurity",
	RobloxScriptSecurity = "RobloxScriptSecurity",
	RobloxSecurity = "RobloxSecurity",
}

export interface Serialization {
	CanLoad: boolean;
	CanSave: boolean;
}

export enum MemberTag {
	CanYield = "CanYield",
	CustomLuaState = "CustomLuaState",
	Deprecated = "Deprecated",
	Hidden = "Hidden",
	NoYield = "NoYield",
	NotBrowsable = "NotBrowsable",
	NotReplicated = "NotReplicated",
	NotScriptable = "NotScriptable",
	ReadOnly = "ReadOnly",
	Yields = "Yields",
}

export enum ThreadSafety {
	ReadSafe = "ReadSafe",
	Safe = "Safe",
	Unsafe = "Unsafe",
}

export enum MemoryCategory {
	Animation = "Animation",
	GUI = "Gui",
	GraphicsTexture = "GraphicsTexture",
	Instances = "Instances",
	Internal = "Internal",
	PhysicsParts = "PhysicsParts",
	Script = "Script",
}

export enum ClassTag {
	Deprecated = "Deprecated",
	NotBrowsable = "NotBrowsable",
	NotCreatable = "NotCreatable",
	NotReplicated = "NotReplicated",
	PlayerReplicated = "PlayerReplicated",
	Service = "Service",
	Settings = "Settings",
	UserSettings = "UserSettings",
}

export interface Enum {
	Items: Item[];
	Name: string;
	Tags?: MemberTag[];
}

export interface Item {
	Name: string;
	Value: number;
	LegacyNames?: string[];
	Tags?: MemberTag[];
}
