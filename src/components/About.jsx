import React from "react";
import { LuArrowRight } from "react-icons/lu";

function About({ scrollTo }) {
	return (
		<div
			id="about"
			className="flex container min-h-screen flex-col justify-around items-center"
		>
			<h2 className="text-3xl font-display text-center">About Me</h2>
			<div className="flex flex-col lg:flex-row justify-center items-center">
				<div className="w-1/2 justify-center flex">
					<img
						className="drop-shadow-3xl hover:-translate-y-5 active:translate-y-5 duration-200"
						src="/me.png"
						alt="Profile"
					/>
				</div>
				<div className="w-1/2">
					<p className="py-6">
						Hi, I'm a developer from India with a strong foundation in C++,
						Python, and JavaScript, I enjoy creating projects that blend
						technology with creativity. My work includes innovative solutions
						like "The God Hand," a gesture recognition program, and "QuiZone," a
						fun learning platform. Currently, I'm expanding my skills in Data
						Structures and Algorithms (DSA) and exploring React. I'm passionate
						about continuous learning and open to new challenges and
						collaborations. Let's connect and create something amazing!
					</p>
					<p className="pb-3 text-lg">
						<span className="text-primary">Name:</span> Utpal
					</p>
					<p className="pb-3 text-lg">
						<span className="text-primary">Email:</span>{" "}
						official.theutpal@gmail.com
					</p>
					<div className="h-0.5 bg-neutral my-3"></div>
					<button
						type="button"
						className="btn btn-outline btn-primary rounded-none max-w-fit"
						onClick={() => scrollTo("contact")}
					>
						Contact me <LuArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default About;
