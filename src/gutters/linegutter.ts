import type { EditorState } from "@codemirror/state"
import { lineNumbers } from "@codemirror/view"


export const customLineNumbers = (fn: (n: number, state: EditorState) => string) =>
	lineNumbers({
		formatNumber: fn,
	})

export const zeroLineNumbers = customLineNumbers((n) => (n - 1).toString())
// const breakpointEffect = StateEffect.define<{ pos: number; on: boolean }>({
// 	map: (val, mapping) => ({ pos: mapping.mapPos(val.pos), on: val.on }),
// })

// const breakpointState = StateField.define<RangeSet<GutterMarker>>({
// 	create() {
// 		return RangeSet.empty
// 	},
// 	update(set, transaction) {
// 		set = set.map(transaction.changes)
// 		for (let e of transaction.effects) {
// 			if (e.is(breakpointEffect)) {
// 				if (e.value.on) set = set.update({ add: [breakpointMarker.range(e.value.pos)] })
// 				else set = set.update({ filter: (from) => from != e.value.pos })
// 			}
// 		}
// 		return set
// 	},
// })

// function toggleBreakpoint(view: EditorView, pos: number) {
// 	let breakpoints = view.state.field(breakpointState)
// 	let hasBreakpoint = false
// 	breakpoints.between(pos, pos, () => {
// 		hasBreakpoint = true
// 	})
// 	console.log(pos, hasBreakpoint, breakpoints)
// 	view.dispatch({
// 		effects: breakpointEffect.of({ pos, on: !hasBreakpoint }),
// 	})
// }

// const breakpointMarker = new (class extends GutterMarker {
// 	toDOM() {
// 		return document.createTextNode("🔴")
// 	}
// })()

// const breakpointGutter = [
// 	breakpointState,
// 	gutter({
// 		class: "cm-breakpoint-gutter",
// 		markers: (v) => v.state.field(breakpointState),
// 		initialSpacer: () => breakpointMarker,
// 		domEventHandlers: {
// 			mousedown(view, line) {
// 				toggleBreakpoint(view, line.from)
// 				return true
// 			},
// 		},
// 	}),
// 	EditorView.baseTheme({
// 		".cm-breakpoint-gutter .cm-gutterElement": {
// 			color: "red",
// 			paddingLeft: "2px",
// 			cursor: "default",
// 		},
// 	}),
// ]

// // type CallBack = (created: boolean, line: number, all: boolean[]) => void

// // const createLineGutter = (options: breakpointOptions): (Extension | StateField<RangeSet<GutterMarker>>)[] => {
// // 	const opt: breakpointArguments = {
// // 		...options,
// // 		symbol: "🔴",
// // 	}
// // 	const gutter = []

// // 	return breakpointGutter
// // }

// export default breakpointGutter
