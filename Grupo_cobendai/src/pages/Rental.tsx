import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Rental = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carType: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    returnLocation: '',
    message: '',
    privacy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit the form data to a server
    console.log('Form submitted:', formData);
    alert('Solicitud enviada correctamente. Nos pondremos en contacto contigo lo antes posible para confirmar tu reserva.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      carType: '',
      pickupDate: '',
      returnDate: '',
      pickupLocation: '',
      returnLocation: '',
      message: '',
      privacy: false
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://a.ccdn.es/coches/profesional_store/75897_22092023111055.jpg" 
            alt="Alquiler de Vehículos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Alquiler de Vehículos
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre nuestra flota de vehículos de alquiler con las mejores condiciones y sin sorpresas.
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
          
          {/* Booking Form */}
          <div id="booking-form" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Reserva tu vehículo</h2>
            
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="carType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de vehículo *</label>
                    <select 
                      id="carType" 
                      name="carType" 
                      value={formData.carType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Económico">Económico</option>
                      <option value="Compacto">Compacto</option>
                      <option value="SUV">SUV</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de recogida *</label>
                    <input 
                      type="date" 
                      id="pickupDate" 
                      name="pickupDate" 
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de devolución *</label>
                    <input 
                      type="date" 
                      id="returnDate" 
                      name="returnDate" 
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">Lugar de recogida *</label>
                    <select 
                      id="pickupLocation" 
                      name="pickupLocation" 
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Madrid">Madrid - Alcobendas</option>
                      <option value="Madrid - San Sebastián de los reyes">Madrid - San Sebastián de los reyes</option>
                      <option value="Madrid">Madrid</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="returnLocation" className="block text-sm font-medium text-gray-700 mb-1">Lugar de devolución *</label>
                    <select 
                      id="returnLocation" 
                      name="returnLocation" 
                      value={formData.returnLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Madrid">Madrid - Alcobendas</option>
                      <option value="Madrid - San Sebastián de los reyes">Madrid - San Sebastián de los reyes</option>
                      <option value="Madrid">Madrid</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Comentarios adicionales</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="privacy" 
                      name="privacy" 
                      type="checkbox" 
                      checked={formData.privacy}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-gray-700">
                      He leído y acepto la <Link to="/politica-privacidad" className="text-blue-600 hover:underline">política de privacidad</Link> y los términos del servicio *
                    </label>
                  </div>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full"
                  >
                    Solicitar reserva
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Terms and Conditions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Condiciones de alquiler</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Requisitos para alquilar</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Edad mínima de 21 años</li>
                    <li>Carnet de conducir en vigor con al menos 1 año de antigüedad</li>
                    <li>Tarjeta de crédito a nombre del conductor principal</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Incluido en el precio</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Seguro a todo riesgo con franquicia</li>
                    <li>Asistencia en carretera 24h</li>
                    <li>IVA</li>
                    <li>Kilometraje ilimitado en alquileres superiores a 3 días</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">No incluido / Extras</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Combustible (política de depósito lleno-depósito lleno)</li>
                    <li>Conductor adicional (5€/día)</li>
                    <li>GPS (4€/día)</li>
                    <li>Silla infantil (5€/día)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Política de cancelación</h3>
                  <p className="text-gray-700">
                    Cancelación gratuita hasta 48 horas antes de la fecha de recogida. Cancelaciones posteriores o no presentados conllevarán un cargo del 50% del importe total de la reserva.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preguntas frecuentes</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Qué necesito para alquilar un vehículo?</h3>
                <p className="text-gray-700">
                  Para alquilar un vehículo necesitas tener al menos 21 años, un carnet de conducir en vigor con al menos 1 año de antigüedad y una tarjeta de crédito a tu nombre.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Puedo cancelar mi reserva?</h3>
                <p className="text-gray-700">
                  Sí, puedes cancelar tu reserva sin coste hasta 48 horas antes de la fecha de recogida. Las cancelaciones posteriores o no presentados conllevarán un cargo del 50% del importe total de la reserva.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Hay límite de kilometraje?</h3>
                <p className="text-gray-700">
                  Los alquileres de 3 o más días incluyen kilometraje ilimitado. Para alquileres más cortos, se incluyen 150 km por día, con un coste adicional de 0,25€ por km extra.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">¿Qué política de combustible aplicáis?</h3>
                <p className="text-gray-700">
                  Aplicamos la política de "depósito lleno-depósito lleno". Entregamos el vehículo con el depósito lleno y debes devolverlo igualmente lleno, de lo contrario se cobrará el combustible faltante más un cargo por repostaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas más información?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contacta con nosotros para resolver cualquier duda sobre nuestro servicio de alquiler de vehículos.
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

export default Rental