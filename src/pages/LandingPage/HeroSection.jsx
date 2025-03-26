import React from "react";
import Bckgrnd from "../../assets/Background.svg";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[70vh] text-center text-black bg-white overflow-hidden">
      {/* Background Image - Covers 70% of the viewport height */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Bckgrnd}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-3xl font-medium tracking-tight leading-loose">
          Store what matters, recall when it counts.
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Keep important info at your fingertips, always.
        </p>

        {/* Button */}
        <GetStarted />
      </div>
    </section>
  );
}

function GetStarted() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <button className="px-8 py-4 mt-6 text-base font-medium rounded bg-black text-white transition-all duration-200 ease-in-out hover:bg-gray-900" onClick={handleClick}>
      Get Started
    </button>
  );
}

export default HeroSection;
