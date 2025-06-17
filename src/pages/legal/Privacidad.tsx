import PageHeader from '../../components/PageHeader';
import Section from '../../components/Section';

const Privacidad = () => {
  return (
    <>
      <PageHeader title="POLÍTICA DE PRIVACIDAD" />
      
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>1. INFORMACIÓN AL USUARIO</h2>
          
          <p>
            <strong>¿Quién es el responsable del tratamiento de tus datos personales?</strong>
          </p>
          
          <p>
            RAINBOW CLIMB SL es el RESPONSABLE del tratamiento de los datos personales del
            USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el
            Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de
            diciembre (LOPDGDD).
          </p>
          
          <h2>2. FINALIDAD DEL TRATAMIENTO</h2>
          
          <p>
            <strong>¿Con qué finalidad tratamos tus datos personales?</strong>
          </p>
          
          <p>
            Dependiendo del formulario o sección a la que acceda, trataremos sus datos con las
            siguientes finalidades:
          </p>
          
          <ul>
            <li>Gestionar el alta en el área de registro de usuario.</li>
            <li>Gestionar la contratación de servicios mediante la web.</li>
            <li>Gestionar el envío de información que nos solicite.</li>
            <li>Desarrollar acciones comerciales y remitirle información, publicidad e invitaciones a eventos de su interés.</li>
            <li>Elaborar un perfil comercial en base a los datos que nos facilite a fin de mostrarle o remitirle publicidad personalizada en base a dicho perfil.</li>
          </ul>
          
          <p>
            <strong>¿Por cuánto tiempo conservaremos tus datos?</strong>
          </p>
          
          <p>
            Los datos se conservarán mientras exista un interés mutuo para mantener el fin del
            tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con medidas de
            seguridad adecuadas para garantizar la seudonimización de los datos o la destrucción total
            de los mismos.
          </p>
          
          <h2>3. LEGITIMACIÓN DEL TRATAMIENTO</h2>
          
          <p>
            <strong>¿Cuál es la legitimación para el tratamiento de tus datos?</strong>
          </p>
          
          <p>
            La base legal para el tratamiento de sus datos es:
          </p>
          
          <ul>
            <li>El consentimiento del interesado, en aquellos servicios que lo requieran.</li>
            <li>La ejecución de un contrato en el que el interesado es parte, en la contratación de servicios.</li>
            <li>El interés legítimo del responsable, para el envío de comunicaciones comerciales relacionadas con nuestros servicios, cuando ya exista una relación contractual previa.</li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Privacidad;