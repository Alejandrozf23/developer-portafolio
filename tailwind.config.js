/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '8x1': '6rem',
        '6x1': '3.75rem',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
    screens: {
      "2xl":{max:"1535px"}, /* => @media (max-width: 1535px) */
      xl: { max: "1279px"}, /* => @media (max-width: 1279px) */
      lg: { max: "1023px"}, /* => @media (max-width: 1023px) */
      md: { max: "767px" }, /* => @media (max-width: 767px) */
      sm: { max: "639px" }, /* => @media (max-width: 639px) */
      xs: { max: "479px" }, /* => @media (max-width: 479px) */
    }
  },
  plugins: [],
}

