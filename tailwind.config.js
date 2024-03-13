// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        colors: {
            "yellow": "#FFDE00",
            "gray": "#333333",
            "orange": "#EC7B13",
            "white": "#FFFFFF",
            "blue": {
                "100": "#0091CF",
                "200": "#1E539F",
                "300": "#002626"
            },
            "green": {
                "200": "#77B255",
                "200": "#197E23",
            },
            "red": {
                "100": "#FF1D1D"
            },
            "black": "#000000"
        },
        extend: {},
        fontFamily: {
            base: ["Baloo Thambi 2 Arial", "sans-serif"]
        }
    },
    darkMode: "class",
    plugins: [nextui()]
}