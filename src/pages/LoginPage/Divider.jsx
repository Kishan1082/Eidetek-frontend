import React from "react";

function Divider({ text, className = "" }) {
  return (
    <div
      className={`flex flex-wrap gap-6 items-center max-w-full text-xl whitespace-nowrap text-neutral-900 w-[580px] ${className}`}
    >
      <div className="flex flex-1 shrink self-stretch my-auto h-0.5 basis-0 bg-stone-500 bg-opacity-30 min-w-60" />
      {text && <span className="self-stretch my-auto">{text}</span>}
      <div className="flex flex-1 shrink self-stretch my-auto h-0.5 basis-0 bg-stone-500 bg-opacity-30 min-w-60" />
    </div>
  );
}

export default Divider;