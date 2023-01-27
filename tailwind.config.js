/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        firamono: ['Fira Mono', 'monospace']
      },
      screens: {
        full: '1919px'
      }
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')]
};
