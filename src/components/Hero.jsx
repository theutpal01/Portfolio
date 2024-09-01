import React from "react";
import Spline from "@splinetool/react-spline";
import {
	LuLinkedin,
	LuGithub,
	LuInstagram,
	LuTwitter,
	LuYoutube,
	LuUser,
} from "react-icons/lu";

function Hero({ scrollTo }) {
	return (
		<div id="hero" className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse h-full">
				<Spline
					className="absolute -z-10 w-full opacity-40 hidden lg:block"
					scene="https://prod.spline.design/qvt0s5J7Ww0XyKGX/scene.splinecode"
				/>
				<Spline className="absolute -z-10 w-full opacity-40 lg:hidden" scene="https://prod.spline.design/x6cqrG0hlvvpH4KM/scene.splinecode" />
				<div className="flex justify-center items-start h-full flex-col">
					<h2 className="py-2 text-3xl font-bold font-display">Hi, Its me</h2>
					<h1 className="py-2 text-6xl font-bold font-display">Utpal</h1>
					<h2 className="py-2 text-4xl font-bold font-display">
						And I'm a <span className="text-primary">Frontend Developer</span>
					</h2>
					<p className="py-6">
						Aspiring computer science student at VIT, Vellore with a strong
						foundation in academic excellence and a passion for technology.
						Seeking to leverage skills and education in a dynamic environment to
						contribute to projects and further develop technical expertise.
					</p>
					<div className="flex gap-2 my-5">
						<a
							href="https://www.linkedin.com/in/utpal-493b1030b/"
							target="_blank"
							className="btn btn-circle btn-primary btn-outline"
						>
							<LuLinkedin className="text-lg" />
						</a>
						<a
							href="https://www.github.com/theutpal01"
							target="_blank"
							className="btn btn-circle btn-primary btn-outline"
						>
							<LuGithub className="text-lg" />
						</a>
						<a
							href="https://www.instagram.com/theutpal01/"
							target="_blank"
							className="btn btn-circle btn-primary btn-outline"
						>
							<LuInstagram className="text-lg" />
						</a>
						<a
							href="https://x.com/theutpal01"
							target="_blank"
							className="btn btn-circle btn-primary btn-outline"
						>
							<LuTwitter className="text-lg" />
						</a>
						<a
							href="https://www.youtube.com/@coodesurf"
							target="_blank"
							className="btn btn-circle btn-primary btn-outline"
						>
							<LuYoutube className="text-lg" />
						</a>
					</div>

					<button
						className="btn btn-primary rounded-none px-6 font-display shadow-md shadow-primary font-extrabold"
						onClick={() => scrollTo("about")}
					>
						<LuUser className="text-lg mr-2" />
						Know more
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
