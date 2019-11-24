import React, { useState } from "react";
import SignOutButton from "pages/SignOut";
import { Link } from "react-router-dom";
import * as ROUTES from "constants/routes";
import { AuthUserContext } from "components/Session";

export default function Navbar() {
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
          <Link to={ROUTES.WOMEN} className="navbar-item">Women</Link>
          <Link to={ROUTES.MEN} className="navbar-item">Men</Link>
          <Link to={ROUTES.KIDS} className="navbar-item">Kids</Link>
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
            <AuthUserContext.Consumer>
              {authUser =>
                authUser ? (
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Account</a>
                    <div className="navbar-dropdown">
                      <Link to={ROUTES.ACCOUNT} className="navbar-item">
                        <p className="has-text-weight-semibold">{authUser.username}</p>
                      </Link>
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
                )
              }
            </AuthUserContext.Consumer>
          </div>
        </div>
      </div>
    </nav>
  );
}
