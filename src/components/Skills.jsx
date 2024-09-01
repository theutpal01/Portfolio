import React from "react";
import Spline from "@splinetool/react-spline";
import Skill from "./Skill";

function Skills() {
	return (
		<div id="skills" className="min-h-screen w-full bg-base-200 flex flex-col justify-evenly items-center">
			{/* <Spline scene="https://prod.spline.design/x6cqrG0hlvvpH4KM/scene.splinecode" className="min-w-full min-h-full absolute -z-10 bg-primary-content"/> */}
			<h2 className="text-4xl font-display">My Skills</h2>
			<div className="flex flex-col gap-4 md:flex-row justify-around w-4/5">
				<div className="flex flex-col gap-4 lg:w-1/2">
					<Skill name="HTML" rating={6} maxRating={10} />
					<Skill name="CSS" rating={8} maxRating={10} />
					<Skill name="JS" rating={7} maxRating={10} />
				</div>
				<div className="flex flex-col gap-4 lg:w-1/2">
					<Skill name="MongoDB" rating={5} maxRating={10} />
					<Skill name="C++" rating={7} maxRating={10} />
					<Skill name="PYTHON" rating={9} maxRating={10} />
				</div>
			</div>
		</div>
	);
}

export default Skills;
