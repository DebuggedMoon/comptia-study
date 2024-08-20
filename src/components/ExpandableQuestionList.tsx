"use client";

import { MultibleChoiseAnswer, MultibleChoiseQuestion } from "@prisma/client";
import { useState } from "react";

type ComponentParameters = {
	questions: {
		id: number,
		body: string,
		hasSingleCorrectAnswer: boolean,
		answers: MultibleChoiseAnswer[]
	}[]
}

export default function ExpandableQuestionList({ questions }: ComponentParameters) {

	const [expanededQuestionId, setExpandedQuestionId] = useState(-1)

	return (
		<ul>
		{
			questions.map(question => (
				<li 
					key={question.id}
					className="border-2 rounded my-3 p-3 shadow-xl"
				>
					<p>{question.body}</p>
					<button
						className="border p-2 shadow"
						onClick={() => {

							if (question.id === expanededQuestionId) {
								setExpandedQuestionId(-1);
								return;
							}

							setExpandedQuestionId(question.id)
						}}
					>{expanededQuestionId === question.id ? "Collapse" : "Expanded"}</button>
				{
					expanededQuestionId === question.id ? (
						<ul>
							{
								question.answers.map(answer => (
									<li key={answer.id}>{answer.body}{answer.isCorrect ? "✔" : ""}</li>
								))
							}
						</ul>
					) : ""
				}
				</li>
			))
		}
	</ul>
	)

}