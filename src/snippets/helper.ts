import type { CompletionContext } from "@codemirror/autocomplete"
import type { Text } from "@codemirror/state"

export function getPos(context: CompletionContext): {
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
export function isFirstWord(line: string, pos: number): boolean {
	return line.substring(0, pos).match(/\s*\w*$/)?.index === 0
}

export function getLines(doc: Text): string[] {
	const lines: string[] = []
	const x = doc.iter()
	while (!x.next().done) lines.push(x.value)
	return lines.join("").split("\n")
}
