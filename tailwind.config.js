module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        skin: '#f9f9fa',
        lightgreen: '#52bd95',
        dark: '#161F38',
        grayLighter: '#f9f9f9',
      },
    },
  },
  plugins: [require('daisyui')],
}
