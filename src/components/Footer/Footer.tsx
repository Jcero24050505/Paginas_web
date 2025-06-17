import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>HORARIOS</h3>
            <p>Lunes a Viernes 9.30 a 23.00h</p>
            <p>(Recepción del Club y Cancha de Golf hasta las 22.00h)</p>
            <p>Sábados y Domingo 9.00 a 21.00h.</p>
            <a href="#" className={styles.moreInfo}>Más información</a>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>DIRECCIÓN</h3>
            <p>Calle del Alto, s/n</p>
            <p>28108 Alcobendas</p>
            <p>Madrid, España</p>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>TELÉFONOS</h3>
            <div className={styles.phones}>
              <div>
                <h4>Padel & Tenis</h4>
                <p>91 653 16 73</p>
                <p>677 212 074</p>
              </div>
              <div>
                <h4>Golf</h4>
                <p>91 704 81 94</p>
                <p>608094046</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;