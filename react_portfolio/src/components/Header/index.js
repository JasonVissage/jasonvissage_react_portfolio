import React from 'react';
import Nav from '../Nav';

function Header() {
  return (
    <section className="header-section">
      <div className="header">
        <h1>Jason Vissage</h1>
      </div>
      <nav className="nav-header hvr-underline-from-left">
        <Nav />
      </nav>
    </section>
  );
}

export default Header;
