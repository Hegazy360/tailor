import React from "react";
import Hero from "components/Hero";

export default function Category({
  name,
  heroTitle,
  heroSubtitle,
  heroBgDesktop,
  heroBgMobile
}) {
  return (
    <div>
      <Hero
        categoryName={name}
        heroTitle={heroTitle}
        heroSubtitle={heroSubtitle}
        heroBgDesktop={heroBgDesktop}
        heroBgMobile={heroBgMobile}
      ></Hero>
      <br />
      <br />
      <div className="container">
        <div className="card margin-lg">
          <div className="card-content has-text-centered">
            <p className="title">How Tailor Works</p>
            <div className="columns padding-lg">
              <div className="column">
                <p>
                  <b>Tell us your price range, size & style.</b> You’ll pay just
                  a $20 styling fee, which gets credited toward pieces you keep.
                </p>
              </div>
              <div className="column">
                <p>
                  <b>Get a Fix when you want.</b> Try on pieces at home before
                  you buy, keep your favorites and send back the rest.
                </p>
              </div>
              <div className="column">
                <p>
                  <b>Free shipping & returns</b>—a prepaid return envelope is
                  included. There are no hidden fees, ever.
                </p>
              </div>
            </div>
            <p>
              <b className="gradient-background">No subscription required.</b> Try Tailor once or set up automatic
              deliveries.
            </p>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
}
