import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Calendar,
  Clock,
  ArrowRight,
  Star,
  Users,
  Award,
  TrendingUp,
  User,
  Building,
  DollarSign
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    services: [] as string[],
    budget: '',
    message: '',
    newsletter: false
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        services: [],
        budget: '',
        message: '',
        newsletter: false
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'newsletter') {
        setFormData({
          ...formData,
          newsletter: checked
        });
      } else if (name === 'services') {
        const updatedServices = checked 
          ? [...formData.services, value]
          : formData.services.filter(service => service !== value);
        setFormData({
          ...formData,
          services: updatedServices
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const services = [
    'In-house general counsel',
    'Compliance support',
    'PharmaLaunch™',
    'Promotional Review Committee staffing'
  ];

  const budgetOptions = [
    'Less than $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    'More than $500,000',
    'Prefer not to say'
  ];

  const trustIndicators = [
    { icon: Users, text: 'Trusted by 25+ Companies' },
    { icon: Award, text: '98% Client Satisfaction' },
    { icon: TrendingUp, text: '$650K+ Client Savings' },
    { icon: Star, text: '5-Star Rating' }
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
                  Interested in 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {' '}working together?
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

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-overlay-white-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Interested in working together?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out some info and we'll be in touch shortly!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                        First Name <span className="text-red-500">(required)</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="First name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company <span className="text-red-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    />
                  </div>

                  {/* Newsletter Signup */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-700">
                      Sign up to receive news and updates
                    </label>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email <span className="text-red-500">(required)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-4">
                      What services are you interested in?
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id={service}
                            name="services"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor={service} className="text-sm text-gray-700">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                      What's your budget?
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select a range</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"            
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit</span>
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You for Your Interest!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We have received your request and will contact you shortly.
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    <Clock className="w-4 h-4 mr-2" />
                    Expected Response: Within 24 Hours
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Schedule a consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are passionate about fostering a culture of compliance and collaboration, building strong working relationships based on trust and credibility, and empowering clients to achieve and exceed their business objectives in a compliant manner.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dan's Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <div className="text-center mb-8">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-100 overflow-hidden">
                  <img 
                    src="https://qtxasset.com/quartz/qcloud5/media/image/Dan%20Zavodnick-%20Headshot.jpg?VersionId=KesX1Rhl_zeiKIncfjlfzApaWbfZ6D30"
                    alt="Dan Zavodnick"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dan Zavodnick</h3>
                <p className="text-lg font-semibold text-blue-600 mb-4">President</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:dan@navigatewithnorthstar.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                      dan@navigatewithnorthstar.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+19732941411" className="text-gray-700 hover:text-blue-600 transition-colors">
                      973-294-1411
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  With over 17 years of experience, Dan is an experienced legal and compliance professional who has navigated the complexities of the life sciences industry as a regulatory advisor to companies like Allergan, Bayer, and Bristol Myers Squibb and has served as general counsel to Kedrion Biopharma, Arch Oncology, and GC Biopharma USA.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Dan's experience spans the entire lifecycle of prescription and over-the-counter drugs, dietary supplements, and generics, including drafting, reviewing, and negotiating a broad spectrum of agreement types, in-depth analysis of complex risk-benefit profiles, legal and compliance training, compliance program development, and promotional and advertising review.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Dan has served as legal lead on more than 35 product review teams and more than 20 product launches, demonstrating deep knowledge of the complex regulatory landscape and its impact on product development and commercialization.
                </p>
              </div>
            </motion.div>

            {/* Experience Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Experience Highlights</h4>
                <div className="space-y-4">
                  {[
                    { icon: Award, text: '17+ years of experience' },
                    { icon: Building, text: '35+ review teams led' },
                    { icon: TrendingUp, text: '20+ successful launches' },
                    { icon: Users, text: 'Former advisor to Allergan, Bayer, BMS' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
                <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Click here to schedule a consultation</h3>
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;