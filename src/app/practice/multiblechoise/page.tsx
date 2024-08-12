import getRandomMultibleChoiseQuestions from "@/services/getRandomMultibleChoiseQuestions";
import MultibleChoiseAnswerButton from "@/components/MultibleChoiseAnswerButton";
import shuffleArrayInPlace from "@/utils/shuffleArray";
import ModeProgressBar from "@/components/ModeProgressBar";

export default async function PracticeMultibleChoise() {

	const question = await getRandomMultibleChoiseQuestions(1);

	if (question === null) {
		return (
			<main className="flex flex-col items-center justify-center min-h-screen p-24">
				No questions found!
			</main>
		)
	}

	shuffleArrayInPlace(question[0].answers);

	return (
		<main className="flex flex-col min-h-screen max-h-screen p-24">
			<ModeProgressBar progress={100} />
			<h1 className="pb-24 pt-10 text-3xl text-center">{question[0].body}</h1>
			<MultibleChoiseAnswerButton answers={question[0].answers} />
		</main>
	);
}