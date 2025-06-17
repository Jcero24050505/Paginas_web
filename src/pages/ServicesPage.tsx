import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  Shield, 
  Rocket, 
  Users,
  ArrowRight,
  CheckCircle,
  Target,
  BookOpen,
  UserCheck,
  Zap,
  Heart,
  Star,
  Award,
  Eye,
  Calendar,
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface ServicesPageProps {
  setCurrentPage?: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  const services = [
    {
      id: 'legal-advisory',
      icon: Scale,
      title: 'Servicios de Asesoría Legal/General',
      description: 'Servicios de asesoría jurídica interna dedicados, altamente experimentados y rentables que brindan apoyo legal continuo para sus necesidades operativas diarias.',
      benefits: [
        'Apoyo legal continuo y dedicado',
        'Altamente experimentados',
        'Soluciones rentables',
        'Necesidades operativas diarias'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'compliance-on-demand',
      icon: Shield,
      title: 'Cumplimiento a Pedido',
      description: 'Oficiales de cumplimiento fraccionales, programas de cumplimiento y conjuntos de políticas integrales y personalizados, capacitación y servicios de monitoreo.',
      benefits: [
        'Oficiales de cumplimiento fraccionados',
        'Programas integrales personalizados',
        'Capacitación especializada',
        'Servicios de monitoreo continuo'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'pharma-launch',
      icon: Rocket,
      title: 'PharmaLaunch™',
      description: 'Nuestra estrategia patentada de preparación para el lanzamiento y comercialización de productos: procesos de revisión optimizados, personalizados y que cumplen con las normas.',
      benefits: [
        'Estrategia patentada de lanzamiento',
        'Procesos de revisión optimizados',
        'Personalizados y que cumplen normas',
        'Preparación integral para comercialización'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'promotional-review',
      icon: Users,
      title: 'Personal del Comité de Revisión de Promoción',
      description: 'Apoyo de personal a corto y largo plazo para los comités de revisión de publicidad y promoción farmacéutica y biotecnológica, incluidos representantes expertos legales, médicos y regulatorios.',
      benefits: [
        'Personal a corto y largo plazo',
        'Representantes expertos legales',
        'Especialistas médicos y regulatorios',
        'Coordinadores de reuniones'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const therapeuticAreas = [
    'Inmunología', 'Neurología', 'Hematología', 'Dermatología', 'Analgésicos',
    'Salud Digestiva', 'Oncología', 'SNC', 'Alergia', 'Resfriado y Tos',
    'Cardiovascular', 'Manejo del Dolor', 'Gastroenterología', 'Cuidados Intensivos',
    'Neumología', 'Terapia Génica', 'Salud de la Mujer', 'Enfermedades Raras', 'Medicina Interna'
  ];

  // Legal Advisory Content - NUEVO CONTENIDO ESPECÍFICO
  const legalAdvisoryFeatures = [
    {
      icon: Scale,
      title: 'Su asesor de confianza',
      description: 'Potencie su negocio e impulse el éxito con un asesor legal interno altamente experimentado y rentable que le brindará apoyo legal integral para sus necesidades operativas diarias. Nos encargamos de sus acuerdos generales, asuntos legales diarios y gobierno corporativo, al mismo tiempo que gestionamos relaciones basadas en valor con asesores externos, actuando como único punto de contacto para optimizar el apoyo legal en asuntos de alto nivel de apalancamiento.'
    },
    {
      icon: Zap,
      title: 'Lo legal hecho fácil',
      description: 'En el acelerado mundo de las empresas farmacéuticas y biotecnológicas en sus primeras etapas, un equipo sólido es su mayor ventaja. Para identificar y aprovechar las oportunidades, afrontar desafíos y reveses y aprovechar al máximo sus recursos limitados, necesita un equipo ágil, adaptable e innovador.'
    },
    {
      icon: TrendingUp,
      title: 'Entra NorthStar',
      description: 'Ofrecemos un servicio de asesoría jurídica general interna altamente experimentado y rentable como alternativa a las firmas tradicionales. Agregamos valor significativo al abordar eficientemente sus necesidades legales diarias, potenciando su negocio y reduciendo significativamente el tiempo de respuesta y los gastos.'
    }
  ];

  // Promotional Review Team Content
  const promotionalTeamFeatures = [
    {
      icon: Heart,
      title: 'Estamos de tu lado',
      subtitle: 'Sus socios de confianza',
      description: 'Ante regulaciones complejas y en constante cambio, es más importante que nunca contar con un equipo de expertos de su lado. Nuestro equipo de profesionales altamente experimentados en promoción publicitaria, que incluye coordinadores, revisores legales, médicos y regulatorios, puede cubrir todas las necesidades de personal de su comité de revisión. Incorpore un equipo completo o cualquier función individual según sus necesidades específicas.'
    },
    {
      icon: Star,
      title: 'Tu salvavidas para la promoción publicitaria',
      description: 'Nos caracterizamos por nuestra creatividad, nuestra empatía, nuestro espíritu de equipo y por ser la voz de la razón. Aportamos nuestra experiencia, conocimientos y experiencia a cada proyecto.'
    },
    {
      icon: Award,
      title: 'Hemos estado allí',
      description: 'A lo largo de nuestras décadas de experiencia colectiva brindando apoyo a los comités de revisión de promociones publicitarias, hemos ayudado a lanzar innumerables productos e iteraciones de productos en una amplia gama de estados de enfermedad, y lo hemos visto todo.'
    }
  ];

  const handleContactNavigation = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
      window.scrollTo(0, 0);
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
                  Servicios 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {' '}Integrales
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

      {/* Legal Advisory Section - SECCIÓN COMPLETAMENTE NUEVA */}
      <section id="legal-advisory" className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              GC a pedido
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Apoyo legal fraccional y de 
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {' '}asesoría general
              </span>
            </h3>
          </motion.div>

          <div className="space-y-16">
            {legalAdvisoryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100"
              >
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-xl w-fit mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  {feature.description}
                </p>

                {/* Special savings highlight for middle section */}
                {index === 1 && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl w-fit mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-6xl font-bold text-green-600 mb-2">38%</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">AHORRO PROMEDIO PARA CLIENTES</h4>
                      <p className="text-green-700 font-semibold">SOBRE HONORARIOS LEGALES</p>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <motion.button
                    onClick={handleContactNavigation}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index === 1 ? 'Contáctenos' : 'Hablemos'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Review Team Section */}
      <section className="py-20 bg-overlay-white-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Equipo de Revisión de 
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {' '}Promociones Publicitarias
              </span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {promotionalTeamFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100"
              >
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl w-fit mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  {feature.subtitle && (
                    <h4 className="text-xl font-semibold text-orange-600 mb-6">{feature.subtitle}</h4>
                  )}
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  {feature.description}
                </p>

                <div className="text-center">
                  <motion.button
                    onClick={handleContactNavigation}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index === 0 ? 'Contáctenos' : index === 1 ? 'Más información' : 'Programar una consulta'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Areas - Updated for Promotional Review */}
      <section className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Representante Terapéutico
                </h3>
                <h4 className="text-xl font-semibold text-orange-600 mb-6">
                  Área de especialización
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {therapeuticAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <p className="font-semibold text-gray-900 text-sm">{area}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <motion.button
                  onClick={handleContactNavigation}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contáctenos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;