module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'headline': ['Cinzel', 'serif'],
        'body': ['Questrial', 'sans-serif'],
        'sans': ['Questrial', 'sans-serif'],
        'serif': ['Cinzel', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
