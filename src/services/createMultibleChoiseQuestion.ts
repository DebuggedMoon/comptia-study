"use server";

import assert from "assert";
import prisma from "./prismaService";

export default async function createMultibleChoiseQuestion(formData: FormData) {

	console.log(formData)

	const rawQuestionData = {
		question: formData.get("question"),
		correctAnswer: formData.get("correctAnswer"),
		answers: formData.getAll("answer")
	}

	assert(
		rawQuestionData.question && 
		rawQuestionData.correctAnswer && 
		rawQuestionData.answers.length, 
		"Provided invalid form data"
	);

	console.log("Creating question....")

	prisma.multibleChoiseQuestion.create({
		data: {
			body: rawQuestionData.question.toString(),
			hasSingleCorrectAnswer: true,
			answers: {
				"createMany": {
					data: [
						{
							body: rawQuestionData.correctAnswer.toString(),
							isCorrect: true
						},
						...rawQuestionData.answers.map(
							answer => ({
								body: answer.toString(),
								isCorrect: false
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