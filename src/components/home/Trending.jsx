import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";

import movieData from "../../json/SampleTrending.json";
import Select from "../inputs/Select";
import useToggleSelect from "../../hooks/inputs/useToggleSelect";
import { useTranslateContext } from "../../hooks/TranslationProvider";

const selectOptions = [
  {
    options: ["philippines", "global"],
    dynamicClass: "lg:w-[20%] 2xl:w-[10%] 2xl:text-lg",
    id: "trendingLocale",
  },
  {
    options: ["movies", "tv series"],
    dynamicClass: "lg:w-[20%] 2xl:w-[10%] 2xl:text-lg",
    id: "trendingType",
  },
];

const Trending = ({ setModalState }) => {
  const { t } = useTranslateContext();
  const { selectState, setSelectState } = useToggleSelect();
  const { selectIndex } = selectState;
  const [selectChoice, setSelectChoice] = useState({
    trendingLocale: "philippines",
    trendingType: "movies",
  });

  const handleOpen = (index) => {
    if (index === selectIndex) {
      setSelectState({ selectIndex: null });
      return;
    }
    setSelectState({ selectIndex: index });
  };

  return (
    <SectionContainer>
      <SectionHeading title={t("Trending Now")} />
      <div className="flex flex-col gap-5 lg:flex-row">
        {selectOptions.map((select, index) => {
          const { id, options, dynamicClass } = select;
          return (
            <Select
              key={index}
              id={id}
              options={options}
              dynamicClass={dynamicClass}
              selectChoice={selectChoice}
              setSelectChoice={setSelectChoice}
              isSelectOpen={index === selectIndex}
              setSelectState={() => handleOpen(index)}
            />
          );
        })}
      </div>

      <Swiper
        className="w-full"
        slidesPerView={3}
        spaceBetween={15}
        breakpoints={{
          768: { spaceBetween: 15, slidesPerView: 6 },
          1280: { spaceBetween: 15, slidesPerView: 6 },
        }}
      >
        {movieData
          .filter(
            (movie) =>
              movie[
                selectChoice.trendingLocale === "philippines"
                  ? "isLocalTrending"
                  : "isGlobalTrending"
              ] &&
              movie["type"] ===
                `${selectChoice.trendingType === "movies" ? "movie" : "tv"}`,
          )
          .sort((a, b) => b.vote_average - a.vote_average)
          .map((movie, index) => {
            const { poster_path } = movie;
            return (
              <SwiperSlide
                key={index}
                className="group relative shrink-0 cursor-pointer"
                onClick={() =>
                  setModalState({ isOpen: true, modalData: movie })
                }
              >
                <img
                  src={poster_path}
                  alt=""
                  className="w-[110px] cursor-pointer rounded-lg lg:w-full"
                />
                <div className="absolute inset-0 rounded-lg bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </SectionContainer>
  );
};

export default Trending;
