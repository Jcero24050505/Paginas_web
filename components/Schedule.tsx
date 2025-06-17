'use client';

import Image from 'next/image';

export default function Schedule() {
  return (
    <div className="flex flex-col space-y-10">
      <div className="w-full rounded-lg overflow-hidden shadow-lg">
        <Image 
          src="https://i.imgur.com/7OeKXLQ.jpeg" 
          alt="Horarios del club" 
          width={1150} 
          height={518} 
          className="w-full h-auto"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">LUNES A JUEVES</h3>
          <p>09:30 a 23:00</p>
          <p className="text-sm text-gray-600">Recepción del Club y Cancha de Golf hasta las 22:00</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">VIERNES</h3>
          <p>09:30 a 22:00</p>
          <p className="text-sm text-gray-600">Recepción hasta las 22:00</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">SÁBADO</h3>
          <p>09:00 a 21:00</p>
          <p className="text-sm text-gray-600">Recepción hasta las 21:00</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">DOMINGO</h3>
          <p>09:00 a 21:00</p>
          <p className="text-sm text-gray-600">Recepción hasta las 21:00</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">24 & 31 DICIEMBRE</h3>
          <p>Abierto de 10:00 a 14:00</p>
          <p className="text-sm text-gray-600">Días especiales</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">25 DICIEMBRE & 1 ENERO</h3>
          <p>Cerrado</p>
          <p className="text-sm text-gray-600">Días especiales</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">SEMANA SANTA Y AGOSTO</h3>
          <p>CONSULTAR</p>
          <p className="text-sm text-gray-600">Días especiales</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">FESTIVOS TODO EL AÑO</h3>
          <p>Abierto de 09:00 a 21:00</p>
        </div>
      </div>
    </div>
  );
}