import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "components/Firebase";
import { compose } from "recompose";
import { faArrowRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookSignIn from "components/FacebookSignIn";
import GoogleSignIn from "components/GoogleSignIn";
import Step1 from "components/Svgs/Step1";
import Step2 from "components/Svgs/Step2";
import Step3 from "components/Svgs/Step3";

import { SignInLink } from "pages/SignIn";
import * as ROUTES from "constants/routes";

const SignUp = () => <SignUpForm />;

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  loading: false,
  step: 1
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

  incrementStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  decrementStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      loading,
      step
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    console.log(this.state);

    return (
      <div className="container margin-top-xl padding-lg">
        {step > 1 && (
          <a onClick={this.decrementStep} class="is-absolute">
            <FontAwesomeIcon icon={faChevronLeft} size="2x" color="lightgrey" />
          </a>
        )}

        {step === 1 && (
          <div className="margin-bottom-lg">
            <div className="svg-container">
              <Step1 />
            </div>
            <p className="column is-half-desktop is-centered has-text-centered is-size-4">
              How do you feel about shopping?
            </p>
            <div className="column is-half-desktop is-centered choices-container">
              <div className="choices-container--divider">
                <div className="columns is-mobile">
                  <div className="column has-text-centered">
                    <input
                      name="step1"
                      type="radio"
                      class="margin-bottom-sm"
                      value="1"
                      id="step1-1"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step1-1">Don't enjoy</label>
                  </div>
                  <div className="column has-text-centered">
                    <input
                      name="step1"
                      type="radio"
                      class="margin-bottom-sm"
                      value="2"
                      id="step1-2"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step1-2">It’s okay</label>
                  </div>
                  <div className="column has-text-centered">
                    <input
                      name="step1"
                      type="radio"
                      class="margin-bottom-sm"
                      value="3"
                      id="step1-3"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step1-3">Love it</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="margin-bottom-lg">
            <div className="svg-container">
              <Step2 />
            </div>
            <p className="column is-half-desktop is-centered has-text-centered is-size-4">
              How much time & effort do you put into getting the right look?
            </p>
            <div className="column is-half-desktop is-centered choices-container">
              <div className="choices-container--divider">
                <div className="columns is-mobile">
                  <div className="column has-text-centered">
                    <input
                      name="step2"
                      type="radio"
                      class="margin-bottom-sm"
                      value="1"
                      id="step2-1"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step2-1">Not a lot</label>
                  </div>
                  <div className="column has-text-centered">
                    <input
                      name="step2"
                      type="radio"
                      class="margin-bottom-sm"
                      value="2"
                      id="step2-2"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step2-2">Some</label>
                  </div>
                  <div className="column has-text-centered">
                    <input
                      name="step2"
                      type="radio"
                      class="margin-bottom-sm"
                      value="3"
                      id="step2-3"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step2-3">Tons</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="margin-bottom-lg">
            <div className="svg-container">
              <Step3 />
            </div>
            <p className="column is-half-desktop is-centered has-text-centered is-size-4">
              How often do you try out the latest styles & trends?
            </p>
            <div className="column is-half-desktop is-centered choices-container">
              <div className="choices-container--divider">
                <div className="columns is-mobile">
                  <div className="column has-text-centered">
                    <input
                      name="step3"
                      type="radio"
                      class="margin-bottom-sm"
                      value="1"
                      id="step3-1"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step3-1">Rarely</label>
                  </div>
                  <div className="column has-text-centered">
                    <input
                      name="step3"
                      type="radio"
                      class="margin-bottom-sm"
                      value="2"
                      id="step3-2"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step3-2">Occasionally</label>
                  </div>
                  <div className="column has-text-centered">
                    <input
                      name="step3"
                      type="radio"
                      class="margin-bottom-sm"
                      value="3"
                      id="step3-3"
                      onChange={this.onChange}
                    />
                    <label htmlFor="step3-3">All the time</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step < 4 && (
          <div className="has-text-centered">
            <button
              className="button is-medium is-primary is-outlined padding-right-xl padding-left-xl"
              onClick={this.incrementStep}
            >
              NEXT
              <div className="column padding-none padding-left-sm">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        )}

        {step === 4 && (
          <div class="margin-top-xl">
            <h1 className="title">Sign Up</h1>
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
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

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
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

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
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

              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
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
              <div className="margin-top-md">
                <button
                  className={`button is-primary is-medium padding-left-xl padding-right-xl ${loading &&
                    "is-loading"}`}
                  disabled={isInvalid}
                  type="submit"
                >
                  Sign Up
                  <div className="column padding-none padding-left-sm">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </button>
                {error && (
                  <p className="margin-top-md has-text-danger">
                    {error.message}
                  </p>
                )}
              </div>
            </form>

            <div className="margin-top-lg margin-bottom-lg ">
              <div className="is-size-5 is-narrow sign-in__line-separator">
                OR
              </div>
            </div>
            <div className="columns">
              <div className="column is-half-desktop">
                <GoogleSignIn />
              </div>
            </div>
            <div className="columns">
              <div className="column is-half-desktop">
                <FacebookSignIn />
              </div>
            </div>
            <div className="is-size-7">
              <SignInLink />
            </div>
          </div>
        )}
      </div>
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
