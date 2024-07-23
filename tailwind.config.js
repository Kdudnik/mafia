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
        desktop: "1280px",
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
        red: {
          DEFAULT: "#930000",
          light: "#ff0000"
        },
        gray: {
          DEFAULT: "#5e5e5e",
          light: "#7a7a7a",
          dark: "#101010",
        },
        white: {
          DEFAULT: "#d5d5d5",
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
        title: ["Beba", "sans-serif"],
        text: ["Beba", "sans-serif"],
      },
      backgroundImage: {
        "hero-dark": "url(./images/hero/bg-dark.png)",
      },
      height: {
        hero: "calc(100vh - 80px)",
      },
      boxShadow: {
        navbar: "0px 0px 15px 2px rgb(58, 58, 58)",
      },
    },
  },
  plugins: [],
}

