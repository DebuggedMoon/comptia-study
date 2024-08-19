"use client";

import MultibleChoiseAnswerButton from "@/components/MultibleChoiseAnswerButton";
import ModeProgressBar from "@/components/ModeProgressBar";
import { MultibleChoiseAnswer, MultibleChoiseQuestion } from "@prisma/client";
import { useRef, useState } from "react";

type ComponentParameters = {
	questions: (MultibleChoiseQuestion & {
		answers: MultibleChoiseAnswer[]
	})[],
	numberOfQuestions: number
}

export default function PracticeMultibleChoise({ questions, numberOfQuestions }: ComponentParameters) {

	const [questionNumber, setQuestionNumber] = useState(0);
	const correctAnswers = useRef(0);

	if (questionNumber === numberOfQuestions) {
		return (
			<main className="flex flex-col min-h-screen max-h-screen p-24">
				<ModeProgressBar progress={100} />
				<h1 className="pb-24 pt-10 text-3xl text-center">Finished!</h1>
				<div className="flex flex-col items-center my-8">
					<div
						className="flex gap-28 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:border-2 [&>h3]:shadow-xl [&>h3]:rounded [&>h3]:p-3"
					>
						<h3
							className="text-green-600"
						>Correct Answers: {correctAnswers.current}</h3>
						
						<h3
							className="text-red-600"
						>Wrong Answers: {numberOfQuestions - correctAnswers.current}</h3>
					</div>
					<button
						className="w-40 h-12 text-white bg-black rounded mt-48"
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
				onAnswer={(isCorrect) => {
					if (isCorrect) {
						correctAnswers.current++;
					}

					setQuestionNumber(questionNumber + 1);
				}}
			/>
		</main>
	);
}