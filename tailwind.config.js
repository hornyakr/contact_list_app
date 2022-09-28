/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "21x": "91px",
        "29x": "119px",
        79: "316px",
        91: "364px",
      },
      height: {
        134: "540px",
      },
      borderRadius: {
        "4xl": "1000px",
      },
    },
    fontFamily: { glysa: "Glysa", lexendDeca: "LexendDeca" },
    colors: {
      black: "#000000",
      grey: {
        100: "#141414",
        90: "#191919",
        80: "#1E1E1E",
        70: "#232323",
        60: "#282828",
        50: "#2D2D2D",
        40: "#323232",
        30: "#373737",
        20: "#3C3C3C",
        10: "#414141",
      },
    },
  },
  plugins: [],
};
