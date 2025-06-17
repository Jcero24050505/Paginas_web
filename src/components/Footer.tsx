import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/">
              <img 
                src="https://www.salamandra-bc.com/fotos/erp_salamandra/logo/salamandrabouldercafeblanco.png" 
                alt="Salamandra Boulder Café" 
                className="h-16 mb-4" 
              />
            </Link>
            <p className="mb-4">Desde el 2005 en el centro de Madrid</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>C/ Escosura nº 5, Madrid</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>647 796 333</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@salamandra-bc.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Lunes a Jueves: 12.00 – 23.00</p>
                  <p>Viernes: 11.30 – 23.00</p>
                  <p>Sábado: 12.00 - 21.00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-6 mt-6 text-center text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Salamandra Boulder Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;