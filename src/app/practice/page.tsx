import getMultibleChoiseQuestion from "@/services/getMultibleChoiseQuestion";
import shuffleArrayInPlace from "@/utils/shuffleArray";

export default async function Pratice() {

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
		<main className="flex flex-col min-h-screen p-24">

			<h1 className="py-[10%] text-3xl text-center">{question.body}</h1>

			<ul className="flex flex-col gap-6 h-auto">
				{
					question.answers
						.filter(answer => answer.body != "")
						.map(
							answer => (
								<li key={answer.body} className="flex justify-center">
									<button className="border-2 border-gray-300 hover:border-gray-500 rounded w-[75%] pl-6 py-2 text-left">{answer.body}</button>
								</li>
							)						
						)
				}
			</ul>

		</main>
	);
}