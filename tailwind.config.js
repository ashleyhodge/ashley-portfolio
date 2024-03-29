module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '540px'
      },
      colors: {
        blue: {
          50: '#b3c0d0',
          100: '#3E5C76',
          200: '#1D2D44',
        },
        egg: {
          50: '#F0EBD8'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
