import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HyundaiBrand = () => {
  return (
    <div className="pt-16">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://wallpapers.com/images/hd/white-hyundai-logo-a4k1tqhya8s2njam.jpg" 
            alt="Hyundai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hyundai
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre la innovación y calidad de Hyundai
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/marcas-relacionadas" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver a marcas
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-blue max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Hyundai Motor Company, fundada en 1967 en Corea del Sur, es uno de los mayores fabricantes de automóviles a nivel mundial. Con sede en Seúl, la marca se ha consolidado por ofrecer vehículos que destacan por su fiabilidad, diseño moderno, tecnología de vanguardia y una excelente relación calidad-precio. Además, Hyundai ha liderado avances en movilidad sostenible, invirtiendo fuertemente en modelos eléctricos e híbridos, así como en tecnologías de hidrógeno.
              </p>

              <h2 className="text-2xl font-bold mb-4">Innovación y Tecnología</h2>
              <p className="mb-6">
                Hyundai está a la vanguardia de la innovación automotriz, con un fuerte enfoque en la movilidad sostenible. La marca ha desarrollado una amplia gama de vehículos eléctricos, híbridos y de hidrógeno, demostrando su compromiso con un futuro más limpio y sostenible.
              </p>

              <h2 className="text-2xl font-bold mb-4">Gama de Vehículos</h2>
              <p className="mb-6">
                Nuestra gama Hyundai incluye desde compactos urbanos hasta SUVs familiares, ofreciendo opciones para cada necesidad:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>TUCSON - SUV compacto con diseño vanguardista</li>
                <li>KONA - Crossover urbano con versión eléctrica</li>
                <li>i30 - Compacto versátil y eficiente</li>
                <li>SANTA FE - SUV familiar con gran espacio</li>
                <li>IONIQ - Gama completa de movilidad eléctrica</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Servicios Hyundai</h2>
              <p className="mb-6">
                En Grupo Cobendai ofrecemos servicios completos para tu Hyundai:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Venta de vehículos nuevos</li>
                <li>Servicio técnico oficial</li>
                <li>Recambios originales</li>
                <li>Financiación personalizada</li>
                <li>Garantía oficial de fábrica</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">¿Por qué elegir Hyundai?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>5 años de garantía sin límite de kilometraje</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Tecnología de última generación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Excelente relación calidad-precio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Amplia red de servicios oficiales</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Link 
                to="/modelos/hyundai" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Ver vehículos disponibles
              </Link>
              <Link 
                to="/contacto" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HyundaiBrand;