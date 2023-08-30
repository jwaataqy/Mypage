/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}','./index.html'],
  theme: {
    extend: {
      fontFamily:{
        "Quicksand": ["Quicksand",'san-serif']
      },
      backgroundImage:{
        'background': "url('/asset/img/bg.jpg')",
      },
    },
  },
  plugins: [],
}
