/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'young': ['Young Serif', 'serif'],
      },
      colors: {
        roseWhite: 'hsl(330, 100%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        eggshell: 'hsl(30, 54%, 90%)',
        lightGrey: 'hsl(30, 18%, 87%)',
        wengeBrown: 'hsl(30, 10%, 34%)',
        darkCharcoal: 'hsl(24, 5%, 18%)',
        nutmeg: 'hsl(14, 45%, 36%)',
        darkRaspberry: 'hsl(332, 51%, 32%)'
      },
      screens:{
        sm : 375,
        md: 768,
        lg: 1440,
        xl: 1920
      }
    },
  },
  plugins: [],
}

