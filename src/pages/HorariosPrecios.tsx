import React from 'react';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';

const HorariosPrecios: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Precios - RockTown Climbing';
  }, []);
  
  return (
    <div>
      <Hero 
        title="HORARIOS Y PRECIOS" 
        imageUrl="https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/86ffb59c-3aac-3448-212f-0fc924ffd8d7.jpg"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              HORARIOS ROCKTOWN CLIMBING
            </h2>

            <div className="bg-amber-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">HORARIO NORMAL</h3>
              <div className="space-y-4 text-gray-700 text-xl">
                <p><strong>Lunes - jueves:</strong> 12:00 – 22:00</p>
                <p><strong>Viernes:</strong> 12:00 - 20:00</p>
                <p><strong>Sábados y domingos:</strong> 10:00 – 20:00</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Horarios clases</h3>
              <p className="text-gray-700 text-xl">
                Las clases se repartirán de lunes a jueves de 5:00pm a 10:00pm. Consultar con nosotros para ver disponibilidades y reservar plazas.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Alquiler de material</h3>
              <p className="text-gray-700 text-xl">
                Tenemos pies de gato en alquiler. Precio 3€/día
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Precios de entrada</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-amber-600 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Tipo de entrada</th>
                      <th className="py-3 px-4 text-right">Precio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Entrada día</td>
                      <td className="py-3 px-4 text-right">10€</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Entrada día niños (hasta 12 años)</td>
                      <td className="py-3 px-4 text-right">7€</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Bono de 10 entradas (Adultos)</td>
                      <td className="py-3 px-4 text-right">90€</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Bono de 10 entradas (Niño)</td>
                      <td className="py-3 px-4 text-right">63€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Abonos de entrada libre</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Abono mensual</h4>
                  <p className="text-amber-600 text-2xl font-bold mb-3">65€ (Niños 48€)</p>
                  <p className="text-gray-600 mb-4">Válido para 1 mes</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Abono trimestral</h4>
                  <p className="text-amber-600 text-2xl font-bold mb-3">165€</p>
                  <p className="text-gray-500 text-sm">Validez: 3 meses</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-700 hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Abono semestral</h4>
                  <p className="text-amber-700 text-2xl font-bold mb-3">310€</p>
                  <p className="text-gray-600 mb-4">Validez: 6 meses</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-700 hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Abono anual</h4>
                  <p className="text-amber-700 text-2xl font-bold mb-3">545€</p>
                  <p className="text-gray-600 mb-4">Validez: 1 año</p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Precios Clases</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-amber-600 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Tipo de clase</th>
                      <th className="py-3 px-4 text-center">Duración</th>
                      <th className="py-3 px-4 text-right">Precio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Clases escalada </td>
                      <td className="py-3 px-4 text-center">2 días/semana</td>
                      <td className="py-3 px-4 text-right">60€/mes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Acceso libre a RockTown + 2 clases a la semana</td>
                      <td className="py-3 px-4 text-center">2 días/semana</td>
                      <td className="py-3 px-4 text-right">88€/mes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Clases escalada</td>
                      <td className="py-3 px-4 text-center">1 día/semana</td>
                      <td className="py-3 px-4 text-right">40€/mes </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Clases niños (Una hora de clase a la semana)</td>
                      <td className="py-3 px-4 text-center">1 hora/semana</td>
                      <td className="py-3 px-4 text-right">40€</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Clase niños (Dos horas a la semana)</td>
                      <td className="py-3 px-4 text-center">2 hora</td>
                      <td className="py-3 px-4 text-right">50€/mes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Dos horas a la semana + acceso libre al centro</td>
                      <td className="py-3 px-4 text-center">2 hora/semana</td>
                      <td className="py-3 px-4 text-right">60€/mes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-600 italic">
                Cuota de clases: Las clases son mensuales y comienzan el día 1 del mes en curso y finalizan el último día del mismo. Es obligatorio abonar el curso el primer día de clases mensuales o reservarlo el mes anterior. De no hacerlo se perderá la plaza en el curso y se liberará para que pueda ser disfrutada por otra persona.
              </p>
            </div>
              <div className="mb-16">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">Precios Cumpleaños</h3>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-amber-600 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Tipo de clase</th>
          <th className="py-3 px-4 text-center">Personas</th>
          <th className="py-3 px-4 text-right">Precio</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-gray-50">
          <td className="py-3 px-4 font-medium">Cumpleaños con comida y bebida (pizza y refrescos)</td>
          <td className="py-3 px-4 text-center">por niño (máximo 20 niños)</td>
          <td className="py-3 px-4 text-right">22€</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-3 px-4 font-medium">Cumpleaños con bebida incluida (sin comida)</td>
          <td className="py-3 px-4 text-center">por niño (máximo 20 niños)</td>
          <td className="py-3 px-4 text-right">16€</td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-3 px-4 font-medium">Cumpleaños solo con actividades</td>
          <td className="py-3 px-4 text-center">por niño (máximo 20 niños)</td>
          <td className="py-3 px-4 text-right">13€</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-4 text-gray-600 italic">
    En caso de alergias o intolerancias, se deberá traer la comida específica para ese niño
  </p>
</div>
<div className="bg-gray-100 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Formas de pago</h3>
              <p className="text-gray-600 mb-4">
                Aceptamos las siguientes formas de pago:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Efectivo</li>
                <li>Tarjeta de crédito/débito</li>
                <li>Transferencia bancaria (para bonos y mensualidades)</li>
                <li>Bizum</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">¡Síguenos!</h3>
              <SocialLinks className="flex justify-center space-x-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorariosPrecios;