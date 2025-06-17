import React, { useState } from 'react';

// Define the structure for an event
interface Event {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  category: string;
  description: string;
}

// Array of event data
const events: Event[] = [
  {
    title: "Curso de Iniciación a la Escalada",
    date: "2025-04-15",
    startTime: "10:00",
    endTime: "14:00",
    category: "curso",
    description: "Aprende los fundamentos básicos de la escalada en nuestro curso para principiantes. No se requiere experiencia previa."
  },
  {
    title: "Competición Boulder Social",
    date: "2025-04-20",
    startTime: "16:00",
    endTime: "20:00",
    category: "competicion",
    description: "Evento amistoso de boulder con diferentes categorías. Premios para los ganadores y sorteos entre todos los participantes."
  },
  {
    title: "Salida a La Pedriza",
    date: "2025-04-27",
    startTime: "08:00",
    endTime: "18:00",
    category: "salida",
    description: "Excursión de día completo a La Pedriza para escalar en roca natural. Nivel intermedio requerido."
  },
  {
    title: "Taller de Seguridad en Escalada",
    date: "2025-05-05",
    startTime: "17:00",
    endTime: "19:30",
    category: "taller",
    description: "Aprende técnicas esenciales de seguridad y gestión de riesgos en la escalada."
  },
  {
    title: "Curso Avanzado de Técnica",
    date: "2025-05-12",
    startTime: "17:00",
    endTime: "20:00",
    category: "curso",
    description: "Perfecciona tu técnica de escalada con ejercicios específicos para mejorar tu rendimiento."
  },
  {
    title: "Charla: Nutrición para Escaladores",
    date: "2025-05-18",
    startTime: "19:00",
    endTime: "21:00",
    category: "charla",
    description: "Charla impartida por nutricionistas deportivos especializados en deportes de resistencia y fuerza."
  },
  {
    title: "Campeonato Regional de Escalada",
    date: "2025-05-25",
    startTime: "09:00",
    endTime: "20:00",
    category: "competicion",
    description: "Competición oficial federada con categorías infantil, juvenil y adulto."
  },
  {
    title: "Salida Fin de Semana: Sierra de Gredos",
    date: "2025-06-07",
    startTime: "08:00",
    endTime: "18:00",
    category: "salida",
    description: "Fin de semana completo escalando en la Sierra de Gredos. Incluye alojamiento en refugio."
  }
];

// Month names in Spanish for display
const monthNames: string[] = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Tailwind CSS classes for different event categories
const categoryColors: Record<string, string> = {
  curso: "bg-blue-100 text-blue-800",
  competicion: "bg-red-100 text-red-800",
  salida: "bg-green-100 text-green-800",
  taller: "bg-purple-100 text-purple-800",
  charla: "bg-yellow-100 text-yellow-800"
};

