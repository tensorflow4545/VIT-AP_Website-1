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
        sm: "640px",
        ls: "880px",
        lx: "1220px",
        md: "1224px",
        lg: "1280px",
        xl: "1440px",
        xxl: "1536px",
        "2xl": "1920px",
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
