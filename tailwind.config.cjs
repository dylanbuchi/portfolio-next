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
        white: '#fff',
        white_gray: '#f5f9f7',

        primary_10: '#0d1a26',
        primary_20: '#19334d',
        primary_30: '#264d73',
        primary_40: '#336699',
        primary_50: '#4080bf',
        primary_60: '#679bcb',
        primary_70: '#8db4d8',
        primary_80: '#b3cde5',
        primary_90: '#c5d6e5',

        accent_10: '#fb8500',
        accent_20: '#ffb703',
        accent_30: '#ff751a',
        accent_40: '#ff8533',
        accent_50: '#ff944d',
        accent_80: '#f8f5e5',
        accent_90: '#fdfae7',

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
        home: "url('/assets/images/rainbow-vortex.png')",
        home_dark: "url('/assets/images/rainbow-vortex-dark.png')",
      },
      fontFamily: {
        pacifico: ['Pacifico, cursive'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
