import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Mountain } from 'lucide-react';
import { NavItem } from '../../types';
import { navigationItems } from '../../data/navigation';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderSubMenu = (items: NavItem[], level = 0) => {
    return (
      <ul
        className={`submenu ${
          level === 0
            ? 'absolute left-0 top-full bg-white shadow-lg rounded-b-lg py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10'
            : 'absolute left-full top-0 bg-white shadow-lg rounded-lg py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20'
        }`}
      >
        {items.map((item, index) => (
          <li key={index} className="relative group/submenu">
            {item.path ? (
              <Link
                to={item.path}
                className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
                {item.submenu && <ChevronRight size={16} />}
              </Link>
            ) : (
              <span className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between cursor-default transition-colors">
                {item.title}
                {item.submenu && <ChevronRight size={16} />}
              </span>
            )}
            {item.submenu && renderSubMenu(item.submenu, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Mountain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-blue-800">Yurok Adventures</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer transition-colors ${
                        scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-600'
                      }`}
                    >
                      {item.title}
                      {item.submenu && <ChevronDown size={16} className="ml-1" />}
                    </span>
                  )}
                  {item.submenu && renderSubMenu(item.submenu)}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-gray-800 hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-white shadow-xl z-50 overflow-auto transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Mountain className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-800">Yurok</span>
            </Link>
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-800 hover:bg-gray-100">
              <X size={24} />
            </button>
          </div>
          <nav>
            <ul className="space-y-1">
              {navigationItems.map((item, index) => (
                <MobileMenuItem key={index} item={item} toggleMenu={toggleMenu} />
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

interface MobileMenuItemProps {
  item: NavItem;
  toggleMenu: () => void;
  level?: number;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, toggleMenu, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="flex items-center">
        {item.submenu ? (
          <button
            className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
              level === 0 ? 'text-gray-800' : 'text-gray-600'
            } hover:bg-blue-50 hover:text-blue-600`}
            onClick={toggleSubMenu}
          >
            <span>{item.title}</span>
            <ChevronDown
              size={16}
              className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        ) : (
          <Link
            to={item.path || '#'}
            className={`block px-3 py-2 rounded-md text-sm font-medium ${
              level === 0 ? 'text-gray-800' : 'text-gray-600'
            } hover:bg-blue-50 hover:text-blue-600 w-full`}
            onClick={toggleMenu}
          >
            {item.title}
          </Link>
        )}
      </div>
      {item.submenu && isOpen && (
        <ul className={`mt-1 space-y-1 ${level > 0 ? 'ml-4' : ''}`}>
          {item.submenu.map((subItem, index) => (
            <MobileMenuItem key={index} item={subItem} toggleMenu={toggleMenu} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Header;