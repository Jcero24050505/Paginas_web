import React from 'react';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/club-el-estudiante-logo.png" alt="Logo del Club" className={styles.logoImage} />
      <span>CLUB</span>
      <span className={styles.studentName}>EL ESTUDIANTE</span>
    </div>
  );
};

export default Logo;