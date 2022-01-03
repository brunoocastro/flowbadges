module.exports = {
  presets: ['next/babel'],
  plugins: [
    'inline-react-svg',
    process.env.NODE_ENV === 'production' && 'transform-remove-console'
]
}
