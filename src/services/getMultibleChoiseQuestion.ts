"use server";

import prisma from "./prismaService";

export default async function getMultibleChoiseQuestion() {

	const question = await prisma.multibleChoiseQuestion.findFirst({
		include: {
			answers: true
		}
	});

	return question;
}