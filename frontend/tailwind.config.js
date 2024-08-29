/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			animation: {
				floating: "floating 3s ease-in-out infinite",
			},
			keyframes: {
				floating: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
