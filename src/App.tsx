import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Padel from './pages/Padel';
import Fitness from './pages/Fitness';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="padel-madrid-las-rozas" element={<Padel />} />
          <Route path="fitness-madrid-las-rozas" element={<Fitness />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacto-rackets-madrid-las-rozas" element={<Contact />} />
          <Route path="aviso-legal" element={<LegalNotice />} />
          <Route path="politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="politica-de-cookies" element={<CookiesPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App