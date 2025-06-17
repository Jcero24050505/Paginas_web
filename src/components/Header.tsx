import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const brands = [
    { name: 'Hyundai', path: '/marcas/hyundai' },
    { name: 'Peugeot', path: '/marcas/peugeot' },
    { name: 'MG', path: '/marcas/mg' },
    { name: 'SsangYong', path: '/marcas/ssangyong' },
    { name: 'Subaru', path: '/marcas/subaru' },
    { name: 'Suzuki', path: '/marcas/suzuki' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://grupocobendai.com/wp-content/uploads/2020/10/logo-cobendai-blog-sticky.png" 
              alt="Grupo Cobendai" 
              className="h-10 md:h-12"
            />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">Inicio</Link></li>
                <li className="relative">
                  <button 
                    className="flex items-center font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Marcas <ChevronDown size={16} className="ml-1" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      {brands.map((brand) => (
                        <Link
                          key={brand.path}
                          to={brand.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li><Link to="/vehiculos-ocasion" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">Vehículos de Ocasión</Link></li>
                <li><Link to="/vehiculos-destacados" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">Vehículos Profesionales</Link></li>
                <li><Link to="/alquiler" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">Alquiler</Link></li>
                <li><Link to="/concesionarios" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">Concesionarios</Link></li>
                <li><Link to="/contacto" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">Contacto</Link></li>
              </ul>
            </nav>
            
            <Link 
              to="/contacto" 
              className="inline-flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              Contactar
            </Link>
          </div>
          
          <Link 
            to="/contacto" 
            className="hidden md:inline-flex lg:hidden items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            <Phone size={18} className="mr-2" />
            Contactar
          </Link>
          
          <button 
            className="lg:hidden text-gray-700 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-2">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link to="/" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Inicio</Link></li>
              {brands.map((brand) => (
                <li key={brand.path}>
                  <Link 
                    to={brand.path} 
                    className="block font-medium text-gray-800 hover:text-blue-600 transition-colors pl-4"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
              <li><Link to="/vehiculos-ocasion" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Vehículos de Ocasión</Link></li>
              <li><Link to="/vehiculos-destacados" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Vehículos Destacados</Link></li>
              <li><Link to="/servicios" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Servicios</Link></li>
              <li><Link to="/concesionarios" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Concesionarios</Link></li>
              <li><Link to="/contacto" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Contacto</Link></li>
              <li><Link to="/empleo" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Empleo</Link></li>
              <li><Link to="/alquiler" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Alquiler</Link></li>
              <li><Link to="/promociones" className="block font-medium text-gray-800 hover:text-blue-600 transition-colors">Promociones</Link></li>
              <li>
                <Link 
                  to="/contacto" 
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mt-4"
                >
                  <Phone size={18} className="mr-2" />
                  Contactar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;