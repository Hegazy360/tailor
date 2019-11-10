import React from "react";
import { withBreakpoints } from "react-breakpoints";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroBgDesktop from "./../assets/images/clothes-desktop.jpg";
import heroBgMobile from "./../assets/images/clothes-mobile.jpg";

export default withBreakpoints(function Hero({
  breakpoints,
  currentBreakpoint
}) {
  const isMobile = breakpoints[currentBreakpoint] < breakpoints.tablet;

  return (
    <section className="hero is-medium has-background">
      <div className={`hero-body ${isMobile && "is-absolute"}`}>
        <div className="container is-fluid">
          <div className="column is-one-third-desktop has-text-centered	">
            <h1 className="title">Personal Styling for Everybody</h1>
            <h2 className="subtitle">
              With clothing hand-selected by our expert stylists for your unique
              size & style, you’ll always look and feel your best. No
              subscription required.
            </h2>
            <a className="button is-primary is-medium">
              Get Started
              <div className="column">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
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
