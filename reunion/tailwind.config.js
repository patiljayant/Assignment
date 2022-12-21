module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily : {
        'logo' : `'Baloo Tamma 2', cursive`
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
