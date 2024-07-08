
export default function Pratice() {
	return (
		<main className="flex flex-col min-h-screen p-24">

			<h1 className="py-[10%] text-3xl text-center">A scary hard question!</h1>

			

			<ul className="flex flex-col gap-6 h-auto">
				{
					["Anwer 1", "Answer 2"].map(
						answer => (
							<li key={answer} className="flex justify-center">
								<button className="border-2 border-gray-300 hover:border-gray-500 rounded w-[75%] pl-6 py-2 text-left">{answer}</button>
							</li>
						)						
					)
				}
			</ul>

		</main>
	);
}