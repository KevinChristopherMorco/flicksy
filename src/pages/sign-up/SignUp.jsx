import React from "react";
import Input from "../../components/inputs/Input";
import { Link } from "react-router-dom";
import FormButton from "../../components/buttons/FormButton";
import {
  RiAppleFill,
  RiArrowLeftLine,
  RiEyeOffLine,
  RiFacebookFill,
  RiGoogleFill,
} from "@remixicon/react";

const SignUp = () => {
  const SigninCard = ({ icon, linkname }) => {
    return (
      <Link
        to={"some-page"}
        className="flex w-[80px] cursor-pointer items-center justify-center rounded-md border border-gray-400 p-3 transition-colors hover:bg-[--secondary-color-hover]"
      >
        {icon}
      </Link>
    );
  };
  return (
    <div className="relative grid h-full grid-rows-[0.5fr_10fr] gap-10 py-[3%] md:gap-20">
      <div className="absolute h-[450px] w-full bg-[url(assets/images/hero-bg.png)] bg-cover bg-bottom bg-no-repeat xl:h-[550px]" />{" "}
      <Link
        to={"/"}
        className="z-[99] flex w-[95%] cursor-pointer items-center gap-1 place-self-start px-3"
      >
        <RiArrowLeftLine />
      </Link>
      <div className="z-[99] flex flex-col items-center">
        <div className="flex w-[90%] flex-col items-center gap-10 rounded-md border border-gray-300 bg-[--secondary-color] p-6 md:w-[50%] md:p-10 lg:w-[40%] lg:p-10 xl:w-[30%] xl:p-10 2xl:w-[23%]">
          <div className="flex flex-col gap-2 text-center">
            <h4 className="text-3xl font-bold">Create an account</h4>
            <div className="flex items-center justify-center gap-1 text-sm">
              <p>Already have an account?</p>
              <Link
                to={"/sign-in"}
                className="font-medium text-[--primary-color]"
              >
                <span>Sign in</span>
              </Link>
            </div>
          </div>
          <form className="flex w-full flex-col items-center gap-5">
            <Input
              type={"text"}
              placeholder={"Email Address"}
              dynamicClass={"w-full"}
            />
            <div className="relative flex w-full flex-col items-end gap-1">
              <Input
                type={"password"}
                placeholder={"Enter Password"}
                dynamicClass={"w-full"}
              />
              <RiEyeOffLine className="absolute right-2 top-[50%] h-5 w-5 -translate-y-[50%]" />
            </div>
            <div className="relative flex w-full flex-col items-end gap-1">
              <Input
                type={"password"}
                placeholder={"Confirm Password"}
                dynamicClass={"w-full"}
              />
              <RiEyeOffLine className="absolute right-2 top-[50%] h-5 w-5 -translate-y-[50%]" />
            </div>
            <FormButton text={"Sign Up"} dynamicClass={"w-full"} />
          </form>
          <div className="flex w-full items-center justify-center">
            <div className="w-full border border-gray-400"></div>
            <p className="w-full text-center text-sm">or sign up with</p>
            <div className="w-full border border-gray-400"></div>
          </div>
          <div className="flex w-full items-center justify-between">
            <SigninCard icon={<RiGoogleFill />} />
            <SigninCard icon={<RiAppleFill />} />
            <SigninCard icon={<RiFacebookFill />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
