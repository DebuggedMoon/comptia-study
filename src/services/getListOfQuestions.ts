"use server";

import prisma from "./prismaService";

export default async function getListOfQuestions() {
	
	const questions = await prisma.multibleChoiseQuestion.findMany()

	return questions
}