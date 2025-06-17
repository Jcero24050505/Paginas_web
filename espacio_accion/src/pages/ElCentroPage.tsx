import React from 'react';
import { Link } from 'react-router-dom';

const ElCentroPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-80 bg-gray-800">
        <img 
          src="https://i.imgur.com/3Cd7INB.png" 
          alt="El Centro" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EL CENTRO</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Conoce las instalaciones y al equipo que hace posible Espacio Acción
            </p>
          </div>
        </div>
      </section>

       {/* Content Section */}

      <section className="py-16 bg-white">

        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold mb-8 text-center">Sobre Nosotros</h2>

            

            <div className="prose prose-lg max-w-none">

              <p>

                Espacio Acción es un centro de referencia en el mundo de la escalada, creado por y para escaladores. Nuestro objetivo es ofrecer un espacio donde todos, desde principiantes hasta expertos, puedan disfrutar y mejorar en este deporte.

              </p>

              

              <p>

                Fundado en 2010, hemos crecido hasta convertirnos en una comunidad vibrante de personas apasionadas por la escalada y las actividades de montaña. Nuestras instalaciones están diseñadas para proporcionar la mejor experiencia posible, con vías de todos los niveles y un ambiente acogedor.

              </p>

              

              <h3 className="text-2xl font-semibold mt-8 mb-4">Nuestra Filosofía</h3>

              

              <p>

                En Espacio Acción creemos que la escalada es más que un deporte, es una forma de vida que promueve valores como la superación personal, el respeto por la naturaleza y el compañerismo. Nuestro objetivo es transmitir estos valores a través de todas nuestras actividades.

              </p>

              

              <p>

                Apostamos por una formación de calidad, con instructores certificados y programas adaptados a las necesidades de cada persona. La seguridad es nuestra prioridad, y trabajamos constantemente para mantener nuestras instalaciones en perfecto estado.

              </p>

              

              <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>

                  <h4 className="text-xl font-semibold mb-2">Misión</h4>

                  <p>

                    Proporcionar un espacio seguro y acogedor donde personas de todas las edades puedan descubrir y disfrutar de la escalada, fomentando el desarrollo personal y la comunidad.

                  </p>

                </div>

                

                <div>

                  <h4 className="text-xl font-semibold mb-2">Visión</h4>

                  <p>

                    Ser el centro de referencia en escalada y actividades de montaña, reconocido por la calidad de nuestras instalaciones, programas formativos y compromiso con la comunidad.

                  </p>

                </div>

              </div>

            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Instalaciones</h3>
                <p className="mb-4">
                  Descubre nuestras modernas instalaciones diseñadas para escaladores de todos los niveles. Contamos con más de 1000m² dedicados a la escalada.
                </p>
                <Link 
                  to="/el-centro/instalaciones" 
                  className="inline-block bg-[#50aed9] hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Ver instalaciones
                </Link>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Equipo Humano</h3>
                <p className="mb-4">
                  Conoce a nuestro equipo de profesionales, formado por escaladores apasionados y con amplia experiencia en el mundo de la montaña.
                </p>
                <Link 
                  to="/el-centro/equipo-humano" 
                  className="inline-block bg-[#50aed9] hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Conocer al equipo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElCentroPage;