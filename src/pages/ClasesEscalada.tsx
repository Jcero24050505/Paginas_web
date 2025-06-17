import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Button from '../components/Button';

const ClasesEscalada = () => {
  return (
    <>
      <PageHeader 
        title="Clases de escalada en Madrid para adultos y niños"
        backgroundImage="https://www.uadibloc.com/img/clases-escalada-adultos-madrid.jpg"
      />
      
      <Section title="¿Quieres aprender a escalar o mejorar tu nivel?">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            En Uadibloc te ofrecemos <strong>clases de escalada en Madrid</strong> en unas instalaciones modernas 
            donde poder aprender y crecer dentro del mundo de la escalada.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <img 
                src="https://www.uadibloc.com/img/clases-escalada-ninos-madrid.jpg" 
                alt="Clases de escalada para niños en Madrid" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">¿Necesito tener experiencia previa en un grupo de clases de escalada?</h3>
              <p className="text-gray-700 mb-4">
                Para nada. Nuestros grupos de entrenamiento son multinivel, están formados tanto por gente que se está 
                iniciando en la escalada como personas más experimentadas, adaptando la intensidad de los ejercicios 
                al nivel y ritmo de cada persona necesite, haciéndolos así totalmente personalizados.
              </p>
              
              <h3 className="text-xl font-bold mb-4 mt-8">¿Cómo funciona el entrenamiento semipresencial?</h3>
              <p className="text-gray-700 mb-4">
                Cada lunes recibirás un entrenamiento de escalada que podrás realizar cualquier día de la semana 
                de forma individual, sin importar el día y la hora. Tu eliges tu ritmo.
              </p>
              
              <h3 className="text-xl font-bold mb-4 mt-8">¿Cuáles son las tarifas?</h3>
              <p className="text-gray-700 mb-6">
                Para participar en las clases de escalada es necesario tener un abono de acceso a la instalación, 
                mensual, trimestral o anual. Al acceso hay que sumarle 25€ al mes por todas las clases, un día a 
                la semana presencial en grupo. La planificación semipresencial está incluida en el precio, así como 
                el material durante las clases.
              </p>
              
              <div className="mt-6">
                <Button to="/precios-rocodromo-madrid">Ver todas las tarifas</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="gray" id="roca">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Clases de escalada en roca</h2>
            <p className="text-gray-700 mb-4">
              Además de nuestras clases en rocódromo, ofrecemos la posibilidad de aprender a escalar en roca 
              natural con nuestros guías profesionales.
            </p>
            <p className="text-gray-700 mb-6">
              Esta modalidad te permitirá disfrutar de la escalada en contacto con la naturaleza, aplicando las 
              técnicas aprendidas en el rocódromo a la roca real.
            </p>
            <Button to="/outdoor">Más información</Button>
          </div>
          
          <div>
            <img 
              src="https://www.uadibloc.com/img/outdoor.jpg" 
              alt="Clases de escalada en roca" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </Section>
      
      <Section id="roco">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://www.uadibloc.com/img/clases-escalada-adultos-madrid.jpg" 
              alt="Clases de escalada en rocódromo" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Clases de escalada en rocódromo</h2>
            <p className="text-gray-700 mb-4">
              Nuestras clases en rocódromo son perfectas tanto para principiantes como para escaladores 
              con experiencia que quieren mejorar su técnica.
            </p>
            <p className="text-gray-700 mb-4">
              Con profesores especializados, aprenderás las técnicas básicas de escalada, seguridad, y 
              movimientos específicos para mejorar tu rendimiento.
            </p>
            <p className="text-gray-700 mb-6">
              Todas las clases incluyen el material necesario durante las sesiones.
            </p>
          </div>
        </div>
      </Section>
      
      <Section background="orange" className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Quieres más información?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Ponte en contacto con nosotros para más información sobre horarios, 
          disponibilidad y cualquier otra consulta que tengas.
        </p>
        <Button to="/donde-estamos" variant="secondary">Contactar</Button>
      </Section>
    </>
  );
};

export default ClasesEscalada;