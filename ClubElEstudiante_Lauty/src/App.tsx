import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import Disciplines from './pages/Disciplines';
import Clubs from "./pages/Clubs";
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/disciplines" element={<Disciplines />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;