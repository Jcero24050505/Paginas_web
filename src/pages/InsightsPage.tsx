import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight,
  TrendingUp,
  FileText,
  Video,
  Headphones,
  Download,
  Eye,
  Clock,
  Tag
} from 'lucide-react';

const InsightsPage = () => {
  const featuredArticle = {
    title: 'El Futuro de la Regulación Farmacéutica: Tendencias 2024',
    excerpt: 'Análisis profundo de las nuevas regulaciones FDA y su impacto en los lanzamientos farmacéuticos, incluyendo estrategias de adaptación para empresas de todos los tamaños.',
    author: 'Dra. María González',
    date: '15 de Marzo, 2024',
    readTime: '12 min lectura',
    category: 'Regulatorio',
    views: '2.3K'
  };

  const articles = [
    {
      title: 'Optimización de Procesos de Revisión Promocional',
      excerpt: 'Estrategias comprobadas para reducir tiempos de revisión y mejorar la eficiencia en equipos de marketing farmacéutico.',
      author: 'Dr. Carlos Mendoza',
      date: '10 de Marzo, 2024',
      readTime: '8 min',
      category: 'Cumplimiento',
      type: 'article',
      views: '1.8K'
    },
    {
      title: 'Financiamiento para Startups Biotecnológicas',
      excerpt: 'Guía completa sobre opciones de financiamiento, desde capital semilla hasta IPO, con casos de éxito reales.',
      author: 'Dra. Ana Rodríguez',
      date: '5 de Marzo, 2024',
      readTime: '15 min',
      category: 'Estrategia',
      type: 'guide',
      views: '3.1K'
    },
    {
      title: 'Webinar: Lanzamientos Globales Post-COVID',
      excerpt: 'Sesión interactiva sobre adaptación de estrategias de lanzamiento en el nuevo panorama global de salud.',
      author: 'Dr. Roberto Silva',
      date: '1 de Marzo, 2024',
      readTime: '45 min',
      category: 'Lanzamientos',
      type: 'webinar',
      views: '892'
    },
    {
      title: 'Podcast: Innovación en Dispositivos Médicos',
      excerpt: 'Conversación con líderes de la industria sobre tendencias emergentes y oportunidades regulatorias.',
      author: 'Equipo NorthStar',
      date: '28 de Febrero, 2024',
      readTime: '32 min',
      category: 'Innovación',
      type: 'podcast',
      views: '1.2K'
    },
    {
      title: 'Checklist: Preparación para Auditorías FDA',
      excerpt: 'Lista de verificación completa y plantillas descargables para preparar tu empresa para inspecciones regulatorias.',
      author: 'Dr. Carlos Mendoza',
      date: '25 de Febrero, 2024',
      readTime: '5 min',
      category: 'Cumplimiento',
      type: 'checklist',
      views: '2.7K'
    },
    {
      title: 'Análisis de Mercado: Terapias Génicas 2024',
      excerpt: 'Estudio detallado del mercado de terapias génicas, incluyendo proyecciones y oportunidades de inversión.',
      author: 'Dra. Ana Rodríguez',
      date: '20 de Febrero, 2024',
      readTime: '20 min',
      category: 'Mercado',
      type: 'report',
      views: '1.5K'
    }
  ];

  const categories = [
    { name: 'Todos', count: 25, active: true },
    { name: 'Regulatorio', count: 8 },
    { name: 'Cumplimiento', count: 6 },
    { name: 'Estrategia', count: 5 },
    { name: 'Lanzamientos', count: 4 },
    { name: 'Innovación', count: 2 }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'webinar':
        return Video;
      case 'podcast':
        return Headphones;
      case 'guide':
        return BookOpen;
      case 'checklist':
        return Download;
      case 'report':
        return TrendingUp;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'webinar':
        return 'from-red-500 to-pink-500';
      case 'podcast':
        return 'from-purple-500 to-indigo-500';
      case 'guide':
        return 'from-green-500 to-emerald-500';
      case 'checklist':
        return 'from-blue-500 to-cyan-500';
      case 'report':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section - WITH DARK OVERLAY */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/67J8yqt.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-12">
            
            {/* Main Content - SIMPLIFIED */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-white"
            >
              {/* Main Headline Only */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Insights y 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {' '}Recursos Expertos
                  </span>
                </h1>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Article */}
      <section id="featured" className="py-20 bg-overlay-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Artículo Destacado</h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center text-sm text-blue-100">
                    <Eye className="w-4 h-4 mr-1" />
                    {featuredArticle.views}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100 font-medium">{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-blue-200">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                </div>
                
                <motion.button
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Leer Artículo Completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories & Articles */}
      <section className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {articles.map((article, index) => {
              const TypeIcon = getTypeIcon(article.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-r ${getTypeColor(article.type)} p-2 rounded-lg`}>
                          <TypeIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <motion.button
                        className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        Leer
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              className="px-8 py-4 bg-white/90 backdrop-blur-sm text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Cargar Más Artículos
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 bg-overlay-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Mantente Actualizado
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Recibe nuestros insights más recientes, análisis de tendencias y recursos 
              exclusivos directamente en tu bandeja de entrada.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none bg-white/90 backdrop-blur-sm"
                />
                <motion.button
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suscribirse
                </motion.button>
              </div>
              <p className="text-blue-100 text-sm mt-3">
                Sin spam. Cancela cuando quieras.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;