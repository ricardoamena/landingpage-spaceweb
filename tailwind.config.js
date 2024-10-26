/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, //center: true: Esta propiedad dentro de container asegura que el contenedor esté centrado horizontalmente.
        padding : { //padding: Define el relleno (padding) dentro del contenedor. Aquí se especifican diferentes valores de padding para diferentes tamaños de pantalla:
          default: '1rem', //default: '1rem': Establece un padding de 1 rem para el contenedor por defecto.
          sm: '2rem', //sm: '2rem': Establece un padding de 2 rem para pantallas pequeñas.
        }
      },
    },
  },
  plugins: [],
}

