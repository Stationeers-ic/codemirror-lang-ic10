import { type PluginValue, ViewPlugin } from "@codemirror/view";

export const createRuler = (pos: number, className?: string) => {
	const elem = document.createElement("div");
	if (className) elem.classList.add(className);
	const plugin: PluginValue = {
		update: (update) => {
			if (update.geometryChanged) {
				if (update.heightChanged) elem.style.height = `${update.view.contentHeight}px`;
				let offset = 0;
				offset +=
					elem.parentElement
						?.querySelector<HTMLDivElement>(".cm-line")
						?.computedStyleMap()
						//@ts-expect-error
						.get("padding-left")?.value ?? 0;
				offset += elem.parentElement?.querySelector<HTMLDivElement>(".cm-gutters")?.offsetWidth ?? 0;
				offset -= (elem?.offsetWidth ?? 1) / 2;
				// offset +=
				// 	elem.parentElement
				// 		?.querySelector<HTMLDivElement>(".cm-gutters")
				// 		?.getPropertyValue("padding-left") ?? 0
				elem.style.left = `${pos * update.view.defaultCharacterWidth + offset}px`;
			}
		},
		destroy: () => {
			elem.remove();
		},
	};
	const extension = ViewPlugin.define((view) => {
		elem.style.position = "absolute";
		elem.style.left = `${pos * view.defaultCharacterWidth}px`;
		elem.style.height = `${view.contentHeight}px`;
		view.scrollDOM.append(elem);
		return plugin;
	});
	return [extension, elem] as const;
};
