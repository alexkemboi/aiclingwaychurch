"use client";
import { useEffect } from "react";
import Image from "next/image";
import lingway from "../../src/app/AIC-Logo-Small_Light.png";

const Sermons = () => {
	const SermonsData = [
		{
			id: 1,
			title: "Sermon 1",
			description: "Description for Sermon 1.",
			imageUrl: "url_to_image1",
			websiteUrl: "https://sermon1-link"
		},
		{
			id: 2,
			title: "Sermon 2",
			description: "Description for Sermon 2.",
			imageUrl: "url_to_image2",
			websiteUrl: "https://sermon2-link"
		},
		{
			id: 3,
			title: "Sermon 3",
			description: "Description for Sermon 3.",
			imageUrl: "url_to_image3",
			websiteUrl: "https://sermon3-link"
		},
		{
			id: 4,
			title: "Sermon 4",
			description: "Description for Sermon 4.",
			imageUrl: "url_to_image4",
			websiteUrl: "https://sermon4-link"
		}
	];

	useEffect(() => {}, []);
	return (
		<section
			id="Sermons"
			className="bg-zinc-400  animated-fadeIn">
			<h1 className="font-bold text-3xl lg:text-2xl sm:text-5xl xl:text-3xl text-center text-red-600">
				Sermons
			</h1>

			<div className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 sm:gap-1 px-10">
				{SermonsData.map((item) => (
					<div
						key={item.id}
						className=" p-4 group  group-hover:opacity-100  flex flex-col justify-start rounded m-10 border">
						<div className="relative flex flex-col items-start">
							<h2 className="mt-1 text-base font-semibold text-zinc-800 dark:text-zinc-100">
								<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
								<a href={item.websiteUrl}>
									<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
									<span className="relative z-10 text-zinc-100">
										{item.title}
									</span>
								</a>
							</h2>
							<p className="relative z-10 mt-2 text-sm text-zinc-100 dark:text-zinc-100">
								{item.description}
							</p>
							<p className="relative z-10  flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
								<svg
									viewBox="0 0 24 24"
									aria-hidden="true"
									className="h-6 w-6 flex-none text-zinc-100">
									<path
										d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
										fill="currentColor"></path>
								</svg>
								<span className="text-zinc-100">{item.websiteUrl}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Sermons;
