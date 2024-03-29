import type { setChar, gutterArguments, gutterOptions } from "../types"
import type { Extension } from "@codemirror/state"
import { gutter, GutterMarker } from "@codemirror/view"


const getMarker = (char: string) =>
	new (class extends GutterMarker {
		toDOM() {
			return document.createTextNode(char)
		}
	})()


export const createLineGutter = (options?: gutterOptions): [Extension, setChar] => {
	const opt: gutterArguments = { chars: {}, ...options }
	let chars: Record<number, string | null> = opt.chars

	const setChar: setChar = (line, char) => {
		chars[line] = char
		return chars
	}

	const gut = gutter({
		lineMarker(view, line) {
			const lineNumber = view.state.doc.lineAt(line.from).number ?? 0
			const char = chars[lineNumber] ?? null
			if (char === null) return null

			return getMarker(char)
		},
		initialSpacer: () => getMarker("_"),
	})
	return [gut, setChar]
}

export default createLineGutter
