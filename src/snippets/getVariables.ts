import type { Completion } from "@codemirror/autocomplete";
import type { Text } from "@codemirror/state";
import { getLines } from "./helper";

const reg = /^\s*(alias|define)\s+(\w+)\s+([-\w]+)/;
const regL = /^\s*([a-zA-Z][a-zA-Z_\-0-9]*):/;
export const getVariables = (doc: Text, line?: number): Completion[] => {
	const text = getLines(doc);
	const variables: Completion[] = [];
	text.forEach((x, i) => {
		if (line !== undefined && i + 1 === line) return;
		const test = reg.exec(x);
		const testL = regL.exec(x);
		if (test !== null)
			variables.push({
				label: test[2],
				type: test[1] === "alias" ? "variable" : "constant",
				apply: `${test[2]} `,
				detail: test[3],
				boost: Math.min(10, 50 - i / 5),
			});
		if (testL !== null)
			variables.push({
				label: testL[1],
				type: "enum",
				apply: `${testL[1]} `,
				detail: `:${i + 1}`,
				boost: Math.min(10, 50 - i / 5),
			});
	});
	return variables;
};
export default getVariables;
