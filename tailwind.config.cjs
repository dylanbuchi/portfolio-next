/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#e5e7eb',
        whiter: '#fff',

        grey: '#d1d5db',
        greyDark: '#1f2937',
        greyDarker: '#111827',

        primary_10: '#0d1a26',
        primary_20: '#19334d',
        primary_30: '#264d73',
        primary_40: '#336699',
        primary_50: '#4080bf',
        primary_60: '#679bcb',
        primary_70: '#8db4d8',
        primary_80: '#b3cde5',
        primary_90: '#d9e6f2',

        accent_10: '#124544',
        accent_20: '#1b655e',
        accent_30: '#2a9187',
        accent_40: '#3caea3',
        accent_50: '#6ed7d3',
        accent_60: '#a8eeeb',
        accent_70: '#e7fffe',

        gray_10: '#1a1a1a',
        gray_20: '#333333',
        gray_30: '#4d4d4d',
        gray_40: '#666666',
        gray_50: '#808080',
        gray_60: '#999999',
        gray_70: '#bfbfbf',
        gray_80: '#cccccc',
        gray_90: '#e6e6e6',
      },

      backgroundImage: {
        page404: "url('/assets/images/pages/404/404-background.jpg')",
      },
      fontFamily: {
        pacifico: ['Pacifico, cursive'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
