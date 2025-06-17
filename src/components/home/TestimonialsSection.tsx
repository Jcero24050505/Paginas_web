
import { TESTIMONIOS } from "@/lib/data";

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-carmarketplace-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-300">
            Miles de personas han encontrado su coche ideal a través de nuestra plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIOS.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonio.estrellas
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-4 italic">"{testimonio.comentario}"</p>

              <div className="flex items-center">
                <img
                  src={testimonio.avatar}
                  alt={testimonio.nombre}
                  className="h-10 w-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonio.nombre}</h4>
                  <p className="text-sm text-gray-300">{testimonio.vehiculo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
