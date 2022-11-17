/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: "Rubik, sans-serif",
      second: "Bai Jamjuree, sans-serif",
    },
    extend: {
      colors: {
        main: "#00112c",
        second: "#38E8B0",
      },
    },
  },
  plugins: [],
};
