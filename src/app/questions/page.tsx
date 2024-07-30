import ExpandableQuestionList from "@/components/ExpandableQuestionList";
import getListOfQuestions from "@/services/getListOfQuestions"

export default async function Questions() {

	const questions = await getListOfQuestions(); 

	return (
		<main className="flex flex-col items-center min-h-screen p-24">
			<ExpandableQuestionList questions={questions}/>
			{/* TODO: list questions and allow for them to be modified / deleted */}
		</main>
	)
}