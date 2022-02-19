const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				chathams: {
					DEFAULT: "#15487F",
					50: "#66A3E6",
					100: "#5499E3",
					200: "#3184DD",
					300: "#2170C5",
					400: "#1B5CA2",
					500: "#15487F",
					600: "#0D2D4F",
					700: "#05111F",
					800: "#000000",
					900: "#000000",
				},
			},
			fontFamily: {
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
