/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#020F59',
        'secondary':'#248EA6',
        'dark': '#020A33',
        'ligth':'#C4EAF2',
        'info':'#57F27E',

      },
    },
  },
  plugins: [require("daisyui")],
}
