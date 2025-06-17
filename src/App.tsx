import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PrimerDia from './pages/RocodromoPages/PrimerDia';
import Instalaciones from './pages/RocodromoPages/Instalaciones';
import Cafe from './pages/RocodromoPages/Cafe';
import Ocupacion from './pages/RocodromoPages/Ocupacion';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rocodromo/primer-dia" element={<PrimerDia />} />
          <Route path="/rocodromo/instalaciones" element={<Instalaciones />} />
          <Route path="/rocodromo/cafe" element={<Cafe />} />
          <Route path="/rocodromo/ocupacion" element={<Ocupacion />} />
          {/* Other routes would be added here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;