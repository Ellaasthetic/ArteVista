/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#9C1006',
      'secondary': '#000000',
    },
    extend: {},
  },
  plugins: [],
}

module.exports = {

  plugins: [
      require('flowbite/plugin')
  ],
  content: [
    // ...
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ]

}
