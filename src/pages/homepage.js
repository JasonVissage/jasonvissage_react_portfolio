import React from 'react';
import Contact from '../components/Contact';
import About from '../components/About';
import Header from '../components/Header';
import Work from '../components/Work';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
