// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.{html}', './src/**/*.{vue,js,ts,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      iphoneX: { 'max': '500px' },
    },

    extend: {},
  },
  plugins: [],
}