import React, { useState } from 'react';
import './App.css';
import { Document, Page } from 'react-pdf'


import Homepage from './pages/homepage';


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="main-page">
      <Homepage />
    </div>
  );
}

export default App;
