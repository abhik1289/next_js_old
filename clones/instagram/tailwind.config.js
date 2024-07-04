module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Montserrat", 'sans-serif']
      },
      screens: {
        'sm': {'max':'540px'},
        // => @media (min-width: 640px) { ... }
        'md': {'max':'720px'},
        // => @media (min-width: 768px) { ... }
        'lg': {'max':'960px'},
        // => @media (min-width: 1024px) { ... }
        'xl': {'max':'1140px'},
        // => @media (min-width: 1280px) { ... }
        '2xl': {'max':'1536px'},
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}