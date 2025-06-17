import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ClasesEscalada from './pages/ClasesEscalada';
import CumplePeques from './pages/CumplePeques';
import HorariosPrecios from './pages/HorariosPrecios';
import CondicionesNormas from './pages/CondicionesNormas';
import VisitaVirtual from './pages/VisitaVirtual';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="clases-escalada" element={<ClasesEscalada />} />
          <Route path="cumple-peques" element={<CumplePeques />} />
          <Route path="precios" element={<HorariosPrecios />} />
          <Route path="visita-virtual" element={<VisitaVirtual />} />
          <Route path="condiciones-y-normas" element={<CondicionesNormas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;