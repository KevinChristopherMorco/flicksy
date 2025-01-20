import React from "react";

import logo from "/assets/images/logo/Flicksy-logo.png";
import { RiArrowDownSFill, RiTranslate2 } from "@remixicon/react";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import useToggleSelect from "../../hooks/inputs/useToggleSelect";
import useScroll from "../../hooks/useScroll";

import { Link } from "react-router-dom";
import { useTranslateContext } from "../../hooks/TranslationProvider";

const Navbar = () => {
  const { t, languageChoice, setLanguageChoice } = useTranslateContext();
  const { isLargeScreen } = useScreenResponsiveness();
  const { selectState, setSelectState } = useToggleSelect();
  const { isSelectOpen } = selectState;
  const { isScrolled } = useScroll();

  return (
    <nav
      className={`${isScrolled ? "bg-black bg-opacity-90 transition-colors duration-300 ease-in-out" : "bg-transparent transition-colors duration-300 ease-in-out"} fixed z-[999] flex w-full items-center justify-between p-[1.5rem] lg:px-[5rem] 2xl:px-[15rem]`}
    >
      <img src={logo} alt="" className="w-[100px] lg:w-[150px]" />
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            className="flex cursor-pointer items-center rounded-sm border border-gray-300 px-2 py-[.35rem] transition-colors hover:bg-[--secondary-color-hover] lg:gap-1 lg:px-5 lg:py-2"
            onClick={() => setSelectState({ isSelectOpen: !isSelectOpen })}
          >
            <RiTranslate2 className="h-4 w-4 text-white" />
            {isLargeScreen && (
              <p className="text-sm">
                {languageChoice === "en" ? "English" : "Español"}
              </p>
            )}
            <RiArrowDownSFill className="h-4 w-4" />
          </button>
          {isSelectOpen && (
            <div className="absolute flex w-[30vw] flex-col gap-1 bg-white text-center text-black md:w-full">
              {[
                { text: "English", short: "en" },
                { text: "Español", short: "es" },
              ].map((language, index) => {
                const { text, short } = language;
                return (
                  <p
                    onClick={() => setLanguageChoice(short)}
                    key={index}
                    className="cursor-pointer hover:bg-[--primary-color] hover:text-white"
                  >
                    {text}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <Link
          to={"sign-in"}
          className="rounded-sm bg-[--primary-color] px-4 py-[.35rem] text-sm font-medium transition-colors hover:bg-[--primary-color-hover] lg:px-5 lg:py-2"
        >
          {t("Sign In")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
