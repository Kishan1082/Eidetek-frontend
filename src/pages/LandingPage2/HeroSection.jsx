import React from "react";
import Bckgrnd from "../../assets/Background.svg";

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen text-center text-black relative">
      {/* Background Image */}
      <img
        src={Bckgrnd}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-3xl font-medium tracking-tight leading-loose">
          Store what matters, recall when it counts.
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Keep important info at your fingertips, always.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;

