
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Car } from "@/lib/types";

interface CarCardProps {
  car: Car;
  className?: string;
}

export const CarCard = ({ car, className }: CarCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(car.precio);

  const formattedKm = new Intl.NumberFormat("es-ES").format(car.kilometros);

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all hover:translate-y-[-4px] car-card-shadow",
        className
      )}
    >
      <Link to={`/coches/${car.id}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={car.imagenPrincipal}
            alt={`${car.marca} ${car.modelo}`}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          {car.esDestacado && (
            <Badge className="absolute top-3 left-3 bg-carmarketplace-accent-600">
              Destacado
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute top-3 right-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white",
              isFavorite ? "text-carmarketplace-accent-600" : "text-gray-500"
            )}
            onClick={toggleFavorite}
          >
            <Heart
              className={cn("h-5 w-5", isFavorite && "fill-current")}
              aria-hidden="true"
            />
            <span className="sr-only">Añadir a favoritos</span>
          </Button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-heading font-bold text-lg truncate">
              {car.marca} {car.modelo}
            </h3>
            <p className="font-bold text-lg text-carmarketplace-950">
              {formattedPrice}
            </p>
          </div>
          
          <p className="text-sm text-gray-500 truncate-2 mb-3">
            {car.version} {car.descripcionCorta}
          </p>
          
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div className="flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {car.ano}
            </div>
            <div className="flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {car.combustible}
            </div>
            <div className="flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              {formattedKm} km
            </div>
            <div className="flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {car.provincia}
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};
