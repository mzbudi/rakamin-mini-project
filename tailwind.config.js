/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01959F",
        secondary: "#FA9810",
        danger: "#E11428",
        success: "#43936C",
        borderPrimary: "#4DB5BC",
        borderSecondary: "#FEEABC",
        borderDanger: "#F5B1B7",
        borderSuccess: "#B8DBCA",
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
