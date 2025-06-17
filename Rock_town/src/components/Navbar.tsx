import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <RouterNavLink to="/" className="text-xl font-bold text-gray-800 hover:text-amber-600 transition duration-300">
              <img 
                src="https://i.imgur.com/3dEV9nq.png" 
                alt="RockTown Climbing Logo" 
                className="h-12 md:h-16"
              />
            </RouterNavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-base font-medium ${
                    isActive 
                      ? 'text-amber-600 border-b-2 border-amber-600' 
                      : 'text-white hover:text-amber-600 hover:border-b-2 hover:border-amber-600'
                  } transition duration-300`
                }
              >
                {link.name}
              </RouterNavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-amber-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg overflow-hidden">
          <div className="px-4 py-2 space-y-3">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `block py-2 px-4 text-base font-medium ${
                    isActive 
                      ? 'text-amber-600 bg-amber-50' 
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                  } transition duration-300 rounded-md`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </RouterNavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;