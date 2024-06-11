/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#769FCD',
        secondary: '#B9D7EA',
        cream: '#F7FBFC',
        cold: '#D6E6F2'
      }
    },
  },
  plugins: [],
}

