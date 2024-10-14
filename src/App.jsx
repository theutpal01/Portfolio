import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import StarScene from "./components/StarScene";

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
	const scrollTo = (id) => {
		const elem = document.getElementById(id);
		if (elem) {
			elem.scrollIntoView({ behavior: "smooth" });
		}
	};

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 300,
		damping: 60,
		restDelta: 0.1,
	});

	return (
		<>
			<motion.div className="fixed top-0 left-0 right-0 h-2 bg-blue-600 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] origin-[0%]" style={{ scaleX }} />
			<Navbar scrollTo={scrollTo} />
			<Hero scrollTo={scrollTo} />
			<About scrollTo={scrollTo} />
			<Skills />
			<StarScene />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
