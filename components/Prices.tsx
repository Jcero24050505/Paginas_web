'use client';

export default function Prices() {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-2">PÁDEL & TENIS</h3>
      <p className="text-gray-600 mb-6 italic">Tarifas actualizadas el 01 de octubre de 2020</p>
      
      <div className="mb-8">
        <h4 className="font-bold mb-4">Lunes a Viernes</h4>
        <p className="mb-2">Alquiler</p>
        
        <div className="overflow-hidden mb-6 border border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">10:00 a 17:00h</td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-bold">10€/hora</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">17:00 a 23:00h</td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-bold">18€/hora</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-2">Bono de 10h</p>
        
        <div className="overflow-hidden mb-6 border border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">10:00 a 17:00h</td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-bold">80€</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">17:00 a 23:00h</td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-bold">140€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-4">Sábados, Domingos y Festivos</h4>
        <p className="mb-2">Alquiler</p>
        
        <div className="overflow-hidden mb-6 border border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">08:00 a 14:00h</td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-bold">18€/hora</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">14:00 a 21:00h</td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-bold">10€/hora</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-2">Bono de 10h</p>
        
        <div className="overflow-hidden mb-6 border border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">08:00 a 14:00h</td>
                <td className="px-6 py-4 whitespace-nowrap text-center font-bold">140€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}