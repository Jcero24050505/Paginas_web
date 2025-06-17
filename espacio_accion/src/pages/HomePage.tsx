import React from 'react';
import VideoCarousel from '../components/VideoCarousel';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <VideoCarousel />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Instalaciones</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Descubre todo lo que Espacio Acción tiene para ofrecer. Contamos con modernas instalaciones para escaladores de todos los niveles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <img 
                src="https://www.climbingpass.org/wp-content/uploads/2021/10/8ndbpilw5ohyq206mxs9r4c7gzfevtjk-scaled.jpg" 
                alt="Rocódromo" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Rocódromo</h3>
                <p className="text-gray-600 mb-4">
                  Más de 500m² de superficie escalable con diferentes niveles de dificultad.
                </p>
                <a href="/el-centro/instalaciones" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Ver más <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <img 
                src="https://www.climbingpass.org/wp-content/uploads/2021/10/nsgdar83ujmt4kzoqp970bywciv51x6e-scaled.jpg" 
                alt="Sala de Boulder" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sala de Boulder</h3>
                <p className="text-gray-600 mb-4">
                  Espacio especial para practicar boulder con problemas de diferentes grados.
                </p>
                <a href="/el-centro/instalaciones" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Ver más <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <img 
                src="https://i.imgur.com/53B1D3t.png" 
                alt="Zona de Entrenamiento" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Zona de Entrenamiento</h3>
                <p className="text-gray-600 mb-4">
                  Equipamiento específico para mejorar fuerza, resistencia y técnica.
                </p>
                <a href="/el-centro/instalaciones" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Ver más <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Activities Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Actividades</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia variedad de actividades para todas las edades y niveles de experiencia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cursos de Iniciación</h3>
                <p className="text-gray-600 mb-4">
                  Aprende las técnicas básicas de escalada con nuestros instructores experimentados.
                </p>
                <a href="/actividades/cursos" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Más información <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Entrenamiento Personalizado</h3>
                <p className="text-gray-600 mb-4">
                  Programas adaptados a tus objetivos específicos y nivel actual.
                </p>
                <a href="/actividades/entrenamiento" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Más información <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Escuela Juvenil</h3>
                <p className="text-gray-600 mb-4">
                  Actividades especialmente diseñadas para niños y adolescentes.
                </p>
                <a href="/actividades/escuela-juvenil" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Más información <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Competiciones</h3>
                <p className="text-gray-600 mb-4">
                  Participa en nuestros eventos y pon a prueba tus habilidades.
                </p>
                <a href="/programacion" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Ver calendario <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Grupos y Empresas</h3>
                <p className="text-gray-600 mb-4">
                  Organizamos actividades especiales para grupos y eventos corporativos.
                </p>
                <a href="/contacto" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Solicitar información <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Salidas a Roca</h3>
                <p className="text-gray-600 mb-4">
                  Excursiones organizadas a diferentes zonas de escalada natural.
                </p>
                <a href="/programacion" className="flex items-center text-[#50aed9] font-medium hover:text-blue-400">
                  Ver próximas salidas <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[#2082b3] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y comienza tu aventura en el mundo de la escalada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/tarifas" className="bg-[#50aed9] text-white-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
              Ver tarifas
            </a>
            <a href="/contacto" className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 font-semibold py-3 px-8 rounded-md transition-colors duration-300">
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;