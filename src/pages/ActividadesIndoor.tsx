import { useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

interface Activity {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  path: string;
}

const activities: Activity[] = [
  {
    id: '17',
    title: 'Clases de mañana / mediodía',
    image: 'https://www.salamandra-bc.com/imagen-blog/17/Clasesmañana780x422.jpg',
    excerpt: 'Tanto si eres iniciado en la escalada como si eres escalador avanzado, dispones de tiempo por las mañanas, este puede ser tu horario. Generalmente es más tranquilo que las tardes y más económico.',
    path: '/actividades-indoor/17'
  },
  {
    id: '1',
    title: 'Clases de tarde / noche',
    image: 'https://www.salamandra-bc.com/imagen-blog/1/clases_grupales_de_escalada.jpg',
    excerpt: 'Dirigidas para aquellos que se quieren iniciar en este deporte, o creen que aún les falta mucha técnica por pulir, pero aún no estas en ese punto de entrenar a saco.',
    path: '/actividades-indoor/1'
  },
  {
    id: '16',
    title: 'Grupos de entrenamiento tarde',
    image: 'https://www.salamandra-bc.com/imagen-blog/16/Entrenamientos780x422.jpg',
    excerpt: 'Tras años viendo como cientos de practicantes se proponen tablas durísimas de entrenamiento recomendadas por amigos o libros, con rutinas que hasta para el más fanático terminan siendo aburridas y duras de seguir.',
    path: '/actividades-indoor/16'
  },
  {
    id: '8',
    title: 'Clases juvenil (+11 años)',
    image: 'https://www.salamandra-bc.com/imagen-blog/8/escaldainfantiljuvenil.jpg',
    excerpt: 'Los niños son una fuente inagotable de energía que necesita ser bien canalizada. Por eso creemos que la escalada aporta los retos, conocimientos, sensaciones y refuerzos positivos necesarios para el desarrollo del menor.',
    path: '/actividades-indoor/8'
  },
  {
    id: '2',
    title: 'Clase particular',
    image: 'https://www.salamandra-bc.com/imagen2-blog/2/2clasesparticulares.jpg',
    excerpt: 'Pensada para aprovechar el tiempo al máximo cuando no te puedes adaptar a las clases grupales y horarios. Ideales para una iniciación, como para un entrenamiento por objetivos.',
    path: '/actividades-indoor/2'
  },
  {
    id: '10',
    title: 'Bautismo de escalada',
    image: 'https://www.salamandra-bc.com/imagen2-blog/10/bautismoescalada.jpg',
    excerpt: 'Si quieres conocer este deporte, su técnica y material, experimentar la verticalidad y sus sensaciones, y además de poder compartir la experiencia con quien tu quieras.',
    path: '/actividades-indoor/10'
  },
  {
    id: '9',
    title: 'Celebra tu cumpleaños',
    image: 'https://www.salamandra-bc.com/imagen2-blog/9/infantil-juvenil873x648.jpg',
    excerpt: '¡Imagínate alquilar TODO el rocódromo para tu cumpleaños! Con vías de 8 metros, monitores especializados y un montón de actividades y juegos adaptados a la edad.',
    path: '/actividades-indoor/9'
  },
  {
    id: '18',
    title: 'Grupos o Eventos',
    image: 'https://www.salamandra-bc.com/imagen2-blog/18/grupodeamigosyeventos780x446.jpg',
    excerpt: 'Ponemos a disposición toda nuestra instalación, con o sin profesores de escalada para aquellos que creáis que es un buen sitio para eventos, celebraciones o proyectos deportivos.',
    path: '/actividades-indoor/18'
  }
];

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const { title, image, excerpt, path } = activity;

  return (
    <Link to={path} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg h-full flex flex-col">
        <div className="overflow-hidden h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold mb-3 text-zinc-800 group-hover:text-orange-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            {excerpt}
          </p>
          <div className="text-orange-500 font-medium group-hover:text-orange-600 flex items-center transition-colors">
            Más información
            <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ActividadesIndoor = () => {
  const [filter, setFilter] = useState('all');

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => {
        if (filter === 'classes' && ['17', '1', '8', '2'].includes(activity.id)) return true;
        if (filter === 'training' && ['16'].includes(activity.id)) return true;
        if (filter === 'events' && ['9', '18'].includes(activity.id)) return true;
        if (filter === 'experiences' && ['10'].includes(activity.id)) return true;
        return false;
      });

  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/imagen-blog/17/Clasesmañana780x422.jpg"
        title="Actividades Indoor"
        subtitle="Descubre todas nuestras actividades dentro del centro"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('all')}
            >
              Todas
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'classes' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('classes')}
            >
              Clases
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'training' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('training')}
            >
              Entrenamiento
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'events' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('events')}
            >
              Eventos
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'experiences' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('experiences')}
            >
              Experiencias
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredActivities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No hay actividades que coincidan con el filtro seleccionado.</p>
              <button 
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                onClick={() => setFilter('all')}
              >
                Ver todas las actividades
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4 text-zinc-800">¿No sabes qué actividad elegir?</h2>
                <p className="text-gray-700 mb-6">
                  Contáctanos y te asesoraremos según tu nivel, objetivos y disponibilidad para encontrar la actividad que mejor se adapte a ti.
                </p>
                <Link 
                  to="/contacto" 
                  className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md inline-block transition-colors w-full md:w-auto text-center"
                >
                  Contactar
                </Link>
              </div>
              <div className="bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: `url('https://www.salamandra-bc.com/imagen-banner/95/fotos intalaciones 10.jpg')` }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horario Call-out */}
      <section className="py-8 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Consulta nuestro horario semanal</h2>
          <p className="mb-6">
            Revisa la disponibilidad y reserva tu plaza para cualquiera de nuestras actividades.
          </p>
          <Link 
            to="/actividades-semana" 
            className="bg-white text-orange-500 hover:bg-gray-100 py-3 px-8 rounded-md font-medium inline-block transition-colors"
          >
            Ver horario
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ActividadesIndoor;