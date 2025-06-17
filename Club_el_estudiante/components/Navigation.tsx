'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Reservas', href: '/reservas' },
  { name: 'El Club', href: '#', subItems: [
    { name: 'Instalaciones', href: '#instalaciones' },
    { name: 'Apertura y Festivos', href: '#apertura' },
    { name: 'Precios', href: '#precios' },
    { name: 'Restaurantes', href: '#restaurantes' }
  ]},
  { name: 'Disciplinas', href: '/disciplinas', subItems: [
    { name: 'Pádel', href: '/disciplinas' },
    { name: 'Tenis', href: '/disciplinas' },
    { name: 'Golf', href: '/disciplinas' },
    { name: 'Box Aristo', href: '/disciplinas' }
  ]},
  { name: 'Contacto', href: '/contacto' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menuName: string) => {
    if (activeSubMenu === menuName) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(menuName);
    }
  };

  return (
    <nav className="relative">
      {/* Botón del menú móvil */}
      <button
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú de escritorio */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <div key={item.name} className="relative group">
            {item.name === 'Disciplinas' ? (
              <>
                <div
                  className="text-white font-medium hover:text-amber-300 transition-colors duration-200 cursor-pointer flex items-center justify-between"
                  onClick={(e) => {
                    toggleSubMenu(item.name);
                  }}
                >
                  <a
                    href={item.href}
                    className="text-white font-medium hover:text-amber-300 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  <span className="ml-2">
                    {activeSubMenu === item.name ? '▲' : '▼'}
                  </span>
                </div>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 transform origin-top-left group-hover:opacity-100 group-hover:visible opacity-0 invisible ${
                    activeSubMenu === item.name ? 'opacity-100 visible' : ''
                  }`}
                >
                  {item.subItems?.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </>
            ) : item.subItems ? (
              <>
                <a
                  href="#"
                  className="text-white font-medium hover:text-amber-300 transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu(item.name);
                  }}
                >
                  {item.name}
                </a>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 transform origin-top-left group-hover:opacity-100 group-hover:visible opacity-0 invisible ${
                    activeSubMenu === item.name ? 'opacity-100 visible' : ''
                  }`}
                >
                  {item.subItems?.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <a
                href={item.href}
                className="text-white font-medium hover:text-amber-300 transition-colors duration-200"
              >
                {item.name}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden absolute right-0 top-12 w-64 bg-white shadow-xl rounded-lg z-50">
          <div className="py-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <div
                  className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    if (item.name === 'Disciplinas') {
                      toggleSubMenu(item.name);
                    } else if (item.subItems) {
                      toggleSubMenu(item.name);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  <a
                    href={item.subItems ? '#' : item.href}
                    className="text-gray-800 font-medium"
                    onClick={(e) => {
                      if (item.name === 'Disciplinas') {

                      }
                      else if (item.subItems) {
                        e.preventDefault();
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </a>
                  {item.subItems && (
                    <span className="text-gray-500">
                      {activeSubMenu === item.name ? '−' : '+'}
                    </span>
                  )}
                </div>
                {item.subItems && activeSubMenu === item.name && (
                  <div className="bg-gray-50 pl-4">
                    {item.subItems?.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
