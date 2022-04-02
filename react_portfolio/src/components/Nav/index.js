import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex-row">
        <Link to="/">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
