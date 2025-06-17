import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver al inicio
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Privacidad</h1>

            <div className="prose prose-blue max-w-none">
              <h1 className="mt-6 mb-4"><strong>INFORMACIÓN AL USUARIO</strong></h1>
              <p className="mb-4">
                <strong>GRUPO COBENDAI</strong>, en adelante <strong>RESPONSABLE</strong>, es el Responsable del tratamiento de los datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, por lo que se le facilita la siguiente información del tratamiento:
              </p>

              <h2 className="mt-6 mb-2"><strong>Fin del tratamiento:</strong></h2>
              <p className="mb-4">Mantener una relación comercial con el Usuario. Las operaciones previstas para realizar el tratamiento son:</p>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Remisión de comunicaciones comerciales publicitarias</strong> por email, fax, SMS, MMS, comunidades sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el <strong>RESPONSABLE</strong> y relacionadas sobre sus productos y servicios, o de sus colaboradores o proveedores con los que éste haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.</li>
                <li><strong>Realizar estudios estadísticos.</strong></li>
                <li><strong>Tramitar encargos, solicitudes o cualquier tipo de petición</strong> que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a su disposición.</li>
                <li><strong>Remitir el boletín de noticias de la página web.</strong></li>
              </ul>

              <h2 className="mt-6 mb-2"><strong>Base jurídica del tratamiento:</strong></h2>
              <p className="mb-4"><strong>Consentimiento del interesado.</strong></p>

              <h2 className="mt-6 mb-2"><strong>Criterios de conservación de los datos:</strong></h2>
              <p className="mb-4">Se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con medidas de seguridad adecuadas para garantizar la seudonimización de los datos o la destrucción total de los mismos.</p>

              <h2 className="mt-6 mb-2"><strong>Comunicación de los datos:</strong></h2>
              <p className="mb-4"><strong>No se comunicarán los datos a terceros, salvo obligación legal.</strong></p>

              <h2 className="mt-6 mb-2"><strong>Derechos que asisten al Usuario:</strong></h2>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Derecho a retirar el consentimiento</strong> en cualquier momento.</li>
                <li><strong>Derecho de acceso, rectificación, portabilidad y supresión de sus datos</strong> y a la limitación u oposición al su tratamiento.</li>
                <li><strong>Derecho a presentar una reclamación ante la autoridad de control</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
              </ul>

              <h2 className="mt-6 mb-2"><strong>Datos de contacto para ejercer sus derechos:</strong></h2>
              <p className="mb-4">
                <strong>Dirección postal:</strong> GRUPO COBENDAI.<br />
                Carretera de Fuencarral, 70.<br />
                28108 - Alcobendas. Madrid<br />
                <strong>Email:</strong> <a href="mailto:info@grupocobendai.com" className="text-blue-600 hover:underline">info@grupocobendai.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;