import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">DÓNDE ESTAMOS</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span>C. de la Metalurgia 1, Alcobendas, Madrid</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span>C/ de los Manzanos 1, SS de los Reyes, Madrid</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">CONTACTO</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 text-blue-400 flex-shrink-0" size={18} />
                <span>Llámanos: 914 840 950</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-blue-400 flex-shrink-0" size={18} />
                <span>Correo: info@alcgestionretail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">NUESTRAS REDES SOCIALES</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AutoElite. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;