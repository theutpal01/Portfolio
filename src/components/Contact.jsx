import React from "react";
import {
	LuLinkedin,
	LuGithub,
	LuInstagram,
	LuTwitter,
	LuYoutube,
	LuPhoneCall,
} from "react-icons/lu";

function Contact() {
	return (
		<div id="contact" className="min-h-screen flex bg-base-300">
			<div className="hidden w-2/5 md:flex flex-col justify-center items-center">
				<h2 className="text-2xl my-4 font-display">Let's connect</h2>
				<div className="flex flex-col gap-3 justify-start">
					<div className="flex items-center gap-3 ">
						<button className="btn hover:rounded-none btn-circle btn-primary btn-outline">
							<LuLinkedin className="text-lg" />
						</button>
						<p>LinkedIn</p>
					</div>
					<div className="flex items-center gap-3">
						<button className="btn hover:rounded-none btn-circle btn-primary btn-outline">
							<LuGithub className="text-lg" />
						</button>
						<p>Github</p>
					</div>
					<div className="flex items-center gap-3">
						<button className="btn hover:rounded-none btn-circle btn-primary btn-outline">
							<LuInstagram className="text-lg" />
						</button>
						<p>Instagram</p>
					</div>
					<div className="flex items-center gap-3">
						<button className="btn hover:rounded-none btn-circle btn-primary btn-outline">
							<LuTwitter className="text-lg" />
						</button>
						<p>Twitter</p>
					</div>
					<div className="flex items-center gap-3">
						<button className="btn hover:rounded-none btn-circle btn-primary btn-outline">
							<LuYoutube className="text-lg" />
						</button>
						<p>Youtube</p>
					</div>
				</div>
			</div>
			<div className="w-full md:w-4/5 flex flex-col gap-5 p-3 justify-center items-center">
				<h2 className="text-2xl align-top w-2/3 font-display">Send me a message</h2>
				<form className="flex flex-col gap-4 w-2/3">
					<div className="flex gap-3 w-full">
						<input
							type="text"
							placeholder="Name"
							className="input input-bordered rounded-none w-1/2"
						/>

						<input
							type="email"
							placeholder="Email Address"
							className="input input-bordered rounded-none w-1/2"
						/>
					</div>

					<textarea
						placeholder="Type your Message..."
						className="textarea textarea-bordered rounded-none w-full min-h-60"
					/>
					<button className="btn btn-primary rounded-none font-display px-6 max-w-fit">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
