"use server";

import getListOfQuestions from "./getListOfQuestions";

export default async function getRandomMultibleChoiseQuestions(numberOfQuestions: number) {
	
	const questions = await getListOfQuestions();
	const randomIndecies: number[] = Array.from(
		{
			length: numberOfQuestions
		},
		() => Math.floor(Math.random() * questions.length)
	);

	return randomIndecies.map(
		index => questions[index]
	);
}