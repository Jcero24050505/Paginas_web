
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useState } from "react";
import { MARCAS } from "@/lib/data";
import { Search } from "lucide-react";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (marca) params.append("marca", marca);
    if (modelo) params.append("modelo", modelo);
    navigate(`/buscar?${params.toString()}`);
  };

  return (
    <section className="relative bg-carmarketplace-950 text-white py-32">
      <div className="hero-gradient absolute inset-0"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-entrance">
            Encuentra tu coche ideal
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-entrance">
            Miles de vehículos verificados con garantía y al mejor precio
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg search-shadow animate-entrance">
          <form onSubmit={handleSearch} className="grid gap-4 md:grid-cols-8 md:gap-6">
            <div className="md:col-span-3">
              <p className="mb-1.5 text-sm font-medium text-gray-700">Marca</p>
              <Select onValueChange={setMarca} value={marca}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Todas las marcas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las marcas</SelectItem>
                  {MARCAS.map((marca) => (
                    <SelectItem key={marca} value={marca.toLowerCase()}>
                      {marca}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-3">
              <p className="mb-1.5 text-sm font-medium text-gray-700">Modelo</p>
              <Input
                placeholder="Cualquier modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="md:col-span-2 flex items-end">
              <Button type="submit" className="w-full h-10">
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-700">
            <p className="mr-1">Búsquedas populares:</p>
            <a
              href="/buscar?marca=bmw&modelo=serie+3"
              className="text-carmarketplace-600 hover:underline"
            >
              BMW Serie 3
            </a>
            <span className="text-gray-400 mx-1">•</span>
            <a
              href="/buscar?marca=mercedes&modelo=clase+c"
              className="text-carmarketplace-600 hover:underline"
            >
              Mercedes Clase C
            </a>
            <span className="text-gray-400 mx-1">•</span>
            <a
              href="/buscar?marca=audi&modelo=a3"
              className="text-carmarketplace-600 hover:underline"
            >
              Audi A3
            </a>
            <span className="text-gray-400 mx-1">•</span>
            <a
              href="/buscar?marca=volkswagen&modelo=golf"
              className="text-carmarketplace-600 hover:underline"
            >
              VW Golf
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="text-center">
            <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm inline-block mb-3">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium">Vehículos verificados</h3>
          </div>
          
          <div className="text-center">
            <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm inline-block mb-3">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium">Precio garantizado</h3>
          </div>
          
          <div className="text-center">
            <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm inline-block mb-3">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium">Contacto directo</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
