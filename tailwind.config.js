/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/{*,**/*}.tsx'],
  theme: {
    extend: {
      screens: {
        lg: '900px',
        '2xl': '1300px',
      },
    },
  },
  plugins: [],
};
