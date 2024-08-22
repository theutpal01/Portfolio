import React from "react";

export default function Navbar({ scrollTo }) {
	return (
		<div className="navbar bg-base-100 fixed justify-around z-50 backdrop-blur-sm backdrop-filter bg-opacity-60">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl font-display">Portfolio</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a onClick={() => scrollTo("hero")}>Home</a>
					</li>
					<li onClick={() => scrollTo("about")}>
						<a>About Me</a>
					</li>
					<li onClick={() => scrollTo("skills")}>
						<a>Skills</a>
					</li>
					<li onClick={() => scrollTo("projects")}>
						<a>Projects</a>
					</li>
					<li onClick={() => scrollTo("contact")}>
						<a>Conatct</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
