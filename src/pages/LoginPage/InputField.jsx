"use client";
import React, { useState } from "react";

function InputField({ label, type = "text", showHideOption = false ,value, onChange}) {
  const [showPassword, setShowPassword] = useState(false);
  const actualType = type === "password" && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full text-base text-stone-500">
      <div className="flex flex-wrap gap-5 justify-between py-0.5 w-full max-md:max-w-full">
      <label className="pb-1.5 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex justify-between items-center">
          <span>{label}</span>
          {showHideOption && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-lg text-stone-500 hover:text-blue-800 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>
      </label>

      </div>
      <input
        type={actualType}
        className="flex mt-1 w-full rounded-xl border border-solid border-stone-500 border-opacity-30 min-h-14 max-md:max-w-full px-4"
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
}

export default InputField;