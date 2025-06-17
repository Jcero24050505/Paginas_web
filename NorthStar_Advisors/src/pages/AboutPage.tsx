import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star,
  Shield,
  Lightbulb,
  Heart,
  Globe,
  ArrowRight
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integridad',
      description: 'Mantenemos los más altos estándares éticos en todas nuestras interacciones y recomendaciones.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Desarrollamos soluciones creativas y metodologías patentadas para desafíos complejos.'
    },
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Nos dedicamos completamente al éxito de nuestros clientes y sus objetivos empresariales.'
    },
    {
      icon: Globe,
      title: 'Impacto',
      
      description: 'Trabajamos para mejorar la salud global a través de nuestros servicios de consultoría.'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Fundación de NorthStar',
      description: 'Iniciamos con la visión de transformar la consultoría en ciencias de la vida.'
    },
    {
      year: '2019',
      title: 'Primer Cliente Fortune 500',
      description: 'Establecimos nuestra reputación con una empresa farmacéutica líder.'
    },
    {
      year: '2020',
      title: 'Desarrollo de PharmaLaunch™',
      description: 'Creamos nuestra metodología patentada para lanzamientos farmacéuticos.'
    },
    {
      year: '2021',
      title: 'Expansión de Servicios',
      description: 'Ampliamos nuestros servicios para incluir startups biotecnológicas.'
    },
    {
      year: '2022',
      title: '$500K en Ahorros',
      description: 'Alcanzamos medio millón en ahorros generados para nuestros clientes.'
    },
    {
      year: '2023',
      title: '25+ Empresas Atendidas',
      description: 'Superamos las 25 empresas exitosamente asesoradas.'
    },
    {
      year: '2024',
      title: 'Liderazgo en la Industria',
      description: 'Reconocidos como líderes en consultoría fraccionada para ciencias de la vida.'
    }
  ];

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
                  Sobre 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {' '}NorthStar Advisors
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

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-overlay-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Empoderar a las empresas de ciencias de la vida para que naveguen con confianza 
                por paisajes regulatorios complejos, aceleren sus lanzamientos al mercado y 
                logren un crecimiento sostenible a través de consultoría estratégica experta.
              </p>
              <div className="space-y-3">
                {[
                  'Reducir costos operativos significativamente',
                  'Acelerar procesos de cumplimiento normativo',
                  'Optimizar estrategias de lanzamiento',
                  'Proporcionar experiencia fraccionada escalable'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Nuestra Visión</h2>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  Ser el socio de consultoría más confiable y respetado en la industria de 
                  ciencias de la vida, reconocido por nuestra capacidad de transformar desafíos 
                  complejos en oportunidades de crecimiento.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="font-semibold text-white">Compromiso con la Excelencia</span>
                  </div>
                  <p className="text-blue-100">
                    Nos esforzamos por superar las expectativas en cada proyecto, 
                    entregando resultados que generen valor duradero para nuestros clientes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios fundamentales que guían cada decisión y acción en NorthStar Advisors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg w-fit mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-overlay-white-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Recorrido</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde nuestros humildes comienzos hasta convertirnos en líderes de la industria.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-overlay-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Empresa?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Únete a las empresas líderes que han confiado en NorthStar Advisors 
              para navegar sus desafíos más complejos y alcanzar el éxito.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce Nuestro Equipo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;