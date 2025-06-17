import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalNotice = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Aviso Legal</h1>

            <div className="prose prose-blue max-w-none">
              <p className="mb-4">
                El presente aviso legal regula el uso del sitio web <strong>www.grupocobendai.com</strong> (en adelante, "<strong>el sitio web</strong>"), del que es titular <strong>Grupo Cobendai, S.A.</strong> (en adelante, "<strong>Grupo Cobendai</strong>").
              </p>

              <h2 className="mt-6 mb-2"><strong>1. DATOS IDENTIFICATIVOS</strong></h2>
              <p className="mb-4">
                <strong>Denominación social:</strong> Grupo Cobendai, S.A.<br />
                <strong>CIF:</strong> A-12345678<br />
                <strong>Domicilio social:</strong> Av. de la Industria, 52, 28108 Alcobendas, Madrid<br />
                <strong>Teléfono:</strong> +34 91 123 45 67<br />
                <strong>Email:</strong> <a href="mailto:info@grupocobendai.com" className="text-blue-600 hover:underline">info@grupocobendai.com</a><br />
                <strong>Inscripción:</strong> Inscrita en el Registro Mercantil de Madrid, Tomo XXX, Folio XXX, Hoja M-XXXXXX, Inscripción X.
              </p>

              <h2 className="mt-6 mb-2"><strong>2. OBJETO</strong></h2>
              <p className="mb-4">
                El sitio web de <strong>Grupo Cobendai</strong> proporciona información sobre sus productos y servicios en el sector automovilístico. El acceso al sitio web es gratuito salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios.
              </p>

              <h2 className="mt-6 mb-2"><strong>3. USUARIOS</strong></h2>
              <p className="mb-4">
                El acceso y/o uso del sitio web de <strong>Grupo Cobendai</strong> atribuye la condición de <strong>USUARIO</strong>, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
              </p>

              <h2 className="mt-6 mb-2"><strong>4. USO DEL PORTAL</strong></h2>
              <p className="mb-4">
                <strong>www.grupocobendai.com</strong> proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "<strong>los contenidos</strong>") en Internet pertenecientes a <strong>Grupo Cobendai</strong> o a sus licenciantes a los que el <strong>USUARIO</strong> pueda tener acceso. El <strong>USUARIO</strong> asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
              </p>
              <p className="mb-4">
                En dicho registro el <strong>USUARIO</strong> será responsable de aportar información veraz y lícita. Como consecuencia de este registro, al <strong>USUARIO</strong> se le puede proporcionar una contraseña de la que será responsable, comprometiéndose a hacer un uso diligente y confidencial de la misma.
              </p>
              <p className="mb-4">
                El <strong>USUARIO</strong> se compromete a hacer un uso adecuado de los contenidos y servicios (como por ejemplo servicios de chat, foros de discusión o grupos de noticias) que <strong>Grupo Cobendai</strong> ofrece a través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos para:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
                <li>Provocar daños en los sistemas físicos y lógicos de <strong>Grupo Cobendai</strong>, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
                <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
              </ul>
              <p className="mb-4">
                <strong>Grupo Cobendai</strong> se reserva el derecho de retirar todos aquellos comentarios y aportaciones que vulneren el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que atenten contra la juventud o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados para su publicación.
              </p>
              <p className="mb-4">
                En cualquier caso, <strong>Grupo Cobendai</strong> no será responsable de las opiniones vertidas por los usuarios a través de los foros, chats, u otras herramientas de participación.
              </p>

              <h2 className="mt-6 mb-2"><strong>5. PROPIEDAD INTELECTUAL E INDUSTRIAL</strong></h2>
              <p className="mb-4">
                <strong>Grupo Cobendai</strong> por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de <strong>Grupo Cobendai</strong> o bien de sus licenciantes.
              </p>
              <p className="mb-4">
                Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de <strong>Grupo Cobendai</strong>.
              </p>

              <h2 className="mt-6 mb-2"><strong>6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</strong></h2>
              <p className="mb-4">
                <strong>Grupo Cobendai</strong> no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>

              <h2 className="mt-6 mb-2"><strong>7. MODIFICACIONES</strong></h2>
              <p className="mb-4">
                <strong>Grupo Cobendai</strong> se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
              </p>

              <h2 className="mt-6 mb-2"><strong>8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</strong></h2>
              <p className="mb-4">
                La relación entre <strong>Grupo Cobendai</strong> y el <strong>USUARIO</strong> se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid, salvo que la normativa aplicable determine de forma imperativa otro fuero distinto.
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

export default LegalNotice;