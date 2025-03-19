import React from "react";

function SocialLoginButton({ icon, text }) {
  return (
    <button className="flex overflow-hidden flex-col justify-center items-center px-16 py-3.5 mt-6 max-w-full text-lg bg-white border border-solid border-zinc-800 rounded-[40px] text-zinc-800 w-[500px] max-md:px-5">
      <div className="flex gap-4 justify-center items-center">
        <img
          src={icon}
          alt="Google icon"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span className="self-stretch my-auto">{text}</span>
      </div>
    </button>
  );
}

export default SocialLoginButton;