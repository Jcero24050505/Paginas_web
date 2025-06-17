// components/Layout.js
import Header from '@/components/Header'; // Asegúrate de que la ruta a tu Header sea correcta
import Footer from '@/components/Footer'; // Asegúrate de que la ruta a tu Footer sea correcta
import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;