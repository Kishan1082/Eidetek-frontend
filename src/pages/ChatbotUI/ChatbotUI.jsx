import React, { useState } from "react";
import ChatbotSuggestion from "./ChatbotSuggestion";
import ChatbotInput from "./ChatbotInput";
import Eidetik from "../../assets/Logo.svg";
import suggestions from "./suggestions.json";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="self-start text-stone-600 hover:underline"
      onClick={() => navigate("/landing-page-2")}
    >
      Back
    </button>
  );
}

function ChatbotUI() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]); // Stores user and chatbot messages
  const randomSuggestions = suggestions.sort(() => Math.random() - 0.5).slice(0, 3);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]); // Add user message to chat

    try {
      const response = await fetch("http://10.0.0.165:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      console.log(data);
      const botMessage = { text: data.response, sender: "bot" };

      setMessages((prev) => [...prev, botMessage]); // Add bot response to chat
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }

    setInputValue(""); // Clear input field
  };

  return (
    <section className="flex overflow-hidden flex-col items-center px-10 pt-22 pb-5 text-sm bg-white max-md:px-5 max-md:pt-24">
      <BackButton />
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

        {/* Chat Messages */}
        <div className="flex flex-col-reverse gap-2 mt-4 w-full h-96 overflow-y-auto p-4 rounded-md ">
          {messages.slice().reverse().map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[75%] break-words ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-black self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>


        {/* Suggestions */}
        <div className="flex flex-wrap gap-3.5 items-end mt-5 w-full max-md:max-w-full">
          <div className="self-stretch">
            <h2 className="font-bold text-zinc-600 max-md:mr-2">
              Suggestions on what to ask Eidetik
            </h2>
            {randomSuggestions.map((suggestion, index) => (
              <ChatbotSuggestion
                key={index}
                text={suggestion}
                onClick={() => handleSendMessage(suggestion)}
              />
            ))}
          </div>
        </div>

        {/* Input Field */}
        <ChatbotInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSendMessage={handleSendMessage}
        />
      </div>
    </section>
  );
}

export default ChatbotUI;
