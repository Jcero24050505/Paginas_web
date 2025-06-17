import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Mail, 
  Award, 
  GraduationCap,
  Briefcase,
  Users,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Dr. María González',
      title: 'Fundadora y CEO',
      specialization: 'Derecho Farmacéutico y Regulatorio',
      bio: 'Con más de 15 años de experiencia en derecho farmacéutico, la Dra. González ha liderado estrategias regulatorias para más de 50 lanzamientos de productos exitosos.',
      credentials: [
        'JD, Harvard Law School',
        'PhD en Farmacología, MIT',
        'Ex-Directora Legal, Pfizer',
        'Certificación FDA'
      ],
      achievements: [
        '$200M+ en ahorros generados',
        '50+ lanzamientos exitosos',
        '15+ años de experiencia',
        'Reconocimiento industria'
      ]
    },
    {
      name: 'Dr. Carlos Mendoza',
      title: 'Director de Cumplimiento',
      specialization: 'Cumplimiento Normativo y Calidad',
      bio: 'Experto en sistemas de calidad y cumplimiento normativo con experiencia en FDA, EMA y agencias regulatorias internacionales.',
      credentials: [
        'MS en Asuntos Regulatorios',
        'Certificación RAC',
        'Ex-Inspector FDA',
        'Auditor Líder ISO'
      ],
      achievements: [
        '100% tasa de aprobación',
        '200+ auditorías exitosas',
        '12+ años experiencia',
        'Certificaciones múltiples'
      ]
    },
    {
      name: 'Dra. Ana Rodríguez',
      title: 'Directora de Estrategia',
      specialization: 'Estrategia Comercial y Lanzamientos',
      bio: 'Estratega comercial con historial comprobado en lanzamientos globales de productos farmacéuticos y biotecnológicos.',
      credentials: [
        'MBA, Wharton School',
        'MS en Biotecnología',
        'Ex-VP Comercial,  Novartis',
        'Certificación PMP'
      ],
      achievements: [
        '$500M+ en ingresos generados',
        '30+ lanzamientos globales',
        '10+ años liderazgo',
        'Premios industria'
      ]
    },
    {
      name: 'Dr. Roberto Silva',
      title: 'Director Médico',
      specialization: 'Asuntos Médicos y Científicos',
      bio: 'Médico especialista con amplia experiencia en desarrollo clínico, asuntos médicos y comunicaciones científicas.',
      credentials: [
        'MD, Johns Hopkins',
        'PhD en Farmacología Clínica',
        'Board Certified',
        'Ex-Director Médico, Roche'
      ],
      achievements: [
        '100+ publicaciones',
        '25+ estudios clínicos',
        '18+ años experiencia',
        'Reconocimiento académico'
      ]
    }
  ];

  const advisors = [
    {
      name: 'Prof. Elena Martínez',
      title: 'Asesora Senior - Biotecnología',
      company: 'Ex-CEO, BioTech Innovations'
    },
    {
      name: 'Dr. Fernando López',
      title: 'Asesor Regulatorio',
      company: 'Ex-Director, FDA Center for Drug Evaluation'
    },
    {
      name: 'Lic. Patricia Herrera',
      title: 'Asesora Legal',
      company: 'Socia, Herrera & Associates'
    }
  ];

  const expertise = [
    'Derecho Farmacéutico y Biotecnológico',
    'Asuntos Regulatorios Internacionales',
    'Cumplimiento y Sistemas de Calidad',
    'Estrategia Comercial y Lanzamientos',
    'Desarrollo Clínico y Asuntos Médicos',
    'Propiedad Intelectual',
    'Fusiones y Adquisiciones',
    'Financiamiento y Estrategia de Inversión'
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
                  Nuestro 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {' '}Equipo Experto
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

      {/* Team Members */}
      <section id="team" className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Equipo Directivo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Líderes visionarios con experiencia comprobada en las principales empresas farmacéuticas y biotecnológicas del mundo.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-4 border-blue-100">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">{member.title}</p>
                      <p className="text-sm text-gray-600 font-medium">{member.specialization}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Credentials */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                        Credenciales
                      </h4>
                      <ul className="space-y-2">
                        {member.credentials.map((credential, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                            {credential}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-blue-600" />
                        Logros Destacados
                      </h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <Star className="w-3 h-3 mr-2 text-yellow-500" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex space-x-4 mt-6 pt-6 border-t border-gray-100">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm font-medium">Contactar</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-overlay-white-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Consejo Asesor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Asesores estratégicos que aportan perspectivas únicas y conexiones valiosas en la industria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 border-4 border-blue-100">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{advisor.title}</p>
                <p className="text-sm text-gray-600">{advisor.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section id="expertise" className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Áreas de Experiencia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo combina experiencia profunda en múltiples disciplinas críticas para el éxito en ciencias de la vida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <Briefcase className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 text-sm">{area}</p>
              </motion.div>
            ))}
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
              ¿Listo para Trabajar con Expertos?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Nuestro equipo está listo para aportar décadas de experiencia combinada 
              a los desafíos únicos de tu empresa.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta con Nuestro Equipo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;