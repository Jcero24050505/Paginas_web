import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Button from '../components/Button';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const DondeEstamos = () => {
  return (
    <>
      <PageHeader 
        title="¿Dónde está Uadibloc? En el barrio de Malasaña, San Hermenegildo 25"
      />
      
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                ¡Bienvenido a Uadibloc! Nos encontramos en el corazón de Malasaña, en la 
                Calle San Hermenegildo, Nº 25, Madrid, 28015.
              </p>
              
              <p className="text-gray-700 mb-6">
                Estamos cerca de las estaciones de metro Tribunal (L1 y L10), San Bernardo (L2 y L4), 
                Plaza de España (L3 y L10) lo que facilita llegar en transporte público.
              </p>
              
              <p className="text-gray-700 mb-8">
                También tienes cerca varias estaciones de BiciMad y autobús.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin size={24} className="text-orange-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Dirección</h3>
                    <p>Calle San Hermenegildo, Nº 25<br />Madrid, 28015</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-orange-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Horarios</h3>
                    <p>Lunes a Viernes: 10:00 - 22:00<br />Sábados y Domingos: 10:00 - 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-orange-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Teléfono</h3>
                    <p>+34 912 345 678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-orange-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>info@uadibloc.com</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 font-bold mb-6">
                ¡Te esperamos en Uadibloc!
              </p>
              
              <Button to="/precios-rocodromo-madrid">Ver precios y tarifas</Button>
            </div>
            
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-[450px]">
                {/* This is where we would embed a Google Maps iframe, but for this demo we'll just show a placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <div className="text-center p-4">
                    <MapPin size={48} className="mx-auto mb-3 text-orange-500" />
                    <p className="font-bold">Uadibloc - Rocódromo Madrid</p>
                    <p>Calle San Hermenegildo, Nº 25, Madrid, 28015</p>
                    <Button 
                      href="https://maps.app.goo.gl/wXnL9bhbKPdjCwsL6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4"
                    >
                      Ver en Google Maps
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">Cómo llegar:</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Metro:</p>
                    <ul className="ml-5 list-disc">
                      <li>Tribunal (L1 y L10) - 5 min a pie</li>
                      <li>San Bernardo (L2 y L4) - 7 min a pie</li>
                      <li>Plaza de España (L3 y L10) - 12 min a pie</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium">Autobús:</p>
                    <ul className="ml-5 list-disc">
                      <li>Líneas 1, 2, 44, 74, 133, 147</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium">Parking:</p>
                    <ul className="ml-5 list-disc">
                      <li>Parking Plaza de España - 10 min a pie</li>
                      <li>Parking Tribunal - 5 min a pie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Dudas? ¡Contáctanos!</h2>
          <p className="text-lg mb-8">
            Estaremos encantados de responder cualquier pregunta que tengas sobre nuestras 
            instalaciones, clases, o cualquier otro servicio.
          </p>
          
          <form className="max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            
            <Button variant="primary" className="w-full">Enviar mensaje</Button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default DondeEstamos;