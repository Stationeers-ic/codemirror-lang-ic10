import type { Completion } from "@codemirror/autocomplete"
import allLogic from "./allLogic"

export const logic: Completion[] = []


allLogic.forEach((l) => {
	logic.push({
		label: l.name,
		type: "keyword",
		apply: l.name + " ",
		boost: -20,
		info: l.description,
	})
})
export default logic
//{ label: r, type: "type", apply: r + " ", boost: -7 }
