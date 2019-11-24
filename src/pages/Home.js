import React from "react";
import Hero from "components/Hero";
import CategoryCards from "components/CategoryCards";
import HowItWorksHero from "components/HowItWorksHero";
import SignInCard from "components/SignInCard";
import Footer from "components/Footer";
import heroBgDesktop from "assets/images/clothes-desktop.jpg";
import heroBgMobile from "assets/images/clothes-mobile.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        heroTitle="Personal Styling for Everybody"
        heroSubtitle="With clothing hand-selected by our expert stylists for your unique
        size & style, you’ll always look and feel your best. No
        subscription required."
        heroBgDesktop={heroBgDesktop}
        heroBgMobile={heroBgMobile}
      />
      <br />
      <br />
      <CategoryCards />
      <br />
      <br />
      <br />
      <HowItWorksHero />
      <br />
      <br />
      <SignInCard />
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
}
