import createMultibleChoiseQuestion from "@/services/createMultibleChoiseQuestion";

export default function AddQuestion() {

	return (
		<main className="flex flex-col items-center min-h-screen p-24">

			<h1 className="my-5 text-4xl text-center font-semibold">Add practice question</h1>
			
			<form 
				action={createMultibleChoiseQuestion} 
				className="flex flex-col min-w-[300px] max-w-[500px] gap-5 my-8"
			>

				<input 
					name="question" 
					type="text" 
					className="border border-zinc-400 roundex px-3 h-10" 
					placeholder="Question here" 
				/>

				<input 
					name="correctAnswer" 
					type="text" 
					className="border border-zinc-300 roundex px-3 h-10" 
					placeholder="Correct Answer here" 
				/>
				
				<input 
					name="answer" 
					type="text" 
					className="border border-zinc-300 roundex px-3 h-10" 
					placeholder="Answer here" 
				/>

				<input 
					name="answer" 
					type="text" 
					className="border border-zinc-300 roundex px-3 h-10" 
					placeholder="Answer here" 
				/>

				<input 
					name="answer" 
					type="text" 
					className="border border-zinc-300 roundex px-3 h-10" 
					placeholder="Answer here" 
				/>

				<button 
					type="submit" 
					className="h-10 bg-black px-5 rounded text-white my-5"
				>Create Question</button>

			</form>

		</main>
	);
}