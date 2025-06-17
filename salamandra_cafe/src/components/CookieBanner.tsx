import { useState } from 'react';

interface CookieBannerProps {
  onAccept: () => void;
}

const CookieBanner = ({ onAccept }: CookieBannerProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0 pr-4">
            <h2 className="text-lg font-semibold mb-2">Esta página web usa cookies</h2>
            {!expanded ? (
              <p>Utilizamos cookies para mejorar su experiencia de navegación. 
                <button 
                  onClick={() => setExpanded(true)}
                  className="text-orange-400 underline ml-1 focus:outline-none"
                >
                  Más información
                </button>
              </p>
            ) : (
              <div>
                <p className="mb-2">Utilizamos cookies para analizar el tráfico del sitio web y recordar sus preferencias para mejorar su experiencia de navegación.</p>
                <p>Al hacer clic en "Aceptar", acepta el uso de todas las cookies. Puede visitar nuestra política de privacidad para más información.</p>
                <button 
                  onClick={() => setExpanded(false)}
                  className="text-orange-400 underline mt-2 focus:outline-none"
                >
                  Mostrar menos
                </button>
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={onAccept}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors whitespace-nowrap"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;