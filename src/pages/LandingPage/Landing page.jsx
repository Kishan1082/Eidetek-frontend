import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

function LandingPage() {
  return (
    <main className="flex overflow-hidden flex-col pt-7 pb-80 bg-white border border-black border-solid max-md:pb-24">
      <Header />
      <HeroSection />
    </main>
  );
}

export default LandingPage;