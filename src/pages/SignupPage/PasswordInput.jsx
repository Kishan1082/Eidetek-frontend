"use client";
import React, { useState } from "react";

function PasswordInput({value, onChange}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between items-center mb-1">
        <label className="text-base text-stone-500">Create a password</label>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="flex gap-1.5 items-center text-stone-500 text-opacity-80"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px]"
          >
            <path
              d="M20.0194 4.88134L19.2835 4.14539C19.0755 3.9374 18.6915 3.96941 18.4515 4.25736L15.8913 6.80132C14.7392 6.30538 13.4754 6.06538 12.1473 6.06538C8.19519 6.08132 4.77141 8.38529 3.12329 11.6975C3.02726 11.9055 3.02726 12.1614 3.12329 12.3374C3.89122 13.9054 5.04329 15.2015 6.4833 16.1774L4.3873 18.3054C4.1473 18.5454 4.11529 18.9293 4.27534 19.1374L5.01128 19.8733C5.21928 20.0813 5.60326 20.0493 5.84326 19.7613L19.8912 5.71345C20.1952 5.47358 20.2272 5.08962 20.0192 4.88161L20.0194 4.88134ZM12.9953 9.71322C12.7233 9.6492 12.4353 9.56925 12.1633 9.56925C10.8033 9.56925 9.71538 10.6573 9.71538 12.0172C9.71538 12.2892 9.7794 12.5771 9.85935 12.8492L8.78724 13.9052C8.46728 13.3452 8.2913 12.7211 8.2913 12.0172C8.2913 9.88924 10.0033 8.17722 12.1313 8.17722C12.8354 8.17722 13.4593 8.3532 14.0193 8.67316L12.9953 9.71322Z"
              fill="#666666"
              fillOpacity="0.8"
            ></path>
            <path
              d="M21.1714 11.6974C20.6115 10.5774 19.8754 9.56945 18.9635 8.75342L15.9875 11.6974V12.0174C15.9875 14.1454 14.2754 15.8574 12.1475 15.8574H11.8275L9.93951 17.7454C10.6436 17.8893 11.3795 17.9854 12.0995 17.9854C16.0516 17.9854 19.4754 15.6814 21.1235 12.3532C21.2675 12.1292 21.2675 11.9053 21.1715 11.6973L21.1714 11.6974Z"
              fill="#666666"
              fillOpacity="0.8"
            ></path>
          </svg>
          <span className="text-lg">{showPassword ? "Show" : "Hide"}</span>
        </button>
      </div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="px-6 py-4 mb-1 w-full text-base rounded-xl border border-stone-500 border-opacity-30 text-stone-500 text-opacity-60"
        value={value}
        onChange={onChange}
      />
      <p className="text-sm text-stone-500">
        Use 8 or more characters with a mix of letters, numbers & symbols
      </p>
    </div>
  );
}

export default PasswordInput;
