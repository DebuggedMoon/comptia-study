import Link from "next/link";
import { title } from "process";

const PRACTICE_MODES = [
	{
		title: "Multible Choise",
		href: "multiblechoise"
	}
];

export default function Practice() {
	return (
		<main className="flex flex-col min-h-screen p-24">
			<h1 className="text-center text-4xl font-bold">Practice</h1>
			<ul className="flex gap-5 m-10">
				{
					PRACTICE_MODES.map(
						mode => (
							<li 
								key={mode.href}
								className="w-[150px] h-[150px] border shadow rounded"
							>
								<Link
								className="flex justify-center items-center h-full w-full font-bold"
									href={`./practice/${mode.href}`}
								>{mode.title}</Link>
							</li>
						)
					)
				}
			</ul>
		</main>
	);	
}