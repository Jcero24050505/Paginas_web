import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const BautismoEscalada = () => {
  return (
    <>
      <PageHeader 
        title="Bautismo de escalada en Madrid"
        backgroundImage="https://www.uadibloc.com/img/bautismo-escalada-madrid-roca.jpg"
      >
        <p className="text-xl text-white/90 max-w-3xl">
          Tanto si te quieres iniciar en la escalada indoor en nuestro rocódromo como en la escalada 
          outdoor en la Sierra de Guadarrama este es tu lugar para tu bautismo.
        </p>
      </PageHeader>
      
      <Section title="Mi primer día de escalada">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 text-center">
            "Del Roco a la Roca" ofrece una experiencia de escalada única, llevando a los usuarios 
            de Uadibloc desde el rocódromo hasta la montaña.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card 
              title="Bautismo en roca" 
              image="https://www.uadibloc.com/img/bautismo-escalada-madrid-roca.jpg"
              imageAlt="Bautismo de escalada en roca"
            >
              <p className="text-gray-700 mb-4">
                Una actividad dirigida por guías de escalada profesionales, l_s participantes se adentraran 
                en el mundo de la escalada en roca. Una actividad apta para todos los niveles sin importar 
                la experiencia previa.
              </p>
              <p className="text-gray-700 mb-4">
                Una aventura en la que salir del bullicio de la ciudad de Madrid y conectar con la naturaleza 
                y superarse a un_ mismo. Además de la emoción de practicar la escalada en un entorno diferente 
                al rocódromo descubriremos la fauna y flora local de la Sierra de Guadarrama.
              </p>
              <Button variant="primary" className="mt-2">Reservar ahora</Button>
            </Card>
            
            <Card 
              title="Bautismo en rocódromo" 
              image="https://www.uadibloc.com/img/bautismo-escalada-madrid-rocodromo.jpg"
              imageAlt="Bautismo de escalada en rocódromo"
            >
              <p className="text-gray-700 mb-4">
                Si prefieres comenzar en un entorno más controlado, nuestro bautismo en rocódromo es la opción ideal. 
                Aprenderás las técnicas básicas de escalada, el uso del material y disfrutarás de la experiencia en 
                nuestras modernas instalaciones.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestros instructores te guiarán paso a paso, asegurándose de que tu primera experiencia en la 
                escalada sea segura y divertida. No se requiere experiencia previa ni equipamiento.
              </p>
              <Button variant="primary" className="mt-2">Reservar ahora</Button>
            </Card>
          </div>
        </div>
      </Section>
      
      <Section background="gray" title="Elige el bautismo que más te guste">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://www.uadibloc.com/img/bautismo-escalada-madrid-roca.jpg" 
              alt="Bautismo de escalada en roca" 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Bautismo Básico</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>2 horas de duración</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Instructor personal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Material incluido</span>
                </li>
              </ul>
              <div className="font-bold text-2xl mb-4">35€ <span className="text-sm font-normal text-gray-600">/ persona</span></div>
              <Button variant="outline" className="w-full">Reservar</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-orange-500 relative">
            <div className="absolute top-0 right-0 bg-orange-500 text-white py-1 px-3 text-sm font-bold">
              POPULAR
            </div>
            <img 
              src="https://www.uadibloc.com/img/bautismo-escalada-madrid-rocodromo.jpg" 
              alt="Bautismo de escalada en rocódromo" 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Bautismo Completo</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>3 horas de duración</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Instructor personal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Material incluido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bono para una visita adicional</span>
                </li>
              </ul>
              <div className="font-bold text-2xl mb-4">50€ <span className="text-sm font-normal text-gray-600">/ persona</span></div>
              <Button variant="primary" className="w-full">Reservar</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://www.uadibloc.com/img/bautismo-escalada-montana.jpg" 
              alt="Bautismo de escalada en montaña" 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Bautismo Premium</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Día completo (6 horas)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Instructor personal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Material incluido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Comida en la montaña</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Transporte incluido</span>
                </li>
              </ul>
              <div className="font-bold text-2xl mb-4">95€ <span className="text-sm font-normal text-gray-600">/ persona</span></div>
              <Button variant="outline" className="w-full">Reservar</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿Tienes dudas o quieres más información?</p>
          <Button to="/donde-estamos">Contáctanos</Button>
        </div>
      </Section>
    </>
  );
};

export default BautismoEscalada;