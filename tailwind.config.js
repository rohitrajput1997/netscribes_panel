module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interBold: ["Inter-Bold"],
        interSemiBold: ["Inter-SemiBold"],
        interRegular: ["Inter-Regular"],
        interMedium: ["Inter-Medium"],
      },
    },
  },
  plugins: [],
  purge: false,
};
