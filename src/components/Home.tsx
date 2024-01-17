"use client";
import { useEffect } from "react";
import Image from "next/image";
import lingway from "../images/image.jpg";
const Home = () => {
	useEffect(() => {}, []);
	return (
		<section
			id="home"
			className="bg-slate-50 animate-fadeIn ">
			<div className="overflow-hidden w-100 h-100 animate-fade-in">
				{/* <Image
					src={lingway}
					alt="Description"
				/> */}
			</div>
			<div className="px-10 flex md:flex-row flex-col sm:flex-col bg-zinc-600">
				<div className="sm:w-full md:w-2/3 lg:w-2/3">
					<h1 className="text-white font-bold text-xl mt-5">
						Welcome to AIC Lingway Local Church
					</h1>
					<p className="text-red-50">
						Blessed be the God and Father of our Lord Jesus Christ, who has
						blessed us with every spiritual blessing in the heavenly places in
						Christ, just as He chose us in Him before the foundation of the
						world, that we should be holy and without blame before Him in love,
						having predestined us to adoption as sons by Jesus Christ to
						Himself, according to the good pleasure of His will, to the praise
						of the glory of His grace, by which He made us accepted in the
						Beloved. Ephesians 1:3-6
					</p>
				</div>
				<div className=" md:w-1/3 sm:hidden md:block">
					<div className="sm:w-full m-2 p-5 border rounded shadow-5xl  bg-red-50 border-zinc-600">
						<h2 className="text-xl font-semibold mb-1 text-red-600">
							Contact Us
						</h2>
						<p className="text-zinc-600">AIC Lingway</p>
						<p className="text-zinc-600">Burnt Forest KE</p>
						<p className="text-zinc-600">
							Lingway shopping center, Off Kesses road
						</p>
						<p className="text-zinc-600">P.O. Box 86-30102</p>
						<p className="text-zinc-600">Tel: 0726837210</p>
						<p className="text-zinc-600">E-mail: info@aiclingway.org</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
