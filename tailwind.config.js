/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Dela Gothic One", "sans-serif"],
        bodyFont: ["DM Sans", "sans-serif"],
        navFont: ["Inter", "sans-serif"],
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
