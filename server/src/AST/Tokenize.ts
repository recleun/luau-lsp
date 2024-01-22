import { RawTokens } from "../types";

/**
 *
 * @param {string} str
 * @returns
 */
const quotesStartCheck = (str: string): boolean => (/^[\t]*?("|'|`)/g.test(str)) && (!/("|'|`)$/g.test(str) || /(\\("|'|`))$/g.test(str));
/**
 *
 * @param {string} str
 * @returns
 */
const quotesEndCheck = (str: string): boolean => !(/^("|'|`)/g.test(str)) && (/("|'|`)$/g.test(str) && !/(\\("|'|`))$/g.test(str));

/**
 *
 * @param {string} str
 * @returns
 */
const multilineStringStartCheck = (str: string): boolean => /^(-{2})?(\[=*\[)/g.test(str);

/**
 *
 * @param {string} str
 * @returns
 */
const multilineStringEndCheck = (str: string, n: number) => new RegExp(`(]={${n}}])$`).test(str);

/**
 *
 * @param {string} str
 * @returns {number}
 */
const multilineEqualCount = (str: string): number => {
	let n = 0;
	str.split('').forEach(v => { if (v === '=') n++; });
	return n;
};

/**
 * ## Notes (spaces indicate end of token)
 * * White spaces and new lines are completely removed if they're their own token.
 * * expressions with `.` are counted as one (eg `a.b.c` will be `a.b.c`)
 * * expressions with `,` are not counted as one (eg `a,b,c` will be `a , b , c`)
 * * expressions with `[]` are counted as one (eg `a.b.c["dwa"]` will be `a.b.c["dwa"]`)
 * * expressions with `()` are not counted as one (eg `a(b, c, d)` will be `a ( b , c , d )`)
 *
 * @param {string} str The string to tokenize
 */
export function tokenize(str: string): RawTokens {
	const filtered = str.replace(/:(?![\w()])/g, ' :')
		.replace(/;/g, ' ;')
		.replace(/\(/g, ' ( ')
		.replace(/\)/g, ' ) ')
		.replace(/\{/g, ' { ')
		.replace(/\}/g, ' } ')
		.replace(/\n/g, ' \n ')
		.replace(/\r/g, ' \r ')
		.replace(/\t/g, '')
		.split(' ').join()
		.split(',')
		.filter(v => v != '');

	for (let i = 0; i < filtered.length; i++) {
		if (quotesStartCheck(filtered[i])) {
			let concatenations = 0;
			const newString = [filtered[i]];

			for (let j = i + 1; j < filtered.length; j++) {
				concatenations++;

				if (quotesEndCheck(filtered[j])) {
					newString.push(filtered[j]);
					break;

				} else {
					newString.push(filtered[j]);
				}
			}

			filtered.splice(i, concatenations + 1, newString.join(' '));

		} else if (multilineStringStartCheck(filtered[i])) {
			const equalCount = multilineEqualCount(filtered[i]);
			const newString = [filtered[i]];
			let concatenations = 0;

			for (let j = i; j < filtered.length; j++) {
				if (j === i && !multilineStringEndCheck(filtered[j], equalCount)) { j++; }
				concatenations++;

				if (multilineStringEndCheck(filtered[j], equalCount)) {

					newString.push(filtered[j]);
					break;

				} else {
					newString.push(filtered[j]);
				}
			}

			filtered.splice(i, concatenations + 1, newString.join(' ').replace(/ \n /g, '\n'));

		} else if (filtered[i] === '--') {
			const newString = [filtered[i]];
			let concatenations = 0;

			for (let j = i + 1; j < filtered.length; j++) {
				if (filtered[j] === '\n' || filtered[j] === '\r') {
					break;

				} else {
					newString.push(filtered[j]);
					concatenations++;
				}
			}

			filtered.splice(i, concatenations + 1, newString.join(' '));
		}
	}

	return filtered.filter(v => v.trim() !== "" && !v.startsWith("--"));
}