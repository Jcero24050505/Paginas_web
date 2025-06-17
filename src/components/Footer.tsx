import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { NAV_LINKS } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <NavLink to="/" className="text-2xl font-bold mb-4">
              <img 
                src="https://i.imgur.com/3dEV9nq.png" 
                alt="RockTown Climbing Logo" 
                className="h-16 bg-black rounded-lg p-1"
              />
            </NavLink>
            <p className="text-gray-300 text-center md:text-left">
              Descubre la emoción de la escalada en pleno centro de Madrid.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Navega</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition duration-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact and Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">¡Síguenos!</h3>
            <SocialLinks className="flex justify-center md:justify-start space-x-4 mb-4" />
            <address className="text-gray-300 not-italic text-center md:text-left">
              <p className="mb-2">C/López de Hoyos 74 Local 3.Esquina con Calle Quintiliano</p>
              <p className="mb-2"></p>
              <p className="mb-2">
                <a 
                  href="tel:+34912345678" 
                  className="hover:text-amber-400 transition duration-300"
                >
                  +34 613 19 70 87
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@rocktownclimb.com" 
                  className="hover:text-amber-400 transition duration-300"
                >
                  rocktown@rocktownclimb.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} RockTown Climbing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;