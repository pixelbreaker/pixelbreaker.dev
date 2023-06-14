/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '5rem',
        lg: '7rem',
        xl: '8rem',
        '2xl': '10rem'
      }
    },
    fontFamily: {
      heading: ['Inter', 'sans-serif'],
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'light-primary': '#294d70',
        'light-secondary': '#82543d',
        'light-third': '#378a3b',
        'light-forth': '#3b8273',
        'light-fifth': '#7e467e',
        'dark-primary': '#007bff',
        'dark-secondary': '#ff7c36',
        'dark-third': '#2bff39',
        'dark-forth': '#33ffd3',
        'dark-fifth': '#ff46ff'
      }
    }
  },
  plugins: []
};
