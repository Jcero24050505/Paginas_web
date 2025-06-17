import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Button from '../components/Button';

const ClasesYoga = () => {
  return (
    <>
      <PageHeader 
        title="Clases de Yoga en Madrid"
        backgroundImage="https://www.uadibloc.com/img/clases-yoga-madrid.jpg"
      />
      
      <Section title="Clases de Yoga y Fitness en Uadibloc, tu rocódromo en el centro de Madrid">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            En Uadibloc ofrecemos clases de yoga en el centro de Madrid, un complemento ideal para 
            escalador_s o como actividad en sí misma que te proporcionará múltiples beneficios como 
            tonificación y fortalecimiento de la musculatura, flexibilidad, mejora de la postura corporal, 
            trabajo de la atención plena y reducción del estrés y la fatiga favoreciendo el sueño.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <img 
                src="https://www.uadibloc.com/img/cursos-yoga-madrid.jpg" 
                alt="Clases de yoga en Madrid" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            
            <div>
              <p className="text-gray-700 mb-4">
                Nuestras clases de yoga son una combinación de Hatha y Vinyasa, donde se mezclan las 
                posturas físicas (asanas) y ejercicios respiratorios con transiciones más dinámicas entre ellas. 
                Esto tiene como resultado una clase muy completa que termina con una meditación guiada para 
                favorecer la introspección y conectar con nosotr_s mism_s.
              </p>
              
              <p className="text-gray-700 mb-6">
                En breve también ofreceremos clases de fitness y acondicionamiento físico. 
                Actualmente estamos formando grupos. ¡Escríbenos y apúntate!
              </p>
              
              <div className="mt-8">
                <Button to="/donde-estamos">Contactar</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Beneficios para escaladores</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                <span>Mejora la flexibilidad y el rango de movimiento</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                <span>Fortalece la musculatura del core, esencial para la escalada</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                <span>Desarrolla el equilibrio y la propiocepción</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                <span>Enseña técnicas de respiración útiles en momentos de tensión</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                <span>Mejora la concentración y enfoque mental</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold">Lunes</h4>
                <p>19:00 - 20:15 | Hatha Yoga</p>
              </div>
              <div>
                <h4 className="font-bold">Miércoles</h4>
                <p>10:30 - 11:45 | Vinyasa Flow</p>
                <p>19:00 - 20:15 | Hatha Yoga</p>
              </div>
              <div>
                <h4 className="font-bold">Viernes</h4>
                <p>18:00 - 19:15 | Yoga para escaladores</p>
              </div>
              <div>
                <h4 className="font-bold">Domingo</h4>
                <p>11:00 - 12:15 | Yoga restaurativo</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">* Los horarios pueden estar sujetos a cambios. Consulta la disponibilidad actual.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Precios</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Clase suelta</span>
                <span className="font-bold">12€</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Bono 5 clases</span>
                <span className="font-bold">55€</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Bono 10 clases</span>
                <span className="font-bold">100€</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Mensualidad 1 día/semana</span>
                <span className="font-bold">40€</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Mensualidad 2 días/semana</span>
                <span className="font-bold">70€</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">* Descuento del 10% para abonados del rocódromo</p>
          </div>
        </div>
      </Section>
      
      <Section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Listo para probar una clase?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          La primera clase es gratuita para abonados de Uadibloc. 
          Reserva tu plaza y descubre los beneficios del yoga.
        </p>
        <Button to="/donde-estamos">Reservar clase</Button>
      </Section>
    </>
  );
};

export default ClasesYoga;