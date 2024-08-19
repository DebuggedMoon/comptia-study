"use client";

import MultibleChoiseAnswerButton from "@/components/MultibleChoiseAnswerButton";
import ModeProgressBar from "@/components/ModeProgressBar";
import { MultibleChoiseAnswer, MultibleChoiseQuestion } from "@prisma/client";
import { useState } from "react";

type ComponentParameters = {
	questions: (MultibleChoiseQuestion & {
		answers: MultibleChoiseAnswer[]
	})[],
	numberOfQuestions: number
}

export default function PracticeMultibleChoise({ questions, numberOfQuestions }: ComponentParameters) {

	const [questionNumber, setQuestionNumber] = useState(0);

	if (questionNumber === numberOfQuestions) {
		return (
			<main className="flex flex-col min-h-screen max-h-screen p-24">
				<ModeProgressBar progress={100} />
				<h1 className="pb-24 pt-10 text-3xl text-center">Finished!</h1>
				<div className="flex justify-center mt-24">
					<button
						className="w-40 h-12 text-white bg-black rounded"
						onClick={() => {
							window.location.reload()	
						}}
					>Practice Again</button>
				</div>
			</main>
		);
	}

	return (
		<main className="flex flex-col min-h-screen max-h-screen p-24">
			<ModeProgressBar progress={questionNumber / numberOfQuestions * 100} />
			<h1 className="pb-24 pt-10 text-3xl text-center">{questions[questionNumber].body}</h1>
			<MultibleChoiseAnswerButton
				answers={questions[questionNumber].answers}
				onAnswer={() => setQuestionNumber(questionNumber + 1)}
			/>
		</main>
	);
}