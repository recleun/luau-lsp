type game = DataModel
type getmetatable = (t: table) -> table?
type error = (message: any, level: number?) -> ()
type debug = {
	info:
		((thread: thread, level: number, options: string) -> ...any)
		& ((functionOrLevel: () -> () | number, options: string) -> ...any),
	traceback:
		((level: number?) -> string)
		& ((message: string, level: number?) -> string)
		& ((thread: thread, message: string, level: number?) -> string),
	profilebegin: (label: string) -> (),
	profileend: () -> (),
	setmemorycategory: (tag: string) -> (),
	resetmemorycategory: () -> (),
}
type task = {
	defer: (f: () -> () | thread, ...any) -> any,
	desynchronize: () -> (),
	spawn: (f: () -> () | thread, ...any) -> any,
	synchronize: () -> (),
	delay: (sec: number?, f: () -> () | thread, ...any) -> any,
	wait: (sec: number?) -> number,
	cancel: (thread: thread) -> ()
}
type tonumber = (value: any, radix: number?) -> number
type pcall = (f: () -> (), ...any) -> (boolean, ...any)
type Enum = Enums
type collectgarbage = (mode: string) -> number
type utf8 = {
	char: (code: number, ...number) -> string,
	charpattern: string,
	codes: (s: string) -> () -> (),
	codepoint: (s: string, i: number?, j: number?) -> (number, ...number),
	len: (s: string, i: number?, j: number?) -> (number?, number?),
	offset: (s: string, n: number?, i: number?) -> number,
	graphemes: (str: string, i: number?, j: number?) -> () -> (),
	nfcnormalize: (str: string) -> string,
	nfdnormalize: (str: string) -> string,
}
type getfenv = (target: any?) -> { [string]: any }
type plugin = Plugin
type pairs = (t: table) -> ((table, any?) -> (any, any), table, nil)
type gcinfo = () -> number
type ypcall = (f: () -> (), ...any) -> (boolean, ...any)
type xpcall = (f: () -> (), err: () -> (), ...any) -> (boolean, ...any)
type workspace = Workspace
type _VERSION = string
type string = {
	pack: (fmt: string, ...any) -> string,
	packsize: (fmt: string) -> number,
	rep: (s: string, n: number) -> string,
	reverse: (s: string) -> string,
	sub: (s: string, i: number, j: number?) -> string,
	unpack: (fmt: string, s: string, pos: number?) -> ...any,
	upper: (s: string) -> string,
	split: (s: string, separator: string?) -> { string },
	byte: (s: string, i: number?, j: number?) -> ...number,
	char: (byte: number, ...number) -> string,
	find: (s: string, pattern: string, init: number?, plain: boolean?) -> (number?, number?),
	format: (s: string, ...any) -> string,
	gmatch: (s: string, pattern: string) -> () -> ...string,
	gsub: (
		s: string,
		pattern: string,
		repl: string | { [string]: string } | ((...string) -> string),
		n: number?
	) -> (string, number),
	len: (s: string) -> number,
	lower: (s: string) -> string,
	match: (s: string, pattern: string, init: number?) -> string?,
}
type warn = (...any) -> ()
type UserSettings = () -> UserSettings
type tostring = (value: any) -> string
type wait = (seconds: number?) -> (number, number)
type unpack = (list: table, i: number?, j: number?) -> ...any
type tick = () -> number
type newproxy = (addmt: boolean) -> any
type time = () -> number
type elapsedTime = () -> number
type table = {
	maxn: (t: table) -> number,
	find: (t: table, value: any, init: number?) -> number?,
	foreach: (t: table, f: (any, any) -> ()) -> (),
	foreachi: (t: table, f: (number, any) -> ()) -> (),
	getn: (t: table) -> number,
	concat: (t: table, sep: string?, i: number?, j: number?) -> string,
	insert:
		((t: table, value: any) -> ())
		& ((t: table, pos: number, value: any) -> ()),
	move: (a1: table, f: number, e: number, t: number, a2: table?) -> (),
	pack: (...any) -> { n: number, [number]: any },
	remove: (t: table, pos: number?) -> any?,
	sort: (t: table, comp: ((any, any) -> boolean)?) -> (),
	unpack: (t: table, i: number?, j: number?) -> ...any,
	clear: (t: table) -> (),
	clone: (t: table) -> table,
	create: (count: number, value: any?) -> table,
	freeze: (t: table) -> table,
	isfrozen: (t: table) -> boolean
}
type setfenv = (target: () -> () | number, env: { [string]: any }) -> () -> ()?
type os = {
	clock: () -> number,
	date: (format: string?, time: number?) -> string | DateTypeResult,
	difftime: (t2: number | DateTypeResult, t1: number | DateTypeResult) -> number,
	time: (t: DateTypeArg?) -> number,
}
type Type = (value: any) -> string
type ipairs = (t: table) -> ((table, number) -> (number, any), table, number)
type coroutine = {
	create: (f: () -> ()) -> thread,
	isyieldable: () -> boolean,
	resume: (co: thread, ...any) -> (boolean, ...any),
	running: () -> thread,
	status: (co: thread) -> string,
	wrap: (f: () -> ()) -> () -> (),
	yield: (...any) -> ...any,
	close: (thread: thread) -> (boolean, ...any),
}
type shared = any
type Typeof = (value: any) -> string
type spawn = (callback: () -> ()) -> ()
type _G = table
type settings = () -> GlobalSettings
type require = (module: any) -> any
type bit32 = {
	lshift: (x: number, disp: number) -> number,
	rrotate: (x: number, disp: number) -> number,
	rshift: (x: number, disp: number) -> number,
	arshift: (x: number, disp: number) -> number,
	band: (...number) -> number,
	bnot: (x: number) -> number,
	bor: (...number) -> number,
	btest: (x: number, ...number) -> boolean,
	bxor: (...number) -> number,
	extract: (n: number, field: number, width: number?) -> number,
	replace: (n: number, v: number, field: number, width: number?) -> number,
	lrotate: (x: number, disp: number) -> number,
}
type select = (index: string | number, ...any) -> any
type setmetatable = (table: table, metatable: table | nil) -> table
type rawset = (table: table, index: any, value: any) -> table
type rawget = (table: table, index: any) -> any
type rawlen = (obj: string | table) -> number
type rawequal = (v1: any, v2: any) -> boolean
type print = (...any) -> ()
type math = {
	exp: (x: number) -> number,
	floor: (x: number) -> number,
	fmod: (x: number, y: number) -> number,
	frexp: (x: number) -> (number, number),
	huge: number,
	ldexp: (m: number, e: number) -> number,
	log: (x: number, base: number?) -> number,
	log10: (x: number) -> number,
	max: (x: number, ...any) -> number,
	min: (x: number, ...any) -> number,
	abs: (x: number) -> number,
	modf: (x: number) -> (number, number),
	pi: number,
	pow: (x: number, y: number) -> number,
	rad: (x: number) -> number,
	random: (m: number?, n: number?) -> number,
	randomseed: (x: number) -> (),
	sin: (x: number) -> number,
	sinh: (x: number) -> number,
	sqrt: (x: number) -> number,
	tan: (x: number) -> number,
	acos: (x: number) -> number,
	tanh: (x: number) -> number,
	clamp: (n: number, min: number, max: number) -> number,
	noise: (x: number, y: number, z: number) -> number,
	sign: (x: number) -> number,
	round: (x: number) -> number,
	asin: (x: number) -> number,
	atan: (y: number) -> number,
	atan2: (y: number, x: number) -> number,
	ceil: (x: number) -> number,
	cos: (x: number) -> number,
	cosh: (x: number) -> number,
	deg: (x: number) -> number,
}
type next = (t: table, lastKey: any?) -> (any, any)
type loadstring = (src: string, chunkname: string?) -> (() -> ()?, string?)
type delay = (delayTime: number?, callback: () -> ()) -> ()
type script = LuaSourceContainer
type assert = (value: any, errorMessage: string?) -> any

type DateTypeArg = {
	day: number?,
	hour: number?,
	isdst: boolean?,
	min: number?,
	month: number?,
	sec: number?,
	wday: number?,
	yday: number?,
	year: number?,
}

type DateTypeResult = {
	day: number,
	hour: number,
	isdst: boolean,
	min: number,
	month: number,
	sec: number,
	wday: number,
	yday: number,
	year: number,
}
