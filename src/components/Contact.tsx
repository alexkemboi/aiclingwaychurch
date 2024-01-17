"use client";
import { useEffect } from "react";
import Image from "next/image";
import pst from "../app/pst.jpg";
const Contact = () => {
	useEffect(() => {}, []);
	return (
		<section
			id="contact "
			className="bg-zinc-400 px-10 animate-fadeIn bg-zinc-400 ">
			<div className=" ">
				<div className=" text-zinc-600  p-2"></div>
				<div className="lg:flex sm:flex-col md:flex-row xm:flex-col p-2 ">
					<div className=" px-10 py-2 sm:w-full md:w-2/3 border rounded">
						<h1 className="text-center text-3xl md:text-3xl lg:text-3xl font-bold font-bold text-white">
							Contact Me
						</h1>
						<form
							id="contactForm"
							action="javascript:void(0);">
							<div className="mb-4">
								<label
									htmlFor="name"
									className="text-zinc-600 block">
									Name
								</label>
								<input
									type="text"
									className="w-full border text-zinc-600 rounded border border-white bg-zinc-400 py-2 px-3"
									id="name"
									name="name"
									required
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="email"
									className="text-zinc-600 block">
									Email address
								</label>
								<input
									type="email"
									className="w-full border text-zinc-600 rounded border border-white bg-zinc-400 py-2 px-3"
									id="email"
									name="email"
									required
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="message"
									className="text-zinc-600 block">
									Message
								</label>
								<textarea
									className="w-full border text-zinc-600 rounded border border-white bg-zinc-400 py-2 px-3"
									id="message"
									name="message"
									rows={5}
									required></textarea>
							</div>
							<button
								type="submit"
								className="rounded border border-white bg-zinc-400 text-white border py-2 px-4">
								Send Message
							</button>
						</form>
					</div>
					<div className="sm:w-full lg:w-1/3 sm:mt-4 md:mt-2">
						<Image
							src={pst}
							alt="pst image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
