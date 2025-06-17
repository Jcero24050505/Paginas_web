import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ElCentroPage from './pages/ElCentroPage';
import InstalacionesPage from './pages/InstalacionesPage';
import EquipoHumanoPage from './pages/EquipoHumanoPage';
import ActividadesPage from './pages/ActividadesPage';
import CursosPage from './pages/CursosPage';
import EntrenamientoPage from './pages/EntrenamientoPage';
import EscuelaJuvenilPage from './pages/EscuelaJuvenilPage';
import TarifasPage from './pages/TarifasPage';
import ProgramacionPage from './pages/ProgramacionPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="el-centro" element={<ElCentroPage />} />
          <Route path="el-centro/instalaciones" element={<InstalacionesPage />} />
          <Route path="el-centro/equipo-humano" element={<EquipoHumanoPage />} />
          <Route path="actividades" element={<ActividadesPage />} />
          <Route path="actividades/cursos" element={<CursosPage />} />
          <Route path="actividades/entrenamiento" element={<EntrenamientoPage />} />
          <Route path="actividades/escuela-juvenil" element={<EscuelaJuvenilPage />} />
          <Route path="tarifas" element={<TarifasPage />} />
          <Route path="programacion" element={<ProgramacionPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;