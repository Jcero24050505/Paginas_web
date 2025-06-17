import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isElCentroOpen, setIsElCentroOpen] = useState(false);
  const [isActividadesOpen, setIsActividadesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsElCentroOpen(false);
    setIsActividadesOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleElCentro = () => setIsElCentroOpen(!isElCentroOpen);
  const toggleActividades = () => setIsActividadesOpen(!isActividadesOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="https://i.imgur.com/1QSL8LP.png" 
              alt="" 
              className="h-8 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <button 
                className="flex items-center text-blue-400 hover:text-[#50aed9]"
                onClick={toggleElCentro}
              >
                El Centro <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {isElCentroOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                  >
                    <Link to="/el-centro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#50aed9]">
                      Visión General
                    </Link>
                    <Link to="/el-centro/instalaciones" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#50aed9]">
                      Instalaciones
                    </Link>
                    <Link to="/el-centro/equipo-humano" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#50aed9]">
                      Equipo Humano
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <button 
                className="flex items-center text-blue-400 hover:text-[#50aed9]"
                onClick={toggleActividades}
              >
                Actividades <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {isActividadesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                  >
                    <Link to="/actividades/cursos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#50aed9]">
                      Cursos
                    </Link>
                    <Link to="/actividades/entrenamiento" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#50aed9]">
                      Entrenamiento
                    </Link>
                    <Link to="/actividades/escuela-juvenil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#50aed9]">
                      Escuela Juvenil
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/tarifas" className="text-blue-400 hover:text-[#50aed9]">
                Tarifas
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/programacion" className="text-blue-400 hover:text-[#50aed9]">
                Programación
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/contacto" className="text-blue-400 hover:text-[#50aed9]">
                Contacto
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden text-gray-800"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white"
          >
            <div className="px-4 py-2 space-y-1">
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-left text-gray-800"
                  onClick={toggleElCentro}
                >
                  <span>El Centro</span>
                  <motion.span
                    animate={{ rotate: isElCentroOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isElCentroOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1"
                    >
                      <Link to="/el-centro" className="block py-2 text-gray-700">
                        Visión General
                      </Link>
                      <Link to="/el-centro/instalaciones" className="block py-2 text-gray-700">
                        Instalaciones
                      </Link>
                      <Link to="/el-centro/equipo-humano" className="block py-2 text-gray-700">
                        Equipo Humano
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-left text-gray-800"
                  onClick={toggleActividades}
                >
                  <span>Actividades</span>
                  <motion.span
                    animate={{ rotate: isActividadesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isActividadesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1"
                    >
                      <Link to="/actividades/cursos" className="block py-2 text-gray-700">
                        Cursos
                      </Link>
                      <Link to="/actividades/entrenamiento" className="block py-2 text-gray-700">
                        Entrenamiento
                      </Link>
                      <Link to="/actividades/escuela-juvenil" className="block py-2 text-gray-700">
                        Escuela Juvenil
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/tarifas" className="block py-2 text-gray-800">
                Tarifas
              </Link>
              <Link to="/programacion" className="block py-2 text-gray-800">
                Programación
              </Link>
              <Link to="/contacto" className="block py-2 text-gray-800">
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;