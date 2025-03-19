import React from "react";

function Header() {
  return (
    <header className="flex relative items-center px-9 py-3.5 w-full min-h-[57px] max-md:px-5 max-md:max-w-full">
      <div className="flex absolute right-0 bottom-0 z-0 flex-col self-start h-[57px] w-[1280px] max-md:max-w-full">
        <div className="flex w-full bg-zinc-100 min-h-[57px] max-md:max-w-full" />
      </div>
      <Logo />
      <LoginButton />
    </header>
  );
}

function Logo() {
  return (
    <div className="flex z-0 gap-4 self-stretch my-auto text-sm text-black whitespace-nowrap rounded-md w-[141px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7785bdedbec869b484c69999990b417e212db032?placeholderIfAbsent=true&apiKey=08467026694342f59e19e940d07320ef"
        alt="Eidetik.io logo"
        className="object-contain shrink-0 rounded-md aspect-square w-[30px]"
      />
      <span className="my-auto">Eidetik.io</span>
    </div>
  );
}

function LoginButton() {
  return (
    <button className="z-0 self-stretch my-auto w-16 text-sm text-center text-black">
      Log in
    </button>
  );
}

export default Header;
