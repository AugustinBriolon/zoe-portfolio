/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/*.{js,vue,ts}',
    './layouts/*.vue',
    './pages/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      height: {
        'screen-header': 'calc(100vh - 65px)',
      },
      backgroundImage: {
        buble: "url('/images/bg.png')",
      },
    },
  },
  plugins: [],
};
