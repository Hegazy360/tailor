import React, { useState } from "react";
import SignOutButton from 'pages/SignOut';

export default function Navbar() {
  const [menuActive, setMenuState] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/#" className="navbar-item">
          Tailor
        </a>
        <a
          href="/#"
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
          <a href="/#" className="navbar-item">
            Women
          </a>

          <a href="/#" className="navbar-item">
            Men
          </a>

          <a href="/#" className="navbar-item">
            Kids
          </a>
        </div>

        <div className="navbar-end">
          <a href="/#" className="navbar-item">
            Style Guide
          </a>

          <a href="/#" className="navbar-item">
            FAQ
          </a>

          <a href="/#" className="navbar-item">
            Gift Cards
          </a>
          <div className="navbar-item">
            <a href="/#" className="button is-light">
              Sign In
            </a>
            <SignOutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
