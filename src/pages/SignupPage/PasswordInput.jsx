"use client";
import React, { useState } from "react";

function PasswordInput({value, onChange}) {
  const [showPassword, setShowPassword] = useState(false);
  

  return (
    <div className="mb-4 w-full">
        <label className="text-base text-stone-500">Create a password </label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="px-6 py-4 mb-1 w-full text-base rounded-xl border border-stone-500 border-opacity-30 text-stone-500 text-opacity-60"
        value={value}
        onChange={onChange}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
      <p className="text-sm text-stone-500">
        Use 8 or more characters with a mix of letters, numbers & symbols
      </p>
    </div>
  );
}

export default PasswordInput;
