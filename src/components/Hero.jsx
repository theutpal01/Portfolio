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
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="w-full h-full">
					<Spline
						className="bg-primary-content"
						scene="https://prod.spline.design/8-mPD7Bcujxig2P4/scene.splinecode"
					/>
				</div>
				<div>
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
						<button className="btn btn-circle btn-primary btn-outline">
							<LuLinkedin className="text-lg" />
						</button>
						<button className="btn btn-circle btn-primary btn-outline">
							<LuGithub className="text-lg" />
						</button>
						<button className="btn btn-circle btn-primary btn-outline">
							<LuInstagram className="text-lg" />
						</button>
						<button className="btn btn-circle btn-primary btn-outline">
							<LuTwitter className="text-lg" />
						</button>
						<button className="btn btn-circle btn-primary btn-outline">
							<LuYoutube className="text-lg" />
						</button>
					</div>

					<button
						className="btn btn-primary rounded-none px-6 shadow-lg font-display"
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
