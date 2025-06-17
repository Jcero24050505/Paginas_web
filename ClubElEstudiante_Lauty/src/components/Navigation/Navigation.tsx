import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import DropdownItem from './DropdownItem';
import styles from './Navigation.module.css';

interface NavigationProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ menuOpen, closeMenu }) => {
  const navigate = useNavigate();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
  
    if (targetId === '#') return;
  
    // Modifica esto:
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        // Extrae el ID del hash si existe
        const hash = targetId.includes('#') ? targetId.split('#')[1] : '';
        const element = hash ? document.getElementById(hash) : null;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
       // Extrae el ID del hash si existe
        const hash = targetId.includes('#') ? targetId.split('#')[1] : '';
        const element = hash ? document.getElementById(hash) : null;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    closeMenu();
  };
  
  return (
    <nav>
      <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
        <NavItem handleSmoothScroll={handleSmoothScroll} href="#inicio">
          Inicio
        </NavItem>
        
        <NavItem handleSmoothScroll={handleSmoothScroll} href="#reservas">
          Reservas
        </NavItem>
        
        <DropdownItem 
          title="El Club" 
          href="#elclub"
          handleSmoothScroll={handleSmoothScroll}
          items={[
            { href: '/clubs#instalaciones', label: 'Instalaciones' },
            { href: '/clubs#apertura', label: 'Aperturas y Festivos' },
            { href: '/clubs#precios', label: 'Precios' },
            { href: '/clubs#restaurantes', label: 'Restaurantes' }
          ]}
        />
        
        <DropdownItem 
          title="Disciplinas" 
          href="#disciplinas"
          handleSmoothScroll={handleSmoothScroll}
          items={[
            { href: '/disciplines#padel', label: 'Padel' },
            { href: '/disciplines#tenis', label: 'Tenis' },
            { href: '/disciplines#golf', label: 'Golf' },
            { href: '/disciplines#box', label: 'Box Aristo' }
          ]}
        />
        
        <NavItem handleNavigatePage={() => handleNavigatePage('/formulario')} href="/formulario">
          Contacto
        </NavItem>

        <NavItem handleSmoothScroll={handleSmoothScroll} href="#tour360">
          Tour 360°
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navigation;