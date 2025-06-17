import React from 'react';
import SocialLinks from './SocialLinks';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contactanos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
            <div className="bg-amber-100 p-3 rounded-full mb-4">
              <MapPin size={24} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dirección</h3>
            <p className="text-gray-600">
              C/López de Hoyos 74 Local 3.<br />
              Esquina con Calle Quintiliano
            </p>
          </div>
          
          {/* Contact */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
            <div className="bg-amber-100 p-3 rounded-full mb-4">
              <Phone size={24} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
            <p className="text-gray-600">
              <a href="tel:+34912345678" className="hover:text-amber-600 transition duration-300">
                +34 613 19 70 87
              </a>
            </p>
            <div className="mt-4 bg-amber-100 p-3 rounded-full">
              <Mail size={24} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-2">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:info@rocktownclimb.com" className="hover:text-amber-600 transition duration-300">
                rocktown@rocktownclimb.com
              </a>
            </p>
          </div>
          
          {/* Hours */}
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
  <div className="bg-amber-100 p-3 rounded-full mb-4">
    <Clock size={24} className="text-amber-600" />
  </div>
  <h3 className="text-xl font-semibold mb-2">Horario</h3>
  <ul className="text-gray-600">
    <li className="mb-1">Lunes - Jueves: 12:00 - 22:00</li>
    <li className="mb-1">Viernes: 12:00 - 20:00</li>
    <li className="mb-1">Sábado y Domingo: 10:00 - 20:00</li>
    <li className="mt-2 text-sm text-gray-500">Clases: Lun - Jue de 17:00 a 22:00 (Reserva previa)</li>
  </ul>
</div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">¡Síguenos!</h3>
          <SocialLinks className="flex justify-center space-x-6" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;