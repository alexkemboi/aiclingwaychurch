"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import lingway from "../../src/images/AIC-Logo-Small_Light.png";
const Footer = () => {
	const menuItems = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Ministries", link: "/ministries" },
		{ name: "Events", link: "/events" },
		{ name: "Give", link: "/give" },
		{ name: "Sermons", link: "/sermons" }
	];
	useEffect(() => {}, []);
	return (
		<section
			id="footer"
			className="bg-red-400">
			<footer className="py-5 border-t border-gray-500">
				<div className="container mx-10 px-10 flex flex-wrap">
					<div className="w-full md:w-1/4 rounded-full">
						<Image
							src={lingway}
							alt="Logo"
							className="mx-auto mb-4 rounded-full"
						/>
					</div>

					<div className="w-full md:w-1/4">
						<h2 className="text-xl font-semibold mb-4">Contact Us</h2>
						<p>AIC Lingway</p>
						<p>Burnt Forest KE</p>
						<p>Lingway shopping center, Off Kesses road</p>
						<p>P.O. Box 86-30102</p>
						<p>Tel: 0726837210</p>
						<p>E-mail: info@aiclingway.org</p>
						<p>
							<a
								href="#"
								className="text-zinc-600 hover:underline">
								Get directions on the map →
							</a>
						</p>
					</div>

					<div className="w-full md:w-2/4">
						<h2 className="text-xl font-semibold mb-4">Welcome to Church</h2>
						<p className="mb-4">
							So continuing daily with one accord in the temple, and breaking
							bread from house to house, they ate their food with gladness and
							simplicity of heart, praising God and having favor with all the
							people. And the Lord added to the church daily those who were
							being saved.
						</p>
					</div>
				</div>
			</footer>
			<div className="md:flex md:flex-row md:justify-between  md:pr-10 sm:flex sm:flex-col sm:justify-center sm:items-center sm:p-5 sm:m-4 bg-zinc-600 ">
				<div className=" w-auto sm:m-2 sm:flex sm:flex-row sm:justify-center">
					{menuItems.map((menuItem, index) => (
						<Link
							key={index}
							href={menuItem.link}>
							<span className="text-zinc-400 hover:bg-slate-50 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
								{menuItem.name}
							</span>
						</Link>
					))}
				</div>
				<div className="rounded-full md:flex md:flex-row md:justify-end md:items-end sm:flex sm:flex-row sm:justify-center sm:items-center sm:p-5 ">
					<p className="text-slate-50 text-sm text-center">
						© Developed by Alex K. Kemboi &copy; {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
