import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface DropdownProps {
  title: string;
  items: {
    name: string;
    path: string;
  }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const Dropdown = ({ title, items, isOpen, onToggle, onClose }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="flex items-center text-white hover:text-orange-400 transition-colors py-2"
      >
        {title}
        <ChevronDown
          size={16}
          className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-zinc-700 rounded-md shadow-lg py-1 z-50">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm ${
                  isActive
                    ? 'text-orange-400 bg-zinc-600'
                    : 'text-white hover:bg-zinc-600 hover:text-orange-400'
                }`
              }
              onClick={onClose}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  const navStructure = {
    standalone: [
      { name: 'Inicio', path: '/' },
      { name: 'Noticias', path: '/noticias' },
      { name: 'Visita Virtual', path: '/visita-virtual' },
      { name: 'Contacto', path: '/contacto' },
    ],
    dropdowns: {
      'El Centro': [
        { name: 'Mi Primer Día', path: '/mi-primer-dia' },
        { name: 'Tarifas', path: '/tarifas' },
        { name: 'Instalaciones', path: '/instalaciones' },
        { name: 'Actividades', path: '/actividades-indoor' },
        { name: 'Horario de Actividades', path: '/actividades-semana' },
      ],
      'Experiencias': [
        { name: 'Un Día', path: '/experiencias/un-dia' },
        { name: 'Varios Días', path: '/experiencias/varios-dias' },
      ],
      'La Escuela': [
        { name: 'Cursos', path: '/cursos' },
      ],
      'Área de Cliente': [
        { name: 'Acceso al Centro', path: '/area-cliente/acceso' },
        { name: 'Regístrate', path: '/area-cliente/registro' },
        { name: 'Editar mis Datos', path: '/area-cliente/perfil' },
        { name: 'Reserva Actividades', path: '/area-cliente/reservas' },
        { name: 'Consultar/Anular Reservas', path: '/area-cliente/mis-reservas' },
        { name: 'Mi Extracto', path: '/area-cliente/extracto' },
        { name: 'Pagos por TPV', path: '/area-cliente/pagos' },
      ],
    },
  };

  return (
    <header className="bg-zinc-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img 
              src="https://www.salamandra-bc.com/fotos/erp_salamandra/logo/salamandrabouldercafeblanco.png" 
              alt="Salamandra Boulder Café" 
              className="h-12 md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              {navStructure.standalone.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-400 font-medium"
                        : "text-white hover:text-orange-400 transition-colors"
                    }
                    onClick={closeDropdowns}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              {Object.entries(navStructure.dropdowns).map(([title, items]) => (
                <li key={title}>
                  <Dropdown
                    title={title}
                    items={items}
                    isOpen={openDropdown === title}
                    onToggle={() => handleDropdownToggle(title)}
                    onClose={closeDropdowns}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-800 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                {navStructure.standalone.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-orange-400 font-medium block py-2"
                          : "text-white hover:text-orange-400 transition-colors block py-2"
                      }
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                {Object.entries(navStructure.dropdowns).map(([title, items]) => (
                  <li key={title} className="py-2">
                    <button
                      onClick={() => handleDropdownToggle(title)}
                      className="flex items-center justify-between w-full text-white hover:text-orange-400 transition-colors"
                    >
                      {title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === title && (
                      <ul className="pl-4 mt-2 space-y-2 border-l border-zinc-700">
                        {items.map((item) => (
                          <li key={item.path}>
                            <NavLink
                              to={item.path}
                              className={({ isActive }) =>
                                isActive
                                  ? "text-orange-400 font-medium block py-2"
                                  : "text-white hover:text-orange-400 transition-colors block py-2"
                              }
                              onClick={closeMenu}
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;