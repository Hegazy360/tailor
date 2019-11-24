import React from "react";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as ROUTES from "constants/routes";

export default function SignInCard() {
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-two-thirds-tablet">
          <div className="card">
            <div className="card-content has-text-centered">
              <p className="title">Ready to Sign Up?</p>
              <Link to={ROUTES.SIGN_UP} className="button is-primary">
                TAKE YOUR STYLE QUIZ
                <div className="column padding-right-none">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
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
