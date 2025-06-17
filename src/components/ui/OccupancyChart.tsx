import React from 'react';

const OccupancyChart: React.FC = () => {
  // In a real application, this data would come from an API or real-time database
  const occupancyData = {
    occupied: 23,
    available: 77,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Ocupación Actual de Barras</h3>
      
      <div className="h-8 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 ease-in-out" 
          style={{ width: `${occupancyData.occupied}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span>Ocupado: {occupancyData.occupied}%</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span>Disponible: {occupancyData.available}%</span>
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-sm">
        Actualizado: {new Date().toLocaleTimeString()}
      </p>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {Array.from({ length: 20 }).map((_, index) => {
          const isOccupied = Math.random() > 0.77; // 23% chance of being occupied
          return (
            <div 
              key={index} 
              className={`h-16 rounded-md flex items-center justify-center text-white font-medium ${isOccupied ? 'bg-red-500' : 'bg-green-500'}`}
            >
              {`Barra ${index + 1}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OccupancyChart;