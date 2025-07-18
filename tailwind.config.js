/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'light-bg': '#E6DCD1',
        'dark-bg': '#1A1A1A',
        'pink-picasso': '#E87A7E',
        'cyan-picasso': '#43C5C3',
        'blue-picasso': '#0D24D6',
        'yellow-picasso': '#F3D03E',
        'red-picasso': '#D92B2B',
        'green-picasso': '#3A643A',
        'brown-picasso': '#8A4E35',
        'orange-picasso': '#E56A38',
        'text-dark': '#1D1A1A',
        'text-light': '#E6DCD1',
        'pink-picasso-dark':   '#BF5C60',
        'cyan-picasso-dark':   '#2F9E9C',
        'blue-picasso-dark':   '#08158F',
        'yellow-picasso-dark': '#B29A2D',
        'red-picasso-dark':    '#941D1D',
        'green-picasso-dark':  '#264326',
        'brown-picasso-dark':  '#613622',
        'orange-picasso-dark': '#B44820',
        /* global border colour  (white @ 60 % opacity) */
        'border-picasso': '#FFFFFF99',
      },
      fontFamily: {
        heading: ['Didot', 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Palatino', 'serif'],
        body: ['Avenir Next', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    }
  },
  plugins: [],
}