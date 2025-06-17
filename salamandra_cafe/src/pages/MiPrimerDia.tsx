import Hero from '../components/Hero';

const MiPrimerDia = () => {
  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/salamandra/images/formulario-registro-salamandra%281%29.jpg"
        title="Mi Primer Día"
        subtitle="Todo lo que necesitas saber para empezar a escalar en Salamandra"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8 text-gray-700">
              Para comenzar a disfrutar de nuestras instalaciones y actividades necesitamos que te tomes un momento para completar los formularios.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-10">
              <h2 className="text-2xl font-bold mb-4 text-zinc-800 flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                Registro inicial
              </h2>
              <p className="mb-4 text-gray-700">
                Rellena el formulario de registro para crear tu cuenta de usuario.
              </p>
              <img 
                src="https://www.salamandra-bc.com/salamandra/images/formulario-registro-salamandra%281%29.jpg" 
                alt="Formulario de registro" 
                className="rounded-lg shadow-md w-full mb-4"
              />
              <p className="text-gray-700">
                Una vez completado este formulario recibirás dos correos electrónicos:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li className="mb-2">Uno con los datos que nos has facilitado y el link al formulario de inscripción para continuar el proceso.</li>
                <li>Un correo con la contraseña que vas a necesitar para acceder al formulario de inscripción y para acceder a tu área de cliente.</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mb-10">
              <h2 className="text-2xl font-bold mb-4 text-zinc-800 flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                Acceso a tu cuenta
              </h2>
              <p className="mb-4 text-gray-700">
                Utiliza la contraseña que has recibido por correo electrónico para acceder a tu área de cliente y completar el proceso de inscripción.
              </p>
              <img 
                src="https://www.salamandra-bc.com/salamandra/images/login-salamandra%281%29.jpg" 
                alt="Acceso a la cuenta" 
                className="rounded-lg shadow-md w-full mb-4"
              />
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mb-10">
              <h2 className="text-2xl font-bold mb-4 text-zinc-800 flex items-center">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                Completar inscripción
              </h2>
              <p className="mb-4 text-gray-700">
                Completa el formulario de inscripción con tus datos personales y elige tu plan o tarifa.
              </p>
              <img 
                src="https://www.salamandra-bc.com/salamandra/images/formulario-inscripcion-salamandra%281%29.jpg" 
                alt="Formulario de inscripción" 
                className="rounded-lg shadow-md w-full mb-4"
              />
            </div>

            <div className="bg-orange-100 rounded-lg p-6 mb-10 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-2 text-zinc-800">¡Y ya estás listo para escalar!</h3>
              <p className="text-gray-700">
                Una vez completado el proceso, podrás acceder a nuestras instalaciones y comenzar a disfrutar de todas nuestras actividades.
              </p>
              <img 
                src="https://www.salamandra-bc.com/salamandra/images/acceso-al-centro-salamandra%281%29.jpg" 
                alt="Acceso al centro" 
                className="rounded-lg shadow-md w-full mt-4"
              />
            </div>

            <div className="text-center mt-10">
              <a 
                href="/area-usuarios-registro" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Comenzar mi registro
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiPrimerDia;