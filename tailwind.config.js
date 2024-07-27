/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluish': '#222ADD',
        'lightgray': '#555555',
        'darkcream': '#DED7D5',
        'lightcream': '#FBF9F8'
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
});