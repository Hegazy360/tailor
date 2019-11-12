import React, { useState } from "react";
import SignOutButton from "pages/SignOut";
import { Link } from "react-router-dom";
import { withFirebase } from "components/Firebase";
import * as ROUTES from "constants/routes";

function Navbar({ firebase }) {
  const [menuActive, setMenuState] = useState(false);

  return (
    <nav
      className="navbar padding-right-xxl padding-left-xxl"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to={ROUTES.LANDING} className="navbar-item">
          Tailor
        </Link>

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
            {firebase.currentUser ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">TODO: ADD NAME -> Link</a>
                  <hr className="navbar-divider" />

                  <a className="navbar-item">
                    <SignOutButton />
                  </a>
                </div>
              </div>
            ) : (
              <Link to={ROUTES.SIGN_IN} className="button is-light">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withFirebase(Navbar);
