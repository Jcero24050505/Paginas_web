import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedVehicles = () => {
  // Sample featured vehicles data
  const featuredVehicles = [
    {
      id: 1,
      brand: 'Bayon',
      model: 'Híbrido',
      price: 18455,
      year: 2021,
      kilometers: 0,
      fuelType: 'Híbrida 48 V',
      imageUrl: 'https://grupocobendai.com/hyundai/img/vehiculos/bayon.png',
      description: 'Disfruta de lo último en conectividad, funciones de seguridad y sistemas de asistencia al conductor, así como de los sistemas de propulsión híbridos de 48 V disponibles.'
    },
    {
      id: 2,
      brand: 'IONIQ',
      model: '5',
      price: 28210,
      year: 2025,
      kilometers: 0,
      fuelType: 'Eléctrica',
      imageUrl: 'https://grupocobendai.com/hyundai/img/vehiculos/ioniq5.png',
      description: 'El nuevo IONIQ 5 sigue redefiniendo la forma en que la gente percibe los coches eléctricos.'
    },
    {
      id: 3,
      brand: 'Peugot',
      model: '208',
      price: 16920,
      year: 2019,
      kilometers: 0,
      fuelType: 'Térmica,Eléctrica',
      imageUrl: 'https://grupocobendai.com/peugeot/img/vehiculos/nuevo-208.png',
      description: 'El Peugot 208 se ha reinventado: Un nuevo rostro, la firma luminosa Full LED Technology delante y LED detrás, así como nuevas llantas'
    },
    {
      id: 4,
      brand: 'SUV Peugot',
      model: '2008',
      price: 20970,
      year: 2021,
      kilometers: 0,
      fuelType: 'Térmica,Eléctrica',
      imageUrl: 'https://grupocobendai.com/peugeot/img/vehiculos/nuevo-suv-2008.png',
      description: 'El SUV compacto PEUGOT 2008 Híbrido o Gasolina reinventa los códigos de diseño de los SUV: nueva firma de luces delantera y trasera, nuevas llantas de aleación y una nueva parrilla ensanchada para conseguir un frontal aúnmmás poderoso'
    },
    {
      id: 5,
      brand: 'Suzuki',
      model: 'Swace',
      price: 31100,
      year: 2020,
      kilometers: 0,
      fuelType: 'Híbrido',
      imageUrl: 'https://grupocobendai.com/suzuki/img/vehiculos/swace.png',
      description: 'El Suzuki Swace ofrece un diseño deportivo muy elegante en un compacto familiar muy versátil con tecnología híbrida.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://grupocobendai.com/vehiculos-profesionales/img/vehiculos/ioniq.jpg" 
            alt="Vehículos Profesionales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vehículos Destacados
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre nuestra selección especial de vehículos con las mejores condiciones y garantía.
          </p>
        </div>
      </section>
      
      {/* Vehicles Listing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver al inicio
            </Link>
          </div>
          
          <div className="mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Vehículos seleccionados</h2>
              <p className="text-gray-600">
                Todos nuestros vehículos destacados incluyen garantía oficial, revisión completa y certificación de kilometraje.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={vehicle.imageUrl} 
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      className="w-full h-full object-cover min-h-[200px]"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">{vehicle.brand} {vehicle.model}</h3>
                      <span className="text-blue-600 font-bold text-xl">{vehicle.price.toLocaleString()}€</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center text-gray-600 text-sm mb-4">
                      <span className="mr-3">{vehicle.year}</span>
                      <span className="mr-3">|</span>
                      <span className="mr-3">{vehicle.kilometers.toLocaleString()} km</span>
                      <span className="mr-3">|</span>
                      <span>{vehicle.fuelType}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {vehicle.description}
                    </p>
                    
                    <div className="flex space-x-4">
                      <Link 
                        to={`/vehiculos-destacados`} 
                        className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        Más información
                      </Link>
                      <Link 
                        to={`/contacto`} 
                        className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition-colors"
                      >
                        Contactar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors opacity-50 cursor-not-allowed" disabled>
              Anterior
            </button>
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center border-2 border-blue-600 rounded-md text-blue-600 font-medium bg-blue-50">1</button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">2</button>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors flex items-center">
              Siguiente <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Interesado en alguno de nuestros vehículos?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Contacta con nosotros para obtener más información o concertar una prueba de conducción.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Solicitar información
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturedVehicles;