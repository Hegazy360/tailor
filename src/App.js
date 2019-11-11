import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from "components/Session";
import { CSSTransition } from "react-transition-group";

import Home from "pages/Home";
import Navbar from "components/Navbar";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import PasswordForget from "pages/PasswordForget";

import * as ROUTES from "constants/routes";

const routes = [
  { path: ROUTES.LANDING, Component: Home },
  { path: ROUTES.SIGN_IN, Component: SignIn },
  { path: ROUTES.SIGN_UP, Component: SignUp },
  { path: ROUTES.PASSWORD_FORGET, Component: PasswordForget }
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
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  </Router>
);
export default withAuthentication(App);
