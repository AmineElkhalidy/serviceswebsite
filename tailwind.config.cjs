/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Rubik, sans-serif",
    },
    extend: {
      colors: {
        main: "#00112c",
        second: "#38E8B0",
        gray: "#0D3259",
        blue: "#1AAFD0",
        cyan: "#17a2b8",
        teal: "#1AAFD0",
      },
    },
  },
  plugins: [],
};
