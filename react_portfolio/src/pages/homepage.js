import React from 'react';
import Contact from '../components/Contact';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../assets/images/wooden_background.jpg';

function Homepage() {
  return (
    <div styles={{ backgroundImage: `url(${Background})` }}>
      <div>
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
