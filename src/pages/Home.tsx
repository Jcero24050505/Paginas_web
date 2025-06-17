import { Link } from 'react-router-dom';
import { Car, Users, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/81OTCkP.jpeg" 
            alt="Concesionario"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Grupo Cobendai
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de vehículos nuevos y de ocasión. Servicios premium y atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/vehiculos-ocasion" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Ver vehículos
            </Link>
            <Link 
              to="/contacto" 
              className="bg-transparent text-white border border-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
      
      {/* Marcas Relacionadas Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras marcas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Trabajamos con las principales marcas del sector automovilístico para ofrecerte la mejor selección de vehículos.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://grupocobendai.com/img/logo-hyundai-cobendai.png" 
                alt="Hyundai"
                className="w-full h-20 object-contain"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://grupocobendai.com/img/logo-peugeot-motorcar.png" 
                alt="Peugeot"
                className="w-full h-20 object-contain"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://grupocobendai.com/img/logo-suzuki-asimco.png" 
                alt="Suzuki"
                className="w-full h-20 object-contain"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://grupocobendai.com/img/logo-subaru-cobendai.png" 
                alt="Subaru"
                className="w-full h-20 object-contain"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/marcas-relacionadas" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Ver todas las marcas
            </Link>
          </div>
        </div>
      </section>
      
      {/* Dealerships Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Concesionarios</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visita cualquiera de nuestros concesionarios y descubre todos nuestros servicios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipPdUHpaQRC36jcbaWJc4tD_evMkYV0SpzRqnjX6=s1024-v1" 
                alt="Concesionario Madrid"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hyundai-Cobendai</h3>
                <p className="text-gray-600 mb-4">
                  Ctra. de Fuencarral, 70 28108 Alcobendas, Madrid
                </p>
                <div className="flex space-x-4">
                  <Link 
                    to="/concesionarios" 
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Más información
                  </Link>
                  <Link 
                    to="/concesionarios" 
                    className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition-colors"
                  >
                    Tour virtual
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqn7ew286WHP4muDPeUNbnjk4aFkm2aQcZ6B7yZPBjVS2_dmj9CeABgWCPNpTUQn5YVg3SvGNHtJ-QJkQg88ypaDFtZu_CJEXhkmm60PjQ40DNbF2D7YXrOi6Lbp3ZZfy_5o99R=s3072-v1" 
                alt="Concesionario Alcobendas"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Peugeot Motorcar - Alcobendas</h3>
                <p className="text-gray-600 mb-4">
                  C. de la Metalurgia, 1, 28108 Alcobendas, Madrid
                </p>
                <div className="flex space-x-4">
                  <Link 
                    to="/concesionarios" 
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Más información
                  </Link>
                  <Link 
                    to="/concesionarios" 
                    className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition-colors"
                  >
                    Tour virtual
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/concesionarios" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Ver todos los concesionarios
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Buscas el vehículo perfecto?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nuestros asesores están listos para ayudarte a encontrar el vehículo que mejor se adapte a tus necesidades.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contacta con nosotros
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;