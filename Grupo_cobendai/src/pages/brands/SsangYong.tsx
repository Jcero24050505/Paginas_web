import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SsangYongBrand = () => {
  return (
    <div className="pt-16">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images1.autocasion.com/actualidad/wp-content/uploads/2017/02/Qu%C3%A9-significa-el-logo-de-SsangYong.jpg" 
            alt="SsangYong"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SsangYong
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Especialistas en SUV y todoterrenos
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
                SsangYong Motor Company, fundada en 1954 en Corea del Sur, es un fabricante con amplia experiencia en el desarrollo de SUVs y vehículos todoterreno. La marca se ha caracterizado por producir vehículos robustos, espaciosos y asequibles, diseñados para ofrecer un buen rendimiento tanto en ciudad como en terrenos exigentes. Actualmente, forma parte del grupo surcoreano KG Mobility, tras una reestructuración en 2022 que marcó una nueva etapa enfocada en la electrificación y la innovación tecnológica.
              </p>

              <h2 className="text-2xl font-bold mb-4">Especialistas en SUV</h2>
              <p className="mb-6">
                SsangYong se ha ganado una sólida reputación en el segmento de los SUV y todoterrenos, ofreciendo vehículos que combinan capacidades off-road con el confort necesario para el uso diario.
              </p>

              <h2 className="text-2xl font-bold mb-4">Gama de Vehículos</h2>
              <p className="mb-6">
                Descubre nuestra gama de vehículos SsangYong:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Korando - SUV compacto versátil</li>
                <li>Tivoli - SUV urbano dinámico</li>
                <li>Rexton - SUV premium de 7 plazas</li>
                <li>Musso - Pick-up robusta y confortable</li>
                <li>Torres - Nuevo SUV con diseño distintivo</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Servicios SsangYong</h2>
              <p className="mb-6">
                En Grupo Cobendai ofrecemos servicios completos para tu SsangYong:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Venta de vehículos nuevos</li>
                <li>Servicio técnico especializado</li>
                <li>Recambios originales</li>
                <li>Financiación personalizada</li>
                <li>5 años de garantía</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">¿Por qué elegir SsangYong?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>5 años de garantía sin límite de kilometraje</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Excelente relación calidad-precio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Amplio espacio interior</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Capacidades todoterreno reales</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Link 
                to="/modelos/ssangyong" 
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

export default SsangYongBrand;