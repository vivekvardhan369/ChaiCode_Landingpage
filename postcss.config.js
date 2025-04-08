module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {
      config: './src/css/tailwind.config.js'
    },
    'autoprefixer': {}
  }
}