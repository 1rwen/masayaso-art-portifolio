/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalBlue: "#162741",
        blueGray: "#485E7B",
        babyBlue: "#F3F7F9",
      },
    },
  },
  plugins: [],
};
