import type { Completion } from "@codemirror/autocomplete";

const registers = (): Completion[] =>
	[
		"r0",
		"r1",
		"r2",
		"r3",
		"r4",
		"r5",
		"r6",
		"r7",
		"r8",
		"r9",
		"r10",
		"r11",
		"r12",
		"r13",
		"r14",
		"r15",
		"r16",
		"r17",
		"ra",
		"sp",
		"d0",
		"d1",
		"d2",
		"d3",
		"d4",
		"d5",
		"db",
	].map<Completion>((r) => ({
		label: r,
		type: "type",
		apply: `${r} `,
		boost: -7,
	}));

export default registers;
