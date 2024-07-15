"use server";

import prisma from "./prismaService";

export default async function getMultibleChoiseQuestion() {
	
	const questionCount = await prisma.multibleChoiseQuestion.count();

	const question = await prisma.multibleChoiseQuestion.findFirst({
		where: {
			id: Math.ceil(Math.random() * questionCount)
		},
		include: {
			answers: true
		}
	});

	return question;
}