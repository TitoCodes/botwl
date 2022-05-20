const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "667px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      fontSize: {
        "2xs": ["8px"],
        "3xs": ["5px"],
        "3xl": ["1.9rem"],
      },
      colors: {
        pink: {
          100: "#FEE1C7",
          200: "#F393BB",
        },
        blue:{
          100:"#1877F2",
          200:"#1D9BF0"
        },
        green: {
          200: "#7ADCCD",
          400: "#64D6C4",
        },
        indigo: {
          100: "#9E59BD",
          200:"#404EED"
        },
        red: {
          100: "#FF2E2E",
          200: "#FF424D",
          300:"#E84F33",
          400:"#FF0000"
        },
        yellow: {
          100: "#FFDD00",
        },
        amber: colors.amber,
        gray: "#2D3142",
      },
    },
  },
  plugins: [],
};
