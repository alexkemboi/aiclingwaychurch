import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Sermons from "@/components/sermons";
import Events from "@/components/events";
import Ministries from "@/components/ministries";

const page = () => {
	return (
		<div className="flex flex-col min-h-screen container m-auto bg-slate-50">
			<header className="border-0 border-teal-400">
				<Navbar />
			</header>
			<main className="flex-1 bg-slate-50">
				<Home />
				<About />
				<Sermons />
				<Events />
				<Ministries />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};
export default page;
