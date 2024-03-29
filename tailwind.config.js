/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '25': '#FCFAFF',
          '50': '#F9F5FF',
          '100': '#F4EBFF',
          '200': '#E9D7FE',
          '300': '#D6BBFB',
          '400': '#B692F6',
          '500': '#9E77ED',
          DEFAULT: '#7F56D9',
          '700': '#6941C6',
          '800': '#53389E',
          '900': '#42307D',
        },
        secondary: {
          '25': '#FCFCFD',
          '50': '#F9FAFB',
          '100': '#F2F4F7',
          '200': '#EAECF0',
          '300': '#D0D5DD',
          '400': '#98A2B3',
          '500': '#667085',
          '600': '#475467',
          '700': '#344054',
          '800': '#1D2939',
          DEFAULT: '#101828',
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

  },
  plugins: [],
}

