/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px',
      'xl': '1920px',
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        young: ["Young Serif", "serif"],
      },
      colors: {
        roseWhite: "hsl(330, 100%, 98%)",
        white: "hsl(0, 0%, 100%)",
        eggshell: "hsl(30, 54%, 90%)",
        lightGrey: "hsl(30, 18%, 87%)",
        wengeBrown: "hsl(30, 10%, 34%)",
        darkCharcoal: "hsl(24, 5%, 18%)",
        nutmeg: "hsl(14, 45%, 36%)",
        nutmegLight: "hsl(14, 90%, 31%)",
        darkRaspberry: "hsl(332, 51%, 32%)",
      },
    },
  },
  plugins: [],
};
