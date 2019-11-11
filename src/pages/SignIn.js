import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "pages/SignUp";
import { PasswordForgetLink } from "pages/PasswordForget";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";

import { withFirebase } from "components/Firebase";
import * as ROUTES from "constants/routes";

const SignInPage = () => (
  <div class="container margin-top-xl padding-lg">
    <h1 className="title">Sign In</h1>
    <SignInForm />
    <div className="is-size-7 margin-top-md">
      <PasswordForgetLink />
    </div>
    <div className="margin-top-lg margin-bottom-lg ">
      <div className="is-size-5 is-narrow sign-in__line-separator">OR</div>
    </div>
    <div className="columns">
      <div className="column is-half-desktop">
        <SignInGoogle />
      </div>
    </div>
    <div className="columns">
      <div className="column is-half-desktop">
        <SignInFacebook />
      </div>
    </div>
    <div className="is-size-7">
      <SignUpLink />
    </div>
  </div>
);
const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  loading: false
};

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.setState({ loading: true });
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error, loading } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <form onSubmit={this.onSubmit}>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              className="input is-radiusless padding-lg"
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              className="input is-radiusless padding-lg"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
            />
          </div>
        </div>
        <div className="margin-top-md">
          <button
            className={`button is-primary is-medium padding-left-xl padding-right-xl ${loading &&
              "is-loading"}`}
            disabled={isInvalid}
            type="submit"
          >
            Sign In
            <div className="column padding-none padding-left-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </button>
          {error && (
            <p className="margin-top-md has-text-danger">{error.message}</p>
          )}
        </div>
      </form>
    );
  }
}

class SignInGoogleBase extends Component {
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

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
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
        <FacebookLoginButton className="is-marginless" type="submit" />
        {error && (
          <p className="margin-top-md has-text-danger">{error.message}</p>
        )}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase
)(SignInFacebookBase);

export default SignInPage;
export { SignInForm, SignInGoogle, SignInFacebook };
