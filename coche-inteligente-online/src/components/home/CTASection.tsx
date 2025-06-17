
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-carmarketplace-950 rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            }}
          />
          <div className="hero-gradient absolute inset-0"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                ¿Quieres vender tu coche?
              </h2>
              <p className="text-gray-200 mb-6 text-lg">
                Publica tu anuncio gratis en menos de 2 minutos y llega a miles de compradores interesados.
                Sin intermediarios y con todas las herramientas para gestionar tu venta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-white text-carmarketplace-950 hover:bg-gray-100"
                  size="lg"
                >
                  <Link to="/publicar">Publicar anuncio</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  size="lg"
                >
                  <Link to="/vender">Saber más</Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-carmarketplace-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Rápido y sencillo</h3>
                  <p className="text-gray-300">Publica tu anuncio en menos de 2 minutos con fotos y descripción completa.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-carmarketplace-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Totalmente gratis</h3>
                  <p className="text-gray-300">Sin comisiones ni gastos ocultos. Tu anuncio estará visible para miles de compradores.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-carmarketplace-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Contacto directo</h3>
                  <p className="text-gray-300">Comunicación directa con compradores interesados, sin intermediarios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
