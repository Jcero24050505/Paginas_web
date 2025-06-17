import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Users,
  Target,
  Award,
  Lightbulb,
  Briefcase,
  Zap,
  Rocket,
  BookOpen,
  UserCheck,
  Scale,
  Heart
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage?: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const stats = [
    { value: '$650K', label: 'First Year Savings', icon: TrendingUp },
    { value: '38%', label: 'Reduction in Legal Expenses', icon: Shield },
    { value: '55%', label: 'Reduction in Meeting Time', icon: Zap }
  ];

  const services = [
    {
      id: 'legal-general-counsel',
      icon: Scale,
      title: 'Legal/General Counsel Services',
      description: 'Dedicated, highly experienced, cost-effective in-house general counsel services, providing ongoing legal support for your daily operational needs.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'compliance-on-demand',
      icon: Shield,
      title: 'Compliance on Demand',
      description: 'Fractional chief compliance officers, compliance programs, and comprehensive and bespoke policy suites, training, and monitoring services.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'pharma-launch',
      icon: Rocket,
      title: 'PharmaLaunch™',
      description: 'Our proprietary product launch and commercialization preparation strategy - streamlined, tailor-made, compliant review processes to ensure efficient and effective review and approval of product materials, messaging, and initiatives.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ad-promo-review',
      icon: Users,
      title: 'Ad Promo Review Committee Staffing',
      description: 'Short- and long-term staffing support for pharma and biotech advertising and promotional review committees, including expert legal, medical, and regulatory representatives, and meeting coordinators.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Demonstrated track record of significant savings and process optimization for our clients.',
      metric: '$654K saved'
    },
    {
      icon: Shield,
      title: 'Guaranteed Compliance',
      description: 'Deep expertise in FDA, EMA, and international regulatory agency regulations.',
      metric: '100% compliance'
    },
    {
      icon: Clock,
      title: 'Optimized Efficiency',
      description: 'Proprietary processes that reduce review times and accelerate launches.',
      metric: '55% faster'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professionals with decades of experience at leading pharmaceutical companies.',
      metric: 'Proven expertise'
    }
  ];

  const keyMetrics = [
    {
      value: '38%',
      label: 'Average Client Savings',
      sublabel: 'on legal fees',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      value: '55%',
      label: 'Average Reduction',
      sublabel: 'in meeting time',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: '40',
      label: 'Man-Hours Saved',
      sublabel: 'per week on average',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const caseStudies = [
    {
      title: 'Case Study #1: Fractional General Counsel',
      points: [
        'As fractional general counsel of global biopharma company, implemented enhanced budget process, reducing spend by 38% YOY (budget: $1.5M), and enabling improved spend predictability and litigation strategies',
        'Created and trained personnel on optimized, customized contract review process',
        'Managed value-based relationships with outside counsel on litigation, IP, and HR issues'
      ]
    },
    {
      title: 'Case Study #2: Comprehensive Compliance Program',
      points: [
        'Developed comprehensive compliance program for mid-size biotech company',
        'Implemented risk assessment and monitoring procedures',
        'Trained staff on compliance protocols and best practices'
      ]
    },
    {
      title: 'Case Study #3: PharmaLaunch™',
      points: [
        'Streamlined product launch process for pharmaceutical client',
        'Reduced time-to-market by 6 months',
        'Achieved $650K savings in first year promotional advertising costs'
      ]
    },
    {
      title: 'Case Study #4: Ad Promo Review Committee Staffing',
      points: [
        'Provided complete staffing solution for promotional review committee',
        'Reduced meeting times by 55% through optimized processes',
        'Ensured 100% regulatory compliance across all materials'
      ]
    }
  ];

  const principles = [
    {
      title: 'Organize Your Chaos',
      description: 'We don\'t simply navigate the challenges; we revolutionize the way forward-facing product materials and messaging are handled. With our meticulously designed and expertly implemented processes, we ensure that your submissions meet the highest standards.',
      icon: Briefcase
    },
    {
      title: 'Ad Promo Review Made Simple',
      description: 'In the world of ad promo review, many companies find themselves trapped between subpar outcomes at best and utter chaos at worst. We transform this landscape with clear, optimized processes.',
      icon: Zap
    },
    {
      title: 'Our Secret',
      description: 'A set of guiding principles that serve as our North Star, leading the way to success. We craft a high-level action plan with concrete deliverables, including reduced meeting times, clear and streamlined processes, and enhanced team accountability.',
      icon: Star
    }
  ];

  const therapeuticAreas = [
    'Immunology', 'Neurology', 'Hematology', 'Dermatology', 'Analgesics',
    'Digestive Health', 'Oncology', 'CNS', 'Allergy', 'Cold and Cough',
    'Cardiovascular', 'Pain Management', 'Gastroenterology', 'Critical Care',
    'Pulmonology', 'Gene Therapy', 'Women\'s Health', 'Rare Diseases', 'Internal Medicine'
  ];

  const handleContactNavigation = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
      window.scrollTo(0, 0);
    }
  };

  const handlePharmaLaunchNavigation = () => {
    if (setCurrentPage) {
      setCurrentPage('pharma-launch');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-overlay-white-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                {' '}Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our combined experience and proprietary methodologies deliver 
              quantifiable results that transform life sciences operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 rounded-lg w-fit mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-blue-200">
                  <div className="text-lg font-bold text-blue-600">{item.metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise - Services Section */}
      <section className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                {' '}Expertise
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <motion.button
                  onClick={handleContactNavigation}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PharmaLaunch™ Feature Section */}
      <section className="py-20 bg-overlay-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Introducing…
              </h2>
              <h3 className="text-5xl lg:text-6xl font-bold mb-8">
                PharmaLaunch™
              </h3>
              <p className="text-xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed">
                Under pressure and tight timelines to get your legal and regulatory processes 
                and compliance program in place for PDUFA and launch?
              </p>
              <p className="text-lg text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Learn about our proprietary, streamlined strategy for cost-effective, 
                customized, compliant product launch and commercialization.
              </p>
              <motion.button
                onClick={handlePharmaLaunchNavigation}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Highlight */}
      <section className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ASK US HOW WE SAVED OUR BIOPHARMA CLIENT
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-green-200 max-w-4xl mx-auto">
              <div className="text-6xl lg:text-8xl font-bold text-green-600 mb-4">
                $650K
              </div>
              <p className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                IN YEAR ONE
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Proven savings through our PharmaLaunch™ methodology 
                and promotional review process optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleContactNavigation}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Beacon of Light Section */}
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
              A Beacon of Light
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming the life sciences ad promo landscape, one success story at a time.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 rounded-lg w-fit mb-6">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              onClick={handleContactNavigation}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Case Studies
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{study.title}</h3>
                <ul className="space-y-4">
                  {study.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
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
              Reduce Your Legal Spend with Our General Counsel Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              By managing value-based relationships with outside counsel, we drastically reduce your legal spend
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`bg-gradient-to-r ${metric.color} p-4 rounded-xl w-fit mx-auto mb-6`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{metric.label}</div>
                <div className="text-gray-600 font-medium">{metric.sublabel}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Eliminate Wasted Manhours with Our Specialized Ad Promo Staffing Solutions
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our streamlined process suite and team of experts offering comprehensive support 
              to help you efficiently navigate the complex regulatory environment.
            </p>
            <motion.button
              onClick={handleContactNavigation}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Representative Therapeutic Area Expertise
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {therapeuticAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <p className="font-semibold text-gray-900 text-sm">{area}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <motion.button
                  onClick={handleContactNavigation}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
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

export default HomePage;