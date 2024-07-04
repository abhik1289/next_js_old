module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'primary':"#222f3e",
        'secondary':"#c8d6e5"
      },
      fontFamily:{
        'main': ['Montserrat', 'sans-serif'],
        'logo':['Lilita One', 'cursive'],
        'secondary':['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}