import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Política de Privacidad</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Responsable del tratamiento</h2>
            <p className="text-gray-600 mb-4">
              Rackets Madrid, con domicilio en Calle Cabo Rufino Lázaro, 3, Las Rozas De Madrid, Madrid, es el responsable del tratamiento de los datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Finalidad del tratamiento</h2>
            <p className="text-gray-600 mb-4">
              Mantener una relación comercial con el Usuario. Las operaciones previstas para realizar el tratamiento son:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Remisión de comunicaciones comerciales publicitarias por email, fax, SMS, MMS, redes sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales.</li>
              <li>Realizar estudios estadísticos.</li>
              <li>Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a su disposición.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Conservación de datos</h2>
            <p className="text-gray-600 mb-4">
              Se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con medidas de seguridad adecuadas para garantizar la seudonimización de los datos o la destrucción total de los mismos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Derechos que asisten al Usuario</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Derecho a retirar el consentimiento en cualquier momento.</li>
              <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos y a la limitación u oposición al su tratamiento.</li>
              <li>Derecho a presentar una reclamación ante la autoridad de control (agpd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Datos de contacto para ejercer sus derechos</h2>
            <p className="text-gray-600 mb-4">
              Dirección postal: Calle Cabo Rufino Lázaro, 3, Las Rozas De Madrid, Madrid<br />
              Email: hola@racketsmadrid.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;