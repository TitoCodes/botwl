const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pink: {
        100: "#FEE1C7",
      },
      amber:colors.amber,
      gray:'#2D3142'
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"]
      }
    },
  },
  plugins: [],
};
