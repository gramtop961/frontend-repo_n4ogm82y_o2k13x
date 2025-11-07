import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
