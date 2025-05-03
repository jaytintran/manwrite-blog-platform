/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ["Orbitron", "sans-serif"],
				monserat: ["Montserrat", "sans-serif"],
			},
			colors: {
				dark: "#101313",
				primary: "#fdf0d5",
				secondary: "#9ada23",
				tertiary: "#003049",
				sand: "#30a591",

				light1: "#fdf0d5",
				light2: "#669bbc",
			},
		},
	},
	plugins: [],
};
