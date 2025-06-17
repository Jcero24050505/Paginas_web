import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#00452f] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <img 
              src="https://racketsmadrid.com/wp-content/uploads/2019/03/logo-Rackets-Madrid.jpeg" 
              alt="Rackets Madrid Logo" 
              className="h-16 mb-4"
            />
            <p className="text-white mb-4">
              Club deportivo ubicado en Las Rozas de Madrid, con pistas de squash, 
              pádel y una espaciosa sala dedicada a actividades de fitness.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white pb-2">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/padel-madrid-las-rozas" className="text-white hover:text-white transition-colors">Pádel</Link></li>
              <li><Link to="/fitness-madrid-las-rozas" className="text-white hover:text-white transition-colors">Fitness</Link></li>
              <li><Link to="/blog" className="text-white hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contacto-rackets-madrid-las-rozas" className="text-white hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white pb-2">Contacto</h3>
            <div className="space-y-3 text-white">
              <p>Teléfono: 91 426 70 08 / 686 058 973</p>
              <p>Email: hola@racketsmadrid.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/racketsmadrid" className="text-white hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/racketsmadrid/" className="text-white hover:text-blue-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://x.com/racketsmadrid" className="text-white hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white pb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/aviso-legal" className="text-white hover:text-blue-300 transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidad" className="text-white hover:text-blue-300 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="text-white hover:text-blue-300 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white text-sm text-white text-center">
          <p>© {new Date().getFullYear()} Rackets Madrid. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;