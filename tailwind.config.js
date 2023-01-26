/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js,tsx}', './components/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        AcidGrotesk: ['AcidGrotesk', 'sans-serif']
      },
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(var(--conic-position), var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
