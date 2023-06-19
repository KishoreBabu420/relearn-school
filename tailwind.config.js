/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
    },
    animation: {
      slide: 'slide 25s linear infinite',
    },
    keyframes: {
      slide: {
        '0%,100%': { transform: 'translateX(5%)' },
        '50%': { transform: 'translateX(-120%)' },
      },
    },
  },

  extend: {
    colors: {
      solitude: '#e9e9ea',
    },
  },
  screens: {
    xs: '480px',
    sm: '768px',
    md: '1060px',
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1c2042',

          secondary: '#fbbe00',

          accent: '#1fb2a6',

          neutral: '#2a323c',

          'base-100': '#1d232a',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
