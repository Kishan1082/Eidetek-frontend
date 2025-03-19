"use client";
import React from "react";
import ChatbotSuggestion from "./ChatbotSuggestion";
import ChatbotInput from "./ChatbotInput";

function ChatbotUI() {
  const suggestions = [
    "Give me my Insurance number",
    "Show me my prescription details.",
    "What's the venue for my concert?",
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-44 pb-10 text-sm bg-white max-md:px-5 max-md:pt-24">
      <div className="flex flex-col ml-9 w-full max-w-[910px] max-md:max-w-full">
        <header className="flex flex-col self-center max-w-full text-xl text-center text-stone-950 w-[425px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf79a77996a4bb08905770661a62be7ca7abe732?placeholderIfAbsent=true&apiKey=08467026694342f59e19e940d07320ef"
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
            <ChatbotSuggestion text={suggestions[0]} />
          </div>
          <ChatbotSuggestion text={suggestions[1]} />
          <ChatbotSuggestion text={suggestions[2]} />
        </div>

        <ChatbotInput />
      </div>
    </section>
  );
}

export default ChatbotUI;
