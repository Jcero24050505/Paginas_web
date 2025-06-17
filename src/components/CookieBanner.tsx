import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieBannerProps {
  onAccept: () => void;
}

const CookieBanner = ({ onAccept }: CookieBannerProps) => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
    onAccept();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-800 text-white py-4 px-6 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-sm mb-4 md:mb-0 md:mr-4">
          Este sitio web utiliza cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.
          Si continúas usando este sitio, asumiremos que estás de acuerdo con ello.
          Puedes ver nuestra <Link to="/politica-cookies" className="underline text-primary-300">política de cookies</Link> aquí.
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleAccept}
            className="bg-primary-700 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={() => setVisible(false)}
            className="p-2"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;