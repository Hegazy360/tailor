import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCards from "./components/CategoryCards";
import HowItWorksHero from "./components/HowItWorksHero";
import SignInCard from "./components/SignInCard";
import Footer from "./components/Footer";

import "./App.sass";

function App() {
  return (
    <div>
      <Navbar />
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

export default App;
