import React from "react";
import FormButton from "../buttons/FormButton";
import { RiArrowRightSLine } from "@remixicon/react";
import Input from "../inputs/Input";

const EmailForm = ({ isCenter }) => {
  return (
    <div
      className={`${isCenter ? "items-center" : ""} flex flex-col gap-3 px-5 md:px-0 lg:w-[70%] lg:text-lg xl:gap-4`}
    >
      <p className="text-center">
        Ready to watch? Enter your email to create or restart your membership
      </p>
      <div className="w-full">
        <form
          action=""
          className={`${isCenter ? "items-center" : ""} flex flex-col justify-center gap-4 lg:flex-row`}
        >
          <Input
            type={"email"}
            placeholder={"Email Address"}
            dynamicClass={"lg:w-[70%]"}
            isRequired={true}
          />

          <FormButton
            text={"Get Started"}
            icon={<RiArrowRightSLine />}
            dynamicClass={"lg:w-[30%] xl:w-[20%]"}
            hasIcon={true}
          />
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
