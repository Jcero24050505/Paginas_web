import React from 'react';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';

const CumplePeques: React.FC = () => {
  // Update title
  React.useEffect(() => {
    document.title = 'Cumple Peques - RockTown Climbing';
  }, []);

  return (
    <div>
      <Hero 
        title="¡Haz que su cumpleaños sea inolvidable!🎉🧗‍♀️" 
        imageUrl="https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/9b461dbb-122f-940b-3c57-8a965b77d84c.jpg"
      />
      
      <section className="py-16 px-4 bg-white">
  <div className="container mx-auto">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-600 mb-8 text-center">
        🎂¡Celebra su cumple en ROCKTOWN!🧗‍♀️
      </h2>

      <div className="prose prose-lg max-w-none text-gray-600 space-y-4 mb-10">
        <p>
          ¡Haz que su cumpleaños sea inolvidable! 🎉🧗‍♀️
        </p>
        <p>
          En RockTown convertimos los cumpleaños en aventuras llenas de diversión y emoción. Si a tus hijos les encanta moverse, superar retos y vivir nuevas experiencias, nuestro centro es el lugar perfecto para celebrarlo.
        </p>

        <p className="font-semibold">Ofrecemos una experiencia única con:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Escalada y juegos emocionantes adaptados a todas las edades.</li>
          <li>Una sala exclusiva para celebrar y disfrutar de la fiesta.</li>
          <li>Opciones de merienda y refrescos para reponer energía después de la acción.</li>
        </ul>

        <p>
          ¡Deja que los más pequeños vivan un día especial, lleno de risas y momentos que recordarán para siempre! 🎂🎈
        </p>

        <p className="font-semibold">
          Reserva ya y prepárate para un cumpleaños diferente y súper divertido. ¡Nosotros nos encargamos del resto!
        </p>
      </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-12">
  <h3 className="text-xl font-bold text-gray-800 mb-4">🎉 ¿Cómo son los cumpleaños en RockTown?</h3>
  <div className="text-gray-600 space-y-3">
    <p>
      En RockTown, los cumpleaños son una experiencia llena de diversión, aventura y momentos inolvidables. 🎉🧗‍♂️
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Duración:</strong> La celebración tiene una duración total de 2 horas.</li>
      <li><strong>Días disponibles:</strong> Los cumpleaños se pueden celebrar los viernes, sábados y domingos.</li>
      <li><strong>Edades:</strong> Los eventos están diseñados para niños y niñas de entre 5 y 15 años.</li>
      <li><strong>Condiciones:</strong> Es necesario aceptar las condiciones y normas de nuestro centro de escalada.</li>
      <li><strong>Material incluido:</strong> RockTown proporciona todo el material necesario para escalar, incluyendo los pies de gato.</li>
    </ul>
  </div>
</div>
  
  <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-12">
  <h3 className="text-xl font-bold text-gray-800 mb-4">🗓️ Estructura de la celebración</h3>
  <div className="text-gray-600 space-y-4">
    <p><strong>Primera hora y media:</strong></p>
    <p>
      Los niños disfrutarán de actividades súper divertidas, retos en las paredes de escalada y juegos adaptados para que lo pasen en grande.
    </p>
    <p><strong>Última media hora:</strong></p>
    <p>
      Momento para relajarse, compartir, comer, beber y soplar las velas. 🥳🎂
    </p>
  </div>
</div>


  {/* NUEVO PACK 1 */}
  <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-12">
  <h3 className="text-xl font-bold text-gray-800 mb-4">ℹ️ Información importante</h3>
  <div className="text-gray-600 space-y-3">
    <p>
      Si algún niño es alérgico o intolerante a algún alimento, deberás avisarnos con antelación. En estos casos, será necesario que traigan su propio menú.
    </p>
    <p>
      ¡Nos aseguramos de que cada detalle esté cuidado para que todos disfruten al máximo!
    </p>
  </div>
</div>


  {/* NUEVO PACK 2 */}
  <div className="bg-amber-50 p-6 rounded-lg shadow-md mb-12">
  <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Por qué elegir RockTown</h3>
  <ul className="list-disc list-inside space-y-2 text-gray-600">
    <li>Un espacio seguro y emocionante.</li>
    <li>Material y monitores especializados incluidos.</li>
    <li>Una combinación perfecta de diversión y actividad física.</li>
  </ul>
</div>

</div>

            
            <div className="bg-gray-100 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 ¿Qué incluye la actividad?</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nuestras fiestas de cumpleaños incluyen una experiencia completa de escalada adaptada 
                  a la edad de los participantes (recomendado para niños de 5 a 14 años):
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Recepción y bienvenida a los pequeños escaladores</li>
                  <li>Introducción a la escalada de forma divertida y segura</li>
                  <li>Juegos y actividades dirigidas en las paredes de boulder</li>
                  <li>Mini-competición con premios para todos</li>
                  <li>Tiempo para la merienda y el pastel en zona reservada</li>
                  <li>Entrega de diplomas y recuerdos</li>
                </ul>
                <p>
                  Todo bajo la supervisión de nuestros monitores especializados, quienes garantizarán 
                  la seguridad y diversión de todos los participantes.
                </p>
              </div>
            </div>
            
            <div className="bg-amber-100 p-8 rounded-lg mb-12">
  <h3 className="text-2xl font-bold text-gray-800 mb-4">Precios</h3>
  
  <div className="text-gray-700 space-y-6">
    <div>
      <h4 className="text-xl font-semibold mb-2"></h4>
      <ul className="list-disc list-inside space-y-2">
        <li>Cumpleaños con comida y bebida (pizza y refrescos): 22 € por niño (máximo 20 niños).</li>
        <li>(Nota: En caso de alergias o intolerancias, se deberá traer la comida específica para ese niño).</li>
        <li>Cumpleaños con bebida incluida (sin comida): 16 € por niño (máximo 20 niños).</li>
        <li>Cumpleaños solo con actividades: 13 € por niño (máximo 20 niños).</li>
      </ul>
    </div>
    
    <div>
      <h4 className="text-xl font-semibold mb-2">Información adicional importante:</h4>
      <p>
        Por favor, avísanos con antelación si algún niño es alérgico o intolerante para garantizar una experiencia segura. En estos casos, deberán traer su propia comida o bebida.
      </p>
      <p>
        Los precios varían según el paquete elegido y están diseñados para ofrecer flexibilidad en la celebración de los cumpleaños.
      </p>
    </div>

    <ul className="list-disc list-inside space-y-2">
      <li>Los padres pueden traer decoración adicional (consultar previamente).</li>
      <li>Posibilidad de ampliar el tiempo de la celebración (5€ por cada 30 minutos adicionales).</li>
      <li>Se recomienda ropa cómoda deportiva para todos los participantes.</li>
      <li>Los niños deben venir con calcetines para usar las instalaciones.</li>
      <li>Es necesario reservar con al menos 2 semanas de antelación.</li>
      <li>Se requiere un depósito del 50% para confirmar la reserva.</li>
    </ul>
  </div>
</div>

            
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Listo para reservar?</h3>
              <p className="text-gray-600 mb-6">
                Ponte en contacto con nosotros para consultar disponibilidad y reservar la fecha del cumpleaños.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+34912345678" 
                  className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center"
                >
                  Llamar ahora
                </a>
                <a 
                  href="mailto:cumples@rocktownclimb.com" 
                  className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center"
                >
                  Enviar email
                </a>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-4">¡Síguenos!</h3>
              <SocialLinks className="flex justify-center space-x-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CumplePeques;