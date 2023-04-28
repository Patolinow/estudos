/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    colors: {
      'black': '#121214',
      'dark-gray': '#202024',
      'dark-medium-gray': '#29292E',
      'medium-gray': '#323238',
      'gray': '#7C7C8A',
      'light-gray': '#C4C4CC',
      'white': '#fff',
      'dark-green': '#015F43',
      'light-green': '#00875F',
      'red': '#F75A68'
    },
    fontFamily: {
      'sans': ['Roboto','Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

