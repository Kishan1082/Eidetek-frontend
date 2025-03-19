"use client";
import React, { useState } from "react";

function InputField({ label, type = "text", showHideOption = false }) {
  const [showPassword, setShowPassword] = useState(false);
  const actualType = type === "password" && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full text-base text-stone-500">
      <div className="flex flex-wrap gap-5 justify-between py-0.5 w-full max-md:max-w-full">
        <label className="pb-1.5 w-full max-md:pr-5 max-md:max-w-full">
          {label}
        </label>
        {showHideOption && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-lg text-right text-stone-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      <input
        type={actualType}
        className="flex mt-1 w-full rounded-xl border border-solid border-stone-500 border-opacity-30 min-h-14 max-md:max-w-full px-4"
      />
    </div>
  );
}

export default InputField;