import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Clases de Escalada', path: '/clases-escalada-madrid' },
    { name: 'Bautismo de Escalada', path: '/bautismo-escalada-madrid' },
    { name: 'Tienda', path: '/tienda-escalada-madrid' },
    { name: 'Clases de Yoga', path: '/clases-yoga-madrid' },
    { name: 'Dónde Estamos', path: '/donde-estamos' },
    { name: 'Precios', path: '/precios-rocodromo-madrid' },
    { name: 'Instalaciones', path: '/fotos-instalaciones-rocodromo' },
    { name: 'Outdoor', path: '/outdoor' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-primary-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav className={`
          fixed md:relative top-0 left-0 h-screen md:h-auto w-full md:w-auto 
          flex flex-col md:flex-row items-center justify-center md:justify-end gap-6
          bg-white md:bg-transparent
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:flex
        `}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                text-[base] font-medium hover:text-primary-700 transition-colors
                ${location.pathname === item.path ? 'text-[#2494e3]' : 'text-[#2494e3]'}
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;