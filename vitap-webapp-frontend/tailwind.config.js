/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        // libre: "'Libre Baskerville', serif",
        Emilio: "'Emilio Test', serif",
        Montserrat: "'Montserrat', sans-serif",
        Inter: "'Inter', sans-serif",
      },
      screens: {
        sm: "20px",
        ls: "640px",
        lx: "920px",
        md: "1220px",
        lg: "1224px",
        xl: "1280px",
        xxl: "1440px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#650010", // maroon
        backgroundRed: "rgba(92, 14, 20, 0.20)",
        secondary: "#1B1C1E",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar"),
    function ({ addBase, addUtilities }) {
      addUtilities({
        ".section:hover > h3": {
          color: "#5C0E14",
        },
      });
    },
  ],
});
