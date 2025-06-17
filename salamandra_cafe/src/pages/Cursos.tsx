import { useState } from 'react';
import Hero from '../components/Hero';
import { Check, Star } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: string;
  path: string;
}

const courses: Course[] = [
  {
    id: '6',
    title: 'Escalada deportiva I (iniciación)',
    image: 'https://www.salamandra-bc.com/imagen-blog/6/500x300jpg.jpg',
    excerpt: 'Curso de iniciación a la escalada deportiva. Aprenderás las técnicas básicas para escalar con seguridad.',
    level: 'beginner',
    duration: '1 fin de semana',
    path: '/cursos/6'
  },
  {
    id: '37',
    title: 'Escalada Deportiva II (Avanzado)',
    image: 'https://www.salamandra-bc.com/imagen-blog/37/Escalada Varios largos2500x300.jpg',
    excerpt: '¿Te has iniciado en la escalada deportiva? ¿Crees que tienes que aprender más? Veremos la cadena dinámica de seguridad, las caídas, el rapel o descenso autónomo...',
    level: 'intermediate',
    duration: '1 fin de semana',
    path: '/cursos/37'
  },
  {
    id: '38',
    title: 'Escalada Deportiva III (varios largos)',
    image: 'https://www.salamandra-bc.com/imagen-blog/38/Escalada Varios largos 500x300.jpg',
    excerpt: '¿Quieres escalar vías de varios largos? ¿Te gustaría aprender las técnicas de seguridad en pared?',
    level: 'advanced',
    duration: '2 días',
    path: '/cursos/38'
  },
  {
    id: '39',
    title: 'Escalada Deportiva IV (varios largos)',
    image: 'https://www.salamandra-bc.com/imagen-blog/39/Escalada Varios largos4 500x300.jpg',
    excerpt: 'Escalas vías equipadas y algunas semi equipadas de varios largos, tienes experiencia moviéndote por la roca, y sientes que necesitas saber más...',
    level: 'advanced',
    duration: '2 días',
    path: '/cursos/39'
  },
  {
    id: '41',
    title: 'Escalada desequipada (seguros flotantes)',
    image: 'https://www.salamandra-bc.com/imagen2-blog/41/desequipado1200x600.jpg',
    excerpt: 'Ya sabes escalar vías con soltura, te permites el lujo de ver que hay más allá, necesitas saber cómo desenvolverte en la pared, montar tus propias reuniones...',
    level: 'expert',
    duration: '2 días',
    path: '/cursos/41'
  },
  {
    id: '42',
    title: 'Escalada en terreno de Aventura (sin anclajes fijos)',
    image: 'https://www.salamandra-bc.com/imagen2-blog/42/terreno de aventura1200x600.jpg',
    excerpt: 'En 1906 T. Piaz es el primer escalador en usar medios artificiales en una ascensión en el Campanile Toro...',
    level: 'expert',
    duration: '3 días',
    path: '/cursos/42'
  },
  {
    id: '46',
    title: 'Autorrescate Basico',
    image: 'https://www.salamandra-bc.com/imagen2-blog/46/autorrescatebasico1200x600.jpg',
    excerpt: 'Para bajar a un herido, es muy importante hacer todas las maniobras paso a paso y con el máximo cuidado...',
    level: 'intermediate',
    duration: '1 día',
    path: '/cursos/46'
  },
  {
    id: '47',
    title: 'Autorrescate en pared',
    image: 'https://www.salamandra-bc.com/imagen2-blog/47/autorrescate1200x600.jpg',
    excerpt: 'Me encuentro en la pared a 200m del suelo, junto a mí se encuentra mi compañero herido, los dos sabemos que nadie vendrá a rescatarnos...',
    level: 'advanced',
    duration: '2 días',
    path: '/cursos/47'
  }
];

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { title, image, excerpt, level, duration, path } = course;

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'Principiante';
      case 'intermediate':
        return 'Intermedio';
      case 'advanced':
        return 'Avanzado';
      case 'expert':
        return 'Experto';
      default:
        return '';
    }
  };

  const getLevelStars = (level: string) => {
    let stars = 1;
    if (level === 'intermediate') stars = 2;
    if (level === 'advanced') stars = 3;
    if (level === 'expert') stars = 4;
    
    return (
      <div className="flex">
        {[...Array(4)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 m-2 rounded">
          {duration}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">{getLevelText(level)}</span>
          {getLevelStars(level)}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-zinc-800">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {excerpt}
        </p>
        <a 
          href={path}
          className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors w-full text-center"
        >
          Más información
        </a>
      </div>
    </div>
  );
};

const Cursos = () => {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.level === filter);

  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/imagen-blog/6/500x300jpg.jpg"
        title="Cursos"
        subtitle="Formación especializada en escalada"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('all')}
            >
              Todos los niveles
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'beginner' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('beginner')}
            >
              Principiante
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'intermediate' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('intermediate')}
            >
              Intermedio
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'advanced' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('advanced')}
            >
              Avanzado
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${filter === 'expert' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('expert')}
            >
              Experto
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No hay cursos disponibles para el nivel seleccionado.</p>
              <button 
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                onClick={() => setFilter('all')}
              >
                Ver todos los cursos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">¿Por qué elegir nuestros cursos?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Instructores certificados</h3>
              <p className="text-gray-700">
                Todos nuestros monitores son Técnicos Deportivos titulados con amplia experiencia.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Grupos reducidos</h3>
              <p className="text-gray-700">
                Máximo 8 alumnos por instructor para garantizar una atención personalizada.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Material incluido</h3>
              <p className="text-gray-700">
                Todo el material técnico necesario está incluido en el precio del curso.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Teoría y práctica</h3>
              <p className="text-gray-700">
                Combinamos clases teóricas con prácticas en roca real para una formación completa.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Seguro incluido</h3>
              <p className="text-gray-700">
                Todos los cursos incluyen seguro de responsabilidad civil y accidentes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Entornos privilegiados</h3>
              <p className="text-gray-700">
                Realizamos nuestros cursos en las mejores zonas de escalada de Madrid y alrededores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Lo que dicen nuestros alumnos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "El curso de iniciación superó mis expectativas. Los instructores son muy profesionales y se preocupan por que aprendas correctamente las técnicas de seguridad."
              </p>
              <p className="font-medium text-zinc-800">María G.</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Hice el curso de escalada deportiva II y fue una experiencia increíble. Aprendí muchísimo y ahora me siento mucho más seguro escalando en roca."
              </p>
              <p className="font-medium text-zinc-800">Carlos M.</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "El curso de autorrescate me pareció fundamental. Te enseñan técnicas que pueden salvarte la vida en situaciones complicadas. Totalmente recomendable."
              </p>
              <p className="font-medium text-zinc-800">Laura P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para mejorar tus habilidades?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Inscríbete ahora en uno de nuestros cursos y lleva tu escalada al siguiente nivel. Plazas limitadas.
          </p>
          <a 
            href="/contacto" 
            className="bg-white text-orange-500 hover:bg-gray-100 py-3 px-8 rounded-md font-medium inline-block transition-colors"
          >
            Solicitar información
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cursos;