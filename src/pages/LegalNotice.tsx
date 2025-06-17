import React from 'react';

const LegalNotice = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Aviso Legal</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Datos identificativos</h2>
            <p className="text-gray-600 mb-4">
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Denominación social: Rackets Madrid</li>
              <li>Domicilio social: Calle Cabo Rufino Lázaro, 3, Las Rozas De Madrid, Madrid</li>
              <li>NIF: B12345678</li>
              <li>Teléfono: 91 426 70 08 / 686 058 973</li>
              <li>Email: hola@racketsmadrid.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Usuarios</h2>
            <p className="text-gray-600 mb-4">
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Uso del portal</h2>
            <p className="text-gray-600 mb-4">
              www.racketsmadrid.com proporciona el acceso a multitud de informaciones, servicios, programas o datos en Internet pertenecientes a Rackets Madrid o a sus licenciantes a los que el USUARIO pueda tener acceso.
            </p>
            <p className="text-gray-600 mb-4">
              El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Propiedad intelectual</h2>
            <p className="text-gray-600 mb-4">
              Rackets Madrid es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma.
            </p>
            <p className="text-gray-600 mb-4">
              Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Rackets Madrid.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Exclusión de garantías y responsabilidad</h2>
            <p className="text-gray-600 mb-4">
              Rackets Madrid no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;