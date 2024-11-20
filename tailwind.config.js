/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#052e24",
        lime: "#e8ffad",
        textGray: "#3a3a3c",
        mainGreen: "#013010"
      }
    }
  },
  plugins: [],
}