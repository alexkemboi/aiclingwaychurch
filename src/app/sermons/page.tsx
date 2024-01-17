import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sermons from "@/components/sermons";

const page = () => {
	return (
		<div className="flex flex-col min-h-screen bg-slate-50">
			<header>
				<Navbar />
			</header>
			<main className="flex-1 bg-slate-50">
				<Sermons />
			</main>
			<Footer />
		</div>
	);
};
export default page;
