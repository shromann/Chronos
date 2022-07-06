/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    colors: {
      white: "#fff",
      gray: {
        100: "#F7F7F7",
        200: "#E8E8E8",
        300: "#D9D9D9",
        400: "#A7A7A7",
        500: "#4B4B4B",
      },
    },
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
