import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="navigator">
      <img
        src="https://www.konduto.com/wp-content/uploads/2020/03/konduto-logotipo.png"
        alt="Logo Konduto"
      />
      <nav className="homeLink">
        <Link to="/home">
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
    </header>
  );
}

export default Nav;
