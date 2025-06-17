import React from 'react';
import { ArrowLeft, Clock, CheckCircle, Award, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Quiénes Somos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quiénes Somos
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Conoce la historia y valores de Grupo Cobendai, tu concesionario de confianza desde hace más de 20 años.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver al inicio
            </Link>
          </div>

          {/* History Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                <p className="text-gray-700 mb-4">
                  Grupo Cobendai es el resultado de más de 20 años de trabajo y experiencia en el sector de la automoción.
                </p>
                <p className="text-gray-700 mb-4">
                  Nuestra historia comienza en Alcobendas (Madrid) en 1992 y fue en 1995 cuando establecimos el primer concesionario independiente del grupo.
                </p>
                <p className="text-gray-700">
                  Hoy lo componen concesionarios y talleres oficiales de las marcas Hyundai, Peugeot, Suzuki, Subaru, SsangYong y MG además de Cobendai Ocasión, marca propia de vehículos de ocasión, y Soluciona, nuestra Consultoría y Gestoría administrativa.
                </p>
              </div>
              <div>
                <img
                  src="https://grupocobendai.com/img/logo-cobendai-detail.svg"
                  alt="Historia de Grupo Cobendai"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestros Principios</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Credibilidad</h3>
                <p className="text-gray-600">
                  Credibilidad por ser una compañía transparente a todos los niveles para afianzar la confianza de nuestros clientes y empleados.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fidelidad</h3>
                <p className="text-gray-600">
                  El objetivo primordial de todo el equipo es conseguir la fidelidad de nuestros clientes buscando la excelencia en el trabajo, garantizando clientes 100% satisfechos.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Estabilidad</h3>
                <p className="text-gray-600">
                  La estabilidad laboral aporta valor humano a nuestra compañía y se refleja en la involucración de los trabajadores con los fines del Grupo.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Nos adaptamos constantemente a las nuevas tecnologías y tendencias del sector para ofrecer soluciones actualizadas.
                </p>
              </div>
            </div>
          </div>

          {/* Social Corporativa Section */}
          <div className="mb-16 bg-gray-200 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Responsabilidad Social Corporativa</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                En el Grupo Cobendai damos mucho valor a los gestos que tienden a proteger y cuidar nuestro medio ambiente y, sobre todo, apostamos por el desarrollo de la industria del automóvil en un entorno social y colectivo sostenible. <strong>Creemos que la sostenibilidad medioambiental es imprescindible en el desarrollo de la industria del automóvil y deben ir siempre de la mano.</strong>
                <br/><br/>
                Además, creemos firmemente y apostamos por nuevas tecnologías que reduzcan el impacto medioambiental de la industria del automóvil. Por ello, para acercarlas y ponerlas a disposición de todos los usuarios, nuestra Ecostore ofrece vehículos que garantizan una movilidad más sostenible, para contribuir a construir un futuro de cero emisiones.
                <br/><br/>
                Del mismo modo que la movilidad es una necesidad social, ser respetuosos con el medio ambiente es una obligación social y empresarial.
                <br/><br/>
                Acordes con este compromiso social, colaboramos con diferentes organizaciones y asociaciones que procuran ayuda Social, destinando una parte importante de nuestros ingresos a impulsar iniciativas de ayuda a diferentes colectivos.
                <br/><br/>
                - Patrocinador Carrera Solidaria - Médula para Mateo.
                <br/>
                - Apoyo económico para la asociación Napsis – Organización sin ánimo de lucro dedicada a mejorar la calidad de vida de niños con Parálisis Cerebral o alguna alteración motora, sensorial o cognitiva.
                <br/><br/>
                Con todo esto, además, nos gusta apoyar el deporte y los valores que representa. Somos patrocinadores de proyectos deportivos como:
                <br/><br/>
                - Escuela Infantil Squash 3 Cantos
                <br/>
                - San Silvestre Alcobendas
                <br/>
                - CDE Rayo Alcobendas
                <br/>
                - Madrid Football Cup femenino y masculino
                <br/>
                - Gimnasio YOOFIT
                <br/>
                - Sanset Padel
                <br/><br/>
                La actividad económica del Grupo Cobendai supone una generación de riqueza que repercute en todo el entorno social.
                <br/><br/>
                Con la RSC aumentamos nuestro compromiso con la sociedad, gracias también, a la implicación activa de toda nuestra plantilla.
              </p>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Integral</h3>
                <p className="text-gray-700">
                  Venta de Turismos,
                  <br/>
                  Venta de vehículos industriales,
                  <br/>
                  Servicio oficial reparador,
                  <br/>
                  Recambios originales,
                  <br/>
                  Accesorios
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                <p className="text-gray-700">
                  Servicio de chapa y pintura,
                  <br/>
                  Alquiler de vehículos,
                  <br/>
                  Seguros de automóvil y otros,
                  <br/>
                  Financiación,
                  <br/>
                  Venta de vehículos de ocasión
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestras marcas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://www.diariomotor.com/imagenes/2022/12/logo-de-hyundai-639751e28650e.jpg?class=XL"
                  alt="Director General"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Hyundai</h3>
                  <p className="text-blue-600 mb-4"></p>
                  <p className="text-gray-600">

                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/2021_-_Peugeot_308_III_%28C%29_-_42.jpg/330px-2021_-_Peugeot_308_III_%28C%29_-_42.jpg"
                  alt="Directora Comercial"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Motorcar</h3>
                  <p className="text-blue-600 mb-4"></p>
                  <p className="text-gray-600">

                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://cdn.pixabay.com/photo/2022/11/04/11/49/suzuki-7569689_640.jpg"
                  alt="Director de Servicios"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Suzuki</h3>
                  <p className="text-blue-600 mb-4"></p>
                  <p className="text-gray-600">

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres formar parte de nuestro equipo?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubre las oportunidades de empleo en Grupo Cobendai y únete a nuestra familia.
          </p>
          <Link
            to="/empleo"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Ver ofertas de empleo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
