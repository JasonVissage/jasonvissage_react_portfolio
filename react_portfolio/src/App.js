import React, { useState } from 'react';
import './App.css';
import About from './components/About';
// import Nav from './components/Nav';
import Work from './components/Work';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [currentLink, setCurrentLink] = useState('about');

  const generateLink = () => {
    switch (currentLink) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Work />;
      default:
        return <About />;
    }
  };
  return (
    <div>
      <Header
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      ></Header>
      <main>{generateLink()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
