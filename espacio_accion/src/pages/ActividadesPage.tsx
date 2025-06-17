import React from 'react';
import { Link } from 'react-router-dom';

const ActividadesPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-80 bg-gray-800">
        <img 
          src="https://images.pexels.com/photos/1448361/pexels-photo-1448361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Actividades" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ACTIVIDADES</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Descubre todo lo que puedes hacer en Espacio Acción
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Actividades</h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                En Espacio Acción ofrecemos una amplia variedad de actividades relacionadas con la escalada, adaptadas a diferentes niveles, edades y objetivos. Todas nuestras actividades están dirigidas por profesionales cualificados que garantizan tanto la seguridad como la calidad de la experiencia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {/* Cursos */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src="https://images.pexels.com/photos/2081117/pexels-photo-2081117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Cursos" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-2xl font-semibold mb-4">Cursos</h3>
                    <p className="text-gray-600 mb-4">
                      Ofrecemos cursos para todos los niveles, desde iniciación hasta perfeccionamiento de técnicas específicas. Nuestros cursos combinan teoría y práctica para garantizar un aprendizaje efectivo y seguro.
                    </p>
                    <ul className="mb-6 text-gray-600 list-disc pl-5">
                      <li>Cursos de iniciación a la escalada</li>
                      <li>Perfeccionamiento técnico</li>
                      <li>Escalada en roca natural</li>
                      <li>Seguridad y autorrescate</li>
                      <li>Entrenamiento específico</li>
                    </ul>
                    <Link 
                      to="/actividades/cursos" 
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
                    >
                      Más información
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Entrenamiento */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="md:flex flex-row-reverse">
                  <div className="md:w-2/5">
                    <img 
                      src="https://images.pexels.com/photos/4621464/pexels-photo-4621464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Entrenamiento" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-2xl font-semibold mb-4">Entrenamiento</h3>
                    <p className="text-gray-600 mb-4">
                      Programas de entrenamiento personalizados para mejorar tu rendimiento en escalada. Nuestros entrenadores evaluarán tu nivel actual y diseñarán un plan adaptado a tus objetivos.
                    </p>
                    <ul className="mb-6 text-gray-600 list-disc pl-5">
                      <li>Evaluación inicial y seguimiento</li>
                      <li>Planes de entrenamiento personalizados</li>
                      <li>Entrenamiento de fuerza específica</li>
                      <li>Mejora de la resistencia</li>
                      <li>Técnicas de recuperación</li>
                    </ul>
                    <Link 
                      to="/actividades/entrenamiento" 
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
                    >
                      Más información
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Escuela Juvenil */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src="https://images.pexels.com/photos/1153442/pexels-photo-1153442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Escuela Juvenil" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-2xl font-semibold mb-4">Escuela Juvenil</h3>
                    <p className="text-gray-600 mb-4">
                      Actividades especialmente diseñadas para niños y adolescentes, donde aprenderán a escalar de forma segura y divertida, desarrollando habilidades físicas y valores como el esfuerzo y el compañerismo.
                    </p>
                    <ul className="mb-6 text-gray-600 list-disc pl-5">
                      <li>Grupos por edades y niveles</li>
                      <li>Monitores especializados en pedagogía</li>
                      <li>Actividades lúdicas y educativas</li>
                      <li>Desarrollo de habilidades psicomotrices</li>
                      <li>Campamentos vacacionales</li>
                    </ul>
                    <Link 
                      to="/actividades/escuela-juvenil" 
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
                    >
                      Más información
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Activities */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Otras Actividades</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Eventos y Competiciones</h4>
                  <p className="text-gray-600 mb-4">
                    Organizamos regularmente eventos y competiciones para todos los niveles, desde encuentros amistosos hasta pruebas federadas.
                  </p>
                  <Link to="/programacion" className="text-orange-500 hover:text-orange-600 font-medium">
                    Ver calendario de eventos
                  </Link>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Salidas a Roca</h4>
                  <p className="text-gray-600 mb-4">
                    Excursiones organizadas a zonas de escalada natural, donde podrás aplicar lo aprendido en un entorno real, siempre acompañado por guías experimentados.
                  </p>
                  <Link to="/programacion" className="text-orange-500 hover:text-orange-600 font-medium">
                    Próximas salidas
                  </Link>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Grupos y Empresas</h4>
                  <p className="text-gray-600 mb-4">
                    Actividades a medida para grupos escolares, asociaciones, empresas y otras entidades. Una forma diferente de fomentar el trabajo en equipo y la superación personal.
                  </p>
                  <Link to="/contacto" className="text-orange-500 hover:text-orange-600 font-medium">
                    Solicitar información
                  </Link>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Clases Particulares</h4>
                  <p className="text-gray-600 mb-4">
                    Sesiones individuales o para pequeños grupos con un instructor dedicado, adaptadas a tus necesidades específicas y horarios.
                  </p>
                  <Link to="/contacto" className="text-orange-500 hover:text-orange-600 font-medium">
                    Reservar clase
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActividadesPage;