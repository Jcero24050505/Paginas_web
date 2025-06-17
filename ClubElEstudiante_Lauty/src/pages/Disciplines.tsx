import React from 'react';
import styles from './Disciplines.module.css';

const Disciplines: React.FC = () => {
  return (
    <div className={styles.disciplinesPage}>
      <header className={styles.pageHeader}>
        <h1>Nuestras Disciplinas</h1>
        <h2>¿Quieres disfrutar de tu deporte favorito en un club privado sin necesidad de ser socio?<br/><br/>
Este es tu sitio… Disfruta de El Estudiante. Un club deportivo, sin cuotas, funcionando sin descanso desde 1977.<br/><br/>
Apúntate a ti o a los tuyos a nuestras clases de Tenis, Pádel o Golf.</h2>
      </header>
      
      <section id="padel" className={styles.disciplineSection}>
        <div className="container">
          <div className={styles.disciplineContent}>
            <div className={styles.disciplineInfo}>
              <h2>CLUB DE PÁDEL</h2>
              <h3>El club de pádel más grande del mundo.</h3>
              <p>Con 40 pistas de pádel, 30 cubiertas y 10 al aire libre, El Estudiante es el club de pádel más grande del mundo, además de uno de los pioneros en el sector. Situado en un entorno muy especial de Alcobendas, además de poder alquilar nuestras pistas cubiertas y al aire libre, nuestro Pádel Academy pone a los mejores profesores a tu disposición para ayudarte a mejorar tu juego. Y si lo que quieres es ponerte a prueba, apúntate a nuestro Ranking y disfruta jugando contra rivales de tu nivel.</p>
            </div>
            <div className={styles.disciplineImage}>
              <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/20220906_142500-e1695106997832-1150x518-1.jpg" alt="Pádel" />
            </div>
          </div>
        </div>
      </section>

      <section id="tenis" className={styles.disciplineSection}>
        <div className="container">
          <div className={styles.disciplineContent}>
            <div className={styles.disciplineImage}>
              <img src="https://i.imgur.com/Bbz9yBY.jpeg" alt="Tenis" />
            </div>
            <div className={styles.disciplineInfo}>
              <h2>CLUB DE TENIS</h2>
               <h3>Desde 1977 ofreciéndote las mejores experiencias.</h3>
              <p>El Estudiante es uno de los pioneros entre los clubs de tenis. Situado en un entorno muy especial de Alcobendas, además de poder alquilar nuestras pistas, Tennisset Academy pone a los mejores profesores a tu disposición para ayudarte a mejorar tu juego y formarte como tenista. Y si lo que quieres es ponerte a prueba, apúntate a nuestro Ranking y disfruta jugando contra rivales de tu nivel.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="golf" className={styles.disciplineSection}>
        <div className="container">
          <div className={styles.disciplineContent}>
            <div className={styles.disciplineInfo}>
              <h2>GOLF</h2>
              <h3>80 puestos con Pitch & Putt.</h3>
              <p>Cancha de practicas con 80 puestos cubiertos en dos alturas, y Pitch and Putt de 9 hoyos. Ven a practicar a la cancha de practicas más moderna de Madrid. Con Putting Green y zona de approach.</p>
            </div>
            <div className={styles.disciplineImage}>
              <img src="https://fedgolfmadrid.com/upload/imagenclub/CMD4/CMD4.jpg" alt="Golf" />
            </div>
          </div>
        </div>
      </section>

      <section id="box" className={styles.disciplineSection}>
        <div className="container">
          <div className={styles.disciplineContent}>
            <div className={styles.disciplineImage}>
              <img src="https://clubelestudiante.com/wp-content/uploads/2024/03/box-main2.jpg" alt="Box" />
            </div>
            <div className={styles.disciplineInfo}>
              <h2>BOX ARISTO</h2>
              <h3>Fuerza, velocidad, adrenalina.</h3>
              <p>BOX Aristo cuenta con 450m2 de instalaciones, donde encontraras los mejores servicios y profesionales a tu disposición. Todo lo que necesitas para llegar a lo más alto.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disciplines;