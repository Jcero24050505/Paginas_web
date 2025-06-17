import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Classes from './components/Classes';
import Location from './components/Location';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <Layout>
        <Hero />
        <About />
        <Pricing />
        <Gallery />
        <Classes />
        <Location />
      </Layout>
    </AnimatePresence>
  );
}

export default App;