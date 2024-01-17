"use client";
import { useEffect, useState } from "react";

const About = () => {
	const [showMore, setShowMore] = useState(false);

	const toggleReadMore = () => {
		setShowMore(!showMore);
	};
	useEffect(() => {}, []);
	return (
		<div className="md:flex md:flex-row mx-10  animate-fadeIn  my-4">
			<div className="md:w-2/2 sm:w-2/2 sm:m-4 bg-slate-50 p-6 rounded-md   border border-red-600">
				<h1 className="text-center text-red-600 w-50 m-auto text-2xl lg:text-2xl sm:text-5xl xl:text-3xl font-bold ">
					Weekly Fellowships
				</h1>
				<div className="container mx-auto mt-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-600">
						<div>
							<h2 className="text-xl font-semibold mb-4">Sundays</h2>
							<ul>
								<li>
									<strong>First Service:</strong> 0830Hrs to 1000Hrs
								</li>
								<li>
									<strong>Second Service:</strong> 1100Hrs to 1230Hrs
								</li>
								<li>
									<strong>Sunday School (Children):</strong> 0830Hrs to 1000Hrs,
									1100Hrs to 1230Hrs
								</li>
								<li>
									<strong>Teens Service:</strong> 0830Hrs to 1000Hrs, 1100Hrs to
									1230Hrs
								</li>
								<li>
									<strong>Youth Service:</strong> 1300Hrs to 1430Hrs
								</li>
								<li>
									<strong>Catechism Class:</strong> 0900Hrs to 1030Hrs
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-4">Wednesdays</h2>
							<ul>
								<li>
									<strong>Midweek Service:</strong> 1800Hrs to 1900Hrs
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-4">Fridays</h2>
							<ul>
								<li>
									<strong>Youth Bible Study:</strong> 1800Hrs to 2000Hrs
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
