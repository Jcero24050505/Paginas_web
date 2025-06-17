import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import InsightsPage from './pages/InsightsPage';
import PharmaLaunchPage from './pages/PharmaLaunchPage';
import PromotionalStaffPage from './pages/PromotionalStaffPage';
import LegalPage from './pages/LegalPage';
import CompliancePage from './pages/CompliancePage';
import PromotionalAdvertisingPage from './pages/PromotionalAdvertisingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'pharma-launch':
        return <PharmaLaunchPage setCurrentPage={setCurrentPage} />;
      case 'promotional-staff':
        return <PromotionalStaffPage setCurrentPage={setCurrentPage} />;
      case 'legal':
        return <LegalPage setCurrentPage={setCurrentPage} />;
      case 'compliance':
        return <CompliancePage setCurrentPage={setCurrentPage} />;
      case 'promotional-advertising':
        return <PromotionalAdvertisingPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'team':
        return <TeamPage />;
      case 'insights':
        return <InsightsPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms-of-service':
        return <TermsOfServicePage />;
      case 'cookie-policy':
        return <CookiePolicyPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;