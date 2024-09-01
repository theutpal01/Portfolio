import React from "react";
import { LuMenu, LuXSquare } from "react-icons/lu";

export default function Navbar({ scrollTo }) {
	return (
		<div className="drawer drawer-end">
			<input id="drawerNav" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				{/* Navbar */}
				<div className="navbar bg-base-100 fixed z-50 backdrop-blur-sm backdrop-filter bg-opacity-60">
					<div className="navbar-start">
						<a className="btn btn-ghost text-xl font-display">Portfolio</a>
					</div>
					<div className="navbar-end hidden md:flex">
						<div>
							<ul className="menu hidden md:flex menu-horizontal px-1">
								<li onClick={() => scrollTo("hero")}>
									<a>Home</a>
								</li>
								<li onClick={() => scrollTo("about")}>
									<a>About</a>
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
					<div className="navbar-end md:hidden">
						<label
							htmlFor="drawerNav"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost"
						>
							<LuMenu className="text-lg text-primary" />
						</label>
					</div>
				</div>
			</div>
			<div className="drawer-side z-50">
				<ul className="menu bg-base-200 min-h-full w-80 p-4">
					<label
						htmlFor="drawerNav"
						aria-label="close sidebar"
						className="drawer-overlay flex justify-end py-2"
					>
						<LuXSquare className="text-lg text-primary" />
					</label>
					<li onClick={() => scrollTo("hero")} className="border-t-2">
						<a>Home</a>
					</li>
					<li onClick={() => scrollTo("about")}>
						<a>About</a>
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
