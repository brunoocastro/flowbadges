const { url } = require('inspector')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: `url('/assets/fbPattern.svg')`
      },
      backgroundSize: {
        50: '50%',
        16: '4rem'
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        cursive: ['Lobster', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b'
        },
        base: {
          gray: '#131C25',
          yellow: {
            400: '#FFDA80',
            700: '#FFB709'
          },
          white: '#FBFBFB',
          black: '#0B0A0A',
          brown: {
            400: '#805C04',
            700: '#332502'
          }
        },
        metal: {
          gold: "#FFD700",
          iron: "#C0C0C0",
          bronze: "#9c5221"
        }
      }
    }
  },
  plugins: []
}
