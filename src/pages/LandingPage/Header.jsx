import React from "react";
import Eidetik from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-gray-100 border-b border-gray-300 py-4 px-6 sm:px-10">
      <Logo />
      <LoginButton />
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
    </div>
  );
}

function LoginButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <button
      className="px-4 py-2 text-sm text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all"
      onClick={handleClick}
    >
      Log in
    </button>
  );
}

export default Header;

