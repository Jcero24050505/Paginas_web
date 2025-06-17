
import { MARCAS_POPULARES } from "@/lib/data";

export const BrandsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2 text-center">
          Marcas populares
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Las marcas más buscadas en nuestra plataforma
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {MARCAS_POPULARES.map((marca) => (
            <a
              key={marca.id}
              href={`/buscar?marca=${marca.slug}`}
              className="group flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={marca.logo}
                alt={marca.nombre}
                className="h-12 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
