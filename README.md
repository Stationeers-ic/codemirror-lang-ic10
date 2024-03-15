# lang-ic

CodeMirror 6 language package for IC10

Usage:

```ts
import { EditorView, basicSetup } from "codemirror";
import { ic10 } from "codemirror-lang-ic10";

new EditorView({
  extensions: [
    basicSetup,
    ic10(),
  ],
  parent: document.querySelector("#editor"),
});
```
