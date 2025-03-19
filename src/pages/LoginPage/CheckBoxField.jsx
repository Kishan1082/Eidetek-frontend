import React from "react";

function CheckboxField({ label, className = "" }) {
  return (
    <label
      className={`flex gap-6 items-start self-start py-2 pr-2 text-base text-zinc-800 cursor-pointer ${className}`}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7464f7bb12a0766d8dbee2612bed23b90ea0de9?placeholderIfAbsent=true&apiKey=08467026694342f59e19e940d07320ef"
        alt="Checkbox"
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <span>{label}</span>
    </label>
  );
}

export default CheckboxField;