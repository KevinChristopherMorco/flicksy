import { RiArrowRightSLine } from "@remixicon/react";
import React from "react";
import FormButton from "../buttons/FormButton";
import Input from "../inputs/Input";

const Hero = () => {
  return (
    <section className="grid h-[550px]">
      <div className="grid h-full auto-rows-min justify-items-center gap-5 bg-[url(assets/images/hero-bg.png)] bg-cover bg-center bg-no-repeat pt-36">
        <div className="flex h-fit flex-col items-center gap-1 px-5 text-center">
          <h4 className="text-3xl font-bold">
            Unlimited movies, TV shows, and more
          </h4>
          <p className="font-light">Starts at $3. Cancel Anytime.</p>
        </div>

        <div className="flex flex-col items-center gap-3 px-5 text-center">
          <p className="">
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div className="w-full">
            <form action="" className="flex flex-col items-center gap-4">
              <Input
                type={"email"}
                placeholder={"Email Address"}
                dynamicClass={"w-full"}
                isRequired={true}
              />

              <FormButton
                text={"Get Started"}
                icon={<RiArrowRightSLine />}
                hasIcon={true}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
