import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';

const PrimerDia: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Mi Primer Día en el Rocódromo"
          subtitle="Todo lo que necesitas saber para tu primera visita"
        />

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/9866516/pexels-photo-9866516.jpeg"
                alt="Principiante en el rocódromo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es un rocódromo?</h3>
              <p className="text-gray-600 mb-4">
                Un rocódromo es una instalación equipada con paredes artificiales diseñadas para simular la escalada en roca. 
                Ofrecemos diferentes niveles de dificultad para que puedas iniciarte y progresar en este apasionante deporte.
              </p>
              <p className="text-gray-600">
                El rocódromo de Yurok Adventures cuenta con más de 500m² de superficie escalable, con vías para todos los niveles, 
                desde principiantes absolutos hasta escaladores experimentados, en un ambiente seguro y controlado.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">¿Qué llevar?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">
                  1
                </span>
                <div>
                  <span className="font-medium">Ropa cómoda:</span> Pantalones flexibles (mallas o shorts) y camiseta.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">
                  2
                </span>
                <div>
                  <span className="font-medium">Calzado:</span> Puedes alquilar pies de gato o traer zapatillas deportivas limpias.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">
                  3
                </span>
                <div>
                  <span className="font-medium">Agua:</span> Es importante mantenerse hidratado.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">
                  4
                </span>
                <div>
                  <span className="font-medium">Toalla:</span> Si deseas ducharte después.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tu primera sesión</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">
                  1
                </span>
                <div>
                  <span className="font-medium">Registro:</span> Preséntate en recepción 15 minutos antes.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">
                  2
                </span>
                <div>
                  <span className="font-medium">Introducción:</span> Un monitor te dará indicaciones básicas de seguridad.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">
                  3
                </span>
                <div>
                  <span className="font-medium">Calentamiento:</span> Antes de escalar, realiza un calentamiento.
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full mr-3">
                  4
                </span>
                <div>
                  <span className="font-medium">¡A escalar!</span> Comienza con las vías más sencillas (nivel 3-4).
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Consejos para principiantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>No te sobreesfuerces en tu primera visita.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Escucha a los monitores y sigue sus indicaciones.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Usa las piernas más que los brazos para escalar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>No tengas miedo a caerte (en zonas de boulder).</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Respira de forma controlada mientras escalas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Descansa entre intentos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Hidratate adecuadamente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>¡Diviértete y disfruta de la experiencia!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Reserva tu primera sesión
          </button>
          <p className="mt-4 text-gray-600">
            Si tienes alguna duda, no dudes en <a href="/contacto" className="text-blue-600 hover:underline">contactarnos</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrimerDia;