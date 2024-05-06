/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "primary-color" : "#00A1E0",
        "secondary-color" : "#0D81D6",
        "s-gray" : "#181818"
      },
      fontFamily: {
        'metropolis': 'metropolis',
      }
    },
  },
  plugins: [],
}