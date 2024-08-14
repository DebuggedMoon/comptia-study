import getRandomMultibleChoiseQuestions from "@/services/getRandomMultibleChoiseQuestions";
import MultibleChoiseQuestionsMode from "@/components/MultibleChoiseQuestionsMode";
import shuffleArrayInPlace from "@/utils/shuffleArray";

const NUMBER_OF_QUESTIONS = 10;

export default async function PracticeMultibleChoise() {

	const questions = await getRandomMultibleChoiseQuestions(NUMBER_OF_QUESTIONS);

	if (questions === null) {
		return (
			<main className="flex flex-col items-center justify-center min-h-screen p-24">
				No questions found!
			</main>
		)
	}

	questions.forEach(
		question => shuffleArrayInPlace(question.answers)
	)

	return (
		<MultibleChoiseQuestionsMode
			questions={questions}
			numberOfQuestions={NUMBER_OF_QUESTIONS}
		/>
	);
}