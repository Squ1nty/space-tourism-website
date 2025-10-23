/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './starter-code/html/*.html',
    './starter-code/js/main.js',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'customTabletHeader': '90px 1fr',
      },
      gridTemplateRows: {
        'customMobileMainRows': 'fit-content(1000px), auto',
      },
    },
  },
  plugins: [],
}

