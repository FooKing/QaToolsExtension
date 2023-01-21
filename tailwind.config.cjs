module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
