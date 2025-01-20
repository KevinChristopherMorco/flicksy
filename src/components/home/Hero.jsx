import React, { useEffect } from "react";
import EmailForm from "../global/EmailForm";
import { useTranslation } from "react-i18next";
import { useTranslateContext } from "../../hooks/TranslationProvider";

const Hero = () => {
  const { t } = useTranslateContext();

  return (
    <section className="grid h-[550px] xl:h-[700px]">
      <div className="grid h-full auto-rows-min justify-items-center gap-5 bg-[url(assets/images/hero-bg.png)] bg-cover bg-center bg-no-repeat pt-36 xl:gap-10 xl:bg-bottom xl:pt-32">
        <div className="flex h-fit flex-col items-center gap-1 px-5 text-center xl:gap-4">
          <h4 className="text-3xl font-black lg:text-4xl xl:w-[50%] xl:text-6xl xl:leading-tight">
            {t("Unlimited movies, TV shows, and more")}
          </h4>
          <p className="font-medium lg:text-lg">
            {t("Starts at $3. Cancel Anytime")}.
          </p>
        </div>
        <div className="flex w-full items-center justify-center 2xl:w-[65%]">
          <EmailForm isCenter={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
