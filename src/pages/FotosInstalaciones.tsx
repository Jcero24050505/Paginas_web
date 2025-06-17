import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import ImageGallery from '../components/ImageGallery';
import Button from '../components/Button';

const FotosInstalaciones = () => {
  const instalacionesImages = [
    {
      src: "https://www.uadibloc.com/img/instalaciones/zona-de-vias.jpg",
      alt: "Zona de Vías",
      caption: "Zona de Vías"
    },
    {
      src: "https://www.uadibloc.com/img/instalaciones/zona-de-vias-2.jpg",
      alt: "Zona de Vías 2",
      caption: "Zona de Vías"
    },
    {
      src: "https://www.uadibloc.com/img/instalaciones/kilter-board.jpg",
      alt: "Kilter Board",
      caption: "Kilter Board"
    },
    {
      src: "https://www.uadibloc.com/img/instalaciones/terraza.jpg",
      alt: "Terraza",
      caption: "Terraza"
    },
    {
      src: "https://www.uadibloc.com/img/instalaciones/vestuarios.jpg",
      alt: "Vestuarios",
      caption: "Vestuarios"
    },
    // Agregamos algunas imágenes más de las que tenemos referencias previas
    {
      src: "https://www.uadibloc.com/img/slider/instalaciones.jpg",
      alt: "Instalaciones generales",
      caption: "Instalaciones generales"
    }
  ];

  return (
    <>
      <PageHeader 
        title="Descubre las fotos de las instalaciones del rocódromo Uadibloc"
        backgroundImage="https://www.uadibloc.com/img/instalaciones/zona-de-vias.jpg"
      />
      
      <Section title="Descubre nuestras instalaciones">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 text-center">
            Uadibloc no es sólo una sala de escalada, es un centro deportivo, social y educativo.
            Hemos creado un espacio donde puedas ser tu mism_ y donde sentirte como en casa, 
            en un ambiente acogedor sin renunciar a las prestaciones de los mejores rocódromos de Europa.
          </p>
        </div>
        
        <ImageGallery images={instalacionesImages} />
      </Section>
      
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Zona de Boulder</h3>
            <p className="text-gray-700 mb-4">
              Más de 200m² de superficie escalable con diferentes inclinaciones y niveles de dificultad.
              Renovamos los bloques regularmente para que siempre encuentres nuevos retos.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
              <li>Presas de alta calidad</li>
              <li>Varios niveles de dificultad</li>
              <li>Suelo acolchado de máxima seguridad</li>
              <li>Renovación constante de bloques</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Zona de Vías</h3>
            <p className="text-gray-700 mb-4">
              Disponemos de una zona específica para la escalada con cuerda, equipada con autoaseguradores
              para que puedas escalar incluso si vienes solo.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
              <li>Vías de diferentes dificultades</li>
              <li>Autoaseguradores</li>
              <li>Altura de hasta 8 metros</li>
              <li>Perfiles variados</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Otras Instalaciones</h3>
            <p className="text-gray-700 mb-4">
              Además de nuestras zonas de escalada, disponemos de espacios complementarios para mejorar
              tu experiencia en Uadibloc.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
              <li>Kilter Board</li>
              <li>Zona de entrenamiento</li>
              <li>Terraza</li>
              <li>Vestuarios con duchas</li>
              <li>Taquillas</li>
              <li>Zona infantil</li>
            </ul>
          </div>
        </div>
      </Section>
      
      <Section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Quieres ver nuestras instalaciones en persona?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Acércate a nuestro rocódromo en el centro de Madrid y descubre todo lo que
          Uadibloc tiene para ofrecerte.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/precios-rocodromo-madrid">Ver precios</Button>
          <Button to="/donde-estamos" variant="outline">Cómo llegar</Button>
        </div>
      </Section>
    </>
  );
};

export default FotosInstalaciones;