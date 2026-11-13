/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        script: ['"Mrs Saint Delafield"', "cursive"],
      },
      colors: {
        ink: "#080808",
        mute: "#696969",
        soft: "#F5F5F5",
        peach: "#FFE9D9",
        amber: "#FFB646",
        orange: "#FF9A2E",
      },
      maxWidth: { site: "1270px" },
    },
  },
  plugins: [],
};
