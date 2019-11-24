import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from "components/Session";
import { CSSTransition } from "react-transition-group";

import Home from "pages/Home";
import Navbar from "components/Navbar";
// import Footer from "components/Footer";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Account from "pages/Account";
import PasswordForget from "pages/PasswordForget";
import Category from "pages/Category";

import "react-toastify/dist/ReactToastify.min.css";
import * as ROUTES from "constants/routes";
import menBgDesktop from "assets/images/men-desktop.jpg";
import menBgMobile from "assets/images/men-mobile.jpg";
import womenBgDesktop from "assets/images/women-desktop.jpg";
import womenBgMobile from "assets/images/women-mobile.jpg";
import kidsBgDesktop from "assets/images/kids-desktop.jpg";
import kidsBgMobile from "assets/images/kids-mobile.jpg";

const routes = [
  { path: ROUTES.LANDING, Component: <Home /> },
  { path: ROUTES.SIGN_IN, Component: <SignIn /> },
  { path: ROUTES.SIGN_UP, Component: <SignUp /> },
  { path: ROUTES.ACCOUNT, Component: <Account /> },
  { path: ROUTES.PASSWORD_FORGET, Component: <PasswordForget /> },
  {
    path: ROUTES.MEN,
    Component: (
      <Category
        name="men's clothing"
        heroTitle="Personal Styling for Everybody  "
        heroSubtitle="Always look your best with men’s clothes for your style in sizes XS-3XL, 
                      waists 28-48ʺ and inseams 28-36ʺ. No subscription required."
        heroBgDesktop={menBgDesktop}
        heroBgMobile={menBgMobile}
      />
    )
  },
  {
    path: ROUTES.WOMEN,
    Component: (
      <Category
        name="women's clothing"
        heroTitle="Personal Styling for Everybody  "
        heroSubtitle="Your expert Stylist hand-selects women’s clothes for your unique size & style, 
                      so you’ll always look and feel your best. No subscription required."
        heroBgDesktop={womenBgDesktop}
        heroBgMobile={womenBgMobile}
      />
    )
  },

  {
    path: ROUTES.KIDS,
    Component: (
      <Category
        name="kids' clothing"
        heroTitle="Personal Styling for Everybody  "
        heroSubtitle="Get 8-12 pieces for all occasions for sizes 2T-14,
                      hand-selected by an expert Stylist—personalized to your one-of-a-kind kid."
        heroBgDesktop={kidsBgDesktop}
        heroBgMobile={kidsBgMobile}
      />
    )
  }
];

const App = () => (
  <Router>
    <div>
      <Navbar />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">{Component}</div>
            </CSSTransition>
          )}
        </Route>
      ))}
      {/* <br />
      <br />
      <Footer /> */}
    </div>
  </Router>
);
export default withAuthentication(App);
