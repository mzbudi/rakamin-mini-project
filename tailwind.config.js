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
        cardPrimary: "#F7FEFF",
        cardSecondary: "#FFFCF5",
        cardDanger: "#F5B1B7",
        cardSuccess: "#B8DBCA",
        borderPrimary: "#4DB5BC",
        borderSecondary: "#FEEABC",
        borderDanger: "#F5B1B7",
        borderSuccess: "#B8DBCA",
        modalTitle: "#1D1F20",
        modalContent: "#404040",
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
