'use client' // Agrega esta línea al principio del archivo
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ClockIcon, CheckCircle, ChevronRight, Loader2, XCircle } from 'lucide-react';
import { cn } from "@/lib/utils";
// Definimos los tipos para las reservas
interface Reserva {
    id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    url: string;
    horarios: string[]; // Añadimos la propiedad horarios
}

// Datos de ejemplo para las reservas (puedes reemplazarlos con tus datos)
const reservasData: Reserva[] = [
    {
        id: 'padel',
        nombre: 'PÁDEL',
        descripcion: '40 Pistas',
        imagen: 'https://i.imgur.com/A3PP0T9.jpeg',
        url: '#',
        horarios: ['09:00', '10:00', '11:00', '12:00', '13:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
    },
    {
        id: 'tenis',
        nombre: 'TENIS',
        descripcion: '12 Pistas',
        imagen: 'https://i.imgur.com/2aFspZi.jpeg',
        url: '#',
        horarios: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
    },
    {
        id: 'golf',
        nombre: 'GOLF',
        descripcion: '80 Puestos',
        imagen: 'https://i.imgur.com/yGUg3q6.jpeg',
        url: '#',
        horarios: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    },
];

const ReservasPage = () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [reservationConfirmed, setReservationConfirmed] = useState(false);
    const [activeSport, setActiveSport] = useState<string | null>(null);
    const [bookedTimes, setBookedTimes] = useState<{ [date: string]: { [sport: string]: string[] } }>({}); // Nuevo estado para las reservas ocupadas

    // Lista de horas disponibles (simulación)
    const getAvailableTimes = (sportId: string) => {
        const sport = reservasData.find((s) => s.id === sportId);
        return sport ? sport.horarios : [];
    };

    const [availableTimes, setAvailableTimes] = useState<string[]>(getAvailableTimes('padel'));

    // Actualiza las horas disponibles cuando se cambia el deporte activo
    useEffect(() => {
        if (activeSport) {
            setAvailableTimes(getAvailableTimes(activeSport));
        }
    }, [activeSport]);

    // Función para manejar la reserva (simulación)
    const handleReservation = () => {
        if (!selectedDate || !selectedTime || !activeSport) return;

        setLoading(true);
        // Simula una llamada a la API
        setTimeout(() => {
            setLoading(false);
            setReservationConfirmed(true);

            // Actualiza las horas reservadas
            const dateString = selectedDate.toISOString().split('T')[0];
            setBookedTimes((prevBookedTimes) => {
                const updatedBookedTimes = { ...prevBookedTimes };
                if (!updatedBookedTimes[dateString]) {
                    updatedBookedTimes[dateString] = {};
                }
                if (!updatedBookedTimes[dateString][activeSport]) {
                    updatedBookedTimes[dateString][activeSport] = [];
                }
                updatedBookedTimes[dateString][activeSport] = [
                    ...updatedBookedTimes[dateString][activeSport],
                    selectedTime,
                ];
                return updatedBookedTimes;
            });

            // Resetea el estado después de 3 segundos
            setTimeout(() => {
                setReservationConfirmed(false);
                setSelectedDate(new Date());
                setSelectedTime('');
                setActiveSport(null); // Resetsport
            }, 3000);
        }, 2000);
    };

      // Función para verificar si una hora está reservada
    const isTimeBooked = (date: Date | undefined, sport: string, time: string) => {
        if (!date) return false;
        const dateString = date.toISOString().split('T')[0];
        return bookedTimes[dateString] && bookedTimes[dateString][sport]?.includes(time);
    };

    // Función para formatear la fecha
    const formatDate = (date: Date | undefined) => {
        if (!date) return '';
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sección Hero */}
            <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://i.imgur.com/X85oEm5.jpeg"
                        alt="Banner de Reservas"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                        className="brightness-[0.6]"
                    />
                </div>
                <div className="z-10 text-center px-4 md:px-8 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                        RESERVA TU PISTA
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-light italic mb-8">
                        Encuentra tu deporte y reserva online
                    </p>
                </div>
            </section>

            {/* Sección de Reserva */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                        SISTEMA DE RESERVAS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {reservasData.map((reserva) => (
                            <div
                                key={reserva.id}
                                className={cn(
                                    "bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105",
                                    "group relative flex flex-col justify-between" // Agregado para el botón al final
                                )}
                                onClick={() => setActiveSport(reserva.id)}
                            >
                                <img
                                    src={reserva.imagen}
                                    alt={reserva.nombre}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                        {reserva.nombre}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{reserva.descripcion}</p>
                                </div>
                                <Button
                                    asChild
                                    className={cn(
                                        "w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center",
                                        "mt-auto" // Empuja el botón hacia abajo
                                    )}
                                >
                                    <a href={reserva.url}>
                                        Reservar {reserva.nombre} <ChevronRight className="ml-2 w-5 h-5" />
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección de Selector de Fecha y Hora */}
            {activeSport && (
                <section className="py-12 md:py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                HAZ TU RESERVA DE {activeSport.toUpperCase()}
                            </h2>
                            <Button
                                onClick={() => setActiveSport(null)}
                                variant="outline"
                                className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                            >
                                <XCircle className="mr-2 h-4 w-4" /> Volver
                            </Button>
                        </div>
                        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                            <div className="mb-6">
                                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                                    Fecha:
                                </label>
                                {/* Usamos un input de tipo date para simplificar, pero podrías usar un componente de calendario */}
                                <input
                                    type="date"
                                    id="date"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                                    onChange={(e) => {
                                        const selected = new Date(e.target.value);
                                        setSelectedDate(selected);
                                    }}
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
                                    Hora:
                                </label>
                                <select
                                    id="time"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                >
                                    <option value="">Selecciona una hora</option>
                                    {availableTimes.map((time) => {
                                        const isBooked = isTimeBooked(selectedDate, activeSport, time);
                                        return (
                                            <option
                                                key={time}
                                                value={time}
                                                disabled={isBooked}
                                                className={cn(isBooked ? "text-red-500" : "text-gray-700")}
                                            >
                                                {time} {isBooked && '(Ocupado)'}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <Button
                                onClick={handleReservation}
                                disabled={loading || !selectedDate || !selectedTime || isTimeBooked(selectedDate, activeSport, selectedTime)}
                                className={cn(
                                    "w-full font-semibold py-3 px-4 rounded-md transition-colors flex items-center justify-center",
                                    {
                                        "bg-blue-500 text-white hover:bg-blue-600":
                                            !loading && !reservationConfirmed && selectedDate && selectedTime && !isTimeBooked(selectedDate, activeSport, selectedTime),
                                        "bg-gray-400 text-white cursor-not-allowed":
                                            loading || !selectedDate || !selectedTime || isTimeBooked(selectedDate, activeSport, selectedTime),
                                        "bg-green-500 text-white": reservationConfirmed,
                                    }
                                )}
                            >
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {reservationConfirmed ? (
                                    <>
                                        <CheckCircle className="mr-2 h-4 w-4" /> Reserva Confirmada
                                    </>
                                ) : (
                                    "Reservar Ahora"
                                )}
                            </Button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ReservasPage;

