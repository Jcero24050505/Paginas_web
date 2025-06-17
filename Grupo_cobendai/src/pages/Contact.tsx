import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo lo antes posible.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
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
            src="https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Contacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contacta con nosotros
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta o cita.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver al inicio
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
              
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto *</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="info">Información general</option>
                      <option value="vehicle">Información sobre un vehículo</option>
                      <option value="test-drive">Solicitar prueba de conducción</option>
                      <option value="service">Cita de taller</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    required
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
                      He leído y acepto la <Link to="/politica-privacidad" className="text-blue-600 hover:underline">política de privacidad</Link> *
                    </label>
                  </div>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full"
                  >
                    <Send size={18} className="mr-2" />
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Dirección principal</h3>
                      <p className="text-gray-700">
                        Calle de Sepúlveda, 12, Nave 1. 28108, Madrid
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Teléfono</h3>
                      <p className="text-gray-700">+34 91 088 83 08</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">info@grupocobendai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Horario</h3>
                      <p className="text-gray-700">
                        Lunes a Viernes: 9:00 - 20:00<br />
                        Sábados: 10:00 - 14:00<br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d97038.48870367752!2d-3.6923860000000004!3d40.531585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422d4034e10cc3%3A0xc30dec174cbe730b!2sGrupo%20Cobendai!5e0!3m2!1ses-419!2ses!4v1747151233687!5m2!1ses-419!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Ubicación de Grupo Cobendai"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact