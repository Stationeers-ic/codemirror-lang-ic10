import fs from 'fs/promises';
import { dirname, join } from 'path';
let grammar = await fs.readFile(join(dirname(__dirname),'src','syntax.grammar'), 'utf8')

// read src/syntax.grammar
{
const consts = await(await fetch('https://assets.ic10.dev/consts.json')).json()
const regex = /\/\/ startConst(.*)\/\/ endConst/gs;
grammar = grammar.replace(regex, `// startConst\n\t\t${Object.keys(consts).sort().join(" |\n\t\t")}\n// endConst`)
}
{
	const logics = await(await fetch('https://assets.ic10.dev/languages/EN/logics.json')).json()
	const regex = /\/\/ startLogic(.*)\/\/ endLogic/gs;
	grammar = grammar.replace(regex, `// startLogic\n\t\t${logics.data.filter((e:any)=>e.name).map((e:any)=>e.name).sort().join(" |\n\t\t")}\n// endLogic`)
}
{
	const instructions = await(await fetch('https://assets.ic10.dev/languages/EN/instructions.json')).json()
	const regex = /\/\/ startInstruction(.*)\/\/ endInstruction/gs;
	grammar = grammar.replace(regex, `// startInstruction\n\t\t${Object.keys(instructions).sort().join(" |\n\t\t")}\n// endInstruction`)

}
fs.writeFile(join(dirname(__dirname),'src','syntax.grammar'), grammar)

export { };

