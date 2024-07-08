"use client"

import { ROUTES } from "@/utils/Routes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const initialStyling = "bg-black text-white";

export default function DirectionalyStickyHeader() {

	const [activeScrollClasses, setActiveScrollClasses] = useState(initialStyling);
	const lastScrollYPosition = useRef(-1);

	console.log(activeScrollClasses)

	const getScrollDepedentClasses = (): string => {

		if (window.scrollY === lastScrollYPosition.current) {
			return activeScrollClasses;
		}

		if (window.scrollY <= 10) {

			return initialStyling;
		} else if (window.scrollY - lastScrollYPosition.current > 2) {

			return "invisible";
		}

		return "";
	}

	useEffect(() => {
		// TODO: Fix this shit. Maybe write a ScrollObserver and pass in a function
		// 		 which sets the state similar dependent on logic like getScrollDepedentClasses

		const updateScrollData = () => {

			if (window.scrollY % 3 !== 0) {
			 	return;
			}

			const currentScrollClasses = getScrollDepedentClasses();
			lastScrollYPosition.current = window.scrollY;

			if (currentScrollClasses !== activeScrollClasses) {
				setActiveScrollClasses(currentScrollClasses);
			}
		}

		window.addEventListener("scroll", updateScrollData)
		return () => window.removeEventListener("scroll", updateScrollData);
	});

	return (
		<header
			className={`w-full fixed flex justify-center items-center py-4 px-7 ${activeScrollClasses}`}
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