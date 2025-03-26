import React from "react";
import Bckgrnd from "../../assets/Background.svg";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[70vh] text-center text-black bg-white overflow-hidden">
      {/* Background Image - Covers 70% of the viewport height */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img src={Bckgrnd} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-medium tracking-tight leading-loose">
          Store what matters, recall when it counts.
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Keep important info at your fingertips, always.
        </p>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6">
          <Chatbot />
          <Upload />
        </div>
      </div>
    </section>
  );
}

function Chatbot() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatbot");
  };

  return (
    <button 
      className="px-8 py-4 text-base font-medium rounded bg-black text-white transition-all duration-200 ease-in-out hover:bg-gray-900"
      onClick={handleClick}
    >
      Chat with Eidetik
    </button>
  );
}

function Upload() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <button 
      className="px-8 py-4 text-base font-medium rounded bg-black text-white transition-all duration-200 ease-in-out hover:bg-gray-900"
      onClick={handleClick}
    >
      Start a new upload
    </button>
  );
}

export default HeroSection;
