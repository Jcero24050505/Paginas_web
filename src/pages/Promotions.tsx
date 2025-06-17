import { ArrowLeft, Calendar, Percent, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Promotions = () => {
  // Sample promotions
  const promotions = [
    {
      id: 1,
      title: 'Descuento del 15% en mantenimientos',
      description: 'Benefíciate de un 15% de descuento en todos los servicios de mantenimiento de tu vehículo.',
      validUntil: '30/09/2025',
      imageUrl: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1600',
      conditions: [
        'Válido para vehículos de cualquier marca.',
        'No acumulable con otras ofertas o promociones.',
        'Descuento aplicable solo a mano de obra y recambios oficiales.',
        'Es necesario presentar el código promocional al solicitar cita.'
      ],
      code: 'MANT15'
    },
    {
      id: 2,
      title: 'Financiación al 0% de interés',
      description: 'Financia la compra de tu nuevo vehículo al 0% de interés. ¡Una oportunidad única!',
      validUntil: '31/12/2025',
      imageUrl: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600',
      conditions: [
        'Financiación sujeta a aprobación de la entidad financiera.',
        'Aplicable a determinados modelos. Consulta disponibilidad.',
        'Plazo máximo de financiación: 48 meses.',
        'Entrada mínima del 20% del valor del vehículo.'
      ],
      code: 'FIN0'
    },
    {
      id: 3,
      title: 'Regalo de 4 neumáticos',
      description: 'Por la compra de un vehículo de ocasión, te regalamos un juego completo de 4 neumáticos.',
      validUntil: '31/10/2025',
      imageUrl: 'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=1600',
      conditions: [
        'Promoción válida para vehículos de ocasión de más de 15.000€.',
        'El juego de neumáticos será de la misma medida que los originales del vehículo.',
        'La instalación debe realizarse en nuestros talleres.',
        'Promoción no reembolsable en metálico.'
      ],
      code: 'NEUM4'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3784382/pexels-photo-3784382.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Promociones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Promociones Especiales
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre nuestras ofertas y promociones exclusivas para que ahorres en la compra y mantenimiento de tu vehículo.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver al inicio
            </Link>
          </div>
          
          {/* Promotions Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofertas actuales</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En Grupo Cobendai estamos constantemente creando nuevas promociones y ofertas para que puedas beneficiarte de los mejores precios y condiciones. A continuación, te presentamos nuestras promociones vigentes.
            </p>
          </div>
          
          {/* Promotions List */}
          <div className="space-y-12 mb-16">
            {promotions.map((promo) => (
              <div key={promo.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={promo.imageUrl} 
                      alt={promo.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center mb-2">
                      <Percent size={20} className="text-blue-600 mr-2" />
                      <h3 className="text-2xl font-semibold">{promo.title}</h3>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>Válido hasta: {promo.validUntil}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      {promo.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Condiciones:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {promo.conditions.map((condition, index) => (
                          <li key={index}>{condition}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <AlertCircle size={18} className="text-blue-600 mr-2" />
                          <span className="font-medium">Código promocional:</span>
                        </div>
                        <span className="font-bold text-blue-600">{promo.code}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Link 
                        to="/contacto" 
                        className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                      >
                        Solicitar información
                      </Link>
                      <Link 
                        to={`/contacto`} 
                        className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition-colors"
                      >
                        Pedir cita
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* How to use promotions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Cómo usar nuestras promociones?</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Selecciona tu promoción</h3>
                  <p className="text-gray-600">
                    Elige la promoción que mejor se adapte a tus necesidades entre las disponibles en nuestra web.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Contacta con nosotros</h3>
                  <p className="text-gray-600">
                    Llámanos, solicita información a través del formulario de contacto o visítanos en cualquiera de nuestros concesionarios.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Disfruta del beneficio</h3>
                  <p className="text-gray-600">
                    Indica el código promocional a nuestros asesores y disfruta de los beneficios de la promoción seleccionada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Promotions FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preguntas frecuentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Puedo combinar varias promociones?</h3>
                <p className="text-gray-700">
                  No, nuestras promociones no son acumulables entre sí ni con otras ofertas o descuentos, salvo que se indique expresamente lo contrario.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Cuánto tiempo duran las promociones?</h3>
                <p className="text-gray-700">
                  Cada promoción tiene su propia fecha de validez, que se indica claramente en la descripción de la misma. Todas nuestras promociones están sujetas a disponibilidad.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Necesito el código promocional?</h3>
                <p className="text-gray-700">
                  Sí, para beneficiarte de cualquiera de nuestras promociones, deberás indicar el código promocional correspondiente a nuestros asesores en el momento de solicitar el servicio o realizar la compra.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Qué ocurre si una promoción ya ha expirado?</h3>
                <p className="text-gray-700">
                  Las promociones solo son válidas durante el período indicado. Una vez finalizado dicho período, no será posible beneficiarse de la promoción. Te recomendamos estar atento a nuestra web para conocer las nuevas promociones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Quieres estar al día de nuestras promociones?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Suscríbete a nuestra newsletter y recibe información sobre nuestras promociones y ofertas especiales directamente en tu correo electrónico.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                required 
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              Al suscribirte, aceptas nuestra <Link to="/politica-privacidad" className="text-blue-600 hover:underline">política de privacidad</Link>.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas más información?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contacta con nosotros para obtener más detalles sobre nuestras promociones o para resolver cualquier duda.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Promotions;