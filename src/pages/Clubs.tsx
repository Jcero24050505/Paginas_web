import React from 'react';
import styles from './Clubs.module.css';

const Clubs: React.FC = () => {
  return (
    <div className={styles.disciplinesPage}>
      {/* Sección Principal de Bienvenida */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeContainer}>
          <h1>CONOCE NUESTRO CLUB</h1>
          <p>
            En el Club El Estudiante llevamos desde 1977 ofreciéndote las mejores
            experiencias deportivas. Ponemos las mejores instalaciones a tu
            disposición, con 40 pistas de pádel, 12 pistas de tenis y 80 puestos
            de golf, en un entorno muy especial. Además, una amplia selección
            gastronómica te espera en cualquiera de nuestros dos restaurantes.
          </p>
          <div className={styles.videoModule}>
            {/* Aquí iría el componente o la lógica para insertar el video de YouTube */}
            <div>[Módulo para video de YouTube]</div>
          </div>
        </div>
      </section>

       {/* Sección de Instalaciones */}
      <section id="instalaciones" className={styles.blackModule}>
        <div className={styles.sectionTitle}>
          <h2>CONOCE NUESTRAS INSTALACIONES</h2>
        </div>
        <div className={styles.facilitiesGrid}>
          <div className={styles.facilityItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/table_tennis.png" alt="Pistas de Pádel" />
            <p>40 PISTAS DE PÁDEL</p>
          </div>
          <div className={styles.facilityItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/tennis.png" alt="Pistas de Tenis" />
            <p>12 PISTAS DE TENIS</p>
          </div>
          <div className={styles.facilityItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/golf.png" alt="Puestos de Golf" />
            <p>80 PUESTOS DE GOLF</p>
          </div>
          <div className={styles.facilityItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/weightlifting.png" alt="Instalaciones de CrossFit" />
            <p>INSTALACIONES DE CROSSFIT</p>
          </div>
          <div className={styles.facilityItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/leaf.png" alt="Zonas Verdes" />
            <div className={styles.facilityTextContainer}>
              <p>ZONAS VERDES</p>
              <p className={styles.facilityDescription}>
                Más de 100.000m2 y más de un millar de pinos, un pulmón a solo 10
                minutos de Madrid.
              </p>
            </div>
          </div>
          <div className={styles.facilityItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/dish.png" alt="Restaurantes" />
            <div className={styles.facilityTextContainer}>
              <p>RESTAURANTES</p>
              <p className={styles.facilityDescription}>
                Una amplia selección gastronómica te espera en nuestros dos
                restaurantes con terraza.
              </p>
            </div>
          </div>
          <div className={styles.facilityItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/shower.png" alt="Vestuarios" />
            <div className={styles.facilityTextContainer}>
              <p>VESTUARIOS MASC/FEM</p>
              <p className={styles.facilityDescription}>
                Ponemos las mejores instalaciones a tu disposición en un entorno
                muy especial.
              </p>
            </div>
          </div>
          <div className={styles.facilityItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/car.png" alt="Parking Privado" />
            <div className={styles.facilityTextContainer}>
              <p>PARKING PRIVADO</p>
              <p className={styles.facilityDescription}>
                Más de 500 plazas de aparcamiento divididas en dos complejos con
                vigilancia.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de 8 Imágenes */}
        <div className={styles.imageGridSection}>
          <div className={styles.imageGridRow}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/07-480x360.jpg" alt="Imagen 1" />
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/06-480x360.jpg" alt="Imagen 2" />
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/08-480x360.jpg" alt="Imagen 3" />
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/09-480x360.jpg" alt="Imagen 4" />
          </div>
          <div className={styles.imageGridRow}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/10-480x360.jpg" alt="Imagen 5" />
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/11-480x360.jpg" alt="Imagen 6" />
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/12-480x360.jpg" alt="Imagen 7" />
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/11/05-480x360.jpg" alt="Imagen 8" />
          </div>
        </div>

        {/* Sección Zona Infantil */}
        <div className={styles.centeredTextSection}>
          <h2>TENEMOS ZONA INFANTIL EN EL ESTUDIANTE GOLF</h2>
          <p>
            VEN A DISFRUTAR DEL FIN DE SEMANA CON LOS NIÑOS A NUESTRO RESTAURANTE
            JOSÉ LUIS del ESTUDIANTE GOLF y despreocúpate de los más pequeños…
          </p>
          <p>Tenemos animación profesional con Fiestas Infantiles CHIKIFIESTAS.</p>
          <p>Horario: Sábados, Domingos y Festivos</p>
          <p>14.00h a 17.30-18.00h</p>
          <p>Tarde/noche y otros horarios bajo petición.</p>
          <p>Contacto: info@chikifiestas.com</p>
          <p>Ángel: 686399529</p>
        </div>
      </section>

      {/* Sección de Apertura y Festivos */}
      <section id="apertura" className={styles.whiteModule}>
        <div className={styles.sectionTitle}>
          <h2>APERTURA Y FESTIVOS</h2>
          <p className={styles.centeredText}>
            Horario de apertura y calendario de festivos
          </p>
        </div>
        <div className={styles.centeredImage}>
          <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/apertura-main.jpg" alt="Horario de Apertura" />
        </div>
        <div className={styles.openingHoursGrid}>
          <div className={styles.openingHoursItem}>
            <h3>LUNES A JUEVES</h3>
            <p>09:30 a 23:00</p>
            <p>Recepción del Club y Cancha de Golf hasta las 22:00</p>
          </div>
          <div className={styles.openingHoursItem}>
            <h3>VIERNES</h3>
            <p>09:30 a 22:00</p>
            <p>Recepción hasta las 22:00</p>
          </div>
          <div className={styles.openingHoursItem}>
            <h3>SÁBADO</h3>
            <p>09:00 a 21:00</p>
            <p>Recepción hasta las 21:00</p>
          </div>
          <div className={styles.openingHoursItem}>
            <h3>DOMINGO</h3>
            <p>09:00 a 21:00</p>
            <p>Recepción hasta las 21:00</p>
          </div>
          <div className={styles.openingHoursItem}>
            <h3>24 & 31 DICIEMBRE</h3>
            <p>Abierto de 10:00 a 14:00</p>
            <p>Días especiales</p>
          </div>
          <div className={styles.openingHoursItem}>
            <h3>25 DICIEMBRE & 1 ENERO</h3>
            <p>Cerrado</p>
            <p>Días especiales</p>
          </div>
          <div className={styles.openingHoursItem}>
            <h3>SEMANA SANTA Y AGOSTO</h3>
            <p>CONSULTAR</p>
            <p>Días especiales</p>
          </div>
          <div className={styles.openingHoursItem}>
            <h3>FESTIVOS TODO EL AÑO</h3>
            <p>Abierto de 09:00 a 21:00</p>
          </div>
        </div>
      </section>

      {/* Sección de Reserva */}
      <section className={styles.blackModule}>
        <div className={styles.reservationSection}>
          <p>¿Quieres venir a jugar con nosotros?</p>
          <h2>¡RESERVA YA UNA PISTA!</h2>
          <button className={styles.reservationButton}>RESERVA TU PISTA</button>
        </div>
      </section>

      {/* Sección de Precios */}
      <section id="precios" className={styles.whiteModule}>
        <div className={styles.pricesContainer}>
          <h2>PRECIOS</h2>
          <h3>PÁDEL & TENIS</h3>
          <p className={styles.updatedDate}>
            Tarifas actualizadas el 01 de octubre de 2020
          </p>
          <div className={styles.priceTable}>
            <div className={styles.priceColumn}>
              <h4>Lunes a Viernes</h4>
              <h5>Alquiler</h5>
              <p>10:00 a 17:00h<span>10€/hora</span></p>
              <p>17:00 a 23:00h<span>18€/hora</span></p>
              <h5>Bono de 10h</h5>
              <p>10:00 a 17:00h<span>80€</span></p>
              <p>17:00 a 23:00h<span>140€</span></p>
            </div>
            <div className={styles.priceColumn}>
              <h4>Sábados, Domingos y Festivos</h4>
              <h5>Alquiler</h5>
              <p>08:00 a 14:00h<span>18€/hora</span></p>
              <p>14:00 a 21:00h<span>10€/hora</span></p>
              <h5>Bono de 10h</h5>
              <p>08:00 a 14:00h<span>140€</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Restaurantes */}
      <section id="restaurantes" className={styles.whiteModule}>
        <div className={styles.sectionTitle}>
          <h2>RESTAURANTES</h2>
          <p className={styles.centeredText}>
            Comida de calidad en un entorno inmejorable. ¡Disfrútalo!
          </p>
        </div>
        <div className={styles.restaurantsContainer}>
          <div className={styles.restaurantItem}>
            <img src="https://clubelestudiante.com/wp-content/uploads/2023/10/restaurante-elestudiante.jpg" alt="Restaurante El Estudiante" />
            <h3>Restaurante El Estudiante</h3>
            <p>916 546 707</p>
            <p className={styles.centeredText}>
              Nada mejor para reponer fuerzas después de tu partido de pádel o
              tenis.
            </p>
          </div>
          <div className={styles.restaurantItem}>
            <img
              src="https://clubelestudiante.com/wp-content/uploads/2023/10/restaurante-joseluis.jpg"
              alt="Res. Jose Luis El Estudiante Golf"
            />
            <h3>Res. Jose Luis El Estudiante Golf</h3>
            <p>917 049 256</p>
            <p className={styles.centeredText}>
              En un ambiente cuidado y refinado te ofrecemos una carta variada y
              de alta calidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clubs;