import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubaruBrand = () => {
  return (
    <div className="pt-16">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://di-uploads-pod46.dealerinspire.com/ewingsubaruofplano/uploads/2023/03/Subaru-Logo-in-Front-Grille_o.jpg" 
            alt="Subaru"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Subaru
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Confianza en movimiento
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
                Subaru, fundada en 1953 en Japón, es una marca reconocida internacionalmente por su compromiso con la seguridad, fiabilidad y rendimiento. Es pionera en el uso del sistema Symmetrical All-Wheel Drive (AWD), presente en la mayoría de sus modelos, lo que proporciona una excelente estabilidad y control en todo tipo de condiciones. Además, Subaru destaca por sus motores bóxer, que ofrecen un centro de gravedad más bajo, mejorando la conducción y la seguridad. La marca también ha sido líder en innovación en materia de seguridad con tecnologías como EyeSight, su sistema avanzado de asistencia al conductor.
              </p>

              <h2 className="text-2xl font-bold mb-4">Tecnología Única</h2>
              <p className="mb-6">
                Subaru se distingue por sus tecnologías exclusivas como el motor Bóxer y el sistema Symmetrical AWD, que proporcionan un equilibrio y control excepcionales en cualquier condición.
              </p>

              <h2 className="text-2xl font-bold mb-4">Gama de Vehículos</h2>
              <p className="mb-6">
                Descubre nuestra gama de vehículos Subaru:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Forester - SUV versátil y robusto</li>
                <li>Outback - Crossover aventurero</li>
                <li>XV - Crossover compacto</li>
                <li>Impreza - Compacto deportivo</li>
                <li>Solterra - SUV 100% eléctrico</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Servicios Subaru</h2>
              <p className="mb-6">
                En Grupo Cobendai ofrecemos servicios completos para tu Subaru:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Venta de vehículos nuev

os</li>
                <li>Servicio técnico especializado</li>
                <li>Recambios originales</li>
                <li>Financiación personalizada</li>
                <li>5 años de garantía</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">¿Por qué elegir Subaru?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Symmetrical All-Wheel Drive de serie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Motor Bóxer exclusivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Máxima seguridad EyeSight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Fiabilidad legendaria</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Link 
                to="/modelos/subaru" 
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

export default SubaruBrand;