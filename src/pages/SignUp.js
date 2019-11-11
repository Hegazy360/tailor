import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "components/Firebase";
import { compose } from "recompose";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as ROUTES from "constants/routes";

const SignUp = () => (
  <div class="container margin-top-xl padding-lg">
    <h1 className="title">Sign Up</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  loading: false
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;
    this.setState({ loading: true });
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      loading
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              className="input is-radiusless padding-lg"
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              className="input is-radiusless padding-lg"
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="john.doe@gmail.com"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              className="input is-radiusless padding-lg"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="*********"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Confirm Password</label>
          <div class="control">
            <input
              className="input is-radiusless padding-lg"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="*********"
            />
          </div>
        </div>
        <div className="has-text-centered margin-md">
          <button
            href="/#"
            className={`button is-primary is-medium ${loading && "is-loading"}`}
            disabled={isInvalid}
            type="submit"
          >
            Sign Up
            <div className="column padding-none padding-left-sm">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </button>
          <p className="margin-md has-text-danger">
            {error && <p>{error.message}</p>}
          </p>
        </div>
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUp;
export { SignUpForm, SignUpLink };
