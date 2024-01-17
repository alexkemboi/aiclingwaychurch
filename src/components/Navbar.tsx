"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import lingway from "../../src/app/AIC-Logo-Small_Light.png";
import Image from "next/image";
const Navbar = () => {
	const menuItems = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Ministries", link: "/ministries" },
		{ name: "Events", link: "/events" },
		{ name: "Give", link: "/give" },
		{ name: "Sermons", link: "/sermons" }
	];

	console.log(menuItems);

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const body = document.body;
		if (darkMode) {
			body.classList.add("dark-mode");
		} else {
			body.classList.remove("dark-mode");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	return (
		<nav className="bg-slate-50">
			<div className="bg-zinc-600 p-1 text-center text-red-600">
				UpCOMING EVENT
			</div>
			<div className="max-w-full flex mx-auto px-2 sm:px-6 lg:px-8  shadow-5xl">
				<div className="relative flex items-center justify-between h-16 w-full ">
					<div className="rounded-full overflow-hidden w-10 md:m-0 h-auto ">
						<Image
							src={lingway}
							alt="Description"
						/>
					</div>
					<div className="absolute inset-y-0 left-0 flex flex-row  justify-end sm:hidden  w-full">
						<button
							type="button"
							className="inline-flex items-center px-10 rounded-md text-gray-400 hover:text-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={toggleMenu}>
							<span className="sr-only">Open</span>
							<FontAwesomeIcon
								icon={faBars}
								className="h-6 w-6"
							/>
						</button>
					</div>
					<div className=" flex items-center justify-center sm:items-center sm:justify-center sm-border-0 md:border md:border-1 border-zinc-400 rounded-full m-auto p-2">
						<div className="hidden sm:block sm:ml-6 ">
							<div className="flex  space-x-4">
								{menuItems.map((menuItem, index) => (
									<Link
										key={index}
										href={menuItem.link}>
										<span className="text-zinc-400 hover:bg-slate-50 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
											{menuItem.name}
										</span>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<div
					className="z-50 border-r border-b group-hover:opacity-100 border-gray-500 sm:hidden absolute left-0 top-0 w-1/2 bg-slate-50 transition-transform transform h-5/8 animate-slideIn delay-200"
					id="mobile-menu">
					<div className="border-b  border-gray-500 text-right flex flex-row justify-between w-auto h-1/2 z-10">
						<div className="rounded-full overflow-hidden w-10 md:m-0 h-auto m-2">
							<Image
								src={lingway}
								alt="Description"
							/>
						</div>

						<button
							type="button"
							className="inline-flex  p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={toggleMenu}>
							<span className="sr-only">Toggle menu</span>

							<FontAwesomeIcon
								icon={faTimes}
								className="h-6 w-6"
							/>
						</button>
					</div>
					<div className="px-2 pt-2 pb-3 space-y-1 bg-slate-50 flex flex-col">
						{menuItems.map((menuItem, index) => (
							<Link
								key={index}
								href={menuItem.link}>
								<span className="text-zinc-400 hover:bg-slate-50 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									{menuItem.name}
								</span>
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
