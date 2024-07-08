
export type Question = {
	question: string,
	correctAnswer: string,
	answers: string[]
}

export const QUESTIONS: Question[] = [
	{
		question: "How many fingers does a human have?",
		correctAnswer: "Ten Fingers",
		answers: [
			"Four Fingers",
			"Five Fingers"
		]
	}
]