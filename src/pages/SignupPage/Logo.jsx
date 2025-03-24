"use client";
import React from "react";
import Eidetik from "../../assets/Logo.svg"


const Logo = () => {
  return (
    <header className="flex items-center">
      <div className="flex items-center">
        <img
                src={Eidetik}
                alt="Eidetik.io logo"
                className="object-contain shrink-0 rounded-md aspect-square w-[30px]"
              />

          {/* Text "Eidetik.io" */}
          <text
            fill="black"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Roboto Mono"
            fontSize="14"
            letterSpacing="0em"
          >
            <tspan x="46" y="20.438">
              Eidetik.io
            </tspan>
          </text>

          {/* Definitions for patterns */}
          <defs>
            <pattern
              id="pattern0_69_450"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_69_450"
                transform="matrix(0.00113587 0 0 0.00118265 -0.587571 -0.341176)"
              />
            </pattern>
          </defs>
      </div>
    </header>
  );
};

export default Logo;
