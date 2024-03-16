import { LRLanguage, LanguageSupport } from "@codemirror/language";
declare const icLanguage: LRLanguage;
declare const snippets: import("@codemirror/state").Extension;
declare function ic10(): LanguageSupport;
export { icLanguage, ic10, snippets };
