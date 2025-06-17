import React from 'react';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';

const ClasesEscalada: React.FC = () => {
  // Update title
  React.useEffect(() => {
    document.title = 'Clases Escalada - RockTown Climbing';
  }, []);

  return (
    <div>
      <Hero 
        title="CLASES DE ESCALADA" 
        imageUrl="https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/86ffb59c-3aac-3448-212f-0fc924ffd8d7.jpg"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestras Clases</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En RockTown ofrecemos diferentes tipos de clases para adaptarnos a tus necesidades y objetivos. 
                Nuestros instructores certificados están preparados para ayudarte a mejorar tu técnica y disfrutar 
                de la escalada de forma segura.
              </p>
              
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
  <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-bold text-gray-800 mb-3">Grupos de Entrenamiento para Adultos</h3>
    <p className="text-gray-600 mb-4">
      Entrenamientos guiados para todos los niveles, con sesiones dinámicas y personalizadas.
    </p>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      <li>2 sesiones semanales de 1 hora (Lun-Mié o Mar-Jue)</li>
      <li>Monitor especializado en cada clase</li>
      <li>Mejora técnica y progresión continua</li>
      <li>Pies de gato incluidos si los necesitas</li>
    </ul>
  </div>
                
                <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
  <h3 className="text-xl font-bold text-gray-800 mb-3">Grupos Infantiles (6-15 años)</h3>
  <p className="text-gray-600 mb-4">
    Entrenamiento divertido y seguro para que niños y niñas desarrollen habilidades físicas y emocionales escalando.
  </p>
  <ul className="list-disc list-inside text-gray-600 space-y-2">
    <li>Mejora de psicomotricidad y coordinación</li>
    <li>Fuerza, flexibilidad y equilibrio</li>
    <li>Desarrollo de la autoconfianza</li>
    <li>Trabajo en equipo y compañerismo</li>
  </ul>
</div>

                
                <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Clases y organización</h3>
                  <p className="text-gray-600 mb-4">
                    
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Duración: 1 hora semanal de lunes a jueves.</li>
                    <li>Monitores especializados: En cada clase habrá un instructor que dirigirá las actividades y se asegurará de que los peques aprendan y se diviertan a tope.</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cuota de clases:</h3>
                  <p className="text-gray-600 mb-4">
                    Las clases son mensuales y comienzan el día 1 del mes en curso y finalizan el último día del mismo. Es obligatorio abonar el curso el primer día de clases mensuales o reservarlo el mes anterior. De no hacerlo se perderá la plaza en el curso y se liberará para que pueda ser disfrutada por otra persona.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-100 p-8 rounded-lg">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">📜 Política de recuperación de clases 📜</h2>
  <div className="text-gray-600 space-y-4">
    <p>
      La recuperación o cambio de horario de clases <strong>NO está permitido</strong>, excepto en casos justificados de enfermedad o lesión. 
      Sin embargo, debido al alto volumen de solicitudes de recuperación por otras causas, hemos establecido una normativa para la recuperación 
      de clases <strong>sin justificación médica</strong>:
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-6">Normas para la Recuperación de Clases</h3>

    <div>
      <h4 className="font-semibold text-gray-700">1. Notificación previa:</h4>
      <p>
        El alumno debe notificar su ausencia con antelación a través de WhatsApp <strong>(+34 613 197 087)</strong>.<br />
        Es necesario indicar el <strong>día y hora de la falta</strong> y el <strong>día y hora en el que se desea recuperar</strong>. 
        RockTown confirmará si es posible o no la recuperación en el horario solicitado.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-gray-700">2. Plazo de recuperación:</h4>
      <p>
        Las clases pueden recuperarse hasta <strong>7 días antes o después</strong> del día de la ausencia. 
        Pasado este plazo, no será posible recuperarlas.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-gray-700">3. Límite de recuperaciones:</h4>
      <p><strong>Alumnos con 2 clases semanales:</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Máximo de 2 recuperaciones al mes.</li>
        <li>Recuperaciones adicionales: 5€ (u 8€ si se requiere uso de pies de gato de RockTown).</li>
      </ul>
      <p className="mt-2"><strong>Alumnos con 1 clase semanal:</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Máximo de 1 recuperación al mes.</li>
        <li>Recuperaciones adicionales: 5€ (u 8€ si se requiere uso de pies de gato de RockTown).</li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold text-gray-700">4. Excepciones:</h4>
      <p>
        RockTown se reserva el derecho de autorizar o denegar recuperaciones en base a esta normativa, 
        recordando que las clases <strong>sólo se pueden recuperar por causas justificadas médicamente</strong>.
      </p>
    </div>

    <p className="mt-4">
      Accede a los <strong>horarios y precios</strong> para más información.
    </p>
  </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-4">¡Síguenos!</h3>
              <SocialLinks className="flex justify-center space-x-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClasesEscalada;