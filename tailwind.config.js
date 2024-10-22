/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'library-hall': "url('/public/images/clean-empty-library-hall.jpg')",
      }
    },
  },
  plugins: [],
}

