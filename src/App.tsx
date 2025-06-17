import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Loader from './components/Loader';

// Lazy load pages to improve initial load performance
const MiPrimerDia = lazy(() => import('./pages/MiPrimerDia'));
const Tarifas = lazy(() => import('./pages/Tarifas'));
const Instalaciones = lazy(() => import('./pages/Instalaciones'));
const ActividadesIndoor = lazy(() => import('./pages/ActividadesIndoor'));
const ActividadesSemana = lazy(() => import('./pages/ActividadesSemana'));
const Noticias = lazy(() => import('./pages/Noticias'));
const Cursos = lazy(() => import('./pages/Cursos'));
const Contacto = lazy(() => import('./pages/Contacto'));
const VisitaVirtual = lazy(() => import('./pages/VisitaVirtual'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mi-primer-dia" element={<MiPrimerDia />} />
            <Route path="tarifas" element={<Tarifas />} />
            <Route path="instalaciones" element={<Instalaciones />} />
            <Route path="actividades-indoor" element={<ActividadesIndoor />} />
            <Route path="actividades-semana" element={<ActividadesSemana />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="cursos" element={<Cursos />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="visita-virtual" element={<VisitaVirtual />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App