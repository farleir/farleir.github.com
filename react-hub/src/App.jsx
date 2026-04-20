import React from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Career from './components/Career';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <BentoGrid />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
