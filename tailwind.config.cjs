/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');



module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['League Spartan', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        //Theme 1
        'main-theme-1': '#3a4764',
        'toggle-keypad-theme-1': '#232c43',
        'screen-theme-1': '#182034',

        //Key
        'key-dark-blue': '#637097',
        'key-shadow-dark-blue': '#404e72',
        'key-red': '#d03f2f',
        'key-shadow-dark-red': '#93261a',
        'key-grayish-orange': '#eae3dc',
        'key-shadow-grayish-orange': '#b4a597',



        //////////////////

        //Theme 2
        'main-theme-2': '#e6e6e6',
        'toggle-keypad-theme-2': '#d1cccc',
        'screen-theme-2': '#ededed',

        //Key
        'key-dark-cyan': '#377f86',
        'key-shadow-dark-cyan': '#1b5f65',
        'key-orange': '#ca5502',
        'key-shadow-dark-orange': '#893901',
        'key-grayish-yellow': '#e5e4e1',
        'key-shadow-dark-grayish-orange': '#a69d91',


        /////////////////

        //Theme 3
        'main-theme-3': '#160628',
        'toggle-keypad-theme-3': '#1d0934',
        'screen-theme-3': '#1d0934',

        //Key
        'key-dark-violet': '#58077d',
        'key-shadow-vivid-magenta': '#bc15f4',
        'key-pure-cyan': '#00e0d1',
        'key-shadow-soft-cyan': '#6cf9f2',
        'key-very-dark-violet': '#341c4f',
        'key-shadow-dark-magenta': '#871c9c',


      },
      textColor: {
        //Theme 1
        'grayish-blue': '#444b5a',


        //Theme 2
        'dark-grayish-yellow': '#35352c',


        //Theme 3
        'light-yellow': '#ffe53d',
        'dark-blue': '#1b2428',

      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['label-checked']
    }
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => {
            const eClassName = e(`label-checked${separator}${className}`); // escape class
            const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
            return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
          }
        )
      })
    }),
  ],
}