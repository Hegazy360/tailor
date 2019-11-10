import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignInCard() {
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-two-thirds-desktop">
          <div className="card">
            <div className="card-content has-text-centered">
              <p className="title">Ready to Sign Up?</p>
              <a href="/#" className="button is-primary">
                TAKE YOUR STYLE QUIZ
                <div className="column">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </a>
              <br />
              <br />
              <p>Already have an account? Sign in »</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
