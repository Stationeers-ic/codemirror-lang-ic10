import { snippetCompletion, type Completion } from "@codemirror/autocomplete"
import allInstructions from "./allInstructions"

export const snippets = (): Completion[] =>
	allInstructions.map((instruction) => {
		const snip = instruction.snippet.length === 0 ? instruction.name : `${instruction.name} ${instruction.snippet}`
		return snippetCompletion(snip, {
			boost: instruction.deprecated !== false ? -99 : -10,
			label: instruction.name,
			detail: instruction.preview.slice(instruction.name.length + 1),
			info: instruction.description,
			type: "function",
		})
	})

export default snippets
