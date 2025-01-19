import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, dynamicClass, icon, linkname, hasIcon }) => {
  return (
    <Link
      to={linkname}
      className={`${dynamicClass} flex items-center justify-center gap-2 rounded-sm bg-[--primary-color] p-3 text-center font-semibold transition-colors hover:bg-[--primary-color-hover] xl:text-lg`}
    >
      {hasIcon && icon}
      {text}
    </Link>
  );
};

export default PrimaryButton;
