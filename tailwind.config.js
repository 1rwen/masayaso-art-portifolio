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

      fontSize: {
        xxs: "0.6rem", // 10px
      },
      screens: {
        sm: "640px",
        md: "768px", // Medium devices (≥768px)
        lg: "1024px", // Large devices (≥1024px)
        xl: "1280px", // Extra large devices (≥1280px)
      },
    },
  },
  plugins: [],
};
