import Navbar from "@/components/Navbar";
import Home from "../../components/Home";
import Footer from "@/components/Footer";
const page = () => {
	return (
		<div className="flex flex-col min-h-screen bg-slate-50 ">
			<header>
				<Navbar />
			</header>
			<main className="flex-1 bg-slate-50 m-4">
				<Home />
			</main>
			<Footer />
		</div>
	);
};
export default page;
