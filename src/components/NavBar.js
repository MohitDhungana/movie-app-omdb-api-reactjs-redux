import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <a html="/" className="navbar-brand text-white text-lg brand-text">
              Movie Info
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-3x" id="imdb-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
