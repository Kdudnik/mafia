/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        desktop: "1500px",
      },
      padding: {
        DEFAULT: "1.25rem",
      },
    },
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#b98f21",
          light: "#d0a830"
        },
        gray: {
          DEFAULT: "#5e5e5e",
          light: "#7a7a7a",
          "semi-dark": "#373737",
          dark: "#101010",
        },
        white: {
          DEFAULT: "#ffffff",
          dark: "#d5d5d5"
        }
      },
      fontSize: {
        "title-h1": [
          "var(--font-size-title-h1)",
          {
            lineHeight: "var(--line-height-title-h1)",
            letterSpacing: "var(--letter-spacing-title-h1)",
            fontWeight: "var(--font-weight-title-h1)",
          },
        ],
        "title-h2": [
          "var(--font-size-title-h2)",
          {
            lineHeight: "var(--line-height-title-h2)",
            letterSpacing: "var(--letter-spacing-title-h2)",
            fontWeight: "var(--font-weight-title-h2)",
          },
        ],
        "title-h3": [
          "var(--font-size-title-h3)",
          {
            lineHeight: "var(--line-height-title-h3)",
            letterSpacing: "var(--letter-spacing-title-h3)",
            fontWeight: "var(--font-weight-title-h3)",
          },
        ],
        "title-h4": [
          "var(--font-size-title-h4)",
          {
            lineHeight: "var(--line-height-title-h4)",
            letterSpacing: "var(--letter-spacing-title-h4)",
            fontWeight: "var(--font-weight-title-h4)",
          },
        ],
      },
      fontFamily: {
        title: ["The Godfather", "sans-serif"],
        text: ["Onest", "sans-serif"],
      },
      backgroundPosition: {
        "pos-dark": "0 20%",
        "pos-light": "0 40%",
      },
      backgroundImage: {
        "dark": "url(/images/hero/bg-dark.jpg)",
        "light": "url(/images/hero/bg-white.jpg)",
      },
      height: {
        hero: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

