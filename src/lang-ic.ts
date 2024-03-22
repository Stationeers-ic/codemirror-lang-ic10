import { styleTags, tags as t } from "@lezer/highlight"
import { parser } from "./syntax.grammar"
import { LRLanguage, LanguageSupport } from "@codemirror/language"
import { myCompletions } from "./snippets"

export const icLanguage = LRLanguage.define({
	name: "ic10",
	parser: parser.configure({
		props: [
			styleTags({
				String: t.string,
				Register: t.name,
				Device: t.bool,
				Number: t.number,
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

export const snippets = icLanguage.data.of({
	autocomplete: myCompletions,
})
