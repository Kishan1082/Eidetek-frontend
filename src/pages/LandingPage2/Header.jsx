import React from "react";
import Eidetik from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-gray-100 border-b border-gray-300 py-4 px-6 sm:px-10">
      <Logo />
      <div className="ml-auto flex gap-4">
      <Logout />
      </div>

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
function Logout() {
  const { logout } = useAuth();  // Get the logout function from AuthContext

  const handleClick = () => {
      logout();  // Call logout function from context to clear token and set isAuthenticated to false
  };

  return (
    <button className="px-4 py-2 text-sm text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all" onClick={handleClick}>
      Logout
    </button>
  );
}
export default Header;

