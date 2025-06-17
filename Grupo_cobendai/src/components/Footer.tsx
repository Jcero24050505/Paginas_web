import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#004570] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and brief description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="https://i0.wp.com/ceciliasantiago.com/wp-content/uploads/2020/04/grupocobendai_logo-1.png?fit=1200%2C837&ssl=1" 
                alt="Grupo Cobendai" 
                className="h-10"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Grupo Cobendai es un grupo automovilístico líder en España con más de 20 años de experiencia en el sector.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/GrupoCobendai/?locale=es_ES" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/grupocobendai/?hl=es" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@grupocobendai?si=KBsXFKHfT2K6ZZS6" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.linkedin.com/company/grupo-cobendai/?originalSubdomain=es" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/quienes-somos" className="text-gray-400 hover:text-white transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/vehiculos-ocasion" className="text-gray-400 hover:text-white transition-colors">Vehículos de Ocasión</Link></li>
              <li><Link to="/vehiculos-destacados" className="text-gray-400 hover:text-white transition-colors">Vehículos Destacados</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/concesionarios" className="text-gray-400 hover:text-white transition-colors">Concesionarios</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Additional services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios adicionales</h3>
            <ul className="space-y-2">
              <li><Link to="/empleo" className="text-gray-400 hover:text-white transition-colors">Empleo</Link></li>
              <li><Link to="/alquiler" className="text-gray-400 hover:text-white transition-colors">Alquiler</Link></li>
              <li><Link to="/promociones" className="text-gray-400 hover:text-white transition-colors">Promociones</Link></li>
              <li><Link to="/marcas-relacionadas" className="text-gray-400 hover:text-white transition-colors">Nuestras marcas</Link></li>
              <li><Link to="/aviso-legal" className="text-gray-400 hover:text-white transition-colors">Aviso Legal</Link></li>
              <li><Link to="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/politica-cookies" className="text-gray-400 hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Calle de Sepúlveda, 12, Nave 1. 28108, Madrid</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">91 088 83 08</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@grupocobendai.com</span>
              </li>
            </ul>
            <Link 
              to="/contacto" 
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mt-6"
            >
              Contactar
            </Link>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Grupo Cobendai. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;