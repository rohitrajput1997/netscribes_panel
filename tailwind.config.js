module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MontBold: ["Montserrat-Bold"],
        MontSemiBold: ["Montserrat-SemiBold"],
        MontRegular: ["Montserrat-Regular"],
        MontMedium: ["Montserrat-Medium"],
      },
    },
  },
  plugins: [],
  purge: false,
};
