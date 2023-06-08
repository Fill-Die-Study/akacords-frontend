/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // frontend module-page
    './components/**/*.{js,ts,jsx,tsx}', // frontend module-component
    './src/components/**/*.{js,ts,jsx,tsx}', // ui module-component (for storybook)
    '../../node_modules/@akacords-frontend/ui/dist/**/*.{js,ts,jsx,tsx}' // ui library
  ],
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
