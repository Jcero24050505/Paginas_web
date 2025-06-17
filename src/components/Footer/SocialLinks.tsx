import React from 'react';
import styles from './Footer.module.css';

const SocialLinks: React.FC = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="#" aria-label="Facebook">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" aria-label="YouTube">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

export default SocialLinks;