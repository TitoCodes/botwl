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
      fontSize:{
        '3xl':[
          '1.9rem'
        ]
      },
      colors: {
        pink: {
          100: "#FEE1C7",
          200:"#F393BB"
        },
        green:{
          200:"#7ADCCD",
          400:"#64D6C4"
        },
        indigo:{
          100:"#9E59BD"
        },
        amber:colors.amber,
        gray:'#2D3142'
      }
    },
  },
  plugins: [],
};
