/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
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
          light: "#a51515"
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
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        text: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(./images/hero/hero-bg.png)",
      },
      height: {
        hero: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
}

