/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        landscape_max: {
          raw: '(orientation: landscape) and (max-width: 956px)',
        },
        landscape_max_height_sm: {
          raw: '(orientation: landscape) and (max-height: 432px)',
        },
      },
      colors: {
        white: '#fff',
        white_gray: '#f5f9f7',

        linkedin: '#0077b5',
        twitter: '#1da1f2',
        github: '#333',

        primary_10: '#0d1a26',
        primary_20: '#19334d',
        primary_25: '#145369',
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

        accent_primary: '#c2410c',

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
        home: "url('/assets/images/pages/home/rainbow-vortex.png')",
        home_dark: "url('/assets/images/pages/home/rainbow-vortex-dark.png')",

        contact: "url('/assets/images/pages/contact/bg-contact.png')",
        contact_dark: "url('/assets/images/pages/contact/bg-contact-dark.png')",
      },
      fontFamily: {
        pacifico: ['Pacifico, cursive'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
};
