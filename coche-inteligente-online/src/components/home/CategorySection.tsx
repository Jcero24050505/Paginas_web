
import { Link } from "react-router-dom";
import { CATEGORIAS } from "@/lib/data";

export const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2 text-center">
          Explora por categoría
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          Encuentra el vehículo que se adapta a tus necesidades según su tipo y características
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIAS.map((categoria) => (
            <Link
              key={categoria.id}
              to={`/buscar?categoria=${categoria.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center transition-all group-hover:shadow-md group-hover:translate-y-[-4px]">
                <div className="w-16 h-16 mb-4 text-carmarketplace-600">
                  <img
                    src={categoria.icono}
                    alt={categoria.nombre}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-carmarketplace-600 transition-colors">
                  {categoria.nombre}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {categoria.cantidad} vehículos
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
