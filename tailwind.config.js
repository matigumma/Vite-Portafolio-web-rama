/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**"],
  theme: {
    extend: {
      colors: {
        'primary': '#020F59',
        'secondary':'#248EA6',
        'dark': '#020A33',
        'ligth':'#C4EAF2',
        'infor':'#57F27E',
        'obscure': '#020307',

      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

}
