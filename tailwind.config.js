/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/**/app/**/*.{js,ts,jsx,tsx}', './packages/**/components/**/*.{js,ts,jsx,tsx}'],
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')]
};
