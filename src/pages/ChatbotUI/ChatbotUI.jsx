import React, { useState } from "react";
import ChatbotSuggestion from "./ChatbotSuggestion";
import ChatbotInput from "./ChatbotInput";
import Eidetik from "../../assets/Logo.svg";
import suggestions from "./suggestions.json";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/landing-page-2");
  };

  return (
    <button
          className="self-start text-stone-600 hover:underline "
          onClick={handleClick}
        >Back
        </button>
  );
}

function ChatbotUI() {
  const [inputValue, setInputValue] = useState("");
  const randomSuggestions = suggestions.sort(() => Math.random() - 0.5).slice(0, 3);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  return (
    <section className="flex overflow-hidden flex-col items-center px-10 pt-22 pb-5 text-sm bg-white max-md:px-5 max-md:pt-24">
      <BackButton/>
      <div className="flex flex-col ml-9 w-full max-w-[910px] max-md:max-w-full">
        <header className="flex flex-col self-center max-w-full text-xl text-center text-stone-950 w-[425px]">
          <img
            src={Eidetik}
            alt="Eidetik Logo"
            className="object-contain self-center w-9 rounded-md aspect-[0.97]"
          />
          <h1 className="mt-12 max-md:mt-10 max-md:max-w-full">
            Forgot something? Eidetik remembers
          </h1>
        </header>

        <div className="flex flex-wrap gap-3.5 items-end mt-80 w-full max-md:mt-10 max-md:max-w-full">
          <div className="self-stretch">
            <h2 className="font-bold text-zinc-600 max-md:mr-2">
              Suggestions on what to ask Eidetik
            </h2>
            {randomSuggestions.map((suggestion, index) => (
              <ChatbotSuggestion
                key={index}
                text={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
              />
            ))}
          </div>
        </div>

        <ChatbotInput inputValue={inputValue} setInputValue={setInputValue} />
      </div>
    </section>
  );
}

export default ChatbotUI;