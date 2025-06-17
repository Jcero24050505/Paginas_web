import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const UsedVehicles = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.alquiber.es/wp-content/uploads/2022/07/Alquiber_07-2022_Post4_vehiculos-de-ocasion-thegem-blog-default.jpg" 
            alt="Vehículos de Ocasión"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vehículos de Ocasión
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Encuentra tu próximo coche entre nuestra amplia gama de vehículos de ocasión revisados y con garantía.
          </p>
        </div>
      </section>
      
      {/* Vehicle Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver al inicio
            </Link>
            <a 
              href="https://motherboard.azurewebsites.net/Vehicleportfolio/Breakdown/1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Ver en nueva ventana <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Explora nuestra selección</h2>
              <p className="text-gray-600">
                Utiliza los filtros disponibles para encontrar el vehículo que mejor se adapte a tus necesidades.
              </p>
            </div>
            <div className="h-[800px] w-full">
              <iframe 
                src="https://motherboard.azurewebsites.net/Vehicleportfolio/Breakdown/1" 
                title="Vehículos de Ocasión"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda para elegir?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Nuestros asesores te ayudarán a encontrar el vehículo que mejor se adapte a tus necesidades y presupuesto.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contacta con un asesor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UsedVehicles;