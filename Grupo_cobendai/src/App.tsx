import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import UsedVehicles from './pages/UsedVehicles';
import FeaturedVehicles from './pages/FeaturedVehicles';
import Dealerships from './pages/Dealerships';
import Contact from './pages/Contact';
import Employment from './pages/Employment';
import Rental from './pages/Rental';
import Promotions from './pages/Promotions';
import RelatedBrands from './pages/RelatedBrands';
import LegalNotice from './pages/legal/LegalNotice';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiesPolicy from './pages/legal/CookiesPolicy';
import HyundaiBrand from './pages/brands/Hyundai';
import PeugeotBrand from './pages/brands/Peugeot';
import MGBrand from './pages/brands/MG';
import SsangYongBrand from './pages/brands/SsangYong';
import SubaruBrand from './pages/brands/Subaru';
import SuzukiBrand from './pages/brands/Suzuki';
import HyundaiModels from './pages/models/HyundaiModels';
import PeugeotModels from './pages/models/PeugeotModels';
import MGModels from './pages/models/MGModels';
import SsangYongModels from './pages/models/SsangYongModels';
import SubaruModels from './pages/models/SubaruModels';
import SuzukiModels from './pages/models/SuzukiModels';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/vehiculos-ocasion" element={<UsedVehicles />} />
        <Route path="/vehiculos-destacados" element={<FeaturedVehicles />} />
        <Route path="/concesionarios" element={<Dealerships />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/empleo" element={<Employment />} />
        <Route path="/alquiler" element={<Rental />} />
        <Route path="/promociones" element={<Promotions />} />
        <Route path="/marcas-relacionadas" element={<RelatedBrands />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-cookies" element={<CookiesPolicy />} />
        <Route path="/marcas/hyundai" element={<HyundaiBrand />} />
        <Route path="/marcas/peugeot" element={<PeugeotBrand />} />
        <Route path="/marcas/mg" element={<MGBrand />} />
        <Route path="/marcas/ssangyong" element={<SsangYongBrand />} />
        <Route path="/marcas/subaru" element={<SubaruBrand />} />
        <Route path="/marcas/suzuki" element={<SuzukiBrand />} />
        <Route path="/modelos/hyundai" element={<HyundaiModels />} />
        <Route path="/modelos/peugeot" element={<PeugeotModels />} />
        <Route path="/modelos/mg" element={<MGModels />} />
        <Route path="/modelos/ssangyong" element={<SsangYongModels />} />
        <Route path="/modelos/subaru" element={<SubaruModels />} />
        <Route path="/modelos/suzuki" element={<SuzukiModels />} />
      </Route>
    </Routes>
  );
}

export default App;