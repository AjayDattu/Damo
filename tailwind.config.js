/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F9F8F6",
          darkBg: "#0A0A0A",
          secondary: "#EFE9E3",
          darkSecondary: "#1A1A1A",
          text: "#000000",
          darkText: "#F9F8F6",
        },
      },
    },
  },
  plugins: [],
};

