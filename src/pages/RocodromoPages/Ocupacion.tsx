import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import OccupancyChart from '../../components/ui/OccupancyChart';

const Ocupacion: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Ocupación de Barras"
          subtitle="Consulta en tiempo real la disponibilidad de nuestras instalaciones"
        />

        <div className="mb-12">
          <p className="text-gray-600 text-center mb-8">
            Monitoriza la ocupación actual del rocódromo para planificar mejor tu visita. 
            Actualizamos estos datos cada 15 minutos para ofrecerte información precisa.
          </p>

          <OccupancyChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">¿Cuándo visitar?</h3>
            <p className="text-gray-600 mb-4">
              Si prefieres escalar con menos gente, estos son los horarios recomendados:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Mañanas de lunes a viernes:</strong> 10:00 - 13:00 (ocupación media del 30%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Mediodías de lunes a jueves:</strong> 14:00 - 16:00 (ocupación media del 40%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Domingo tardes:</strong> 17:00 - 20:00 (ocupación media del 50%)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Horas de mayor afluencia</h3>
            <p className="text-gray-600 mb-4">
              Estos son los momentos con mayor ocupación, si prefieres un ambiente más tranquilo, 
              considera visitarnos en otros horarios:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span><strong>Tardes de lunes a viernes:</strong> 18:00 - 21:00 (ocupación media del 80%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span><strong>Sábados:</strong> 11:00 - 14:00 (ocupación media del 85%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span><strong>Fin de semana con mal tiempo:</strong> Aumenta la ocupación significativamente</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Reserva tu espacio</h3>
          <p className="text-gray-600 text-center mb-6">
            Para asegurar tu plaza en horas de alta ocupación, considera estas opciones:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Reserva anticipada</h4>
              <p className="text-gray-600 mb-4">
                Puedes reservar tu entrada con hasta 7 días de antelación para asegurar tu plaza en el horario que prefieras.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Reservar ahora
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Bono mensual</h4>
              <p className="text-gray-600 mb-4">
                Los titulares de bonos mensuales tienen acceso prioritario incluso en horas de máxima afluencia.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Ver bonos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ocupacion;