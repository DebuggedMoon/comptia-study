"use client";

import { MultibleChoiseAnswer, MultibleChoiseQuestion } from "@prisma/client";
import { useState } from "react";

type ComponentParams = {
	answers: MultibleChoiseAnswer[],
	onAnswer: () => any
}

export default function MultibleChoiseAnswerButton({ answers, onAnswer }: ComponentParams) {
	const [revealAnswers, setRevealAnswers] = useState(false);

	function onAnswerClick() {
		setRevealAnswers(true);
		setTimeout(onAnswer || (() => window.location.reload()), 1500)
	}

	return (
		<ul className="flex flex-col gap-6 h-auto">
			{
				answers
					.filter(answer => answer.body != "")
					.map(
						(answer) => (
							<li key={answer.id} className="flex justify-center">
								<button onClick={onAnswerClick} className={`border-2 ${revealAnswers ? (answer.isCorrect ? "border-green-500" : "border-red-500") : "border-gray-300 hover:border-gray-500"} rounded w-[75%] pl-6 py-2 text-left shadow-xl`}>{answer.body}</button>
							</li>
						)
					)
			}
		</ul>

	)
}
