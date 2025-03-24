import React from "react";
import Eidetik from "../../assets/Logo.svg";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 sm:px-10 py-4 w-full bg-gray-100 border-b border-gray-300">
      <Logo />

    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3 text-lg text-black">
      <img
        src={Eidetik}
        alt="Eidetik.io logo"
        className="w-[30px] h-[30px] object-contain rounded-md"
      />
      <span className="font-medium">Eidetik.io</span>
      
      <LoginButton />
    </div>
  );
}

function LoginButton() {
  return (
    <button className="text-sm text-black hover:underline ml-auto">Log in</button>
  );
}

export default Header;

