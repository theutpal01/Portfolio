import React from "react";

function Skill({ name, rating, maxRating }) {
	const elements = [];
	for (let i = 1; i <= maxRating; ++i) {
		elements.push(
			<input
				type="radio"
				className={`mask mask-circle cursor-default ${i <= rating ? "bg-primary" : "bg-neutral"}`}
				disabled
			/>
		);
	}
	return (
		<div className="flex gap-3 items-center justify-between">
			<p className="text-lg pr-5">{name}</p>
			<div className="rating flex gap-2">
				{elements}
			</div>
		</div>
	);
}

export default Skill;
