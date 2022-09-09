/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#e5e7eb',
        whiter: '#fff',

        gray: '#d1d5db',
        grayDark: '#1f2937',
        grayDarker: '#111827',
      },

      backgroundImage: {
        'page-404': "url('/src/assets/images/pages/404/404-background.jpg')",
      },
      fontFamily: {
        pacifico: ['Pacifico, cursive'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
