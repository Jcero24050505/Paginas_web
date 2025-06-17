import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Check if cookie consent has been given
    const hasCookieConsent = localStorage.getItem('cookieConsent');
    if (!hasCookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {showCookieBanner && <CookieBanner onAccept={acceptCookies} />}
    </div>
  );
};

export default Layout;