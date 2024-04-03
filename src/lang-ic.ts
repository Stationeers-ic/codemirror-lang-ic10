import type {snippetsArguments, snippetsOptions} from "./types"
import { styleTags, tags as t } from "@lezer/highlight"
import { parser } from "./syntax.grammar"
import { LRLanguage, LanguageSupport } from "@codemirror/language"
import { ic10Snippets as snippet } from "./snippets"

export const icLanguage = LRLanguage.define({
	name: "ic10",
	parser: parser.configure({
		props: [
			styleTags({
				String: t.string,
				Register: t.name,
				Device: t.bool,
				Number: t.number,
				Hex: t.number,
				Bin: t.number,
				Function: t.self,
				Identifier: t.string,
				Instruction: t.keyword,
				LineComment: t.comment,
				Label: t.propertyName,
				Logic: t.propertyName,
			}),
		],
	}),
	languageData: {
		commentTokens: { line: "#" },
	},
})

export function ic10() {
	return new LanguageSupport(icLanguage)
}

// export type snippetsArguments = {
// 	snippets: boolean
// 	variables: boolean
// 	registers: boolean
// 	logic: boolean
// }


export const ic10Snippets = (snippetsArguments?: snippetsOptions) => {
	const args: snippetsArguments = {
		snippets: true,
		variables: true,
		registers: true,
		logic: true,
		...snippetsArguments,
	}
	return icLanguage.data.of({
		autocomplete: snippet(args),
	})
}
