import { Link } from 'react-router-dom';

interface NewsProps {
  news: {
    id: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
  };
}

const NewsCard = ({ news }: NewsProps) => {
  const { id, title, image, excerpt, date } = news;
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Link to={`/noticias/${id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg h-full flex flex-col">
        <div className="overflow-hidden h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <p className="text-sm text-gray-500 mb-2">{formattedDate}</p>
          <h3 className="text-xl font-semibold mb-3 text-zinc-800 group-hover:text-orange-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            {excerpt}
          </p>
          <div className="text-orange-500 font-medium group-hover:text-orange-600 flex items-center transition-colors mt-auto">
            Leer más
            <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;