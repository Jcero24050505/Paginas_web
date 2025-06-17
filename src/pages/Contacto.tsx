import { useState } from 'react';
import Hero from '../components/Hero';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacto = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/fotos/erp_salamandra/logo/logo-salamandra-coordenadas.png"
        title="Contáctanos"
        subtitle="Estamos aquí para responder todas tus dudas"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-zinc-800">Escríbenos si tienes alguna pregunta</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-300 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">¡Mensaje enviado correctamente!</h3>
                  <p className="text-green-700">
                    Gracias por contactar con nosotros. Responderemos a tu mensaje lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="info">Información general</option>
                      <option value="rates">Tarifas</option>
                      <option value="courses">Cursos</option>
                      <option value="reservation">Reservas</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-zinc-800">Salamandra Boulder Café Rocodromo</h3>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <div className="flex mb-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-zinc-800">Dirección</p>
                    <p className="text-gray-600">C/ Escosura nº 5, Madrid</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  <Phone className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-zinc-800">Teléfono</p>
                    <p className="text-gray-600">647 796 333</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  <Mail className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-zinc-800">Email</p>
                    <p className="text-gray-600">info@salamandra-bc.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-zinc-800">Horario</p>
                    <p className="text-gray-600">Lunes a Jueves: 12.00 – 23.00</p>
                    <p className="text-gray-600">Viernes: 11.30 – 23.00</p>
                    <p className="text-gray-600">Sábado: 12.00 - 21.00</p>
                    <p className="text-gray-600">Domingo: Cerrado</p>
                    <p className="text-gray-600 mt-2">Sábado: socios con reserva previa</p>
                    <p className="text-gray-600">Cumpleaños o Grupos: Solo con Reserva</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.301248763347!2d-3.708138!3d40.432906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228792fe8eeed%3A0x76e9acde01c53f30!2sC.%20de%20Escosura%2C%205%2C%2028015%20Madrid!5e0!3m2!1ses!2ses!4v1652893476412!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Salamandra Boulder Café"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-zinc-800">Preguntas frecuentes</h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b border-gray-200 p-4">
                <h3 className="font-medium text-lg text-zinc-800">¿Necesito reservar para ir a escalar?</h3>
                <p className="mt-2 text-gray-700">
                  Para acceso libre no es necesario reservar, pero para clases y actividades especiales sí es recomendable reservar con antelación para asegurar tu plaza.
                </p>
              </div>
              
              <div className="border-b border-gray-200 p-4">
                <h3 className="font-medium text-lg text-zinc-800">¿Qué necesito llevar para escalar?</h3>
                <p className="mt-2 text-gray-700">
                  Solo necesitas ropa cómoda deportiva. Tenemos servicio de alquiler de pies de gato si no dispones de ellos.
                </p>
              </div>
              
              <div className="border-b border-gray-200 p-4">
                <h3 className="font-medium text-lg text-zinc-800">¿Puedo escalar si nunca lo he hecho antes?</h3>
                <p className="mt-2 text-gray-700">
                  ¡Por supuesto! Tenemos actividades específicas para principiantes como bautismos de escalada o clases de iniciación.
                </p>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-lg text-zinc-800">¿Ofrecéis clases para niños?</h3>
                <p className="mt-2 text-gray-700">
                  Sí, contamos con clases específicas para niños a partir de 5 años, adaptadas por grupos de edad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;