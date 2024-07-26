import getListOfQuestions from "@/services/getListOfQuestions"

export default async function Questions() {

	const questions = await getListOfQuestions(); 

	return (
		<main className="flex flex-col items-center min-h-screen p-24">
			<ul>
				{
					questions.map(question => (
						<li 
							key={question.id}
							className="border-2 rounded my-3 p-3"
						>{question.body}</li>
					))
				}
			</ul>
			{/* TODO: list questions and allow for them to be modified / deleted */}
		</main>
	)
}