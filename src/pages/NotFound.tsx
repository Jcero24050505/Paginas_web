
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/cars/CarCard";
import { ExternalLink, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [suggestedCars, setSuggestedCars] = useState([]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Simulated data for suggested cars
    const sampleCars = [
      {
        id: "sugg-1",
        marca: "Mercedes",
        modelo: "Clase C",
        version: "220d AMG Line",
        ano: 2022,
        precio: 42500,
        kilometros: 15000,
        combustible: "Diésel",
        cambio: "Automático",
        potencia: 194,
        provincia: "Madrid",
        descripcionCorta: "Estado impecable, un solo propietario",
        descripcion: "Mercedes-Benz Clase C en estado impecable con todas las garantías. Vehículo revisado y certificado por la marca.",
        imagenPrincipal: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        imagenes: [],
        caracteristicas: ["Navegador GPS", "Asientos de cuero", "Techo panorámico"],
        vendedor: {
          id: "vend-1",
          nombre: "Concesionario Oficial Mercedes-Benz",
          tipo: "profesional",
          telefono: "912345678",
          valoracion: 4.8
        },
        esDestacado: true,
        fechaPublicacion: "2023-05-15"
      },
      {
        id: "sugg-2",
        marca: "BMW",
        modelo: "Serie 3",
        version: "320d xDrive",
        ano: 2021,
        precio: 39900,
        kilometros: 25000,
        combustible: "Diésel",
        cambio: "Automático",
        potencia: 190,
        provincia: "Barcelona",
        descripcionCorta: "Tracción integral, techo panorámico",
        descripcion: "BMW Serie 3 con tracción integral xDrive y acabado M Sport. Equipado con techo panorámico y navegador profesional.",
        imagenPrincipal: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        imagenes: [],
        caracteristicas: ["Tracción integral", "Navegador profesional", "Faros LED"],
        vendedor: {
          id: "vend-2",
          nombre: "Premium Cars",
          tipo: "profesional",
          telefono: "934567890",
          valoracion: 4.6
        },
        esDestacado: true,
        fechaPublicacion: "2023-05-20"
      },
      {
        id: "sugg-3",
        marca: "Audi",
        modelo: "A4",
        version: "40 TDI S line",
        ano: 2023,
        precio: 45800,
        kilometros: 5000,
        combustible: "Diésel",
        cambio: "Automático",
        potencia: 204,
        provincia: "Valencia",
        descripcionCorta: "Como nuevo, acabado S line",
        descripcion: "Audi A4 prácticamente nuevo con acabado S line. Equipamiento completo y garantía oficial hasta 2026.",
        imagenPrincipal: "https://images.unsplash.com/photo-1606664520689-92be5370df99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        imagenes: [],
        caracteristicas: ["Virtual Cockpit", "Asistente de conducción", "Luces Matrix LED"],
        vendedor: {
          id: "vend-3",
          nombre: "Audi Center",
          tipo: "profesional",
          telefono: "962345678",
          valoracion: 4.9
        },
        esDestacado: true,
        fechaPublicacion: "2023-06-01"
      }
    ];

    setSuggestedCars(sampleCars);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-50 rounded-full mb-6">
              <h1 className="text-6xl font-bold text-red-500">404</h1>
            </div>
            <h2 className="text-3xl font-bold mb-4">Página no encontrada</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Lo sentimos, la página <span className="font-semibold text-gray-800">{location.pathname}</span> no existe o ha sido movida.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Volver al inicio
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/buscar" className="flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  Buscar vehículos
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-6">Vehículos que podrían interesarte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            
            <div className="mt-12 max-w-2xl mx-auto bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
              <p className="text-gray-600 mb-4">
                Puede que la página que buscas haya sido movida o eliminada. Te recomendamos:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                <li>Verificar que la URL esté correctamente escrita</li>
                <li>Utilizar la barra de búsqueda en la parte superior</li>
                <li>Navegar a través de nuestras categorías principales</li>
                <li>Contactar con nuestro servicio de atención al cliente</li>
              </ul>
              
              <div className="flex items-center text-carmarketplace-600">
                <ExternalLink className="h-5 w-5 mr-2" />
                <a href="/contacto" className="font-medium hover:underline">
                  Contactar con atención al cliente
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
