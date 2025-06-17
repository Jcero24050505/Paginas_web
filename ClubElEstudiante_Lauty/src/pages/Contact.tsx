import React from 'react';
import styles from './Contacto.module.css';

const Contacto: React.FC = () => {
    <div id="formulario" className={styles.contactoPage}>
      <section id="formulario" className={styles.contactInfoSection}>
        <div className={styles.contactInfoLeft}>
          <h2>CONTACTO</h2>
          <p>Encuéntranos en el mapa</p>
          <h3>TELÉFONOS</h3>
          <ul>
            <li>Pádel & Tenis: 91 653 16 73 / 677 212 074</li>
            <li>Golf: 91 704 81 94</li>
            <li>Escuela de Pádel: 91 659 02 37 / 669 394 487</li>
            <li>Tenisset Academy: 91 659 02 38 / 617 439 841 / 607 682 001</li>
            <li>BOX Aristo: 620 821 934</li>
            <li>Restaurante El Estudiante: 91 654 67 07</li>
            <li>Restaurante José Luis El Estudiante Golf: 91 704 92 56</li>
          </ul>
          <h3>DIRECCIÓN</h3>
          <p>Calle del Alto, s/n</p>
          <p>28108 Alcobendas</p>
          <p>Madrid, España</p>
          <h3>HORARIOS</h3>
          <p>Lunes a Jueves 10:00 a 23:00.</p>
          <p>(Recepción Pádel y Golf hasta las 22:00)</p>
          <p>Viernes 10:00 a 22:00.</p>
          <p>Sábados y Domingos 08:00 a 21:00.</p>
          <h3>EMAIL:</h3>
          <p><a href="mailto:info@clubelestudiante.com">info@clubelestudiante.com</a></p>
        </div>
        <div className={styles.contactInfoRight}>
          <img src={ContactImage} alt="Imagen de Contacto" className={styles.contactImage} />
        </div>
      </section>

      <section className={styles.contactFormSection}>
        <div className={styles.contactFormLeft}>
          <h2>FORMULARIO DE CONTACTO</h2>
          <p>¿Tienes una pregunta para nosotros?</p>
          <p>Contacta con nosotros para pedirnos información. Estaremos encantados de atender tus peticiones o dudas.</p>
        </div>
        <div className={styles.contactFormRight}>
          <div className={styles.formInputs}>
            <input type="text" placeholder="Nombre" className={styles.smallInput} />
            <input type="email" placeholder="Email" className={styles.smallInput} />
          </div>
          <textarea placeholder="Mensaje" className={styles.largeInput}></textarea>
          <button className={styles.submitButton}>Enviar Mensaje</button>
        </div>
      </section>
    </div>
  );
};

export default Contacto;