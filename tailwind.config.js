/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      boxShadow: {
        "3xl": "0px 0px 25px -12px rgba(97,97,97,0.44)",
        "4xl": "0px 0px 5px rgba(97,97,97,0.44)",
      },
    },
  },
  plugins: [],
};
