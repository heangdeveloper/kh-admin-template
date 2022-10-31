/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 0 5px 0 rgb(25 28 42 / 8%)',
      }
    },
  },
  plugins: [],
}
