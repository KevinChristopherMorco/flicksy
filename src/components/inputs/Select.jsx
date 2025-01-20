import { RiArrowDownSFill } from "@remixicon/react";
import React, { useState } from "react";
import { useTranslateContext } from "../../hooks/TranslationProvider";

const Select = ({
  id,
  dynamicClass,
  options,
  selectChoice,
  setSelectChoice,
  setSelectState,
  isSelectOpen,
}) => {
  const { t } = useTranslateContext();
  return (
    <div className={`${dynamicClass} relative`}>
      <button
        onClick={setSelectState}
        className={`flex w-full cursor-pointer justify-between rounded-sm border border-gray-400 px-4 py-3 transition-colors hover:bg-[--secondary-color-hover]`}
      >
        <div>
          <p>
            {t(
              selectChoice[id].charAt(0).toUpperCase() +
                selectChoice[id].slice(1),
            )}
          </p>
        </div>
        <RiArrowDownSFill />
      </button>
      {isSelectOpen && (
        <div className="absolute z-[10] flex w-full flex-col gap-1 bg-white text-black">
          {options.map((option, index) => {
            return (
              <p
                onClick={() =>
                  setSelectChoice((prev) => ({
                    ...prev,
                    [id]: option,
                  }))
                }
                key={index}
                className="cursor-pointer px-4 hover:bg-[--primary-color] hover:text-white"
              >
                {t(option.charAt(0).toUpperCase() + option.slice(1))}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
