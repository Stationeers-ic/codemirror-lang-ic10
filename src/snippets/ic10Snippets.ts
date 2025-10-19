import type { Completion, CompletionContext } from "@codemirror/autocomplete";
import type { snippetsArguments } from "../types";
import getVariables from "./getVariables";
import { getPos, isFirstWord } from "./helper";
import logic from "./logic";
import registers from "./registers";
import snippets from "./snippets";

export const ic10Snippets = (
	args: snippetsArguments,
): ((context: CompletionContext) => null | {
	from: number;
	options: Completion[];
}) => {
	const h: Record<"snippets" | "registers" | "logic", Completion[]> = {
		snippets: [],
		registers: [],
		logic: [],
	};
	if (args.snippets) h.snippets = snippets();
	if (args.registers) h.registers = registers();
	if (args.logic) h.logic = logic();
	return (context) => {
		const word = context.matchBefore(/\w*/);

		if (word?.from === word?.to && !context.explicit) return null;
		const line = getPos(context);
		const firstWord = isFirstWord(line.text, line.pos);

		let result: Completion[] = [];
		if (firstWord) {
			if (args.snippets) result = result.concat(h.snippets);
		} else {
			if (args.registers) result = result.concat(h.registers);
			if (args.logic) result = result.concat(h.logic);
			if (args.variables) result = result.concat(getVariables(context.state.doc, line.line));
		}
		// result = result.concat([
		// 	{ label: "constant", type: "constant" },
		// 	{ label: "enum", type: "enum" },
		// 	{ label: "function", type: "function" },
		// 	{ label: "interface", type: "interface" },
		// 	{ label: "keyword", type: "keyword" },
		// 	{ label: "method", type: "method" },
		// 	{ label: "namespace", type: "namespace" },
		// 	{ label: "property", type: "property" },
		// 	{ label: "text", type: "text" },
		// 	{ label: "type", type: "type" },
		// 	{ label: "variable", type: "variable" },
		// ])
		return {
			from: word?.from ?? context.pos,
			options: result,
		};
	};
};
