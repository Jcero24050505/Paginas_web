import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuzukiBrand = () => {
  return (
    <div className="pt-16">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://fbi.cults3d.com/uploaders/15233766/illustration-file/a529fa53-5b76-4ea6-9c5e-6b809fcc981f/1.jpg" 
            alt="Suzuki"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Suzuki
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Pequeños en tamaño, grandes en carácter
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
                Suzuki Motor Corporation, fundada en 1909 en Japón, comenzó como fabricante de telares y lanzó su primer automóvil en 1955. A lo largo de su historia, se ha consolidado como una marca global reconocida por la producción de vehículos compactos, eficientes y fiables, así como por sus destacadas capacidades todoterreno, especialmente en modelos como el Jimny o el Vitara. Suzuki también es conocida por su enfoque en la innovación práctica, la durabilidad mecánica y la eficiencia de consumo, lo que la convierte en una opción popular en mercados de todo el mundo.
              </p>

              <h2 className="text-2xl font-bold mb-4">Innovación Compacta</h2>
              <p className="mb-6">
                Suzuki es líder en el desarrollo de vehículos compactos que combinan eficiencia, practicidad y tecnología avanzada. Su sistema ALLGRIP de tracción total ofrece versatilidad en cualquier terreno.
              </p>

              <h2 className="text-2xl font-bold mb-4">Gama de Vehículos</h2>
              <p className="mb-6">
                Descubre nuestra gama de vehículos Suzuki:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Swift - Urbano dinámico y eficiente</li>
                <li>Vitara - SUV compacto versátil</li>
                <li>S-Cross - Crossover familiar</li>
                <li>Ignis - SUV ultracompacto</li>
                <li>Jimny - 4x4 auténtico</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Servicios Suzuki</h2>
              <p className="mb-6">
                En Grupo Cobendai ofrecemos servicios completos para tu Suzuki:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Venta de vehículos nuevos</li>
                <li>Servicio técnico especializado</li>
                <li>Recambios originales</li>
                <li>Financiación personalizada</li>
                <li>3 años de garantía</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">¿Por qué elegir Suzuki?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Tecnología híbrida eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Sistema ALLGRIP de tracción total</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Excelente relación calidad-precio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Bajo consumo y mantenimiento</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Link 
                to="/modelos/suzuki" 
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

export default SuzukiBrand;