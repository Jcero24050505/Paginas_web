import { ArrowLeft, ArrowRight, PenTool as Tool, Car, Users, Truck, Wrench, Shield, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Servicios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre todos los servicios que Grupo Cobendai pone a tu disposición, desde la compra hasta el mantenimiento de tu vehículo.
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
          
          {/* Services Overview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Todos nuestros servicios</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En Grupo Cobendai, ofrecemos una amplia gama de servicios para cubrir todas tus necesidades relacionadas con tu vehículo. Nuestro equipo de profesionales está preparado para ofrecerte la mejor atención.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Car size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Venta de Vehículos Nuevos</h3>
              <p className="text-gray-600 mb-4">
                Disponemos de una amplia gama de vehículos nuevos de las mejores marcas. Nuestros asesores te ayudarán a encontrar el coche perfecto para ti.
              </p>
              <Link 
                to="/vehiculos-destacados" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Ver vehículos <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Car size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vehículos de Ocasión</h3>
              <p className="text-gray-600 mb-4">
                Gran selección de vehículos de ocasión revisados y garantizados. Todos nuestros vehículos de ocasión pasan por exhaustivos controles de calidad.
              </p>
              <Link 
                to="/vehiculos-ocasion" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Ver vehículos <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Tool size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Taller Mecánico</h3>
              <p className="text-gray-600 mb-4">
                Taller oficial con los mejores profesionales para el mantenimiento y reparación de tu vehículo. Utilizamos recambios originales para garantizar la máxima calidad.
              </p>
              <Link 
                to="/contacto" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Pedir cita <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Sparkles size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Chapa y Pintura</h3>
              <p className="text-gray-600 mb-4">
                Servicio de chapa y pintura para devolver a tu vehículo su aspecto original tras cualquier golpe o accidente. Trabajamos con todas las compañías aseguradoras.
              </p>
              <Link 
                to="/contacto" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Más información <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Financiación</h3>
              <p className="text-gray-600 mb-4">
                Ofrecemos soluciones de financiación personalizadas para adaptarnos a tus necesidades. Financiación flexible con las mejores condiciones del mercado.
              </p>
              <Link 
                to="/contacto" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Solicitar información <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Shield size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Seguros</h3>
              <p className="text-gray-600 mb-4">
                Te ofrecemos las mejores opciones de seguros para tu vehículo, con coberturas adaptadas a tus necesidades y al mejor precio.
              </p>
              <Link 
                to="/contacto" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Solicitar presupuesto <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Truck size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Servicio de Grúa</h3>
              <p className="text-gray-600 mb-4">
                Servicio de asistencia en carretera disponible 24/7 para nuestros clientes. Te asistimos en cualquier punto de la geografía nacional.
              </p>
              <Link 
                to="/contacto" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Más información <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Wrench size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Venta de Recambios</h3>
              <p className="text-gray-600 mb-4">
                Disponemos de un amplio stock de recambios originales para todas las marcas que representamos. Consulta disponibilidad y precios.
              </p>
              <Link 
                to="/contacto" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Consultar disponibilidad <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Clock size={48} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cita Previa Online</h3>
              <p className="text-gray-600 mb-4">
                Reserva tu cita para cualquiera de nuestros servicios de forma rápida y sencilla a través de nuestra web o por teléfono.
              </p>
              <Link 
                to="/contacto" 
                className="text-blue-600 inline-flex items-center hover:underline"
              >
                Pedir cita <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Highlight Service */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestro Taller Mecánico</h2>
                <p className="text-gray-700 mb-4">
                  En nuestro taller mecánico contamos con los últimos avances tecnológicos para el diagnóstico y reparación de todo tipo de vehículos. Nuestros técnicos están en constante formación para ofrecer el mejor servicio.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Mantenimiento programado según fabricante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Diagnóstico electrónico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Cambio de aceite y filtros</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Revisión de frenos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Sistemas de climatización</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Sustitución de neumáticos</span>
                  </li>
                </ul>
                <Link 
                  to="/contacto" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Solicitar cita <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Taller mecánico"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ¿Por qué elegir nuestros servicios?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Calidad garantizada</h3>
                  <p className="text-gray-600">
                    Todos nuestros servicios cuentan con garantía oficial. Utilizamos recambios originales y los mejores materiales.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Users size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Profesionales cualificados</h3>
                  <p className="text-gray-600">
                    Nuestro equipo está formado por profesionales con amplia experiencia y en constante formación.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapidez y eficacia</h3>
                  <p className="text-gray-600">
                    Nos comprometemos a realizar nuestros servicios en el menor tiempo posible sin comprometer la calidad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Tool size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tecnología avanzada</h3>
                  <p className="text-gray-600">
                    Contamos con la última tecnología para el diagnóstico y reparación de vehículos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Sparkles size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atención personalizada</h3>
                  <p className="text-gray-600">
                    Ofrecemos un trato cercano y personalizado, adaptándonos a las necesidades de cada cliente.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Truck size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Servicio integral</h3>
                  <p className="text-gray-600">
                    Cubrimos todas las necesidades relacionadas con tu vehículo en un único lugar.
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
          <h2 className="text-3xl font-bold mb-6">¿Necesitas alguno de nuestros servicios?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos para solicitar información o reservar una cita en cualquiera de nuestros concesionarios.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;