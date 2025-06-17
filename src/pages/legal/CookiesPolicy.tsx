import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiesPolicy = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Cookies</h1>

            <div className="prose prose-blue max-w-none">
              <p className="mb-4">
                En el presente sitio web <strong>grupocobendai.com</strong> (en adelante, el “<strong>SITIO WEB</strong>”) utilizamos cookies para mejorar tu experiencia de usuario y permitir la publicación de noticias y mensajes en nuestras redes sociales. Si aceptas el botón que aparece en el aviso inferior del sitio web sobre nuestra política de cookies, entenderemos que consientes el uso de las cookies en las condiciones previstas en la presente Política de Cookies. Dado que la misma puede ser actualizada periódicamente, te sugerimos que la revises de forma regular.
              </p>

              <h2 className="mt-6 mb-2"><strong>¿Qué son las cookies?</strong></h2>
              <p className="mb-4">
                Las <strong>cookies</strong> son ficheros de texto que el servidor de Internet envía al dispositivo con el que te conectas al <strong>SITIO WEB</strong>, y que nos permiten conocer, con fines de mejora del servicio y adaptación de éste a tus preferencias. Las cookies se asocian únicamente a tu navegador y no proporcionan por sí mismas datos personales. Las cookies no pueden dañar tu dispositivo y además son muy útiles, ya que nos ayudan a identificar y resolver errores.
              </p>
              <p className="mb-4">
                Las cookies pueden ser <strong>propias</strong> (generadas por nuestro propio dominio) o de <strong>terceros</strong> (generadas por otros dominios). También pueden ser <strong>temporales (de sesión)</strong> o <strong>permanentes (persistentes)</strong>.
              </p>

              <h2 className="mt-6 mb-2"><strong>Tipos de cookies que utilizamos</strong></h2>
              <p className="mb-4">
                En nuestro sitio web utilizamos los siguientes tipos de cookies:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen, como identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, entre otras.
                </li>
                <li>
                  <strong>Cookies de análisis:</strong> Son aquellas que permiten el seguimiento y análisis del comportamiento de los usuarios en nuestro sitio web. La información recogida mediante este tipo de cookies se utiliza para medir la actividad del sitio web y para elaborar perfiles de navegación de los usuarios, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.
                </li>
                <li>
                  <strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario, como por ejemplo el idioma, el tipo de navegador, la configuración regional desde donde accede al servicio, etc.
                </li>
                <li>
                  <strong>Cookies publicitarias:</strong> Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que se pudieran incluir en nuestro sitio web en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
                </li>
                <li>
                  <strong>Cookies de publicidad comportamental:</strong> Son aquellas que almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.
                </li>
              </ul>

              <h2 className="mt-6 mb-2"><strong>Cookies utilizadas en nuestra web</strong></h2>
              <p className="mb-4">
                A continuación, se detallan las cookies utilizadas en nuestro sitio web:
              </p>
              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">Nombre</th>
                    <th className="border border-gray-300 p-2 text-left">Tipo</th>
                    <th className="border border-gray-300 p-2 text-left">Propósito</th>
                    <th className="border border-gray-300 p-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">_ga</td>
                    <td className="border border-gray-300 p-2">Análisis (Google Analytics)</td>
                    <td className="border border-gray-300 p-2">Se usa para distinguir a los usuarios</td>
                    <td className="border border-gray-300 p-2">2 años</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">_gid</td>
                    <td className="border border-gray-300 p-2">Análisis (Google Analytics)</td>
                    <td className="border border-gray-300 p-2">Se usa para distinguir a los usuarios</td>
                    <td className="border border-gray-300 p-2">24 horas</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">_gat</td>
                    <td className="border border-gray-300 p-2">Análisis (Google Analytics)</td>
                    <td className="border border-gray-300 p-2">Se usa para limitar el porcentaje de solicitudes</td>
                    <td className="border border-gray-300 p-2">1 minuto</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">cookieconsent_status</td>
                    <td className="border border-gray-300 p-2">Técnica</td>
                    <td className="border border-gray-300 p-2">Almacena la aceptación de la política de cookies</td>
                    <td className="border border-gray-300 p-2">1 año</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">session_id</td>
                    <td className="border border-gray-300 p-2">Técnica</td>
                    <td className="border border-gray-300 p-2">Gestiona la sesión del usuario</td>
                    <td className="border border-gray-300 p-2">Sesión</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">language</td>
                    <td className="border border-gray-300 p-2">Personalización</td>
                    <td className="border border-gray-300 p-2">Almacena el idioma seleccionado</td>
                    <td className="border border-gray-300 p-2">1 año</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="mt-6 mb-2"><strong>Gestión de cookies</strong></h2>
              <p className="mb-4">
                Usted puede <strong>permitir, bloquear o eliminar</strong> las cookies instaladas en su dispositivo a través de la configuración de las opciones de su navegador. A continuación, le ofrecemos enlaces donde encontrará información sobre cómo gestionar las cookies en los navegadores más populares:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Internet Explorer</a></li>
                <li><a href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="mb-4">
                Le informamos que si <strong>rechaza o borra las cookies</strong>, no podemos garantizarle que el funcionamiento de la web sea el óptimo. Algunas funcionalidades estarán limitadas y en algunos casos podría resultar imposible navegar por ella.
              </p>

              <h2 className="mt-6 mb-2"><strong>Actualizaciones y cambios en la política de cookies</strong></h2>
              <p className="mb-4">
                <strong>Grupo Cobendai</strong> puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
              </p>
              <p className="mb-4">
                Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los usuarios bien mediante la web o a través de correo electrónico a los usuarios registrados.
              </p>

              <h2 className="mt-6 mb-2"><strong>Más información</strong></h2>
              <p className="mb-4">
                Si desea obtener más información sobre el uso que hacemos de las cookies, puede contactar con nosotros a través de:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> <a href="mailto:privacidad@grupocobendai.com" className="text-blue-600 hover:underline">privacidad@grupocobendai.com</a><br />
                <strong>Teléfono:</strong> +34 91 123 45 67<br />
                <strong>Dirección postal:</strong> Av. de la Industria, 52, 28108 Alcobendas, Madrid
              </p>

              <p className="text-sm text-gray-500 mt-8">
                Última actualización: Agosto 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicy;