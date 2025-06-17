import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  ArrowRight,
  CheckCircle,
  Target,
  BookOpen,
  Users,
  Zap,
  DollarSign,
  TrendingUp,
  Clock,
  Star,
  Award,
  Shield,
  Lightbulb,
  UserCheck,
  Building
} from 'lucide-react';

interface PharmaLaunchPageProps {
  setCurrentPage?: (page: string) => void;
}

const PharmaLaunchPage: React.FC<PharmaLaunchPageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Training Programs',
      description: 'Our experts provide training to team members at all levels, including C-suite executives, department heads, reviewers, submitters, and agencies. We ensure that everyone involved in the process is well-versed in the optimized processes, enhancing collaboration and ensuring adherence to compliance guidelines.'
    },
    {
      icon: Users,
      title: 'Cross-Functional Task Force Leadership',
      description: 'We establish and lead cross-functional task forces, conducting comprehensive assessments to determine the optimal process mapping based on your company\'s infrastructure and dynamics. Our goal is to enhance team accountability, improve communication, and increase productivity across the board.'
    },
    {
      icon: Zap,
      title: 'Efficient Ad Promo and Medical Review Processes',
      description: 'Our team has developed and implemented proprietary processes to ensure the efficient and effective submission, review, and approval of promotional and medical materials. We understand the importance of timely approvals and work diligently to streamline your review processes.'
    }
  ];

  const benefits = [
    'Streamlined, tailor-made processes',
    'Compliant tools and frameworks',
    'Reduced meeting times',
    'Substantial cost savings',
    'Enhanced team collaboration',
    'Timely approvals'
  ];

  const metrics = [
    {
      value: '$650K',
      label: 'Saved on Ad Promo Costs',
      description: 'in year one for our biopharma client',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      value: '55%',
      label: 'Reduction in Meeting Time',
      description: 'through streamlined processes',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: '100%',
      label: 'Compliance Adherence',
      description: 'across all review processes',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive evaluation of your current infrastructure, team dynamics, and process gaps to develop a tailored launch strategy.',
      icon: Target
    },
    {
      step: '02',
      title: 'Process Design & Mapping',
      description: 'Development of streamlined, compliant processes optimized for your specific organizational needs and therapeutic areas.',
      icon: Lightbulb
    },
    {
      step: '03',
      title: 'Team Training & Enablement',
      description: 'Extensive training programs for all stakeholders, from C-suite to reviewers, ensuring seamless adoption and compliance.',
      icon: Users
    },
    {
      step: '04',
      title: 'Implementation & Launch',
      description: 'Guided rollout of optimized processes with real-time support and adjustments to ensure successful launch execution.',
      icon: Rocket
    },
    {
      step: '05',
      title: 'Optimization & Monitoring',
      description: 'Continuous monitoring and refinement to maintain efficiency, compliance, and cost-effectiveness throughout the lifecycle.',
      icon: TrendingUp
    }
  ];

  const handleContactRedirect = () => {
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
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-white"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-blue-100 text-sm font-semibold mb-6">
                  <Rocket className="w-4 h-4 mr-2" />
                  PharmaLaunch™ Methodology
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Pharmaceutical Launch
                </h1>
                <div className="text-3xl lg:text-4xl font-bold text-blue-200 mb-6">
                  You are cleared for liftoff...
                </div>
                <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                  With our proprietary product launch and commercialization preparation strategy, 
                  you are well-equipped with streamlined, tailor-made, compliant tools and 
                  processes to ensure efficient and effective review and approval of product 
                  and launch materials, messaging, and initiatives.
                </p>
                
                <motion.button
                  onClick={handleContactRedirect}
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl mt-8"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Consult
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
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

      {/* Cost Savings Section */}
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
              Significant Cost Savings
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              and Efficiency Gains
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Through our streamlined processes and efficient practices, we have helped companies 
              significantly reduce meeting times and realize substantial cost savings.
            </p>
            <motion.button
              onClick={handleContactRedirect}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
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
                <div className="text-gray-600 font-medium">{metric.description}</div>
              </motion.div>
            ))}
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
              ASK US HOW WE SAVED OUR
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              BIOPHARMA CLIENT
            </h3>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-green-200 max-w-4xl mx-auto">
              <div className="text-6xl lg:text-8xl font-bold text-green-600 mb-4">
                $650K
              </div>
              <p className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                ON AD PROMO COSTS IN YEAR ONE
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Proven savings through our PharmaLaunch™ methodology 
                and streamlined review processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleContactRedirect}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn How We Did It
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Components Section */}
      <section id="features" className="py-20 bg-overlay-white-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Core 
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {' '}Components
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three essential pillars that form the foundation of our PharmaLaunch™ methodology.
            </p>
          </motion.div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100"
              >
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl w-fit mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  {feature.description}
                </p>

                <div className="text-center">
                  <motion.button
                    onClick={handleContactRedirect}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More About This Component
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
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
              Our Proven 
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {' '}5-Step Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to transforming your pharmaceutical launch operations 
              from complex to streamlined.
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                        {step.step}
                      </div>
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-lg">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Process Line */}
                <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-overlay-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Launch with Confidence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our PharmaLaunch™ methodology transform your product launch strategy 
              and deliver the cost savings and efficiency gains your organization needs.
            </p>
            <motion.button
              onClick={handleContactRedirect}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Consultation Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PharmaLaunchPage;