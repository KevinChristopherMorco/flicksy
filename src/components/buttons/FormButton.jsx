import React from "react";

const FormButton = ({ text, icon, hasIcon, dynamicClass }) => {
  return (
    <button
      type="submit"
      className={`${dynamicClass} group flex w-fit cursor-pointer items-center justify-center rounded-md bg-[--primary-color] px-5 py-3 font-bold transition-colors hover:bg-[--primary-color-hover]`}
    >
      {text}
      {hasIcon && icon}
    </button>
  );
};

export default FormButton;
