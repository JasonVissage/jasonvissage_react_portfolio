import React from 'react';
import Contact from '../components/Contact';
import About from '../components/About';
import Header from '../components/Header';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Test from '../components/TestNav';

function Homepage() {
  return (
    <div>
      <Header />
      <Test />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
