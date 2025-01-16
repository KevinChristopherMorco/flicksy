import React from "react";

const Input = ({ type, placeholder, dynamicClass, isRequired }) => {
  return (
    <input
      type={type}
      className={`${dynamicClass} rounded-sm border border-gray-400 bg-[#101012] p-3`}
      placeholder={placeholder}
      required={isRequired}
    />
  );
};

export default Input;
