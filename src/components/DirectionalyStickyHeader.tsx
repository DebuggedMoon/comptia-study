"use client"

import { ROUTES } from "@/utils/Routes";
import Link from "next/link";

export default function DirectionalyStickyHeader() {
	console.log("Header rendered!")

	return (
		<header
			className="flex justify-center items-center py-4 px-7"
		>
			<nav>
				<ul
					className="flex gap-x-5 text-[15px]"
				>
					{ROUTES.map((route) => (
						<li key={route.path}>
							<Link href={route.path}>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);

}