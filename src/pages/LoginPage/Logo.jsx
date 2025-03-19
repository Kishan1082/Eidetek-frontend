import React from "react";
import Eidetik from "../../assets/Logo.svg"

function Logo() {
  return (
    <header className="flex gap-4 self-start text-sm text-black whitespace-nowrap">
      <img
        src={Eidetik}
        alt="Eidetik.io logo"
        className="object-contain shrink-0 rounded-md aspect-square w-[30px]"
      />
      <span className="my-auto">Eidetik.io</span>
    </header>
  );
}

export default Logo;