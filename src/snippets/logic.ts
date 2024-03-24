import type { Completion } from "@codemirror/autocomplete"
import allLogic from "./allLogic"

export const logic = (): Completion[] =>
	allLogic.map((l) => {
		return {
			label: l.name,
			type: "keyword",
			apply: l.name + " ",
			boost: -20,
			info: l.description,
		}
	})
export default logic
