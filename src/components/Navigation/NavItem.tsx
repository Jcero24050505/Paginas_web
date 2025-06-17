import React from 'react';
import styles from './Navigation.module.css';

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ children, href, handleSmoothScroll }) => {
  return (
    <li className={styles.navItem}>
      <a 
        href={href}
        onClick={(e) => handleSmoothScroll(e, href)}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;