/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ["Orbitron", "sans-serif"],
			},
			colors: {
				primary: "#780000",
				secondary: "#c1121f",
				tertiary: "#003049",

				textPrimary: "#fdf0d5",
				textSecondary: "#669bbc",
			},
		},
	},
	plugins: [],
};
