import MultibleChoiseAnswerButton from "@/components/MultibleChoiseAnswerButton";
import getMultibleChoiseQuestion from "@/services/getMultibleChoiseQuestion";
import shuffleArrayInPlace from "@/utils/shuffleArray";

export default async function PracticeMultibleChoise() {

	const question = await getMultibleChoiseQuestion();

	if (question === null) {
		return (
			<main className="flex flex-col items-center justify-center min-h-screen p-24">
				No questions found!
			</main>
		)
	}

	shuffleArrayInPlace(question.answers);

	return (
		<main className="flex flex-col min-h-screen max-h-screen p-24">
			<h1 className="pb-24 pt-10 text-3xl text-center">{question.body}</h1>
			<MultibleChoiseAnswerButton answers={question.answers} />
		</main>
	);
}