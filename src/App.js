import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Work from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <main className="main-page">
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/portfolio">
              <Work />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
