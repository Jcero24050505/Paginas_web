import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';

const Instalaciones: React.FC = () => {
  const instalaciones = [
    {
      title: 'Zona de Boulder',
      description: 'Más de 200m² de superficie de boulder con diferentes inclinaciones y dificultades, colchonetas de alta densidad y circuitos renovados periódicamente.',
      imageUrl: 'https://images.pexels.com/photos/9866482/pexels-photo-9866482.jpeg'
    },
    {
      title: 'Zona de Vías',
      description: 'Paredes de hasta 12 metros de altura con más de 50 vías de todos los niveles, desde iniciación hasta 8a. Equipadas con sistemas de auto-aseguramiento y cuerdas.',
      imageUrl: 'https://images.pexels.com/photos/2917674/pexels-photo-2917674.jpeg'
    },
    {
      title: 'Zona de Entrenamiento',
      description: 'Espacio dedicado con campus board, tablas multiagarre, TRX, pesas y otros equipamientos específicos para mejorar la fuerza y resistencia en escalada.',
      imageUrl: 'https://images.pexels.com/photos/9866691/pexels-photo-9866691.jpeg'
    },
    {
      title: 'Vestuarios',
      description: 'Amplios vestuarios con duchas individuales, taquillas, bancos y secadores de pelo, adaptados para personas con movilidad reducida.',
      imageUrl: 'https://images.pexels.com/photos/6739707/pexels-photo-6739707.jpeg'
    },
    {
      title: 'Recepción y Tienda',
      description: 'Espacio de bienvenida donde puedes reservar actividades, comprar entradas y adquirir material básico de escalada y merchandising de Yurok.',
      imageUrl: 'https://images.pexels.com/photos/6311643/pexels-photo-6311643.jpeg'
    },
    {
      title: 'Yurok Café',
      description: 'Zona de descanso con servicio de cafetería, bebidas isotónicas, batidos proteicos y snacks saludables para reponer energía.',
      imageUrl: 'https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nuestras Instalaciones"
          subtitle="Descubre todos los espacios que tenemos preparados para ti"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instalaciones.map((instalacion, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src={instalacion.imageUrl}
                  alt={instalacion.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{instalacion.title}</h3>
                <p className="text-gray-600">{instalacion.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Especificaciones técnicas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Superficie total</h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Área escalable</span>
                <span className="font-medium">500 m²</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Altura máxima</span>
                <span className="font-medium">12 metros</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Zonas de Boulder</h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Superficie</span>
                <span className="font-medium">200 m²</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Niveles</span>
                <span className="font-medium">3 a 8A</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Vías equipadas</h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Número total</span>
                <span className="font-medium">50+ vías</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Rango de dificultad</span>
                <span className="font-medium">4 a 8a</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Horario de apertura</h3>
          
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Lunes - Viernes</span>
                <span>10:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Sábados</span>
                <span>10:00 - 21:00</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Domingos y festivos</span>
                <span>10:00 - 20:00</span>
              </div>
            </div>
          </div>
          
          <p className="mt-4 text-gray-600">
            * Los horarios pueden variar en fechas especiales. Consulta nuestras redes sociales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instalaciones;