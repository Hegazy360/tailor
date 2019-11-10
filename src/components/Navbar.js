import React, { useState } from "react";

export default function Navbar() {
  const [menuActive, setMenuState] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          Tailor
        </a>
        <a
          role="button"
          className={`navbar-burger burger ${menuActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setMenuState(!menuActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${menuActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="navbar-item">Women</a>

          <a className="navbar-item">Men</a>

          <a className="navbar-item">Kids</a>
        </div>

        <div className="navbar-end">
          <a className="navbar-item">Style Guide</a>

          <a className="navbar-item">FAQ</a>

          <a className="navbar-item">Gift Cards</a>
          <div className="navbar-item">
            <a className="button is-light">Sign In</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
