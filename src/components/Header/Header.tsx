import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from './Logo';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);
  
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Logo />
          
          <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${menuOpen ? 'times' : 'bars'}`}></i>
          </button>
          
          <Navigation menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;