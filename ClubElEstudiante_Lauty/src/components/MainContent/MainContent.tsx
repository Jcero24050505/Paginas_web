import React from 'react';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <main>
      <section id="inicio" className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>CLUB EL ESTUDIANTE
            <br />
          </h1>
        </div>
      </section>

      <section id="reservas" className={styles.reservationSection}>
        <div className="container">
          <div className={styles.reservationContent}>
            <div className={styles.reservationText}>
              <h2 className={styles.reservationTitle}>¿Quieres venir a jugar?</h2>
              <p>RESERVA TU PISTA ONLINE</p>
              <p className={styles.phoneNumber}>O LLAMA AL 91 653 16 73</p>
              <a href="#" className={styles.reserveButton}>RESERVA TU PISTA</a>
            </div>
            <div className={styles.imageContainer}>
              <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/pelota-logo.png" alt="Imagen de la sección de reservas" />
            </div>
          </div>
        </div>
      </section>

      <section id="elclub" className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.imageContainer}>
              <img src="https://i.imgur.com/5DDPHer.jpeg" alt="Club El Estudiante" />
            </div>
            <div className={styles.aboutText}>
              <h2>CLUB EL ESTUDIANTE</h2>
              <p>
                En el Club El Estudiante llevamos desde 1977 ofreciéndote las mejores experiencias deportivas. 
                Ponemos las mejores instalaciones a tu disposición, con 40 pistas de pádel, 12 pistas de tenis 
                y 80 puestos de golf, en un entorno muy especial. Ademas, una amplia selección gastronómica 
                te espera en cualquiera de nuestros dos restaurantes.
              </p>
              <div className={styles.imageGrid}>
                <div className={styles.imageContainer}>
                  <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/logo-viejo.jpg" alt="Logo antiguo" />
                </div>
                <div className={styles.imageContainer}>
                  <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/logo-nuevo.jpg" alt="Logo nuevo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.yearsSection}>
        <div className="container">
          <h2 className={styles.yearsTitle}>¡ Más de 40 años con vosotros !</h2>
        </div>
      </section>

      <section id="disciplinas" className={styles.disciplinesSection}>
        <div className="container">
          <div className={styles.disciplinesContent}>
            <div className={styles.disciplinesText}>
              <h2 className={styles.disciplinesTitle}>DISFRUTA DE UNA DE NUESTRAS DISCIPLINAS</h2>
              <p>
                En Club El Estudiante disponemos de diferentes disciplinas para todos los gustos. 
                Encuentra el deporte que más te apasiona y practícalo en las mejores y más modernas 
                instalaciones y con los mejores profesores a tu disposición.
              </p>
              <p>Las mejores experiencias sin cuotas fijas.</p>
            </div>
            <div className={styles.disciplinesImageGrid}>
              <div className={styles.imageContainer}>
                <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/logo-small-padel-el-estudiante.png" alt="Padel" />
              </div>
              <div className={styles.imageContainer}>
                <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/logo-small-tenis-el-estudiante.png" alt="Tenis" />
              </div>
              <div className={styles.imageContainer}>
                <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/logo-small-golf-el-estudiante.png" alt="Golf" />
              </div>
              <div className={styles.imageContainer}>
                <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/logo-small-padel-el-estudiante.png" alt="Box" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.restaurantsSection}>
        <div className="container">
          <div className={styles.restaurantsContent}>
            <h2 className={styles.restaurantsTitle}>
              RESTAURANTE EL ESTUDIANTE & RESTAURANTE JOSE LUIS EL ESTUDIANTE GOLF
            </h2>
            <p>
              Una amplia selección gastronómica te espera en cualquiera de nuestros dos 
              restaurantes disponibles dentro de nuestras instalaciones.
            </p>
            <a href="#" className={styles.restaurantButton}>Más información</a>
          </div>
        </div>
      </section>

      <section className={styles.golfSection}>
        <div className="container">
          <div className={styles.golfContent}>
            <div>
              <h2 className={styles.golfTitle}>KIBEL GOLF</h2>
              <p>
                Soluciones para todo tipo de jugadores en Kibel Golf. Descubre una experiencia 
                de golf en la compra de tu material.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/kibel-golf.jpg" alt="Kibel Golf" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;