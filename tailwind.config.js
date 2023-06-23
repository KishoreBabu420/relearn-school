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
      solitude: '#e9e9ff',
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

          secondary: '#F9F9F9',

          accent: '#FBB400',

          info: '#FDF3E6',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
