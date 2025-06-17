import Image from 'next/image';

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://i.imgur.com/2aFspZi.jpeg"
            alt="Contacto banner" 
            fill 
            style={{objectFit: 'cover'}} 
            priority
            className="brightness-[0.6]"
          />
        </div>
        <div className="z-10 text-center px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">CONTACTO</h1>
          <p className="text-xl text-white font-light italic">
            Estamos aquí para ayudarte. Contacta con nosotros
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">INFORMACIÓN DE CONTACTO</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">DIRECCIÓN</h3>
                    <p className="text-gray-600">
                      Calle del Alto, s/n<br />
                      28108 Alcobendas<br />
                      Madrid, España
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">TELÉFONOS</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold">Pádel & Tenis</p>
                        <p className="text-gray-600">
                          91 653 16 73<br />
                          677 212 074
                        </p>
                      </div>
                      <div>
                        <p className="font-bold">Golf</p>
                        <p className="text-gray-600">
                          91 704 81 94<br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">HORARIOS</h3>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        <span className="font-bold">Lunes a Jueves:</span><br />
                        10:00 a 23:00<br />
                        (Recepción Pádel y Golf hasta las 22:00)
                        Viernes 10:00 a 22:00.
                      </p>
                      <p>
                        <span className="font-bold">Sábados y Domingos:</span><br />
                        8:00 a 21:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">ENVÍANOS UN MENSAJE</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">CÓMO LLEGAR</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1803.426910320259!2d-3.5942817074404614!3d40.51970221133742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422dab1fd86b8b%3A0xa85ad244149f604d!2sClub%20El%20Estudiante!5e0!3m2!1ses!2ses!4v1747048658486!5m2!1ses!2ses"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}