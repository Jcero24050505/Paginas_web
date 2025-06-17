import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

// Define the main ContactoPage functional component
const ContactoPage: React.FC = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // State to control the visibility and content of the custom message box
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState('');

  /**
   * Handles changes in form input fields (text, email, tel, textarea, select).
   * Updates the formData state based on the input's name and value.
   * @param e The change event from the input element.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Handles the form submission.
   * Prevents default form submission, logs data (in a real app, this would send to a server),
   * displays a success message in the custom message box, and resets the form.
   * @param e The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would typically send the form data to a backend server
    console.log('Form submitted:', formData);

    // Set content for the custom message box and show it
    setMessageBoxContent('Mensaje enviado. Gracias por contactar con nosotros.');
    setShowMessageBox(true);

    // Reset the form fields after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  /**
   * Closes the custom message box and clears its content.
   */
  const closeMessageBox = () => {
    setShowMessageBox(false);
    setMessageBoxContent('');
  };

  return (
    // Main container for the contact page, with top padding and Inter font family
    <div className="pt-16 font-inter antialiased">
      {/*
        Inline CSS for custom utility classes.
        All animation keyframes have been removed as requested.
      */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        /* Custom utility classes for the primary brand blue color and its darker hover state */
        .bg-custom-blue {
          background-color: #50aed9;
        }
        .hover\\:bg-custom-blue-dark:hover {
          background-color: #409bc7; /* A slightly darker shade for hover effect */
        }
        .text-custom-blue {
          color: #50aed9;
        }
        .focus\\:ring-custom-blue:focus {
          --tw-ring-color: #50aed9;
        }
        `}
      </style>

      {/* Custom Message Box Modal */}
      {showMessageBox && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full">
            <p className="text-xl font-semibold mb-4 text-gray-800">{messageBoxContent}</p>
            <button
              onClick={closeMessageBox}
              className="bg-custom-blue hover:bg-custom-blue-dark text-white py-2 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Hero Section: Displays a background image and a title overlay */}
      <section
        className="relative h-80 bg-gray-800 rounded-lg overflow-hidden mx-4 md:mx-auto max-w-7xl"
        // Animation style removed
      >
        <img
          src="https://i.imgur.com/3Cd7INB.png" // Placeholder image URL for the hero section
          alt="Contacto"
          className="w-full h-full object-cover opacity-70"
          // Fallback in case the image fails to load
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/1200x320/000000/FFFFFF?text=Image+Not+Found";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            {/* Removed black outline from CONTACTO heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 rounded-md">CONTACTO</h1>
            {/* Removed "Estamos aquí para ayudarte" paragraph */}
          </div>
        </div>
      </section>

      {/* Main Content Section: Contains contact information and the contact form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info Section */}
              <div // Animation style removed
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Información de Contacto</h2>
                
                {/* Contact details: Address, Phone, Email, Hours */}
                <div className="space-y-6 mb-10">
                  {/* Address */}
                  <div className="flex items-start" // Animation style removed
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4 shadow-sm">
                      <MapPin className="text-custom-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-700">Dirección</h3>
                      <p className="text-gray-600">
                        C. de Marcelino Álvarez, <br />
                        6, 28017 Madrid
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start" // Animation style removed
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4 shadow-sm">
                      <Phone className="text-custom-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-700">Teléfono</h3>
                      <p className="text-gray-600">
                        91 326 72 92
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start" // Animation style removed
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4 shadow-sm">
                      <Mail className="text-custom-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-700">Email</h3>
                      <p className="text-gray-600">
                        informacion@espacioaccion.es
                      </p>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start" // Animation style removed
                  >
                    <div className="bg-blue-100 p-3 rounded-full mr-4 shadow-sm">
                      <Clock className="text-custom-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-700">Horario</h3>
                      <p className="text-gray-600">
                        Martes y Jueves: 9:00 - 22:30<br />
                        Lunes, Miércoles y Viernes: 10:00 - 22:30<br />
                        Sábados y Domingos: 11:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* How to get there section with map placeholder */}
                <div className="bg-gray-100 rounded-lg p-6 shadow-md" // Animation style removed
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Cómo llegar</h3>
                  
                  <div className="space-y-3 text-gray-600 mb-6">
                    <div>
                      <span className="font-semibold">Metro:</span> Línea 5, estación Quintana (a unos 3 minutos caminando).
                    </div>
                    <div>
                      <span className="font-semibold">Autobús:</span> Líneas 38, 113 y 146, parada en Calle Alcalá - Quintana.
                    </div>
                    <div>
                      <span className="font-semibold">Parking:</span> No dispone de parking propio, pero hay aparcamiento público en las calles cercanas (zona SER).


                    </div>
                  </div>
                  
                  {/* Placeholder for a map, indicating it's not available in demo */}
                  <div className="rounded-lg overflow-hidden h-64">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6073.921938403686!2d-3.656769023696617!3d40.4318631547178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f48fa0c7bc3%3A0xec3e3363ed5f98ae!2sRoc%C3%B3dromo%20Espacio%20Acci%C3%B3n!5e0!3m2!1ses!2ses!4v1747839931949!5m2!1ses!2ses"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

                </div>
              </div>
              
              {/* Contact Form Section */}
              <div // Animation style removed
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Envíanos un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                      required
                    />
                  </div>
                  
                  {/* Email and Phone Inputs (side-by-side on medium screens) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  {/* Subject Select Dropdown */}
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                      required
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="info">Información general</option>
                      <option value="reservas">Reservas</option>
                      <option value="cursos">Información sobre cursos</option>
                      <option value="tarifas">Información sobre tarifas</option>
                      <option value="grupos">Actividades para grupos</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>
                  
                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mr-2 h-4 w-4 text-custom-blue rounded focus:ring-custom-blue border-gray-300"
                      required
                    />
                    <label htmlFor="privacy" className="text-gray-600 text-sm">
                      He leído y acepto la <a href="#" className="text-custom-blue hover:underline">política de privacidad</a>
                    </label>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center bg-custom-blue hover:bg-custom-blue-dark text-white py-3 px-8 rounded-md transition-colors duration-300 shadow-md w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
                  >
                    Enviar mensaje <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Preguntas Frecuentes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* FAQ Item 1 */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md" // Animation style removed
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">¿Necesito experiencia previa para escalar en vuestro centro?</h3>
                  <p className="text-gray-600">
                    No, contamos con zonas para todos los niveles, incluyendo principiantes. Para escalar con cuerda, es necesario realizar un curso de iniciación o demostrar conocimientos básicos de seguridad.
                  </p>
                </div>
                
                {/* FAQ Item 2 */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md" // Animation style removed
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">¿Puedo alquilar todo el material necesario?</h3>
                  <p className="text-gray-600">
                    Sí, disponemos de servicio de alquiler de todo el material necesario: pies de gato, arnés, cuerda y dispositivo de aseguramiento. También contamos con una tienda especializada.
                  </p>
                </div>
                
                {/* FAQ Item 3 */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md" // Animation style removed
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">¿Hay que reservar con antelación?</h3>
                  <p className="text-gray-600">
                    Para la entrada general no es necesario reservar, pero para cursos, actividades especiales o grupos grandes recomendamos hacer reserva previa para garantizar plaza.
                  </p>
                </div>
                
                {/* FAQ Item 4 */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md" // Animation style removed
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">¿A partir de qué edad se puede escalar?</h3>
                  <p className="text-gray-600">
                    Tenemos actividades adaptadas a partir de 5 años. Los menores de 18 años deben contar con autorización de un adulto responsable, y los menores de 14 años deben estar siempre acompañados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;
