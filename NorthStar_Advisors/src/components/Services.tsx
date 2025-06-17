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
  Zap
} from 'lucide-react';

const Services = () => {
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
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const pharmaLaunchDetails = [
    {
      icon: BookOpen,
      title: 'Programas Integrales de Capacitación',
      description: 'Nuestros expertos capacitan a miembros de equipos de todos los niveles, incluyendo altos ejecutivos, jefes de departamento, revisores, remitentes y agencias. Nos aseguramos de que todos los involucrados en el proceso conozcan a fondo los procesos optimizados, lo que mejora la colaboración y garantiza el cumplimiento de las normas.'
    },
    {
      icon: Users,
      title: 'Liderazgo de Grupos de Trabajo Multifuncionales',
      description: 'Establecemos y lideramos equipos de trabajo interdisciplinarios, realizando evaluaciones exhaustivas para determinar el mapeo de procesos óptimo según la infraestructura y la dinámica de su empresa. Nuestro objetivo es mejorar la responsabilidad del equipo, optimizar la comunicación y aumentar la productividad en todos los niveles.'
    },
    {
      icon: Zap,
      title: 'Promoción Publicitaria Eficiente y Procesos de Revisión Médica',
      description: 'Nuestro equipo ha desarrollado e implementado procesos propios para garantizar la presentación, revisión y aprobación eficientes y eficaces de materiales promocionales y médicos. Comprendemos la importancia de obtener aprobaciones oportunas y trabajamos con diligencia para optimizar sus procesos de revisión.'
    }
  ];

  const therapeuticAreas = [
    'Inmunología', 'Neurología', 'Hematología', 'Dermatología', 'Analgésicos',
    'Salud Digestiva', 'Oncología', 'SNC', 'Alergia', 'Resfriado y Tos',
    'Cardiovascular', 'Manejo del Dolor', 'Gastroenterología', 'Cuidados Intensivos',
    'Neumología', 'Terapia Génica', 'Salud de la Mujer', 'Enfermedades Raras', 'Medicina Interna'
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              {' '}Servicios Especializados
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Servicios integrales de consultoría legal y estratégica diseñados específicamente 
            para organizaciones biotecnológicas y farmacéuticas.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <img
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Servicios de consultoría legal en ciencias de la vida"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Características Clave:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Más Información
                  <ArrowRight className="ml-1 w-5 h-5" />
                </motion.button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* PharmaLaunch™ Detailed Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              PharmaLaunch™ - Características Detalladas
            </h3>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Nuestra metodología patentada incluye componentes especializados diseñados 
              para maximizar la eficiencia y garantizar el cumplimiento normativo.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {pharmaLaunchDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 rounded-lg w-fit mb-4">
                    <detail.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{detail.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{detail.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Therapeutic Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Áreas Terapéuticas de Especialización
            </h3>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Experiencia profunda en múltiples áreas terapéuticas para atender 
              las necesidades específicas de tu organización.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {therapeuticAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-3 text-center border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <p className="font-semibold text-gray-900 text-sm">{area}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contáctenos
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;