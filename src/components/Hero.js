import React from "react";
import { withBreakpoints } from "react-breakpoints";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as ROUTES from "constants/routes";

export default withBreakpoints(function Hero({
  breakpoints,
  currentBreakpoint,
  categoryName,
  heroTitle,
  heroSubtitle,
  heroBgDesktop,
  heroBgMobile
}) {
  const isMobile = breakpoints[currentBreakpoint] < breakpoints.tablet;
  
  return (
    <section className="hero is-medium has-background">
      <div className={`hero-body ${isMobile && "is-absolute"}`}>
        <div className="container is-fluid">
          <div className="column is-one-third-tablet has-text-centered	">
            {categoryName && <p className="is-uppercase">{categoryName}</p>}
            <h1 className="title">{heroTitle}</h1>
            <h2 className="subtitle">{heroSubtitle}</h2>
            <Link to={ROUTES.SIGN_UP} className="button is-primary is-medium">
              Get Started
              <div className="column padding-right-none">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isMobile ? (
        <img
          className="hero-background"
          src={heroBgMobile}
          alt="Clothes Line"
        />
      ) : (
        <img
          className="hero-background is-absolute"
          src={heroBgDesktop}
          alt="Clothes Line"
        />
      )}
    </section>
  );
});
