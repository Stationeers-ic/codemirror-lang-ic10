import { snippetCompletion, type Completion } from "@codemirror/autocomplete"
import allInstructions from "./allInstructions"

const snippets: Completion[] = []

export default snippets



allInstructions.forEach((instruction) => {
	const snip = instruction.snippet.length === 0 ? instruction.name : `${instruction.name} ${instruction.snippet}`
	snippets.push(
		snippetCompletion(snip, {
			boost: instruction.deprecated !== false ? -99 : -10,
			label: instruction.name,
			detail: instruction.preview.slice(instruction.name.length + 1),
			info: instruction.description,
			type: "function",
		}),
	)
})
