import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <section className="navigator">
      <nav className="homeLink">
        <Link to="/">
          Home
        </Link>
      </nav>
      <nav className="favoriteLink">
        <Link to="/favorites">
          Favorite
        </Link>
      </nav>
      <nav className="exitLink">
        <a href="/">
          Desconectar
        </a>
      </nav>
    </section>
  );
}

export default Nav;
