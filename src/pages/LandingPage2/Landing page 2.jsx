import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen w-screen bg-white">
      <Header />
      <div className="flex flex-1 items-center justify-center w-full px-4 sm:px-8">
        <HeroSection />
      </div>
    </main>
  );
}

export default LandingPage;
