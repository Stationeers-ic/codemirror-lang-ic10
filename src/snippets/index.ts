import { icLanguage } from "../lang-ic"
import { type Completion, snippetCompletion, type CompletionContext } from "@codemirror/autocomplete"

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

function myCompletions(context: CompletionContext) {
	const word = context.matchBefore(/\w*/)

	if (word?.from == word?.to && !context.explicit) return null
	const reg = /^\s*alias\s+(\w+)\s+(\w+)/

	console.log(context)
	console.log(getPos(context))

	const line = getPos(context)
	const text = (context.state.doc as {} as { text: string[] }).text
	const variables: Completion[] = []
	text.forEach((x) => {
		const test = reg.exec(x)
		if (test === null) return

		variables.push({ label: test[1], type: "variable", apply: test[1] + " ", detail: test[2], boost: 10 })
	})
	const firstWord = isFirstWord(line.text, line.pos)

	const snippets: Completion[] = [
		snippetCompletion("alias ${} ${r0}", {
			boost: -10,
			label: "alias",
			info: "Labels register or device reference with name, device references also affect what shows on the screws on the IC base.",
		}),
	]

	return {
		from: word?.from ?? context.pos,
		options: [
			...(firstWord ? snippets : variables),
			{ label: "constant", type: "constant" },
			{ label: "enum", type: "enum" },
			{ label: "function", type: "function" },
			{ label: "interface", type: "interface" },
			{ label: "keyword", type: "keyword" },
			{ label: "method", type: "method" },
			{ label: "namespace", type: "namespace" },
			{ label: "property", type: "property" },
			{ label: "text", type: "text" },
			{ label: "type", type: "type" },
			{ label: "variable", type: "variable" },
		],
	}
}
export const snippets = icLanguage.data.of({
	autocomplete: myCompletions,
})
