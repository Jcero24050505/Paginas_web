import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Marquee from 'react-fast-marquee';
import AnimatedImageMarquee from './AnimatedImageMarquee';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <AnimatedImageMarquee />
      <Footer />
    </div>
  );
};

export default Layout;