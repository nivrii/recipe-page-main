/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      youngSerif: ['"Young Serif"', 'serif'],
      outfit: ['"Outfit"', 'sans-serif'],
  },
    extend: {},
  },
  plugins: [],
}

