/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./src/**/*.svelte",
  ],
  theme: {
    extend: {
      'blue': {
        '50': '#eaeeff',
        '100': '#dae0ff',
        '200': '#bcc6ff',
        '300': '#93a0ff',
        '400': '#686dff',
        '500': '#4e45ff',
        '600': '#4225ff',
        '700': '#3e20e9',
        '800': '#2e18bb',
        '900': '#2a1d92',
        '950': '#1a1155',
      },
      'gray': {
        '50': '#f3f8f8',
        '100': '#e2ebe8',
        '200': '#c7dad7',
        '300': '#a1bfba',
        '400': '#729e98',
        '500': '#57837e',
        '600': '#4b6f6c',
        '700': '#415d5b',
        '800': '#3b4f4e',
        '900': '#344545',
        '950': '#050707',
      },

      dropShadow: {
        '3xl': '0 0px 16px rgba(0,0,0,1)'
      }
    },
  },
  plugins: [],
}

