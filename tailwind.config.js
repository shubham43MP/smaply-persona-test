/** @type {import('tailwindcss').Config} */

const COLORS = [
  'darkblue',
  'greenishwhite',
  'colorc',
  'colord',
  'colorf',
  'colorg',
  'colorh',
  'colori',
  'colorj',
  'colorl',
  'coloram',
  'greenish',
  'brandpurple'
  ];

export default {
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // Map over the labels and add them to the safelist
    safelist: [
      ...COLORS.map((color) => `bg-${color}`)
    ],
  },
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
        'darkblue': '#3C5DDD',
        'darkestblue': '#001B49',
        'greenishwhite' : '#228EFF',
        'colorc' : '#214236',
        'colord' : '#76C86D',
        'colorf' : '#FBDB5A',
        'colorg' : '#F0A711',
        'colorh' : '#E8867A',
        'colori' : '#E24B42',
        'colorj' : '#CF4012',
        'colorl' : '#052A6E',
        'coloram' : '#94F6EC'
      },
      height: {
        '17': '68px',
        '75': '300px',
        '57': '230px'
      },
      width: {
        '17': '68px',
        '75': '300px',
        '82': '332px',
        '121': '664px'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
};