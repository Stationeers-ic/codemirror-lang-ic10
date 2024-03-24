# lang-ic

CodeMirror 6 language package for IC10

[![install size](https://packagephobia.com/badge?p=codemirror-lang-ic10)](https://packagephobia.com/result?p=codemirror-lang-ic10)

Usage:

```ts
import { EditorView, basicSetup } from "codemirror";
import { ic10, ic10Snippets, ic10HoverTooltip } from "codemirror-lang-ic10";

new EditorView({
  extensions: [
    basicSetup,
    ic10(),
    ic10Snippets(),
    ic10HoverTooltip(),
  ],
  parent: document.querySelector("#editor"),
});
```
