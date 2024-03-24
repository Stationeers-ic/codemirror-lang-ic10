import { type Extension } from "@codemirror/state"
import { hoverTooltip } from "@codemirror/view"
import allInstructions from "./allInstructions"
import allLogic from "./allLogic"
import getVariables from "./getVariables"

export const ic10HoverTooltip = (): Extension => {
	const instructions = allInstructions.reduce<Record<string, (typeof allInstructions)[number]>>((acc, cur) => {
		acc[cur.name] = cur
		return acc
	}, {})
	const logic = allLogic.reduce<Record<string, (typeof allLogic)[number]>>((acc, cur) => {
		acc[cur.name] = cur
		return acc
	}, {})
	return hoverTooltip((view, pos, side) => {
		let { from, to, text } = view.state.doc.lineAt(pos)
		let start = pos,
			end = pos
		while (start > from && /\w/.test(text[start - from - 1])) start--
		while (end < to && /\w/.test(text[end - from])) end++
		if ((start == pos && side < 0) || (end == pos && side > 0)) return null
		const word = text.slice(start - from, end - from)

		const variables = getVariables(view.state.doc).reduce<Record<string, string>>((acc, cur) => {
			if (cur.type === "variable") acc[cur.label] = `Alias: ${cur.detail}`
			if (cur.type === "constant") acc[cur.label] = `Define: ${cur.detail}`
			if (cur.type === "enum") acc[cur.label] = `Label: line ${cur.detail?.slice(1)}`
			return acc
		}, {})

		let result = ""
		if (word in variables) {
			result = variables[word]
		} else if (word in logic) {
			result = logic[word].description
		} else if (word in instructions) {
			result += instructions[word].preview
			result += "\n"
			result += instructions[word].description
		} else return null
		return {
			pos: start,
			end,
			above: true,
			create(view) {
				// @ts-ignore
				let dom = document.createElement("pre")
				dom.dataset.ic10lang = "tooltip"
				dom.textContent = result
				return { dom }
			},
		}
	})
}
export default ic10HoverTooltip
