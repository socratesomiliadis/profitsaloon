/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js,tsx}', './components/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        AcidGrotesk: ['AcidGrotesk', 'sans-serif']
      }
    }
  },
  plugins: []
};
