const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [require('tailwind-scrollbar')],
  variants: {
      scrollbar: ['rounded']
  },
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
      backgroundImage: {
        pattern: `url('/assets/fbPattern.svg')`,
        home: `url('/assets/home-background.png')`
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
          background: '#1e293b',
          backgroundDark: '#131B25',
          gray: '#131C25',
          yellow: {
            100: '#FFEDC2',
            400: '#FFDA80',
            700: '#FFB709'
          },
          white: '#FBFBFB',
          black: '#0B0A0A',
          brown: {
            400: '#805C04',
            700: '#332502'
          },
          blue: {
            700: '#1E293B'
          }
        },
        metal: {
          gold: '#FFD700',
          iron: '#C0C0C0',
          bronze: '#9c5221'
        },
        flow: {
          primary: '#FFB709',
          background: '#1e293b',
        }
      }
    }
  }
}
