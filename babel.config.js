const plugins = ['inline-react-svg']

if (process.env.VERCEL_ENV === 'production')
  plugins.push('transform-remove-console')

module.exports = {
  presets: ['next/babel'],
  plugins
}
