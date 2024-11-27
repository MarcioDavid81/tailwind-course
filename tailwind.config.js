/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grafik': ['Grafik', 'sans-serif'],
        'grafik-bold': ['Grafik-bold', 'sans-serif'],
      },
      colors: {
        primary: '#2091f9',
        text: '#252b42',
        'secondary-text': '#374754',
        'dark-background': '#252b42'
      },
      }
    },
  plugins: [],
}

