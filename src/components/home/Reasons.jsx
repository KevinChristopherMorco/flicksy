import React from "react";
import SectionContainer from "../containers/SectionContainer";
import GenericContainer from "../containers/GenericContainer";

import SectionHeading from "../headings/SectionHeading";

import computer from "../../assets/images/reasons/computer.png";
import ad from "../../assets/images/reasons/ads.png";
import download from "../../assets/images/reasons/download.png";
import video from "../../assets/images/reasons/video.png";
import { useTranslateContext } from "../../hooks/TranslationProvider";

const ReasonCard = ({ title, description, icon }) => {
  return (
    <div className="grid h-[300px] rounded-lg bg-gradient-to-r from-[#192144] to-[#20111E] p-5 xl:h-[350px]">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold xl:text-xl 2xl:text-2xl">{title}</p>

        <p className="text-2xl:text-lg">{description}.</p>
      </div>
      <img
        src={icon}
        alt=""
        className="h-[80px] w-[80px] place-self-end justify-self-end"
      />
    </div>
  );
};

const Reasons = () => {
  const { t } = useTranslateContext();
  return (
    <SectionContainer>
      <SectionHeading title={t("More Reasons to Join")} />
      <GenericContainer>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <ReasonCard
            title={t("Stream on Any Device, Anytime")}
            description={t(
              "Access your account and stream content across multiple devices",
            )}
            icon={computer}
          />
          <ReasonCard
            title={t("Enjoy Uninterrupted Viewing")}
            description={t(
              "Say goodbye to ads! Enjoy an ad-free streaming experience so you can watch your favorite content without any interruptions",
            )}
            icon={ad}
          />
          <ReasonCard
            title={t("Take Your Shows Anywhere")}
            description={t(
              "Download your favorite movies and TV shows to enjoy offline, so you never miss out on entertainment",
            )}
            icon={download}
          />
          <ReasonCard
            title={t("Enjoy Crystal Clear Streaming")}
            description={t(
              "Experience seamless viewing with high-quality video and audio on any device, from your phone to your TV.",
            )}
            icon={video}
          />
        </div>
      </GenericContainer>
    </SectionContainer>
  );
};

export default Reasons;
