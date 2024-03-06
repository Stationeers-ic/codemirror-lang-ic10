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
			indentNodeProp.add({
				Application: delimitedIndent({ closing: ")", align: false }),
			}),
			foldNodeProp.add({
				Application: foldInside,
			}),
			styleTags({
				Identifier: t.variableName,
				Number: t.number,
				RegDev: t.bool,
				String: t.string,
				LineComment: t.lineComment,
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
