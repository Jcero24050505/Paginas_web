
import { CarCard } from "@/components/cars/CarCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FEATURED_CARS } from "@/lib/data";

export const FeaturedCars = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-2">
              Vehículos destacados
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Descubre nuestra selección de coches destacados, revisados y
              certificados por nuestros expertos.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0"
            onClick={() => navigate("/buscar")}
          >
            Ver todos los vehículos
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURED_CARS.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};
