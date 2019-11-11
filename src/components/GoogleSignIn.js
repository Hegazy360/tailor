import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "components/Firebase";
import { compose } from "recompose";
import { GoogleLoginButton } from "react-social-login-buttons";
import * as ROUTES from "constants/routes";

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class GoogleSignInBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <GoogleLoginButton className="is-marginless" type="submit" />
        {error && (
          <p className="margin-top-md has-text-danger">{error.message}</p>
        )}
      </form>
    );
  }
}

const GoogleSignIn = compose(
  withRouter,
  withFirebase
)(GoogleSignInBase);

export default GoogleSignIn;
