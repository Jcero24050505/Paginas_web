
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const RocktownHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-rocktown-carbon text-rocktown-off-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-rocktown-burnt-orange/20 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl font-title">RT</span>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-rocktown-off-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-rocktown-electric-blue transition-colors font-body">Home</a>
          <a href="#clases" className="hover:text-rocktown-electric-blue transition-colors font-body">Clases Escalada</a>
          <a href="#cumple" className="hover:text-rocktown-electric-blue transition-colors font-body">Cumple Peques</a>
          <a href="#horarios" className="hover:text-rocktown-electric-blue transition-colors font-body">Horarios y Precios</a>
          <a href="#normas" className="hover:text-rocktown-electric-blue transition-colors font-body">Condiciones y Normas</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-4 mt-4 px-6 font-body">
          <a href="#home" className="hover:text-rocktown-electric-blue transition-colors py-2">Home</a>
          <a href="#clases" className="hover:text-rocktown-electric-blue transition-colors py-2">Clases Escalada</a>
          <a href="#cumple" className="hover:text-rocktown-electric-blue transition-colors py-2">Cumple Peques</a>
          <a href="#horarios" className="hover:text-rocktown-electric-blue transition-colors py-2">Horarios y Precios</a>
          <a href="#normas" className="hover:text-rocktown-electric-blue transition-colors py-2">Condiciones y Normas</a>
        </nav>
      )}
    </header>
  );
};

export default RocktownHeader;
