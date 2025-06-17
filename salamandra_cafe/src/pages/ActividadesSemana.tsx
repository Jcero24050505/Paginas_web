import { useState } from 'react';
import Hero from '../components/Hero';
import { Calendar, Clock, Users } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  time: string;
  dayOfWeek: number; // 0 for Monday, 1 for Tuesday, etc.
  slots: number;
  availableSlots: number;
  type: 'class' | 'training' | 'free' | 'special';
}

// Sample activities data
const activitiesData: Activity[] = [
  // Monday (0)
  { id: '1', title: 'Clase general', time: '12:00 - 13:30', dayOfWeek: 0, slots: 8, availableSlots: 3, type: 'class' },
  { id: '2', title: 'Clase general', time: '15:00 - 16:30', dayOfWeek: 0, slots: 8, availableSlots: 5, type: 'class' },
  { id: '3', title: 'Entrenamiento', time: '16:45 - 18:15', dayOfWeek: 0, slots: 8, availableSlots: 2, type: 'training' },
  { id: '4', title: 'Clase general', time: '18:00 - 19:30', dayOfWeek: 0, slots: 8, availableSlots: 0, type: 'class' },
  { id: '5', title: 'Clase general', time: '19:00 - 20:30', dayOfWeek: 0, slots: 8, availableSlots: 1, type: 'class' },
  { id: '6', title: 'Clase general', time: '20:00 - 21:30', dayOfWeek: 0, slots: 8, availableSlots: 6, type: 'class' },
  { id: '7', title: 'Clase general', time: '21:00 - 22:30', dayOfWeek: 0, slots: 8, availableSlots: 7, type: 'class' },
  
  // Tuesday (1)
  { id: '8', title: 'Clase general', time: '12:00 - 13:30', dayOfWeek: 1, slots: 8, availableSlots: 4, type: 'class' },
  { id: '9', title: 'Clase general', time: '13:45 - 15:15', dayOfWeek: 1, slots: 8, availableSlots: 5, type: 'class' },
  { id: '10', title: 'Clase general', time: '15:00 - 16:30', dayOfWeek: 1, slots: 8, availableSlots: 3, type: 'class' },
  { id: '11', title: 'Entrenamiento', time: '16:45 - 18:15', dayOfWeek: 1, slots: 8, availableSlots: 1, type: 'training' },
  { id: '12', title: 'Clase general', time: '18:00 - 19:30', dayOfWeek: 1, slots: 8, availableSlots: 0, type: 'class' },
  { id: '13', title: 'Clase general', time: '19:00 - 20:30', dayOfWeek: 1, slots: 8, availableSlots: 2, type: 'class' },
  { id: '14', title: 'Clase general', time: '20:00 - 21:30', dayOfWeek: 1, slots: 8, availableSlots: 4, type: 'class' },
  { id: '15', title: 'Clase general', time: '21:00 - 22:30', dayOfWeek: 1, slots: 8, availableSlots: 7, type: 'class' },
  
  // Wednesday (2)
  { id: '16', title: 'Clase general', time: '12:00 - 13:30', dayOfWeek: 2, slots: 8, availableSlots: 6, type: 'class' },
  { id: '17', title: 'Clase general', time: '15:00 - 16:30', dayOfWeek: 2, slots: 8, availableSlots: 4, type: 'class' },
  { id: '18', title: 'Entrenamiento', time: '16:45 - 18:15', dayOfWeek: 2, slots: 8, availableSlots: 3, type: 'training' },
  { id: '19', title: 'Clase general', time: '18:00 - 19:30', dayOfWeek: 2, slots: 8, availableSlots: 1, type: 'class' },
  { id: '20', title: 'Clase juvenil', time: '18:00 - 19:00', dayOfWeek: 2, slots: 8, availableSlots: 0, type: 'class' },
  { id: '21', title: 'Clase general', time: '19:00 - 20:30', dayOfWeek: 2, slots: 8, availableSlots: 2, type: 'class' },
  { id: '22', title: 'Clase general', time: '20:00 - 21:30', dayOfWeek: 2, slots: 8, availableSlots: 5, type: 'class' },
  { id: '23', title: 'Clase general', time: '21:00 - 22:30', dayOfWeek: 2, slots: 8, availableSlots: 6, type: 'class' },
  
  // Thursday (3)
  { id: '24', title: 'Clase general', time: '12:00 - 13:30', dayOfWeek: 3, slots: 8, availableSlots: 5, type: 'class' },
  { id: '25', title: 'Clase general', time: '13:45 - 15:15', dayOfWeek: 3, slots: 8, availableSlots: 6, type: 'class' },
  { id: '26', title: 'Clase general', time: '15:00 - 16:30', dayOfWeek: 3, slots: 8, availableSlots: 4, type: 'class' },
  { id: '27', title: 'Entrenamiento', time: '16:45 - 18:15', dayOfWeek: 3, slots: 8, availableSlots: 2, type: 'training' },
  { id: '28', title: 'Clase general', time: '18:00 - 19:30', dayOfWeek: 3, slots: 8, availableSlots: 0, type: 'class' },
  { id: '29', title: 'Clase general', time: '19:00 - 20:30', dayOfWeek: 3, slots: 8, availableSlots: 1, type: 'class' },
  { id: '30', title: 'Clase general', time: '20:00 - 21:30', dayOfWeek: 3, slots: 8, availableSlots: 3, type: 'class' },
  { id: '31', title: 'Clase general', time: '21:00 - 22:30', dayOfWeek: 3, slots: 8, availableSlots: 5, type: 'class' },
  
  // Friday (4)
  { id: '32', title: 'Clase general', time: '12:00 - 13:30', dayOfWeek: 4, slots: 8, availableSlots: 6, type: 'class' },
  { id: '33', title: 'Clase general', time: '15:00 - 16:30', dayOfWeek: 4, slots: 8, availableSlots: 5, type: 'class' },
  { id: '34', title: 'Clase particular', time: '13:00 - 14:00', dayOfWeek: 4, slots: 3, availableSlots: 1, type: 'special' },
  { id: '35', title: 'Clase particular', time: '15:00 - 16:00', dayOfWeek: 4, slots: 3, availableSlots: 2, type: 'special' },
  { id: '36', title: 'Clase particular', time: '16:00 - 17:00', dayOfWeek: 4, slots: 3, availableSlots: 0, type: 'special' },
  { id: '37', title: 'Acceso libre', time: '12:00 - 21:00', dayOfWeek: 4, slots: 30, availableSlots: 15, type: 'free' },
  
  // Saturday (5)
  { id: '38', title: 'Clase particular', time: '12:00 - 13:00', dayOfWeek: 5, slots: 3, availableSlots: 2, type: 'special' },
  { id: '39', title: 'Clase particular', time: '13:00 - 14:00', dayOfWeek: 5, slots: 3, availableSlots: 0, type: 'special' },
  { id: '40', title: 'Acceso libre', time: '10:00 - 15:00', dayOfWeek: 5, slots: 30, availableSlots: 20, type: 'free' },
  
  // Sunday (6)
  { id: '41', title: 'Cerrado', time: '-', dayOfWeek: 6, slots: 0, availableSlots: 0, type: 'free' },
];

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const ActividadesSemana = () => {
  const [selectedDay, setSelectedDay] = useState(0); // Default to Monday
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredActivities = activitiesData
    .filter(activity => activity.dayOfWeek === selectedDay)
    .filter(activity => {
      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'class' && activity.type === 'class') return true;
      if (selectedFilter === 'training' && activity.type === 'training') return true;
      if (selectedFilter === 'special' && activity.type === 'special') return true;
      if (selectedFilter === 'free' && activity.type === 'free') return true;
      if (selectedFilter === 'available' && activity.availableSlots > 0) return true;
      return false;
    });

  const getActivityStatusClass = (activity: Activity) => {
    if (activity.availableSlots === 0) {
      return 'bg-red-100 border-red-300';
    } else if (activity.availableSlots <= 2) {
      return 'bg-yellow-100 border-yellow-300';
    } else {
      return 'bg-green-100 border-green-300';
    }
  };

  const getActivityTypeBadge = (type: string) => {
    switch (type) {
      case 'class':
        return <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">Clase</span>;
      case 'training':
        return <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-800">Entrenamiento</span>;
      case 'special':
        return <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">Particular</span>;
      case 'free':
        return <span className="text-xs font-medium px-2 py-1 rounded-full bg-teal-100 text-teal-800">Acceso libre</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/fotos/erp_salamandra/logo/logo-salamandra-escalador.png"
        title="Horario de actividades"
        subtitle="Consulta y reserva nuestras actividades semanales"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Consulta nuestro calendario con los horarios de las actividades programadas en el centro Salamandra. 
            Clases de escalada, infantiles, particulares, acceso libre de mañana o tarde, bautismos, etc. 
            Una vez consultado el día, horario y actividad a realizar, podrás reservar la actividad siempre que estés registrado.
          </p>

          {/* Day Selection Tabs */}
          <div className="mb-8">
            <div className="grid grid-cols-7 border rounded-lg overflow-hidden">
              {daysOfWeek.map((day, index) => (
                <button
                  key={index}
                  className={`py-3 text-center font-medium transition-colors ${selectedDay === index 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setSelectedDay(index)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            <button
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'all' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setSelectedFilter('all')}
            >
              Todas
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'class' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setSelectedFilter('class')}
            >
              Clases
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'training' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setSelectedFilter('training')}
            >
              Entrenamiento
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'special' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setSelectedFilter('special')}
            >
              Particulares
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'free' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setSelectedFilter('free')}
            >
              Acceso libre
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'available' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setSelectedFilter('available')}
            >
              Con plazas disponibles
            </button>
          </div>

          {/* Activities Grid */}
          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredActivities.map(activity => (
                <div 
                  key={activity.id}
                  className={`border rounded-lg p-4 transition-all duration-300 hover:shadow-md ${getActivityStatusClass(activity)}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-zinc-800">{activity.title}</h3>
                    {getActivityTypeBadge(activity.type)}
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock size={16} className="mr-2" />
                    <span>{activity.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users size={16} className="mr-2" />
                    <span>
                      {activity.type === 'free' 
                        ? `${activity.availableSlots} plazas disponibles` 
                        : `${activity.availableSlots} de ${activity.slots} plazas disponibles`}
                    </span>
                  </div>
                  
                  <button 
                    className={`w-full py-2 rounded-md text-white font-medium transition-colors ${
                      activity.availableSlots > 0 
                        ? 'bg-orange-500 hover:bg-orange-600' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={activity.availableSlots === 0}
                  >
                    {activity.availableSlots > 0 ? 'Reservar' : 'Completo'}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-100 rounded-lg">
              <Calendar className="mx-auto w-12 h-12 text-gray-400 mb-3" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No hay actividades disponibles</h3>
              <p className="text-gray-500">
                No hay actividades programadas para este día con los filtros seleccionados.
              </p>
            </div>
          )}

          {/* Legend */}
          <div className="mt-10 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-zinc-800">Leyenda</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-700">Plazas disponibles</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-gray-700">Últimas plazas</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-gray-700">Completo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-800">¿Listo para reservar tu plaza?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Para poder reservar actividades necesitas estar registrado en nuestro sistema. Si aún no lo estás, te invitamos a crear tu cuenta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/area-usuarios-registro" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Registrarme
            </a>
            <a 
              href="/area-usuarios" 
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActividadesSemana;