import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
