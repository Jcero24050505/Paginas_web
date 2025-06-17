import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dropdown.module.css';

interface DropdownItemProps {
  title: string;
  href: string;
  items: { href: string; label: string }[];
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ 
  title, 
  href, 
  items,
  handleSmoothScroll
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();
  
  const toggleDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href.startsWith('/disciplines')) {
      navigate(href);
      
      // Scroll to the specific section after a short delay to ensure the page has loaded
      const hash = href.split('#')[1];
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (href.startsWith('/clubs')) { // Agrega esta condición
      navigate(href);
      const hash = href.split('#')[1];
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
     else {
      handleSmoothScroll(e, href);
    }
  };
  
  return (
    <li ref={dropdownRef} className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
      <a 
        href={href}
        onClick={toggleDropdown}
      >
        {title}
      </a>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
        {items.map((item, index) => (
          <a 
            key={index}
            href={item.href}
            onClick={(e) => handleItemClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </li>
  );
};

export default DropdownItem;