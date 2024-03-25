/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/*.{js,vue,ts}',
    './layouts/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#662367',
        secondary: '#FED4FF',
      },
      height: {
        'screen-header': 'calc(100vh - 96px)',
      },
      minHeight: {
        'screen-header': 'calc(100vh - 96px)',
      },
      backgroundImage: {
        buble: "url('/images/bg.png')",
      },
      gridTemplateColumns: {
        footer: '200px 1fr 200px',
      },
    },
  },
  plugins: [],
};
