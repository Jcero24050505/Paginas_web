import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ClasesEscalada from './pages/ClasesEscalada';
import BautismoEscalada from './pages/BautismoEscalada';
import TiendaEscalada from './pages/TiendaEscalada';
import ClasesYoga from './pages/ClasesYoga';
import DondeEstamos from './pages/DondeEstamos';
import PreciosRocodromo from './pages/PreciosRocodromo';
import FotosInstalaciones from './pages/FotosInstalaciones';
import Outdoor from './pages/Outdoor';
import AvisoLegal from './pages/legal/AvisoLegal';
import Privacidad from './pages/legal/Privacidad';
import NormativaInstalaciones from './pages/legal/NormativaInstalaciones';
import CondicionesGenerales from './pages/legal/CondicionesGenerales';
import PoliticaCookies from './pages/legal/PoliticaCookies';
import FondosEuropeos from './pages/legal/FondosEuropeos';
import CookieBanner from './components/CookieBanner';

function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted === 'true') {
      setCookiesAccepted(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clases-escalada-madrid" element={<ClasesEscalada />} />
            <Route path="/bautismo-escalada-madrid" element={<BautismoEscalada />} />
            <Route path="/tienda-escalada-madrid" element={<TiendaEscalada />} />
            <Route path="/clases-yoga-madrid" element={<ClasesYoga />} />
            <Route path="/donde-estamos" element={<DondeEstamos />} />
            <Route path="/precios-rocodromo-madrid" element={<PreciosRocodromo />} />
            <Route path="/fotos-instalaciones-rocodromo" element={<FotosInstalaciones />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/normativa-instalaciones" element={<NormativaInstalaciones />} />
            <Route path="/condiciones-generales" element={<CondicionesGenerales />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="/fondos-europeos" element={<FondosEuropeos />} />
          </Routes>
        </main>
        <Footer />
        {!cookiesAccepted && <CookieBanner onAccept={handleAcceptCookies} />}
      </div>
    </Router>
  );
}

export default App;