import React from "react";
import Spline from "@splinetool/react-spline";
import Skill from "./Skill";

function Skills() {
	return (
		<div id="skills" className="min-h-screen w-full bg-base-200/45 flex flex-col justify-evenly items-center">
			<h2 className="text-4xl font-display">My Skills</h2>
			<div className="flex item flex-col gap-4 md:flex-row justify-around w-11/12 ">
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
