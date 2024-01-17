"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPrayingHands,
	faGlobe,
	faUsers,
	faMale,
	faFemale,
	faCross,
	faSchool,
	faHandsHelping,
	faUserPlus,
	faBookOpen,
	faHeart,
	faMusic,
	faMicrophone,
	faMicrophoneAlt,
	faCrown,
	faStar,
	faMedal
} from "@fortawesome/free-solid-svg-icons";
// Your ministriesData array and other code...

const Ministries = () => {
	const [skillCards, setSkillCards] = useState<JSX.Element[] | undefined>();
	useEffect(() => {
		const ministriesData = [
			{
				id: 1,
				name: "Intercessory",
				color: "bg-red-500",
				icon: (
					<FontAwesomeIcon
						icon={faPrayingHands}
						className="text-red-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 2,
				name: "Missions and Evangelism",
				color: "bg-gray-800",
				icon: (
					<FontAwesomeIcon
						icon={faGlobe}
						className="text-gray-800 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 3,
				name: "Discipleship",
				color: "bg-yellow-500",
				icon: (
					<FontAwesomeIcon
						icon={faUsers}
						className="text-yellow-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 4,
				name: "Men’s Ministry",
				color: "bg-purple-500",
				icon: (
					<FontAwesomeIcon
						icon={faMale}
						className="text-purple-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 5,
				name: "Women’s Ministry",
				color: "bg-blue-500",
				icon: (
					<FontAwesomeIcon
						icon={faFemale}
						className="text-blue-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 6,
				name: "Youth Ministry",
				color: "bg-yellow-500",
				icon: (
					<FontAwesomeIcon
						icon={faUsers}
						className="text-yellow-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 7,
				name: "Crossroads Ministry",
				color: "bg-blue-500",
				icon: (
					<FontAwesomeIcon
						icon={faCross}
						className="text-blue-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 8,
				name: "Sunday School Ministry",
				color: "bg-green-500",
				icon: (
					<FontAwesomeIcon
						icon={faSchool}
						className="text-green-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 9,
				name: "Ushering",
				color: "bg-red-500",
				icon: (
					<FontAwesomeIcon
						icon={faHandsHelping}
						className="text-red-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 10,
				name: "Cell Group",
				color: "bg-gray-600",
				icon: (
					<FontAwesomeIcon
						icon={faUsers}
						className="text-gray-600 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 11,
				name: "Deacons",
				color: "bg-green-500",
				icon: (
					<FontAwesomeIcon
						icon={faUsers}
						className="text-green-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 12,
				name: "Benevolence",
				color: "bg-red-500",
				icon: (
					<FontAwesomeIcon
						icon={faHandsHelping}
						className="text-red-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 13,
				name: "Membership",
				color: "bg-gray-800",
				icon: (
					<FontAwesomeIcon
						icon={faUserPlus}
						className="text-gray-800 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 14,
				name: "Biblical Education by Extension (B.E.E)",
				color: "bg-gray-600",
				icon: (
					<FontAwesomeIcon
						icon={faBookOpen}
						className="text-gray-600 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 23,
				name: "Legends",
				color: "bg-green-500",
				icon: (
					<FontAwesomeIcon
						icon={faMedal}
						className="text-green-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 15,
				name: "Widows & Widowers Fellowship",
				color: "bg-purple-500",
				icon: (
					<FontAwesomeIcon
						icon={faHeart}
						className="text-purple-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 16,
				name: "Music Ministry",
				color: "bg-blue-500",
				icon: (
					<FontAwesomeIcon
						icon={faMusic}
						className="text-blue-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 17,
				name: "Hill Voices",
				color: "bg-yellow-500",
				icon: (
					<FontAwesomeIcon
						icon={faMicrophone}
						className="text-yellow-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 18,
				name: "Mabalozi Choir",
				color: "bg-gray-800",
				icon: (
					<FontAwesomeIcon
						icon={faMicrophoneAlt}
						className="text-gray-800 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 19,
				name: "Music Team",
				color: "bg-purple-500",
				icon: (
					<FontAwesomeIcon
						icon={faMusic}
						className="text-purple-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 23,
				name: "Legends",
				color: "bg-green-500",
				icon: (
					<FontAwesomeIcon
						icon={faMedal}
						className="text-green-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 20,
				name: "Marriage and Family",
				color: "bg-blue-500",
				icon: (
					<FontAwesomeIcon
						icon={faHeart}
						className="text-blue-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 21,
				name: "Noble",
				color: "bg-red-500",
				icon: (
					<FontAwesomeIcon
						icon={faCrown}
						className="text-red-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 22,
				name: "Glorious",
				color: "bg-gray-600",
				icon: (
					<FontAwesomeIcon
						icon={faStar}
						className="text-gray-600 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			},
			{
				id: 23,
				name: "Legends",
				color: "bg-green-500",
				icon: (
					<FontAwesomeIcon
						icon={faMedal}
						className="text-green-500 text-5xl mx-auto text-center"
					/>
				),
				progress: 80
			}
		];
		const generateCards = () => {
			return ministriesData.map((skill, index) => (
				<div
					className="rounded  flex flex-col items-center justify-center w-full py-4 animated-fadeIn border border-red-800 bg-red-800"
					key={index}>
					<div className="">{skill.icon}</div>
					<h6 className="text-white font-bold text-center ">{skill.name}</h6>
				</div>
			));
		};
		setSkillCards(generateCards());
	}, []);

	return (
		<section
			id="ministries"
			className="bg-slate-50  px-10 ">
			<div className="p-5 bg-slate-50">
				<h4 className="text-2xl lg:text-3xl sm:text-5xl xl:text-3xl font-bold text-center text-red-600">
					Ministries
				</h4>
				<p className="text-zinc-50 dark:text-zinc-400 w-full  font-bold text-center sm:text-left">
					The following is the list of the church ministries.You are welcome
				</p>
			</div>
			<div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1 pb-4">
				{skillCards}
			</div>
		</section>
	);
};

export default Ministries;
