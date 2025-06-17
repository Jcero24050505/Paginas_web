import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Mountain className="h-8 w-8 text-blue-300" />
              <span className="ml-2 text-2xl font-bold">Yurok Adventures</span>
            </div>
            <p className="text-blue-200 mb-4">
              Vive la aventura con nosotros. Escalada, barranquismo, vías ferratas y mucho más para
              todos los niveles y edades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Actividades</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rocodromo/primer-dia" className="text-blue-200 hover:text-white transition-colors">
                  Rocódromo
                </Link>
              </li>
              <li>
                <Link to="/escuela/infantil" className="text-blue-200 hover:text-white transition-colors">
                  Escuela de Escalada
                </Link>
              </li>
              <li>
                <Link to="/actividades/ninos/cumpleanos" className="text-blue-200 hover:text-white transition-colors">
                  Cumpleaños
                </Link>
              </li>
              <li>
                <Link to="/naturaleza/escalada" className="text-blue-200 hover:text-white transition-colors">
                  Actividades en la Naturaleza
                </Link>
              </li>
              <li>
                <Link to="/actividades/empresa" className="text-blue-200 hover:text-white transition-colors">
                  Actividades para Empresas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tarifas/bonos" className="text-blue-200 hover:text-white transition-colors">
                  Tarifas
                </Link>
              </li>
              <li>
                <Link to="/actividades/colegios" className="text-blue-200 hover:text-white transition-colors">
                  Colegios
                </Link>
              </li>
              <li>
                <Link to="/rocodromo/ocupacion" className="text-blue-200 hover:text-white transition-colors">
                  Ocupación de Barras
                </Link>
              </li>
              <li>
                <Link to="/rocodromo/cafe" className="text-blue-200 hover:text-white transition-colors">
                  Yurok Café
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-300 mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-200">
                  Calle Aventura, 123<br />28001 Madrid
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-300 mr-2 flex-shrink-0" />
                <a href="tel:+34912345678" className="text-blue-200 hover:text-white transition-colors">
                  +34 912 345 678
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-300 mr-2 flex-shrink-0" />
                <a href="mailto:info@yurok-adventures.com" className="text-blue-200 hover:text-white transition-colors">
                  info@yurok-adventures.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Yurok Adventures. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;