import React from "react";
import { RiArrowDownSFill } from "@remixicon/react";

import SectionContainer from "../../components/containers/SectionContainer";
import SectionHeading from "../../components/headings/SectionHeading";
import Input from "../../components/inputs/Input";

import movieData from "../../json/SampleTrending.json";

const Trending = () => {
  return (
    <SectionContainer>
      <SectionHeading title={"Trending Now"} />
      <div className="flex flex-col gap-5">
        <div className="flex w-full items-center">
          <Input
            placeholder={"Philippines"}
            dynamicClass={"w-full border-r-0 rounded-r-none	"}
          ></Input>
          <div className="border border-l-0 border-gray-400 bg-[#101012] p-3">
            <RiArrowDownSFill />
          </div>
        </div>
        <div className="flex w-full items-center">
          <Input
            placeholder={"Movies"}
            dynamicClass={"w-full border-r-0 rounded-r-none	"}
          ></Input>
          <div className="border border-l-0 border-gray-400 bg-[#101012] p-3">
            <RiArrowDownSFill />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {movieData.map((movie, index) => {
          const { poster_path } = movie;
          return (
            <div className="shrink-0">
              <img src={poster_path} alt="" className="w-[110px] rounded-lg" />
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Trending;
