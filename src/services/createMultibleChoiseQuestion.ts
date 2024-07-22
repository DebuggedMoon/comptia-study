"use server";

import assert from "assert";
import prisma from "./prismaService";

export default async function createMultibleChoiseQuestion(formData: FormData) {

	console.log(formData)

	const rawQuestionData = {
		question: formData.get("question"),
		answerCorrectness: formData.getAll("answerCorrectness"),
		answers: formData.getAll("answer")
	}
	
	if (
		rawQuestionData.question === null ||
		rawQuestionData.answers.length === 0 ||
		rawQuestionData.answerCorrectness.length === 0
	) {
		return {
			error: "Provided invalid form data"
		}
	}

	console.log("Creating question....")

	prisma.multibleChoiseQuestion.create({
		data: {
			body: rawQuestionData.question.toString(),
			hasSingleCorrectAnswer: rawQuestionData.answerCorrectness.filter(
				isCorrect => isCorrect === "on"
			).length === 1,
			answers: {
				"createMany": {
					data: [
						...rawQuestionData.answers.map(
							(answer, i) => ({
								body: answer.toString(),
								isCorrect: rawQuestionData.answerCorrectness[i] === "on"
							})
						)
					]
				}
			}
		}
	}).then(
		response => console.log(`Created MultibleChoiseQuestion with id ${response.id} Successfuly!`)
	).catch(
		error => console.warn("Creation FAILED!", error)
	)
}