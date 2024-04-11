import { Extension, StateEffect, StateField } from "@codemirror/state"
import { Decoration, type DecorationSet, EditorView, type PluginValue, ViewPlugin } from "@codemirror/view"

//   highlightLine(lineNo) {
//     if (lineNo <= 0) return;
//     const docPosition = this.editorView.state.doc.line(lineNo).from;
//     this.editorView.dispatch({effects: addLineHighlight.of(docPosition)});
//   }

export class lineClassController {
	private readonly addLineHighlight = StateEffect.define<number>()
	private readonly lineHighlightField: StateField<DecorationSet>
	private readonly lineHighlightMark: Decoration
	private line: number = -1
	private editorView?: EditorView
	public readonly extension: Extension[]
	private _ready: boolean = false
	public get ready(): boolean {
		return this._ready
	}

	constructor(public readonly className: string) {
		this.lineHighlightField = StateField.define({
			create: () => Decoration.none,
			update: (lines, tr) => {
				lines = lines.map(tr.changes)
				console.log(lines)
				for (let e of tr.effects) {
					if (e.is(this.addLineHighlight)) {
						lines = Decoration.none
						lines = lines.update({ add: [this.lineHighlightMark.range(e.value)] })
					}
				}
				return lines
			},
			provide: (f) => EditorView.decorations.from(f),
		})
		this.lineHighlightMark = Decoration.line({
			class: className,
		})
		this.extension = [
			ViewPlugin.define((view) => {
				this.editorView = view
				this._ready = true
				this.highlightLine(this.line)
				return this.lineHighlightField
			}),
			this.lineHighlightField,
		]
	}
	highlightLine(line: number): boolean {
		if (line <= 0) return false
		if (!this._ready) {
			this.line = line
			return false
		}
		const editor = this.editorView
		if (!editor) return false
		const docPosition = editor.state.doc?.line(line)?.from ?? null
		if (docPosition === null) return false
		console.log(docPosition);
		editor.dispatch({ effects: this.addLineHighlight.of(docPosition) })
		return true
	}
}
