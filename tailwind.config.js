import daisyui from "daisyui";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			display: ["Orbitron", "Gilroy", "sans-serif"],
		},
		extend: {
			dropShadow: {
				"3xl": "0 35px 20px rgba(116, 127, 254, 0.25)",
				"4xl": [
					"0 35px 35px rgba(0, 0, 0, 0.25)",
					"0 45px 65px rgba(0, 0, 0, 0.15)",
				],
			},
		},
	},
	plugins: [daisyui],
};
