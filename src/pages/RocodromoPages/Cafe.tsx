import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import CafeMenu from '../../components/ui/CafeMenu';

const Cafe: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Yurok Café"
          subtitle="Repón energías con opciones deliciosas y saludables"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg"
              alt="Yurok Café - Zona de descanso"
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Un espacio para descansar y socializar</h3>
            <p className="text-gray-600 mb-4">
              Nuestro Yurok Café no es solo un lugar para reponer energías, sino también un punto de encuentro para la comunidad de escaladores. 
              Un espacio acogedor donde compartir experiencias, conocer a otros apasionados de la escalada y planear tus próximas aventuras.
            </p>
            <p className="text-gray-600 mb-4">
              Ofrecemos una selección de alimentos y bebidas pensadas específicamente para deportistas, con opciones saludables, 
              energéticas y nutritivas que te ayudarán a recuperarte después de una intensa sesión de escalada.
            </p>
            <div className="mt-auto">
              <h4 className="font-medium text-gray-800 mb-2">Horario:</h4>
              <p className="text-gray-600">
                Lunes a Viernes: 10:30 - 21:30<br />
                Sábados y Domingos: 10:30 - 20:30
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg"
              alt="Para Compartir"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Para Compartir</h3>
              <p className="text-gray-600">
                Nachos, patatas bravas, tablas de quesos y otros aperitivos perfectos para compartir entre amigos después de escalar.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg"
              alt="Platos Principales"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Platos Principales</h3>
              <p className="text-gray-600">
                Sándwiches, wraps, hamburguesas y bowls energéticos para reponer todas las calorías gastadas durante la escalada.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg"
              alt="Para Beber"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Para Beber</h3>
              <p className="text-gray-600">
                Café, refrescos, cervezas, zumos naturales y batidos proteicos para hidratarte y recuperarte.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <CafeMenu />
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Eventos especiales</h3>
          <p className="text-gray-600 text-center mb-6">
            En Yurok Café organizamos regularmente eventos para nuestra comunidad:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Noches temáticas</h4>
              <p className="text-gray-600">
                Proyecciones de documentales y películas de escalada, charlas con escaladores profesionales y presentaciones de viajes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Competiciones</h4>
              <p className="text-gray-600">
                Pre y post eventos de nuestras competiciones regulares, con ofertas especiales para participantes y espectadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;