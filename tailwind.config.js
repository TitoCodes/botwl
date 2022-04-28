const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"]
      },
      colors: {
        pink: {
          100: "#FEE1C7",
          200:"#F393BB"
        },
        green:{
          400:"#64D6C4"
        },
        amber:colors.amber,
        gray:'#2D3142'
      }
    },
  },
  plugins: [],
};
