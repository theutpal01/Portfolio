import React from "react";
import Skill from "./Skill";

function Skills() {
	return (
		<div id="skills" className="min-h-screen flex flex-col bg-base-100 justify-evenly items-center">
			<h2 className="text-4xl">My Skills</h2>
			<div className="flex flex-col lg:flex-row justify-around w-4/5">
				<div className="flex flex-col gap-8 w-1/3">
					<Skill name="HTML" rating={6} maxRating={10} />
					<Skill name="CSS" rating={8} maxRating={10} />
					<Skill name="JS" rating={7} maxRating={10} />
				</div>
				<div className="flex flex-col gap-8 w-1/3">
					<Skill name="MongoDB" rating={5} maxRating={10} />
					<Skill name="C++" rating={7} maxRating={10} />
					<Skill name="PYTHON" rating={9} maxRating={10} />
				</div>
			</div>
		</div>
	);
}

export default Skills;
