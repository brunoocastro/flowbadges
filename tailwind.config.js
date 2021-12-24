const { url } = require('inspector')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    keyframes: {
      modalBgShow: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      modalBgOut: {
        '100%': { opacity: '1' },
        '0%': { opacity: '0' }
      },
      modalPanelShow: {
        '0%': {
          opacity: '0',
          transform: ' scale(.95)'
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1)'
        }
      },
      modalPanelOut: {
        '100%': {
          opacity: '1',
          transform: 'scale(.95)'
        },
        '0%': {
          opacity: '0',
          transform: 'scale(1)'
        }
      }
    },
    animation: {
      modalBgShow: 'modalBgShow 300ms ease-out',
      modalBgOut: 'modalBgOut 200ms ease-in',
      modalPanelShow: 'modalPanelShow 300ms ease-out',
      modalPanelOut: 'modalPanelOut 200ms ease-in'
    },
    extend: {
      spacing: {
        4: '0.25rem',
        8: '0.5rem',
        16: '1rem',
        32: '2rem',
        48: '2.5rem',
        5: '36rem'
      },
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
        }
      }
    }
  },
  plugins: []
}
