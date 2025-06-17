/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Aquí es donde añades la nueva configuración
      backgroundImage: {
        'ElCentroPage.tsx': "url('https://static.vecteezy.com/system/resources/previews/006/093/768/non_2x/indoor-rock-climbing-wall-background-free-vector.jpg')", // Asegúrate de que la ruta sea correcta
      },
    },
  },
  plugins: [],
};