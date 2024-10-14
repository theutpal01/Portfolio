import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
	LuLinkedin,
	LuGithub,
	LuInstagram,
	LuTwitter,
	LuYoutube,
	LuLoader,
} from "react-icons/lu";

function Contact() {
	const formRef = useRef(); // Create a reference for the form
	const submitRef = useRef(); // Create a reference for the submit button
	let [submit, setSubmit] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault(); // Prevent the default form submission

		if (!submit) {
			submitRef.current.children[0].classList.remove("hidden");
			setSubmit(true);

			emailjs
				.sendForm(
					import.meta.env.VITE_SERVICE_ID,
					import.meta.env.VITE_TEMPLATE_ID,
					formRef.current,
					import.meta.env.VITE_EMAIL_JS_KEY
				)
				.then(
					(result) => {
						console.log(result.text);
						alert("Message sent successfully!"); // Optional success alert
						setSubmit(false);
						submitRef.current.children[0].classList.add("hidden");
					},
					(error) => {
						console.log(error.text);
						alert("Error sending message!"); // Optional error alert
						setSubmit(false);
						submitRef.current.children[0].classList.add("hidden");
					}
				);
		}
	};

	return (
		<div id="contact" className="min-h-screen flex bg-base-300/45 w-full">
			<div className="hidden w-2/5 md:flex flex-col justify-center items-center">
				<h2 className="text-2xl my-4 font-display">Let's connect</h2>
				<div className="flex flex-col gap-3 justify-start">
					{/* Social Media Links */}
					<div className="flex items-center gap-3 ">
						<a
							href="https://www.linkedin.com/in/utpal-493b1030b/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn hover:rounded-none btn-circle btn-primary btn-outline"
						>
							<LuLinkedin className="text-lg" />
						</a>
						<p>LinkedIn</p>
					</div>
					<div className="flex items-center gap-3">
						<a
							href="https://www.github.com/theutpal01"
							target="_blank"
							rel="noopener noreferrer"
							className="btn hover:rounded-none btn-circle btn-primary btn-outline"
						>
							<LuGithub className="text-lg" />
						</a>
						<p>Github</p>
					</div>
					<div className="flex items-center gap-3">
						<a
							href="https://www.instagram.com/theutpal01/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn hover:rounded-none btn-circle btn-primary btn-outline"
						>
							<LuInstagram className="text-lg" />
						</a>
						<p>Instagram</p>
					</div>
					<div className="flex items-center gap-3">
						<a
							href="https://x.com/theutpal01"
							target="_blank"
							rel="noopener noreferrer"
							className="btn hover:rounded-none btn-circle btn-primary btn-outline"
						>
							<LuTwitter className="text-lg" />
						</a>
						<p>Twitter</p>
					</div>
					<div className="flex items-center gap-3">
						<a
							href="https://www.youtube.com/@coodesurf"
							target="_blank"
							rel="noopener noreferrer"
							className="btn hover:rounded-none btn-circle btn-primary btn-outline"
						>
							<LuYoutube className="text-lg" />
						</a>
						<p>Youtube</p>
					</div>
				</div>
			</div>
			<div className="w-full sm:w-9/12 md:w-4/5 flex flex-col self-center m-auto gap-5 p-5 md:px-16 lg:px-32 xl:px-44 justify-center items-center">
				<h2 className="text-2xl align-top w-full font-display">
					Send me a message
				</h2>
				<form
					ref={formRef}
					className="flex flex-col gap-4 w-full z-10"
					onSubmit={sendEmail}
					autoComplete="off"
				>
					<div className="flex gap-3 w-full">
						<input
							type="text"
							name="user_name" // This must match your template's variable name
							placeholder="Name"
							className="input input-bordered rounded-none w-1/2"
							required
						/>

						<input
							type="email"
							name="user_email" // This must match your template's variable name
							placeholder="Email Address"
							className="input input-bordered rounded-none w-1/2"
							required
							/>
					</div>

					<textarea
						name="message" // This must match your template's variable name
						placeholder="Type your Message..."
						className="textarea textarea-bordered rounded-none w-full min-h-60"
						required
					/>
					<button
						ref={submitRef}
						className="btn btn-primary rounded-none font-display px-6 max-w-fit"
					>
						<span class="hidden loading loading-spinner" />
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
