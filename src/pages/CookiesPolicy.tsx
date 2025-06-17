import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Política de Cookies</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. ¿Qué son las cookies?</h2>
            <p className="text-gray-600 mb-4">
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Tipos de cookies que utilizamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Cookies técnicas:</h3>
                <p className="text-gray-600">Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Cookies de análisis:</h3>
                <p className="text-gray-600">Son aquellas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Cookies de personalización:</h3>
                <p className="text-gray-600">Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Desactivación de cookies</h2>
            <p className="text-gray-600 mb-4">
              Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
            <p className="text-gray-600 mb-4">
              A continuación le ofrecemos enlaces en los que encontrará información sobre cómo puede activar sus preferencias en los principales navegadores:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=es" className="text-blue-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-blue-600 hover:underline">Safari</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Actualizaciones y cambios</h2>
            <p className="text-gray-600 mb-4">
              Rackets Madrid puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;