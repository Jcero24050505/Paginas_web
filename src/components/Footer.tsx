import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              Tu rocódromo en el centro de Madrid. 400m² de pura diversión para escalar y 
              compartir tiempo de ocio con familia y amig_s.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Inicio</Link></li>
              <li><Link to="/clases-escalada-madrid" className="text-gray-300 hover:text-white">Clases de Escalada</Link></li>
              <li><Link to="/bautismo-escalada-madrid" className="text-gray-300 hover:text-white">Bautismo de Escalada</Link></li>
              <li><Link to="/tienda-escalada-madrid" className="text-gray-300 hover:text-white">Tienda</Link></li>
              <li><Link to="/clases-yoga-madrid" className="text-gray-300 hover:text-white">Clases de Yoga</Link></li>
              <li><Link to="/outdoor" className="text-gray-300 hover:text-white">Outdoor</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              <li><Link to="/donde-estamos" className="text-gray-300 hover:text-white">Dónde Estamos</Link></li>
              <li><Link to="/precios-rocodromo-madrid" className="text-gray-300 hover:text-white">Precios</Link></li>
              <li><Link to="/fotos-instalaciones-rocodromo" className="text-gray-300 hover:text-white">Instalaciones</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/aviso-legal" className="text-gray-300 hover:text-white">Aviso Legal</Link></li>
              <li><Link to="/privacidad" className="text-gray-300 hover:text-white">Política de Privacidad</Link></li>
              <li><Link to="/politica-cookies" className="text-gray-300 hover:text-white">Política de Cookies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Calle San Hermenegildo, Nº 25, Madrid, 28015</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@uadibloc.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <img 
                src="https://www.uadibloc.com/img/fondos-europeos.jpg" 
                alt="Fondos Europeos" 
                className="max-w-[200px]"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} Uadibloc - RAINBOW CLIMB SL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;