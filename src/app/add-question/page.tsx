"use client";

import createMultibleChoiseQuestion from "@/services/createMultibleChoiseQuestion";
import { useState } from "react";

export default function AddQuestion() {
	const [answerAmount, setAnswerAmount] = useState(1);

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
				
				{
					new Array(answerAmount).fill("").map(
						(_, i) => (
							<input
								key={i}
								name="answer" 
								type="text" 
								className="border border-zinc-300 roundex px-3 h-10" 
								placeholder="Answer here" 
							/>
						)
					)
				}

				<button 
					type="submit" 
					className="h-10 bg-black px-5 rounded text-white mt-5"
				>Create Question</button>

			</form>

			
			<button 
				onClick={() => setAnswerAmount(answerAmount + 1)}
				className="h-10 border border-black px-5 rounded"
			>Add Answer</button>

		</main>
	);
}