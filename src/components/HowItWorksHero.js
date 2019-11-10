import React from "react";

export default function HowItWorksHero() {
  return (
    <section className="hero is-medium is-dark how-it-works-hero">
      <div className="hero-body">
        <div className="container">
          <p className="title has-text-centered">How it works</p>
          <br />
          <div className="columns has-text-centered">
            <div className="column ">
              <p className="title is-spaced">
                <u>01</u>
              </p>
              <p className="subtitle is-6">FILL OUT YOUR STYLE PROFILE</p>
              <p>
                Share your fit and style preferences and set the price range
                that suits your lifestyle—you’re in charge.
              </p>
            </div>
            <br />
            <div className="column">
              <p className="title is-spaced">
                <u>02</u>
              </p>
              <p className="subtitle is-6">REQUEST A FIX® DELIVERY</p>
              <p>
                You pay a $20 styling fee for each shipment, which is credited
                toward anything you keep.
              </p>
            </div>
            <br />
            <div className="column">
              <p className="title is-spaced">
                <u>03</u>
              </p>
              <p className="subtitle">TRY BEFORE YOU BUY</p>
              <p className="subtitle is-6">
                Buy what you like, send back the rest. Shipping and returns are
                free and easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
