import React from "react";

function ActionButton({ text, primary = true, className = "" }) {
  const buttonStyle = primary
    ? "bg-neutral-900 text-white"
    : "bg-white text-neutral-900 border border-solid border-neutral-900";

  return (
    <button
      className={`flex overflow-hidden flex-col justify-center items-center px-12 py-3 w-full ${
        primary ? "text-2xl font-medium" : "text-xl"
      } text-center ${buttonStyle} max-w-[500px] rounded-[32px] max-md:px-5 max-md:max-w-full ${className}`}
    >
      <span className="gap-2 self-stretch">{text}</span>
    </button>
  );
}

export default ActionButton;