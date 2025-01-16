import React from "react";

import logo from "../../assets/images/logo/flicksy-logo.png";
import { RiArrowDownSFill, RiTranslate2 } from "@remixicon/react";

const Navbar = () => {
  return (
    <nav className="fixed z-[999] flex w-full items-center justify-between p-[1.5rem]">
      <img src={logo} alt="" className="w-[100px]" />
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-sm border border-gray-300 px-2 py-[.35rem]">
          <RiTranslate2 className="h-4 w-4 text-white" />
          <RiArrowDownSFill className="h-4 w-4" />
        </div>
        <button className="rounded-sm bg-[--primary-color] px-4 py-[.35rem] text-sm font-medium">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
