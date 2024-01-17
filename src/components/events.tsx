"use client";
import { useEffect } from "react";

const Events = () => {
	const EventsData = [
		{
			id: 1,
			title: "Evangelism Outreach",
			slug: "evangelism-outreach",
			date: "January 10, 2023",
			excerpt:
				"Join us for a day of sharing the Gospel and spreading the message of love and hope in the community."
		},
		{
			id: 2,
			title: "Missions Trip",
			slug: "missions-trip",
			date: "February 15, 2023",
			excerpt:
				"Embark on a mission trip to make a positive impact on the lives of people in need. Experience the joy of serving others."
		},
		{
			id: 3,
			title: "Ladies Night Fellowship",
			slug: "ladies-night-fellowship",
			date: "March 20, 2023",
			excerpt:
				"Ladies, join us for a night of fellowship, worship, and meaningful conversations. Strengthen your faith and connect with others."
		},
		{
			id: 4,
			title: "Men's Conference",
			slug: "mens-conference",
			date: "April 25, 2023",
			excerpt:
				"Calling all men! Join us for a conference filled with inspiring speakers, worship, and opportunities for personal growth in your faith."
		},
		{
			id: 5,
			title: "Bible Study Session",
			slug: "bible-study-session",
			date: "May 30, 2023",
			excerpt:
				"Deepen your understanding of the Scriptures in our Bible study session. Join us for insightful discussions and spiritual growth."
		}
	];

	useEffect(() => {
		// Add any additional logic you may need
	}, []);

	return (
		<main className="flex-auto mb-10 animate-fadeIn">
			<div className="px-10">
				<div className="mx-auto w-full">
					<div className="relative ">
						<div className="mx-auto lg:max-w-5xl">
							<header className="mx-w-2xl group group-hover:opacity-100">
								<h1 className="font-bold text-3xl lg:text-2xl sm:text-5xl xl:text-3xl text-center text-red-600">
									Events
								</h1>
							</header>
							<div className="mt-1 max-w-2xl ">
								<div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
									<div className="flex max-w-3xl flex-col space-y-1">
										{EventsData.map((article) => (
											<article
												key={article.id}
												className="md:grid md:grid-cols-4 md:items-baseline ">
												<div className="md:col-span-3 group  relative flex flex-col items-start mt-10">
													<h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
														<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
														<a href={`/Events/${article.slug}`}>
															<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
															<span className="relative z-10 text-red-600">
																{article.title}
															</span>
														</a>
													</h2>
													<time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-red-600 dark:text-red-600 pl-3.5">
														<span
															className="absolute inset-y-0 left-0 flex items-center"
															aria-hidden="true">
															<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
														</span>
														{article.date}
													</time>
													<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
														{article.excerpt}
													</p>
													<div
														aria-hidden="true"
														className="relative z-10 mt-4 flex items-center text-sm font-medium text-red-600">
														Read about event
														<svg
															viewBox="0 0 16 16"
															fill="none"
															aria-hidden="true"
															className="ml-1 h-4 w-4 stroke-current">
															<path
																d="M6.75 5.75 9.25 8l-2.5 2.25"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"></path>
														</svg>
													</div>
												</div>
												<time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
													{article.date}
												</time>
											</article>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Events;
