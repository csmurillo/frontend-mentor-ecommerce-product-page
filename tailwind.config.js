module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'base':'0px',
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayBlue: 'hsl(219, 9%, 45%)',
        grayBlue:'hsl(220, 14%, 75%)',
        lightGrayBlue:'hsl(223, 64%, 98%)',
        white:'hsl(0, 0%, 100%)',
        black:'hsl(0, 0%, 0%)'
      },
      fontFamily:{
        kumbh:['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}