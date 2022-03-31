import React from 'react';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default Homepage;
