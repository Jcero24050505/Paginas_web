import { ArrowLeft, ExternalLink, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dealerships = () => {
  // Sample dealerships data
  const dealerships = [
    {
      id: 1,
      name: 'Hyundai Cobendai Madrid - Alcobendas',
      address: 'Ctra. de Fuencarral, 70 28108 Alcobendas, Madrid',
      phone: '+34 91 123 45 67',
      hours: 'Lunes a Viernes: 9:00 - 20:00, Sábados: 10:00 - 14:00',
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPdUHpaQRC36jcbaWJc4tD_evMkYV0SpzRqnjX6=s1024-v1',
      tourUrl: '',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1275.0597164112967!2d-3.6549550609148644!3d40.52788568751672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422c7aed0e1837%3A0x8b0f08314483b59d!2sCarr.%20de%20Fuencarral%2C%2070%2C%2028108%20Alcobendas%2C%20Madrid!5e0!3m2!1ses!2ses!4v1747146872993!5m2!1ses!2ses'
    },
    {
      id: 2,
      name: 'Peugot-Motorcar Cobendai Madrid - Alcobendas',
      address: 'C. de la Metalurgia, 1, 28108 Alcobendas, Madrid',
      phone: '+34 93 123 45 67',
      hours: 'Lunes a Viernes: 9:00 - 20:00, Sábados: 10:00 - 14:00',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqn7ew286WHP4muDPeUNbnjk4aFkm2aQcZ6B7yZPBjVS2_dmj9CeABgWCPNpTUQn5YVg3SvGNHtJ-QJkQg88ypaDFtZu_CJEXhkmm60PjQ40DNbF2D7YXrOi6Lbp3ZZfy_5o99R=s3072-v1',
      tourUrl: 'https://tour.keepeyeonball.com/Tour/66fc21cc-edd7-447e-ba78-b2162ae5a731',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1275.0013918536133!2d-3.650824969693917!3d40.53095120004301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422c64882f8985%3A0xae5e773f7f48f88d!2sC.%20de%20la%20Metalurgia%2C%201%2C%2028108%20Alcobendas%2C%20Madrid!5e0!3m2!1ses!2ses!4v1747146915852!5m2!1ses!2ses'
    },
    {
      id: 3,
      name: 'Cobendai-Ocasion Alcobendas',
      address: 'C. de los Manzanos, 1, 28703 San Sebastián de los Reyes, Madrid',
      phone: '+34 96 123 45 67',
      hours: 'Lunes a Viernes: 9:30 - 20:00, Sábados: 10:00 - 14:00',
      imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrJBu9IgeKBY2pEYpRMv8XA_fTTEcxYUFxSphcIMU1EQ3HBg6cPpVqZVXw5RGNee0Ow17VwsavcdTvHT8E1FpYOD4MadPu5QkimycyA-XCbifKNxBtjoxQV-Yxn7piyw_q0BLI=s2048-v1',
      tourUrl: 'https://tour.keepeyeonball.com/Tour/fd7fb3b5-127f-4e81-8e4e-8db6d5259413/4K?sc=32&y=180&p=19&tz=111&r=0;0&l=0;0&mz=0&d=0&m=0',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5098.680359731929!2d-3.6240797584719955!3d40.54836064201244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422d1d363adb65%3A0x2f40ba8f3449e!2sC.%20de%20los%20Manzanos%2C%201%2C%2028703%20San%20Sebasti%C3%A1n%20de%20los%20Reyes%2C%20Madrid!5e0!3m2!1ses!2ses!4v1747147052380!5m2!1ses!2ses'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.hyundai.es/concesionarios/image/data/instalaciones/madrid/cobendai_principal.jpg" 
            alt="Concesionarios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Concesionarios
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Visita cualquiera de nuestros concesionarios y descubre todos nuestros servicios y vehículos.
          </p>
        </div>
      </section>
      
      {/* Dealerships Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver al inicio
            </Link>
          </div>
          
          <div className="mb-12">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Red de concesionarios</h2>
              <p className="text-gray-600">
                Encuentra tu concesionario más cercano y visítanos para conocer toda nuestra gama de vehículos y servicios.
              </p>
            </div>
          </div>
          
          <div className="space-y-16">
            {dealerships.map((dealership) => (
              <div key={dealership.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <h3 className="text-2xl font-semibold px-6 py-4 bg-gray-50 border-b border-gray-200">{dealership.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6">
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4">Información del concesionario</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <p className="text-gray-700">{dealership.address}</p>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <p className="text-gray-700">{dealership.phone}</p>
                        </div>
                        
                        <div className="flex items-start">
                          <Clock size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <p className="text-gray-700">{dealership.hours}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <img 
                        src={dealership.imageUrl} 
                        alt={dealership.name}
                        className="w-full h-64 object-cover rounded"
                      />
                    </div>
                    
                    <div className="flex space-x-4">
                      <Link 
                        to="/contacto" 
                        className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        Contactar
                      </Link>
                      <a 
                        href="#tour"
                        className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(`tour-${dealership.id}`)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Ver tour virtual
                      </a>
                    </div>
                  </div>
                  
                  <div className="h-[400px]">
                    <iframe 
                      src={dealership.mapUrl} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      title={`Mapa de ${dealership.name}`}
                    ></iframe>
                  </div>
                </div>
                
                <div id={`tour-${dealership.id}`} className="border-t border-gray-200 p-6">
                  <h4 className="text-lg font-semibold mb-4">Tour virtual</h4>
                  <div className="h-[400px]">
                    <iframe 
                      src={dealership.tourUrl} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      title={`Tour virtual de ${dealership.name}`}
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres más información?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Contacta con nosotros para reservar una cita o solicitar información sobre nuestros vehículos y servicios.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dealerships;