/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        background: "#F7F8F9",
        pink: "#E70B897B",
        grayCustom: "#CBCBCB",
        textDark: "#1D2226",
        danger: "#DD4A3D",
        primary: "#6C25FF",
        primaryDark: "#642AF5",
        textLight: "#919191",
        white: "#FFFFFF",
        primaryLight: "#6C25FF4B", // for secondary buttons
      },
    },
  },
  plugins: [],
}

