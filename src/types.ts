export type snippetsArguments = {
	snippets: boolean
	variables: boolean
	registers: boolean
	logic: boolean
}

export type snippetsOptions = Partial<snippetsArguments>



export type setChar = (line: number, char: string | null) => Record<number, string | null>


export type gutterArguments = {
	chars: Record<number, string | null>
}
export type gutterOptions = Partial<gutterArguments>
export type hoverArguments = {
	startLine: number
	callback?: (word:string,text: string, line: number, value?: string) => string | null
}
export type hoverOptions = Partial<hoverArguments>
