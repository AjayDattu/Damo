/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F9F8F6",
          secondary: "#EFE9E3",
          text: "#000000",
        },
      },
    },
  },
  plugins: [],
};
