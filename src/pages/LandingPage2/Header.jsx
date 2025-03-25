import React from "react";
import Eidetik from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

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
      
      <div className="ml-auto flex gap-4">
      <Chatbot />
      <Upload />
      <Logout />
      </div>
    </div>
  );
}

function Chatbot() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatbot");
  };

  return (
    <button className="text-sm text-black hover:underline ml-auto" onClick={handleClick}>
      Chat with Eidetek
    </button>
  );
}

function Upload() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <button className="text-sm text-black hover:underline ml-auto" onClick={handleClick}>
      Start a new upload
    </button>
  );
}
function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button className="text-sm text-black hover:underline ml-auto" onClick={handleClick}>
      Logout
    </button>
  );
}
export default Header;

