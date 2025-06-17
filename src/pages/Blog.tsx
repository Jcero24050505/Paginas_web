import { Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'ROYAL Training Zone',
    excerpt: 'Llega un nuevo socio a Rackets Madrid. Ahora el box de Fitness se convierte en: ROYAL Training Zone!!!',
    image: 'https://racketsmadrid.com/wp-content/uploads/2022/10/LOGO-ROYAL-1131x800.jpg',
    date: '15 octubre, 2022',
    author: 'Admin',
    slug: 'royal-training-zone'
  },
  {
    id: 2,
    title: 'Mercadillo 2020',
    excerpt: 'Vuelve el mercadillo de Rackets Madrid. Grandes ofertas en móviles y tablets. UNIDADES LIMITADAS.',
    image: 'https://racketsmadrid.com/wp-content/uploads/2020/11/Mercadillo-2020-b-2-800x800.png',
    date: '25 noviembre, 2020',
    author: 'Admin',
    slug: 'mercadillo-2020'
  },
  {
    id: 3,
    title: 'Torneo VI Aniversario Rackets Madrid',
    excerpt: 'Estimad@s amig@s: En la semana del 15 al 18 de enero se ha celebrado el tradicional Torneo Aniversario de Rackets Madrid, que ya alcanza su sexta edición. Aquí podéis consultar los resultados de todos los cuadros.',
    image: 'https://racketsmadrid.com/wp-content/uploads/2020/01/TORNEO-VI-ANIVERSARIO-800x800.jpg',
    date: '20 enero, 2020',
    author: 'Admin',
    slug: 'torneo-vi-aniversario'
  },
  {
    id: 4,
    title: 'Mercadillo Pre-Reyes 2020',
    excerpt: 'Grandes ofertas en móviles, tablets, discos duros, etc. UNIDADES LIMITADAS.',
    image: 'https://racketsmadrid.com/wp-content/uploads/2020/11/Mercadillo-2020-b-2-800x800.png',
    date: '10 diciembre, 2019',
    author: 'Admin',
    slug: 'mercadillo-pre-reyes-2020'
  },
  {
    id: 5,
    title: 'Rackets Madrid, distribuidor oficial de Harrow Sports',
    excerpt: 'Desde este mes de Septiembre Rackets Madrid es el distribuidor oficial de Harrow Sports en España.',
    image: 'https://racketsmadrid.com/wp-content/uploads/2019/09/harrow-logo-1-e1572001392701.jpg',
    date: '15 septiembre, 2019',
    author: 'Admin',
    slug: 'distribuidor-harrow-sports'
  },
  {
    id: 6,
    title: 'Inscripción Liga de Verano 2019',
    excerpt: 'Ya está abierta la inscripción para la Liga de Verano 2019 de Rackets Madrid.',
    image: 'https://racketsmadrid.com/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-28-at-12.39.49.jpeg',
    date: '5 junio, 2019',
    author: 'Admin',
    slug: 'inscripcion-liga-verano-2019'
  },
];

const Blog = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Últimas noticias y eventos de Rackets Madrid
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:translate-y-[-5px]">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt.length > 120 
                    ? post.excerpt.substring(0, 120) + '...' 
                    : post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Leer más <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <nav aria-label="Paginación" className="inline-flex shadow-sm">
            <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-l-md">
              Anterior
            </a>
            <a href="#" className="py-2 px-4 bg-blue-600 border border-blue-600 text-white hover:bg-blue-700">
              1
            </a>
            <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-r-md">
              Siguiente
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;