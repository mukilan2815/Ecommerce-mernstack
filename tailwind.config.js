/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logoblue: "#1BDDDE", // Add your custom color code here
        logodarkblue: "#092ED8",
        logopurple: "#7902FB",
      },
    },
  },
  plugins: [],
};
