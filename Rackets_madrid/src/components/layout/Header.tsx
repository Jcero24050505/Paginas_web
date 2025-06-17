import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'SQUASH', path: '/' },
    { name: 'PADEL', path: '/padel-madrid-las-rozas' },
    { name: 'FITNESS', path: '/fitness-madrid-las-rozas' },
    { name: 'GALERÍA', path: '/galeria' },
    { name: 'NOTICIAS', path: '/blog' },
    { name: 'CONTACTO', path: '/contacto-rackets-madrid-las-rozas' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/racketsmadrid', icon: 'facebook', title: 'Facebook' },
    { href: 'https://www.instagram.com/racketsmadrid/', icon: 'instagram', title: 'Instagram' },
    { href: 'https://twitter.com/racketsmadrid', icon: 'twitter', title: 'Twitter' },
    { href: 'https://www.youtube.com/channel/UCW7DZo8RVVsKAXnvPNNQBuA', icon: 'youtube', title: 'YouTube' },
  ];

  return (
    <header className={`bg-[#00452f] shadow-md z-50 ${isSticky ? 'sticky top-0' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="block">
            <img 
              src="https://racketsmadrid.com/wp-content/uploads/2019/03/logo-Rackets-Madrid.jpeg" 
              alt="Rackets Madrid Logo" 
              className="h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 uppercase text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white hover:text-blue-300 transition ${
                        isActive ? 'text-blue-300 border-b-2 border-blue-300' : ''
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 ml-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className="text-white hover:text-blue-300"
                >
                  <i className={`icon-${link.icon}`}></i>
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#00452f] shadow-lg">
          <ul className="flex flex-col py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `block py-2 text-white hover:text-blue-300 transition ${
                      isActive ? 'text-blue-300 font-medium' : ''
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-4 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className="text-white hover:text-blue-300"
                >
                  <i className={`icon-${link.icon}`}></i>
                </a>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;