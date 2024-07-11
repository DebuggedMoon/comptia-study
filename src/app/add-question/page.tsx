
export default function AddQuestion() {

	return (
		<main className="flex flex-col items-center min-h-screen p-24">

			<h1 className="my-5 text-4xl text-center font-semibold">Add practice question</h1>

			<form action="AddQuestion" className="flex flex-col max-w-[800px] gap-5">
			<input type="text" className="border" placeholder="Question here" />
			<input type="text" className="border" placeholder="Correct Answer here" />
			<input type="text" className="border" placeholder="Answer here" />
			<input type="text" className="border" placeholder="Answer here" />
			<input type="text" className="border" placeholder="Answer here" />
			</form>

		</main>
	);
}