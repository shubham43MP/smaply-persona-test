/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // 'sans': ['Inter']
    },
    extend: {
      colors: {
        'bluish': '#222ADD',
        'lightgray': '#555555',
        'darkcream': '#DED7D5',
        'lightcream': '#FBF9F8',
        'textblack': '#1C1C1C',
        'greenish': '#E6F29A',
        'brandpurple': '#AB63CF',
        'darkblue': '#3C5DDD'
      },
      height: {
        '17': '68px',
        '75': '300px'
      },
      width: {
        '17': '68px',
        '75': '300px'
      }
    },
  },
  // variants: {
  //   fill: ['hover', 'focus'],
  // },
  plugins: [],
};