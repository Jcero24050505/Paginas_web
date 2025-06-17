import React from 'react';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';

const CondicionesNormas: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Condiciones y normas - RockTown Climbing';
  }, []);

  return (
    <div>
      <Hero 
        title="CONDICIONES Y NORMAS" 
        imageUrl="https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/86ffb59c-3aac-3448-212f-0fc924ffd8d7.jpg"
      />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <h2><strong>Condiciones Generales y Normas de Uso de la Instalación RockTown Climbing</strong></h2>

            <h3><strong>Ámbito</strong></h3>
            <p>Estas Condiciones Generales y normas de uso regulan la relación entre el usuario y/o representante legal y BlockMania NineBPlus, S.L., durante su estancia en las instalaciones y/o participación en cualquier actividad organizada por RockTown Climbing. Las instalaciones comprenden:</p>
            <ul>
              <li>Muros de escalada de boulder/bloque.</li>
              <li>Zona de aparatos de fitness y específicos.</li>
              <li>Vestuarios.</li>
              <li>Zonas comunes.</li>
              <li>Cafetería.</li>
            </ul>

            <h3><strong>Consentimiento informado</strong></h3>
            <p>El usuario y/o su representante legal reconoce y acepta:</p>
            <ul>
              <li>Que la escalada es una actividad deportiva con riesgos inherentes, aunque se pueden reducir con un uso adecuado y cumplimiento de normas.</li>
              <li>Haber sido informado sobre la actividad y leído las condiciones generales.</li>
              <li>Estar en condiciones físicas y mentales adecuadas.</li>
              <li>Asumir los riesgos, incluyendo lesiones graves o incluso la muerte.</li>
              <li>Que pueden existir situaciones adversas externas (clima, desastres, etc.) que afecten el desarrollo de la actividad.</li>
              <li>Que RockTown Climbing prestará solo primeros auxilios básicos, si es necesario.</li>
              <li>En caso de menores, estas condiciones aplican también a ellos.</li>
            </ul>

            <h3><strong>Horarios de Apertura y Restricciones de Acceso</strong></h3>
            <ul>
              <li>Acceso mediante inscripción en recepción y aceptación de normas.</li>
              <li>Se puede solicitar carné de socio. Su pérdida conlleva un cargo.</li>
              <li>El usuario debe mantener sus datos personales y bancarios actualizados.</li>
              <li><strong>Horario:</strong> Lunes a jueves de 12h a 22h, viernes de 12h a 20h, sábados y domingos de 10h a 20h. Festivos y verano pueden variar.</li>
            </ul>

            <h3><strong>Menores de edad e incapacitados</strong></h3>
            <ul>
              <li>Acceso sólo con consentimiento legal expreso.</li>
              <li>Deben estar supervisados por un adulto.</li>
              <li>RockTown puede denegar acceso o inscripción por motivos de seguridad o comportamiento.</li>
            </ul>

            <h3><strong>Precios y condiciones</strong></h3>
            <ul>
              <li>Información disponible en la web y en el centro.</li>
              <li>Los abonos y pases son intransferibles (excepto bonos de 10 sesiones).</li>
              <li>No hay reembolsos por sesiones no usadas.</li>
              <li>Las cuotas se pueden pausar solo por lesión justificada con documento médico.</li>
            </ul>

            <h3><strong>Política de recuperación de clases</strong></h3>
            <ul>
              <li>Recuperación sólo con notificación previa por WhatsApp.</li>
              <li>Plazo de 7 días antes o después de la falta.</li>
              <li>2 recuperaciones/mes para alumnos con 2 clases; 1 para los de 1 clase. Extras con coste.</li>
              <li>RockTown puede autorizar o denegar recuperaciones.</li>
            </ul>

            <h3><strong>Política de cancelación de cursos</strong></h3>
            <ul>
              <li>Preinscripción y prepago obligatorios.</li>
              <li>Cancelación sin devolución salvo circunstancias especiales a discreción de la dirección.</li>
            </ul>

            <h3><strong>Alquiler y préstamo de material</strong></h3>
            <ul>
              <li>Se requiere documento de identidad.</li>
              <li>El usuario es responsable del material alquilado.</li>
              <li>Devolución obligatoria antes de salir del centro.</li>
            </ul>

            <h3><strong>Pertenencias personales</strong></h3>
            <ul>
              <li>Guardar pertenencias solo en taquillas.</li>
              <li>RockTown no se responsabiliza por pérdida o robo.</li>
            </ul>

            <h3><strong>Normas generales de uso</strong></h3>
            <ul>
              <li>Registro obligatorio al entrar. Devolver material al salir.</li>
              <li>Está prohibido fumar, consumir drogas o acceder bajo sus efectos.</li>
              <li>Comida y bebida solo en la cafetería.</li>
              <li>No se permite modificar presas ni acceder a zonas restringidas.</li>
              <li>Solo personal autorizado puede impartir clases.</li>
              <li>Reportar cualquier problema al personal de RockTown.</li>
              <li>Respetar la señalización de buenas prácticas, salud y seguridad.</li>
            </ul>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-semibold mb-4">¡Síguenos!</h3>
              <SocialLinks className="flex justify-center space-x-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CondicionesNormas;
