import createMultibleChoiseQuestion from "@/services/createMultibleChoiseQuestion";

export default function AddQuestion() {

	return (
		<main className="flex flex-col items-center min-h-screen p-24">

			<h1 className="my-5 text-4xl text-center font-semibold">Add practice question</h1>
			
			<form action={createMultibleChoiseQuestion} className="flex flex-col max-w-[800px] gap-5">
				<input name="question" type="text" className="border" placeholder="Question here" />
				<input name="correctAnswer" type="text" className="border" placeholder="Correct Answer here" />
				<input name="answer" type="text" className="border" placeholder="Answer here" />
				<input name="answer" type="text" className="border" placeholder="Answer here" />
				<input name="answer" type="text" className="border" placeholder="Answer here" />
				<button type="submit" className="border">Create Question</button>
			</form>

		</main>
	);
}