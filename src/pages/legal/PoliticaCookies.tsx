import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';

const PoliticaCookies = () => {
  return (
    <>
      <PageHeader title="INFORMACIÓN SOBRE COOKIES" />
      
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            Conforme con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de
            comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 del Parlamento
            Europeo y del Consejo, de 27 de abril de 2016, General de Protección de Datos (GDPR) y la
            Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y Garantía de los Derechos
            Digitales (LOPDGDD), es obligado obtener el consentimiento expreso del usuario de todas las
            páginas web que usan cookies prescindibles, antes de que este navegue por ellas.
          </p>
          
          <h2>¿QUÉ SON LAS COOKIES?</h2>
          
          <p>
            Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o
            píxeles, son herramientas empleadas por los servidores Web para almacenar y recuperar
            información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del
            sitio.
          </p>
          
          <p>
            Mediante el uso de estos dispositivos se permite al servidor Web recordar algunos datos
            concernientes al usuario, como sus preferencias para la visualización de las páginas de ese
            servidor, nombre y contraseña, productos que más le interesan, etc.
          </p>
          
          <h2>COOKIES AFECTADAS POR LA NORMATIVA Y COOKIES EXCEPTUADAS</h2>
          
          <p>
            Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte
            del usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas
            las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de
            servicios expresamente solicitados por el usuario.
          </p>
          
          <h2>TIPOS DE COOKIES</h2>
          
          <h3>SEGÚN LA FINALIDAD</h3>
          
          <ul>
            <li>
              <strong>Cookies técnicas y funcionales:</strong> son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
            </li>
            <li>
              <strong>Cookies analíticas:</strong> son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.
            </li>
            <li>
              <strong>Cookies publicitarias:</strong> son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
            </li>
            <li>
              <strong>Cookies de publicidad comportamental:</strong> recogen información sobre las preferencias y elecciones personales del usuario (retargeting) para permitir la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado.
            </li>
            <li>
              <strong>Cookies sociales:</strong> son establecidas por las plataformas de redes sociales en los servicios para permitirle compartir contenido con sus amigos y redes. Las plataformas de medios sociales tienen la capacidad de rastrear su actividad en línea fuera de los Servicios. Esto puede afectar al contenido y los mensajes que ve en otros servicios que visita.
            </li>
            <li>
              <strong>Cookies de afiliados:</strong> permiten hacer un seguimiento de las visitas procedentes de otras webs, con las que el sitio web establece un contrato de afiliación (empresas de afiliación).
            </li>
            <li>
              <strong>Cookies de seguridad:</strong> almacenan información cifrada para evitar que los datos guardados en ellas sean vulnerables a ataques maliciosos de terceros.
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default PoliticaCookies;