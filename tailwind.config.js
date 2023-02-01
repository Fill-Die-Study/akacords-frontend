/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0A0D14'
        }
      }
    }
  }
};
