import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
	const scrollTo = (id) => {
		const elem = document.getElementById(id);
		if (elem) {
			elem.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<Navbar scrollTo={scrollTo} />
			<Hero scrollTo={scrollTo} />
			<About scrollTo={scrollTo} />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
