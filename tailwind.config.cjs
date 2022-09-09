/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
