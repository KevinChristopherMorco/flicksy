import React from "react";

const FormButton = ({ text, icon, hasIcon }) => {
  return (
    <div className="flex w-fit items-center rounded-md bg-[--primary-color] px-5 py-3">
      <input
        type="submit"
        value={text}
        className="bg-[--primary-color] text-lg font-bold"
      />
      {hasIcon && icon}
    </div>
  );
};

export default FormButton;
