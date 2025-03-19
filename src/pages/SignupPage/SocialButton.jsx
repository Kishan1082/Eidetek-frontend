import React from "react";

function SocialButton({ icon, text }) {
  return (
    <button
      type="button"
      className="flex gap-4 justify-center items-center bg-white border border-zinc-800 h-[49px] rounded-[40px] w-[184px]"
      aria-label={`Continue with ${text}`}
    >
      <div className="w-[24px] h-[24px]">{icon}</div>
      <span className="text-xl text-zinc-800">{text}</span>
    </button>
  );
}

export default SocialButton;