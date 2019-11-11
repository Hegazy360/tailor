import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "pages/SignUp";
import { PasswordForgetLink } from "pages/PasswordForget";

import { withFirebase } from "components/Firebase";
import * as ROUTES from "constants/routes";

const SignInPage = () => (
  <div class="container margin-top-xl padding-sm">
    <h1 className="title">Sign In</h1>
    <SignInForm />

    <div className="has-text-centered">
      <PasswordForgetLink />
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
        <div className="has-text-centered margin-md">
          <button
            className={`button is-primary is-medium ${loading && "is-loading"}`}
            disabled={isInvalid}
            type="submit"
          >
            Sign In
          </button>
          <p className="margin-md has-text-danger">
            {error && <p>{error.message}</p>}
          </p>
        </div>
      </form>
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);
export default SignInPage;
export { SignInForm };
