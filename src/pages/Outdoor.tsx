import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const Outdoor = () => {
  const outdoorActivities = [
    {
      title: "Bautismo en roca",
      description: "Primera toma de contacto con la escalada en roca natural. Aprenderás las técnicas básicas de forma segura y divertida.",
      price: "Desde 50€",
      duration: "3-4 horas",
      difficulty: "Principiante",
      image: "https://www.uadibloc.com/img/bautismo-escalada-madrid-roca.jpg"
    },
    {
      title: "Iniciación a la escalada deportiva",
      description: "Aprende los fundamentos de la escalada deportiva: técnicas de aseguramiento, maniobras básicas y progresión.",
      price: "Desde 70€",
      duration: "5-6 horas",
      difficulty: "Principiante-Intermedio",
      image: "https://www.uadibloc.com/img/bautismo-escalada-montana.jpg"
    },
    {
      title: "Escalada de varios largos",
      description: "Vive la experiencia de escalar rutas de mayor longitud, aprendiendo técnicas de progresión y seguridad en pared.",
      price: "Desde 95€",
      duration: "Jornada completa",
      difficulty: "Intermedio-Avanzado",
      image: "https://www.uadibloc.com/img/outdoor.jpg"
    }
  ];

  return (
    <>
      <PageHeader 
        title="Nos vamos de escalada al aire libre en Madrid"
        backgroundImage="https://www.uadibloc.com/img/outdoor.jpg"
      />
      
      <Section title="Pasión por la montaña">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 text-center">
            En Uadibloc somos apasionados de la montaña y la escalada.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <p className="text-gray-700 mb-4">
                Además de nuestro rocódromo en Madrid, te ofrecemos disfrutar de la escalada en el medio natural 
                con diferentes salidas a roca: bautismos de escalada, iniciación a la escalada deportiva y 
                escalada de varios largos.
              </p>
              
              <p className="text-gray-700 mb-4">
                Disfruta de una experiencia inolvidable escalando en roca junto a los guías profesionales de 
                Uadibloc Outdoor: desconexión, adrenalina, contacto con la naturaleza, superación, 
                conocer gente nueva...
              </p>
              
              <p className="text-gray-700 mb-4">
                ¿Tienes un sueño? ¿Te gustaría subir alguna montaña? ¡Contacta con nosotros y estaremos 
                encantados de hacerlo realidad!
              </p>
              
              <p className="text-gray-700 font-medium mt-6">
                Posiblemente <span className="font-bold">el mejor rocódromo de Madrid</span>, o al menos 
                nos esforzamos para ello.
              </p>
            </div>
            
            <div>
              <img 
                src="https://www.uadibloc.com/img/outdoor.jpg" 
                alt="Escalada outdoor en Madrid" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="gray" title="Nuestras actividades outdoor">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outdoorActivities.map((activity, index) => (
            <Card 
              key={index}
              image={activity.image}
              imageAlt={activity.title}
              className="h-full flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{activity.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Precio:</span>
                  <span className="font-bold">{activity.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duración:</span>
                  <span>{activity.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dificultad:</span>
                  <span>{activity.difficulty}</span>
                </div>
              </div>
              <Button variant="primary" className="w-full">Reservar</Button>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section>
        <div className="bg-orange-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Información importante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">¿Qué incluyen nuestras actividades?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Guía titulado con experiencia</li>
                <li>Material técnico de escalada</li>
                <li>Seguro de actividad</li>
                <li>Fotos de la actividad</li>
                <li>Asesoramiento personalizado</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3">¿Qué necesitas traer?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Ropa cómoda adecuada a la temporada</li>
                <li>Calzado deportivo (preferiblemente botas de montaña)</li>
                <li>Protección solar y gorra</li>
                <li>Agua (mínimo 1.5 litros) y comida</li>
                <li>Pequeña mochila para tus pertenencias</li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold mb-3">Política de cancelación</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cancelación con más de 7 días: reembolso completo</li>
                <li>Cancelación entre 3-7 días: reembolso del 50%</li>
                <li>Cancelación con menos de 3 días: sin reembolso</li>
                <li>Si la actividad se cancela por condiciones meteorológicas adversas, se propondrán fechas alternativas o el reembolso completo</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="orange" className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Listo para vivir una aventura?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Contacta con nosotros para más información sobre nuestras actividades outdoor o para 
          reservar tu plaza en la próxima salida.
        </p>
        <Button to="/donde-estamos" variant="secondary">Contactar</Button>
      </Section>
    </>
  );
};

export default Outdoor;