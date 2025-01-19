/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      "hebbo":["Heebo", "serif"],
      "inter":["Inter", "serif"],
    },
    extend: {
      boxShadow: {
        custom: '0 0 30px rgba(0, 0, 0, 0.08)',
      },
      lineHeight: {
        "leading": "1.2",
      },
      borderRadius: {
        md:"5px"
      },
      container: {
        center: true,
        padding: '12px',
        screens: {
          'lg': '1366px',
        },
      },
      colors: {
        primary: "#00B98E",
        accent: "#0E2E50",
        text: "#666565",
        // text: "#EFFDF5",

      }
    },
  },
  plugins: [],
}

