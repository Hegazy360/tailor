import React from "react";
import Hero from "components/Hero";
import CategoryCards from "components/CategoryCards";
import HowItWorksHero from "components/HowItWorksHero";
import SignInCard from "components/SignInCard";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
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
      <Footer />
    </div>
  );
}
