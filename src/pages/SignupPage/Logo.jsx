"use client";
import React from "react";

const Logo = () => {
  return (
    <header className="flex items-center">
      <div className="flex items-center">
        <svg
          width="141"
          height="30"
          viewBox="0 0 141 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[141px] h-[30px] flex-shrink-0"
        >
          {/* Logo square with pattern */}
          <path
            d="M25 0H5C2.23858 0 0 2.23858 0 5V25C0 27.7614 2.23858 30 5 30H25C27.7614 30 30 27.7614 30 25V5C30 2.23858 27.7614 0 25 0Z"
            fill="url(#pattern0_69_450)"
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
        </svg>
      </div>
    </header>
  );
};

export default Logo;
