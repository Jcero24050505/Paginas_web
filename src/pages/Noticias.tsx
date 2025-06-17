import { useState } from 'react';
import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import { Search } from 'lucide-react';

// Sample news data (more comprehensive)
const allNews = [
  {
    id: '93',
    title: '¡AHORA O NUNCA! Salamandra te necesita!!!',
    image: 'https://www.salamandra-bc.com/imagen-blog/93/IMG_20220418_124621.jpg',
    excerpt: 'Estamos en la recta final!!! Aun no te has enterado!! Salamandra Boulder Café, después de mas de 20 años abiertos al publico...',
    date: '2024-04-15',
    category: 'Avisos'
  },
  {
    id: '91',
    title: 'Tarifas 2025!! Ofertas!!',
    image: 'https://www.salamandra-bc.com/imagen-blog/91/DSCF1603.jpg',
    excerpt: 'Nuevas tarifas y ofertas para el año 2025. Aprovecha nuestras promociones especiales...',
    date: '2024-04-01',
    category: 'Tarifas'
  },
  {
    id: '90',
    title: '¡Es un placer anunciar que Salamandra reabrirá sus puertas el lunes 2 de septiembre!',
    image: 'https://www.salamandra-bc.com/imagen-blog/90/DSCF1720.jpg',
    excerpt: 'Retomamos el horario habitual de lunes a viernes y volveremos al formato de clases previo...',
    date: '2024-03-28',
    category: 'Avisos'
  },
  {
    id: '89',
    title: 'PUENTE DE MAYO CERRADO',
    image: 'https://www.salamandra-bc.com/imagen-blog/89/WhatsApp Image 2024-04-21 at 11.00.54.jpeg',
    excerpt: 'Durante los días 1, 2, 3, y 4 Salamandra permanecerá cerrada Ni tendremos clases...',
    date: '2024-04-20',
    category: 'Horarios'
  },
  {
    id: '86',
    title: 'SEMANA SANTA 2024',
    image: 'https://www.salamandra-bc.com/imagen2-blog/86/semana santa 2024.jpeg',
    excerpt: 'Salamandra informa que los días 28, 29, 30 y 31 de Marzo por descanso del personal permaneceremos CERRADOS...',
    date: '2024-03-15',
    category: 'Horarios'
  },
  {
    id: '85',
    title: 'Puntuación COMPETICION 16 Marzo 2024',
    image: 'https://www.salamandra-bc.com/imagen2-blog/85/compe 1.jpeg',
    excerpt: 'Resultados de la competición realizada el 16 de marzo de 2024...',
    date: '2024-03-18',
    category: 'Competiciones'
  },
  {
    id: '84',
    title: '¡Consigue tu sudadera SALAMANADRA!',
    image: 'https://www.salamandra-bc.com/imagen2-blog/84/PROPUESTA SOCIOS SALAMANDRA.jpg',
    excerpt: 'ROPEGUN Y SALAMANDRA nos unimos para ofreceros una colección única en ropa montañera...',
    date: '2024-01-25',
    category: 'Productos'
  },
  {
    id: '83',
    title: 'Salamandra te desea unas felices fiestas y te ofrece las mejores ofertas para el 2024.',
    image: 'https://www.salamandra-bc.com/imagen2-blog/83/fiesta roco.jpeg',
    excerpt: 'Os deseamos unas felices fiestas de Navidad, una buena salida y entrada de año...',
    date: '2023-12-20',
    category: 'Avisos'
  },
  {
    id: '82',
    title: 'Puntuación COMPETICION 25 NOVIEMBRE',
    image: 'https://www.salamandra-bc.com/imagen2-blog/82/fiesta roco.jpeg',
    excerpt: 'Listado de la Puntuación de la competición del 25 de noviembre, con motivo del reto de los grupos...',
    date: '2023-11-27',
    category: 'Competiciones'
  },
  {
    id: '80',
    title: 'ROCODROMO CERRADO EL 1 Y 9 NOVIEMBRE',
    image: 'https://www.salamandra-bc.com/imagen2-blog/80/Chrysanthemum.jpg',
    excerpt: 'CERRAMOS EL 1 Y EL 9 DE NOVIEMBRE: 1 dia de Todos los Santos, 9 dia de la Almudena Madrid...',
    date: '2023-10-25',
    category: 'Horarios'
  },
  {
    id: '79',
    title: 'ROCODROMO CERRADO 21 OCTUBRE',
    image: 'https://www.salamandra-bc.com/imagen2-blog/79/boulder.jpg',
    excerpt: 'SABADO 21 OCTUBRE ROCODROMO CERRADO ENCUENTRO DE ESCALADORES EN LA PEDRIZA...',
    date: '2023-10-15',
    category: 'Eventos'
  },
  {
    id: '78',
    title: 'CALENDARIO ACTIVIDADES',
    image: 'https://www.salamandra-bc.com/imagen2-blog/78/Calendario 3T 2023 calidad media.jpg',
    excerpt: 'Calendario Actividades Curso 2023-24 - 1º Trimestre (agosto - diciembre 2023)...',
    date: '2023-08-01',
    category: 'Actividades'
  }
];

const Noticias = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const itemsPerPage = 9;
  
  // Get all unique categories
  const categories = ['all', ...Array.from(new Set(allNews.map(news => news.category)))];
  
  // Filter news based on search term and category
  const filteredNews = allNews.filter(news => {
    const matchesSearch = searchTerm === '' || 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || news.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };
  
  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/imagen-blog/93/IMG_20220418_124621.jpg"
        title="Noticias"
        subtitle="Mantente al día con las últimas novedades de Salamandra"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex-shrink-0">
                <select
                  className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={categoryFilter}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Todas las categorías' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Category Pills (optional for quick filtering) */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-3 py-1 rounded-full text-sm ${
                    categoryFilter === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === 'all' ? 'Todas' : category}
                </button>
              ))}
            </div>
          </div>
          
          {/* News Grid */}
          {currentNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {currentNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-100 rounded-lg mb-10">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron noticias</h3>
              <p className="text-gray-500 mb-4">
                No hay noticias que coincidan con tu búsqueda o filtros.
              </p>
              <button 
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                }}
              >
                Ver todas las noticias
              </button>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center">
              <nav className="flex space-x-1">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } border border-gray-300`}
                >
                  Anterior
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === page
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    } border border-gray-300`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } border border-gray-300`}
                >
                  Siguiente
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Noticias;