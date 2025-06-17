/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#121212',
          alt: '#1A1A1A',
        },
        primary: {
          DEFAULT: '#FF5722',
          light: '#FF8A65',
          dark: '#E64A19',
        },
        secondary: {
          DEFAULT: '#00BCD4',
          light: '#4DD0E1',
          dark: '#0097A7',
        },
        accent: {
          DEFAULT: '#8BC34A',
          light: '#AED581',
          dark: '#689F38',
        },
        success: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        warning: {
          DEFAULT: '#FFC107',
          light: '#FFD54F',
          dark: '#FFA000',
        },
        error: {
          DEFAULT: '#F44336',
          light: '#E57373',
          dark: '#D32F2F',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'rock-texture': "url('https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        'hero-climber': "url('https://images.pexels.com/photos/7538858/pexels-photo-7538858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'hero-overlay': 'linear-gradient(to bottom, rgba(18, 18, 18, 0.3), rgba(18, 18, 18, 0.9))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};