import React from "react";

function Skill({ name, rating, maxRating }) {
	const elements = [];
	for (let i = 1; i <= maxRating; ++i) {
		elements.push(
			<input
			key={i}
				type="radio"
				className={`mask mask-circle cursor-default ${i <= rating ? "bg-primary" : "bg-neutral"}`}
				disabled
			/>
		);
	}
	return (
		<div className="flex gap-3 items-center justify-between w-full">
			<p className="text-lg pr-5 w-1/5">{name}</p>
			<div className="rating flex gap-2 w-3/5">
				{elements}
			</div>
		</div>
	);
}

export default Skill;
