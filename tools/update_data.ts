import fs from "fs/promises"
import { dirname, join } from "path"
let grammar = await fs.readFile(join(dirname(__dirname), "src", "syntax.grammar"), "utf8")

// read src/syntax.grammar
{
	const consts = await fetch("https://assets.ic10.dev/consts.json").then((e) => e.json())
	const regex = /\/\/ startConst(.*)\/\/ endConst/gs
	grammar = grammar.replace(
		regex,
		`// startConst\n\t\t${Object.keys(consts)
			.sort()
			.map((x) => `"${x}"`)
			.join(" |\n\t\t")}\n\t\t// endConst`,
	)
}
{
	const logics = await fetch("https://assets.ic10.dev/languages/EN/logics.json").then((e) => e.json())
	const regex = /\/\/ startLogic(.*)\/\/ endLogic/gs
	grammar = grammar.replace(
		regex,
		`// startLogic\n\t\t${logics.data
			.filter((e: any) => e.name)
			.map(
				(e: any) => `"${e.name}"`)
			.sort()
			.join(" |\n\t\t")}\n\t\t// endLogic`,
	)
}
{
	const instructions = await fetch("https://assets.ic10.dev/languages/EN/instructions.json").then((e) => e.json())
	const regex = /\/\/ startInstruction(.*)\/\/ endInstruction/gs
	grammar = grammar.replace(
		regex,
		`// startInstruction\n\t\t${Object.keys(instructions)
			.sort()
			.map((x) => `"${x}"`)
			.join(" |\n\t\t")}\n\t\t// endInstruction`,
	)
}
fs.writeFile(join(dirname(__dirname), "src", "syntax.grammar"), grammar)

export {}
