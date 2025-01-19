import {
  RiCalendar2Fill,
  RiCloseFill,
  RiErrorWarningFill,
  RiPlayFill,
  RiStarFill,
} from "@remixicon/react";
import React from "react";
import OutlineButton from "../../buttons/OutlineButton";
import PrimaryButton from "../../buttons/PrimaryButton";

const Tag = ({ text, icon, hasIcon }) => {
  return (
    <div className="flex items-center gap-1 rounded-sm bg-[#7A7A7A] px-2 py-1 text-sm">
      {hasIcon && icon}
      <p>{text}</p>
    </div>
  );
};

const MovieModal = ({ modalState, setModalState }) => {
  const {
    modalData: {
      title,
      name,
      overview,
      vote_average,
      release_date,
      first_air_date,
      genre,
      backdrop_path,
    },
  } = modalState;
  return (
    <div className="fixed z-[1000] h-screen w-full bg-black bg-opacity-85">
      <div className="fixed left-[50%] top-[50%] flex h-[550px] w-[95%] -translate-x-[50%] -translate-y-[50%] animate-scaleUp flex-col gap-8 bg-[#161616] md:h-[600px] md:w-[70%] md:gap-10 xl:h-[550px] xl:w-[50%] xl:gap-8 2xl:w-[40%]">
        <div
          className={`relative flex h-[50%] rounded-md bg-cover bg-center`}
          style={{ backgroundImage: `url(${backdrop_path})` }}
        >
          <p
            className="absolute right-0 z-[10] cursor-pointer px-2 py-1"
            onClick={() =>
              setModalState({ modalState: false, movieData: null })
            }
          >
            <RiCloseFill className="md:h-8 md:w-8" />
          </p>
          <div className="absolute inset-0 bg-black bg-opacity-5" />
          <div className="absolute bottom-0 h-[40%] w-full bg-gradient-to-t from-[#161616] lg:h-[70%]" />
          <p className="absolute -bottom-4 px-3 text-5xl font-bold md:px-10">
            {title || name}
          </p>
        </div>
        <div className="flex flex-col gap-4 px-3 md:gap-8 md:px-10">
          <div className="flex flex-wrap gap-2 text-sm">
            <Tag
              text={vote_average.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
              icon={<RiStarFill className="h-3 w-3" />}
              hasIcon={true}
            />
            <Tag
              text={new Date(release_date || first_air_date).toLocaleString(
                "en-US",
                {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                },
              )}
              icon={<RiCalendar2Fill className="h-3 w-3" />}
              className="h-3 w-3"
              hasIcon={true}
            />
            {genre &&
              genre.map((genre, index) => {
                return <Tag key={index} text={genre} className="h-3 w-3" />;
              })}
          </div>
          <p className="line-clamp-3">{overview}</p>
        </div>
        <div className="absolute bottom-0 flex w-full items-center justify-between px-3 py-5 md:justify-start md:gap-5 md:px-10">
          <PrimaryButton
            text={"Watch Trailer"}
            dynamicClass={"w-[60%] md:w-[45%] xl:w-[40%]"}
            icon={<RiPlayFill className="h-6 w-6" />}
            linkname={"movie-trailer"}
            hasIcon={true}
          />
          <OutlineButton
            text={"Details"}
            dynamicClass={"md:w-[30%] xl:w-[25%]"}
            icon={<RiErrorWarningFill className="h-6 w-6" />}
            linkname={"movie-page"}
            hasIcon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
