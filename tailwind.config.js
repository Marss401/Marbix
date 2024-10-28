/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: "#1f1f1f",
        minor: "#6e6e6d",
        backdrop: "#f3e9e0",
        light: "#faf8f4",
        darkred: "#150004",
        burnt: "#78261a",
        orange: "#fff1e0",
        ivory: "#e6964c",
        newcolor: "#b45e3f",
      }
    },
  },
  plugins: [],
}