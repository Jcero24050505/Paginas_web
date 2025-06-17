import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">Llámanos: 914 840 950</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-300 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-300 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'} transition-all duration-300 py-4 px-4 md:px-6`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-blue-800 font-bold text-2xl">AutoElite</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#" label="Inicio" active />
            <NavLink href="#" label="Conócenos" />
            <NavLink href="#" label="Modelos coches" />
            <NavLink href="#" label="Contacto" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-4 py-4 shadow-lg absolute w-full">
            <div className="flex flex-col space-y-4">
              <NavLink href="#" label="Inicio" active />
              <NavLink href="#" label="Conócenos" />
              <NavLink href="#" label="Modelos coches" />
              <NavLink href="#" label="Contacto" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, active }) => (
  <a 
    href={href} 
    className={`text-gray-800 font-medium hover:text-blue-600 transition-colors relative ${
      active ? 'text-blue-600' : ''
    }`}
  >
    {label}
    {active && (
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
    )}
  </a>
);

export default Header;