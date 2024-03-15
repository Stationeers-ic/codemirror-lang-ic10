import { styleTags, tags as t } from "@lezer/highlight"
import { parser } from "./syntax.grammar"
import {
	LRLanguage,
	LanguageSupport,
	delimitedIndent,
	foldInside,
	foldNodeProp,
	indentNodeProp,
} from "@codemirror/language"

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