const ProgramacionPage: React.FC = () => {
  // State to manage the active filter for events
  const [filter, setFilter] = useState<string>('todos');

  // Group events by month and year
  const eventsByMonth: Record<string, Event[]> = {};
  events.forEach(event => {
    const date = new Date(event.date);
    // Format: YYYY-M (e.g., "2025-4" for April 2025)
    const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
    
    if (!eventsByMonth[monthYear]) {
      eventsByMonth[monthYear] = [];
    }
    
    eventsByMonth[monthYear].push(event);
  });

  // Sort the months chronologically to display events in order
  const sortedMonths = Object.keys(eventsByMonth).sort();

  // Function to filter events based on the selected category
  const filteredEvents = (monthEvents: Event[]): Event[] => {
    if (filter === 'todos') {
      return monthEvents;
    }
    return monthEvents.filter(event => event.category === filter);
  };

  return (
    <div className="pt-16 font-sans">
      {/*
        Inline CSS for custom keyframe animations.
        These animations provide a smoother entrance effect.
      */}
      <style>
        {`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slide-up-fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom utility classes for the new color */
        .bg-custom-blue {
          background-color: #50aed9;
        }
        .hover\\:bg-custom-blue-dark:hover {
          background-color: #409bc7; /* A slightly darker shade for hover */
        }
        `}
      </style>

      {/* Hero Section: Displays a background image and a title with a smooth fade-in animation */}
      <section 
        className="relative h-80 bg-gray-800 rounded-lg overflow-hidden"
        style={{ animation: 'fade-in 1s ease-out forwards' }}
      >
        <img 
          src="https://i.imgur.com/3Cd7INB.png" // Placeholder image for demonstration
          alt="Programación" 
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            // Fallback for image loading errors
            e.currentTarget.src = "https://placehold.co/1200x320/000000/FFFFFF?text=Image+Not+Found";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 rounded-md">PROGRAMACIÓN</h1>
            <p className="text-xl max-w-2xl mx-auto px-4 rounded-md">
              Calendario de actividades y eventos
            </p>
          </div>
        </div>
      </section>

      {/* Content Section: Displays event filters and the list of events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Main content wrapper with a smooth slide-up-fade-in animation */}
          <div 
            className="max-w-4xl mx-auto"
            style={{ animation: 'slide-up-fade-in 1s ease-out forwards 0.5s' }} // Delayed appearance
          >
            <h2 className="text-3xl font-bold mb-8 text-center rounded-md">Próximos Eventos</h2>
            
            {/* Filter buttons */}
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {/* Button for 'Todos' (All) events */}
              <button 
                className={`px-4 py-2 rounded-md transition-colors duration-200 shadow-md ${filter === 'todos' ? 'bg-custom-blue text-white hover:bg-custom-blue-dark' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setFilter('todos')}
              >
                Todos
              </button>
              {/* Buttons for specific categories */}
              {Object.keys(categoryColors).map(category => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-md transition-colors duration-200 shadow-md ${filter === category ? 'bg-custom-blue text-white hover:bg-custom-blue-dark' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}s {/* Capitalize and add 's' for plural */}
                </button>
              ))}
            </div>
            
            {/* Event list, grouped by month */}
            <div className="space-y-10">
              {sortedMonths.map(monthYear => {
                const [year, month] = monthYear.split('-').map(Number);
                const monthEvents = filteredEvents(eventsByMonth[monthYear]);
                
                // Only render the month section if there are events for that month after filtering
                if (monthEvents.length === 0) return null;
                
                return (
                  <div key={monthYear}>
                    {/* Month header */}
                    <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-300 rounded-md">
                      {monthNames[month - 1]} {year}
                    </h3>
                    
                    {/* List of events for the current month with staggered slide-up-fade-in animations */}
                    <div className="space-y-6">
                      {monthEvents
                        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // Sort events by date
                        .map((event, index) => {
                          const date = new Date(event.date);
                          // Format date to Spanish locale, e.g., "lunes, 15 de abril"
                          const formattedDate = date.toLocaleDateString('es-ES', { 
                            weekday: 'long', 
                            day: 'numeric',
                            month: 'long'
                          });
                          
                          // Capitalize the first letter of the formatted date
                          const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
                          
                          return (
                            <div 
                              key={index} 
                              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]"
                              style={{ animation: `slide-up-fade-in 0.7s ease-out forwards ${index * 0.1 + 1}s` }} // Staggered delay
                            >
                              <div className="md:flex">
                                {/* Event date and category section */}
                                <div className="md:w-1/4 bg-gray-100 p-6 flex flex-col justify-center items-center text-center rounded-l-lg">
                                  <div className="text-gray-500 text-sm">{capitalizedDate}</div>
                                  <div className="text-xl font-bold my-1">{event.startTime} - {event.endTime}</div>
                                  <span className={`text-xs px-3 py-1 rounded-full shadow-sm ${categoryColors[event.category] || 'bg-gray-100 text-gray-800'}`}>
                                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                                  </span>
                                </div>
                                
                                {/* Event details section */}
                                <div className="p-6 md:w-3/4 flex flex-col justify-between">
                                  <div>
                                    <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                                    <p className="text-gray-600 mb-4">{event.description}</p>
                                  </div>
                                  <a 
                                    href="/contacto" 
                                    className="inline-block bg-custom-blue hover:bg-custom-blue-dark text-white py-2 px-4 rounded-md transition-colors duration-300 text-sm self-end"
                                  >
                                    Más información
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Message when no events are available with the current filter */}
            {sortedMonths.flatMap(month => filteredEvents(eventsByMonth[month])).length === 0 && (
              <div className="bg-gray-100 rounded-lg p-8 text-center shadow-md">
                <p className="text-xl text-gray-600">No hay eventos disponibles con el filtro seleccionado.</p>
              </div>
            )}
            
            {/* Calendar Information Section with a smooth slide-up-fade-in animation */}
            <div 
              className="mt-16 bg-gray-50 rounded-lg p-8 shadow-lg"
              style={{ animation: 'slide-up-fade-in 1s ease-out forwards 1.8s' }} // Delayed appearance
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Información sobre Eventos</h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Este calendario se actualiza regularmente con nuevos eventos y actividades. Te recomendamos consultarlo periódicamente para estar al día de todo lo que ocurre en Espacio Acción.
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Inscripciones</h4>
                  <p>
                    La mayoría de eventos requieren inscripción previa. Las plazas son limitadas y se asignan por orden de inscripción. Para más información y reservas, contacta con nosotros.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Eventos privados</h4>
                  <p>
                    También organizamos eventos privados para grupos, empresas o celebraciones especiales. Consúltanos para diseñar una actividad a medida.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="/contacto" 
                  className="inline-block bg-custom-blue hover:bg-custom-blue-dark text-white py-2 px-6 rounded-md transition-colors duration-300 shadow-md"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramacionPage;
