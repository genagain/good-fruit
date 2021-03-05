const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        logo: ['"Crete Round"', "sans-serif"]
      },
      gridTemplateRows: {
        'layout': 'auto minmax(900px, 1fr) auto',
      },
      colors: {
        blue: {
          dark: "#1F4D82",
          DEFAULT: "#235895"
        },
        orange: {
          DEFAULT: "#FF6B35"
        }
      },
      width: {
        'fit-content': 'fit-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
