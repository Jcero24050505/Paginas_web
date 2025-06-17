/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7f9',
          100: '#e9eff3',
          200: '#d3dfe7',
          300: '#b3c7d4',
          400: '#8ca8bc',
          500: '#6589a3',
          600: '#4d6f89',
          700: '#1d3a4f',
          800: '#162c3c',
          900: '#0f1e29',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};