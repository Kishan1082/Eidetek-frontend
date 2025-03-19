import React from "react";

function ChatbotSuggestion({ text }) {
  return (
    <button className="gap-2.5 self-stretch p-2.5 mt-5 rounded-3xl border border-white border-solid bg-white bg-opacity-50 text-stone-950 w-[274px] text-left hover:bg-opacity-70 transition-all">
      {text}
    </button>
  );
}

export default ChatbotSuggestion;