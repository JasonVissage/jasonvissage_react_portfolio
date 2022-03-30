import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Homepage from './pages/homepage';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [currentLink, setCurrentLink] = useState('about');

  const generateLink = () => {
    // switch (currentLink) {
    //   case 'about':
    //     return <About />;
    //   case 'contact':
    //     return <Contact />;
    //   case 'resume':
    //     return <Resume />;
    //   case 'portfolio':
    //     return <Work />;
    //   default:
    //     return <About />;
    // }
  };
  return (
    <div>
      <Homepage />
    </div>
    // <Router>
    //   <div>
    //     <Header />
    //     <main>
    //       <Switch>
    //         <Route exact path="/">
    //           <About />
    //         </Route>
    //         <Route exact path="/Contact">
    //           <Contact />
    //         </Route>
    //         <Route exact path="/Work">
    //           <Work />
    //         </Route>
    //         <Route exact path="/Resume">
    //           <Resume />
    //         </Route>
    //       </Switch>
    //     </main>
    //     <Footer></Footer>
    //   </div>
    // </Router>
  );
}

export default App;
