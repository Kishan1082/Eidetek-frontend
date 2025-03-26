import React from "react";
import Eidetik from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row items-center justify-start bg-gray-100 border-b border-gray-300 py-4 pl-6 sm:pl-10">
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <button className="text-sm text-black hover:underline ml-auto" onClick={handleClick}>
      Log in
    </button>
  );
}

export default Header;

