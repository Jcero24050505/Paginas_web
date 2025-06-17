import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PeugeotBrand = () => {
  return (
    <div className="pt-16">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.goodfon.com/original/3840x2160/0/a3/oboi-wallpaper-emblema.jpg" 
            alt="Peugeot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Peugeot
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre el diseño y la excelencia francesa
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
                Peugeot, fundada en 1810 en Francia, es una de las marcas automotrices más antiguas del mundo. Inicialmente dedicada a la fabricación de herramientas y bicicletas, lanzó su primer automóvil en 1889. A lo largo de su historia, Peugeot ha representado la excelencia del diseño francés, destacándose por su elegancia, innovación tecnológica y equilibrio entre confort, eficiencia y rendimiento. Hoy forma parte del grupo Stellantis, uno de los mayores consorcios automovilísticos del mundo.
              </p>

              <h2 className="text-2xl font-bold mb-4">Diseño e Innovación</h2>
              <p className="mb-6">
                Peugeot se caracteriza por su distintivo diseño y su compromiso con la innovación. La marca ha revolucionado la experiencia de conducción con su i-Cockpit®, que ofrece una posición de conducción única y una interfaz intuitiva.
              </p>

              <h2 className="text-2xl font-bold mb-4">Gama de Vehículos</h2>
              <p className="mb-6">
                Nuestra gama Peugeot incluye una amplia variedad de vehículos para satisfacer todas las necesidades:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>208 - El urbano dinámico y eficiente</li>
                <li>2008 - SUV compacto con personalidad única</li>
                <li>3008 - SUV tecnológico y versátil</li>
                <li>5008 - SUV familiar de 7 plazas</li>
                <li>508 - Berlina premium con diseño radical</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Servicios Peugeot</h2>
              <p className="mb-6">
                En Grupo Cobendai ofrecemos una gama completa de servicios para tu Peugeot:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Venta de vehículos nuevos</li>
                <li>Servicio postventa oficial</li>
                <li>Recambios originales</li>
                <li>Financiación a medida</li>
                <li>Garantía oficial del fabricante</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">¿Por qué elegir Peugeot?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Diseño distintivo y elegante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Tecnología i-Cockpit® exclusiva</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Amplia gama de motorizaciones eficientes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Excelente relación calidad-precio</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Link 
                to="/modelos/peugeot" 
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

export default PeugeotBrand;