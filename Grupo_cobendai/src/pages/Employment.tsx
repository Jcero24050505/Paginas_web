import { ArrowLeft, Briefcase, BookOpen, Award, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Employment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    cv: null,
    privacy: false
  });

  // Sample job offers
  const jobOffers = [
    {
      id: 1,
      title: 'Asesor Comercial',
      location: 'Madrid',
      type: 'Jornada completa',
      description: 'Buscamos asesores comerciales para nuestra sede en Madrid. Responsable de asesorar a clientes en la compra de vehículos, gestionar el proceso de venta y mantener la cartera de clientes.',
      requirements: [
        'Experiencia mínima de 2 años en ventas, preferiblemente en el sector automoción',
        'Orientación al cliente y capacidad de negociación',
        'Manejo de herramientas informáticas',
        'Carnet de conducir B'
      ]
    },
    {
      id: 2,
      title: 'Mecánico Oficial de 1ª',
      location: 'Madrid',
      type: 'Jornada completa',
      description: 'Se precisa incorporar un Mecánico Oficial de 1ª para nuestro taller en Madrid. Responsable de realizar diagnósticos, mantenimientos y reparaciones en vehículos multimarca.',
      requirements: [
        'Experiencia mínima de 3 años como mecánico oficial',
        'Formación profesional en automoción',
        'Conocimientos avanzados de mecánica, electricidad y electrónica del automóvil',
        'Carnet de conducir B'
      ]
    },
    {
      id: 3,
      title: 'Recepcionista de Taller',
      location: 'Madrid',
      type: 'Jornada completa',
      description: 'Buscamos recepcionista para nuestro taller en San sebastian de los Reyes. Responsable de atender a los clientes, gestionar las citas y coordinar con el equipo de taller.',
      requirements: [
        'Experiencia mínima de 1 año en atención al cliente, preferiblemente en el sector automoción',
        'Conocimientos básicos de mecánica',
        'Habilidades comunicativas y orientación al cliente',
        'Manejo de herramientas informáticas'
      ]
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit the form data to a server
    console.log('Form submitted:', formData);
    alert('Candidatura enviada correctamente. Revisaremos tu perfil y nos pondremos en contacto contigo si encaja con nuestras necesidades.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      cv: null,
      privacy: false
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Empleo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trabaja con Nosotros
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre oportunidades laborales en Grupo Cobendai y desarrolla tu carrera profesional con nosotros.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver al inicio
            </Link>
          </div>
          
          {/* Why Work With Us */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué trabajar con nosotros?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                En Grupo Cobendai creemos que nuestros empleados son nuestro activo más valioso. Te ofrecemos un entorno de trabajo dinámico y en constante evolución, donde podrás desarrollar tu carrera profesional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Desarrollo profesional</h3>
                <p className="text-gray-600 text-center">
                  Oportunidades de crecimiento y desarrollo dentro de la empresa.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Formación continua</h3>
                <p className="text-gray-600 text-center">
                  Programas de formación para mejorar tus habilidades y conocimientos.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Reconocimiento</h3>
                <p className="text-gray-600 text-center">
                  Valoramos el esfuerzo y compromiso de nuestros empleados.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Conciliación</h3>
                <p className="text-gray-600 text-center">
                  Fomentamos la conciliación entre la vida laboral y personal.
                </p>
              </div>
            </div>
          </div>
          
          {/* Current Job Offers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ofertas disponibles</h2>
            
            <div className="space-y-8">
              {jobOffers.map((job) => (
                <div key={job.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                    
                    <div className="flex flex-wrap items-center text-gray-600 mb-4">
                      <div className="flex items-center mr-6 mb-2">
                        <MapPin size={16} className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Clock size={16} className="mr-1" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href="#application-form" 
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        setFormData(prev => ({ ...prev, position: job.title }));
                      }}
                    >
                      Aplicar a esta oferta
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Application Form */}
          <div id="application-form" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Envía tu candidatura</h2>
            
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Puesto al que aplicas *</label>
                    <select 
                      id="position" 
                      name="position" 
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      {jobOffers.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="Otro">Otro (especificar en el mensaje)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experiencia laboral *</label>
                  <select 
                    id="experience" 
                    name="experience" 
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Sin experiencia">Sin experiencia</option>
                    <option value="Menos de 1 año">Menos de 1 año</option>
                    <option value="1-3 años">1-3 años</option>
                    <option value="3-5 años">3-5 años</option>
                    <option value="Más de 5 años">Más de 5 años</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje / Carta de presentación</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">CV (PDF) *</label>
                  <input 
                    type="file" 
                    id="cv" 
                    name="cv" 
                    accept=".pdf" 
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
                    required 
                  />
                  <p className="text-xs text-gray-500 mt-1">Máximo 2MB. Solo se aceptan archivos PDF.</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="privacy" 
                      name="privacy" 
                      type="checkbox" 
                      checked={formData.privacy}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-gray-700">
                      He leído y acepto la <Link to="/politica-privacidad" className="text-blue-600 hover:underline">política de privacidad</Link> y el tratamiento de mis datos personales *
                    </label>
                  </div>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full"
                  >
                    Enviar candidatura
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Spontaneous Application */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿No has encontrado el puesto que buscas?</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Si no has encontrado una oferta que se ajuste a tu perfil pero estás interesado en formar parte de nuestro equipo, puedes enviarnos tu candidatura espontánea. Guardaremos tu CV en nuestra base de datos y te contactaremos cuando surja una oportunidad acorde a tu perfil.
            </p>
            <a 
              href="#application-form" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                setFormData(prev => ({ ...prev, position: 'Candidatura espontánea' }));
              }}
            >
              Enviar candidatura espontánea
            </a>
          </div>
          
          {/* Working Environment */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestro ambiente de trabajo</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img 
                src="https://img.freepik.com/fotos-premium/vendedor-autos-confiado-que-usa-traje-negocios-cuenta-sobre-nuevo-modelo-auto-joven-que-usa-ropa-informal-concesionario-autos-concepto-elegir-comprar-coche-nuevo-sala-exposicion_482921-3814.jpg" 
                alt="Ambiente de trabajo"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://img.freepik.com/fotos-premium/vendedor-vendiendo-coches-concesionario-coches-hombre-eligiendo-coche-sala-exposicion-coches_152637-1936.jpg" 
                alt="Ambiente de trabajo"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://media.istockphoto.com/id/1731251119/es/foto/guapo-vendedor-de-coches-masculino-trabajando-en-la-sala-de-exposici%C3%B3n.jpg?s=612x612&w=0&k=20&c=STnD-CitWWPidrqY3LVuxf9e1CPl3FSwhO1lYeH3Rp0=" 
                alt="Ambiente de trabajo"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Tienes alguna duda sobre nuestras ofertas?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos para obtener más información sobre las oportunidades laborales en Grupo Cobendai.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Employment;