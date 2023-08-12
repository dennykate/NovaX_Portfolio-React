/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        "peal-blue": "#F2F6FB",
        "light-dark-blue": "#E1F0FF",
        "golden-yellow": "#FBC108",
        "dark-blue": "#082E53",
      },
    },
  },
  plugins: [],
};
