import { type Completion, type CompletionContext } from "@codemirror/autocomplete"
import { type Text } from "@codemirror/state"
import registers from "./registers"
import snippets from "./snippets"

function getPos(context: CompletionContext): {
	text: string
	line: number
	pos: number
} {
	const pos = context.state.doc.lineAt(context.pos)
	return {
		text: pos.text,
		line: pos.number,
		pos: context.pos - pos.from,
	}
}
function isFirstWord(line: string, pos: number): boolean {
	return line.substring(0, pos).match(/\s*\w*$/)?.index === 0
}

function getLines(doc: Text): string[] {
	const lines: string[] = []
	const x = doc.iter()
	while (!x.next().done) lines.push(x.value)
	return lines
}

export function myCompletions(context: CompletionContext) {
	const word = context.matchBefore(/\w*/)

	if (word?.from == word?.to && !context.explicit) return null
	const reg = /^\s*alias\s+(\w+)\s+(\w+)/

	// console.log(context)
	// console.log(getPos(context))

	const line = getPos(context)

	const text = getLines(context.state.doc)
	const variables: Completion[] = []
	text.forEach((x, i) => {
		if (i+1 === line.line) return
		const test = reg.exec(x)
		if (test === null) return

		variables.push({ label: test[1], type: "variable", apply: test[1] + " ", detail: test[2], boost: 10 })
	})
	const firstWord = isFirstWord(line.text, line.pos)



	return {
		from: word?.from ?? context.pos,
		options: [
			...(firstWord ? snippets : variables),
			...(firstWord ? [] : registers),
			// { label: "constant", type: "constant" },
			// { label: "enum", type: "enum" },
			// { label: "function", type: "function" },
			// { label: "interface", type: "interface" },
			// { label: "keyword", type: "keyword" },
			// { label: "method", type: "method" },
			// { label: "namespace", type: "namespace" },
			// { label: "property", type: "property" },
			// { label: "text", type: "text" },
			// { label: "type", type: "type" },
			// { label: "variable", type: "variable" },
		],
	}
}
