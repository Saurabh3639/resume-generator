import React from "react";

export default function FormElements() {
  return <div>FormElements</div>;
}

export function TextElement({
  labelName,
  inputName,
  inputId,
  inputValue,
  onChange,
}) {
  return (
    <div>
      <label className="block text-[#252525] text-base font-medium mb-1">
        {labelName}
      </label>
      <input
        type="text"
        name={inputName}
        id={inputId}
        className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
}

export function DateElement({
  labelName,
  inputName,
  inputId,
  inputValue,
  onChange,
}) {
  return (
    <div>
      <label className="block text-[#252525] text-base font-medium mb-1">
        {labelName}
      </label>
      <input
        type="date"
        name={inputName}
        id={inputId}
        className="w-full px-2 py-1 border border-[#808080] rounded focus:outline-none text-sm font-normal"
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
}
