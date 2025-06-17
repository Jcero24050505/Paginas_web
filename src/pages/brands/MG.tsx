import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MGBrand = () => {
  return (
    <div className="pt-16">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://wallpapers.com/images/hd/mg-5871-x-3811-wallpaper-iet63ckzts8ttkp9.jpg" 
            alt="MG"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            MG
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Redescubre la leyenda británica
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
                MG (Morris Garages) es una marca británica fundada en 1924, conocida históricamente por sus deportivos compactos. Tras varias etapas de propiedad, actualmente pertenece al grupo chino SAIC Motor, uno de los mayores fabricantes de automóviles del mundo. Bajo esta nueva gestión, MG ha experimentado una transformación enfocada en la movilidad sostenible, destacando por su gama de vehículos eléctricos e híbridos, diseño moderno, tecnología accesible y una excelente relación calidad-precio.
              </p>

              <h2 className="text-2xl font-bold mb-4">Innovación y Tecnología</h2>
              <p className="mb-6">
                MG está liderando la transición hacia la movilidad eléctrica con una gama de vehículos que combinan autonomía, prestaciones y tecnología avanzada a precios competitivos.
              </p>

              <h2 className="text-2xl font-bold mb-4">Gama de Vehículos</h2>
              <p className="mb-6">
                Descubre nuestra gama de vehículos MG:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>MG4 Electric - El compacto 100% eléctrico</li>
                <li>MG ZS EV - SUV eléctrico familiar</li>
                <li>MG EHS - SUV híbrido enchufable</li>
                <li>MG5 Electric - El primer familiar 100% eléctrico</li>
                <li>MG Marvel R - SUV eléctrico premium</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Servicios MG</h2>
              <p className="mb-6">
                En Grupo Cobendai ofrecemos servicios completos para tu MG:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Venta de vehículos nuevos</li>
                <li>Servicio técnico especializado</li>
                <li>Recambios originales</li>
                <li>Financiación personalizada</li>
                <li>7 años de garantía</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">¿Por qué elegir MG?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>7 años de garantía líder en el mercado</span>
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
                    <span>Amplia gama de vehículos eléctricos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Link 
                to="/modelos/mg" 
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

export default MGBrand;