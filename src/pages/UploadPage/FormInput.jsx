import React from "react";

function FormInput({ label, type, placeholder, value, onChange, children }) {
  return (
    <div className="mb-2 w-full">
      <label className="mb-1 block text-base text-stone-500">{label}</label>
      {type === "select" ? (
        <select
          className="px-6 py-4 w-full text-base rounded-xl border border-stone-500 border-opacity-30 text-stone-500 text-opacity-60"
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="px-6 py-4 w-full text-base rounded-xl border border-stone-500 border-opacity-30 text-stone-500 text-opacity-60"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default FormInput;