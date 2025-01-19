import React from "react";
import { Link } from "react-router-dom";

const OutlineButton = ({ text, dynamicClass, icon, linkname, hasIcon }) => {
  return (
    <Link
      to={linkname}
      className={`${dynamicClass} flex items-center justify-center gap-2 rounded-sm border border-gray-400 p-3 transition-colors hover:bg-[--secondary-color-hover] xl:text-lg`}
    >
      {hasIcon && icon}
      {text}
    </Link>
  );
};

export default OutlineButton;
