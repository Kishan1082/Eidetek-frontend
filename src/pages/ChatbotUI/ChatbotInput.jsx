"use client";
import React, { useState } from "react";

function ChatbotInput() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Handle submission logic here
      console.log("Submitted:", inputValue);
      setInputValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex relative gap-10 justify-between items-start mt-10 w-full bg-white border border-solid border-stone-950 border-opacity-30 max-w-[883px] min-h-[72px] rounded-[30px] text-neutral-400 max-md:max-w-full"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ask me anything you've stored"
        className="w-full h-full bg-transparent border-none outline-none pl-6 pr-12 py-6 rounded-[30px]"
      />
      <button
        type="submit"
        className="absolute right-2.5 bottom-[21px] bg-transparent border-none cursor-pointer"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6800e769e185c017b9c8de689cb40778385def14?placeholderIfAbsent=true&apiKey=08467026694342f59e19e940d07320ef"
          alt="Send"
          className="object-contain shrink-0 aspect-square h-[30px] w-[30px]"
        />
      </button>
    </form>
  );
}

export default ChatbotInput;
