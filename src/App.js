import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from "components/Session";

import Home from "pages/Home";
import Navbar from "components/Navbar";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import PasswordForget from "pages/PasswordForget";

import * as ROUTES from "constants/routes";

const App = () => (
  <Router>
    <div>
      <Navbar />
      
      <Route exact path={ROUTES.LANDING} component={Home} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
    </div>
  </Router>
);
export default withAuthentication(App);
