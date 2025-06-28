/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  darkMode: "class",
  theme: {

    },
  plugins: [
    require('tailwindcss-animated')
  ],
}

