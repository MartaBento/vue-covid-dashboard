module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'cloud-burst': {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e0e9f2',
          '300': '#c4d5e8',
          '400': '#80a2cc',
          '500': '#4471ab',
          '600': '#32537e',
          '700': '#243c5a',
          '800': '#192940',
          '900': '#101929',
        }
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      'sans': ['Montserrat', 'Sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}