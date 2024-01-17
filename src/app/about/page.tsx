import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Home from "@/components/Home";

const page = () => {
	return (
		<div className="flex flex-col justify-between min-h-screen bg-slate-50">
			<header>
				<Navbar />
			</header>
			<main className="bg-slate-50">
				<Home />
				<About />
			</main>
			<Footer />
		</div>
	);
};
export default page;
