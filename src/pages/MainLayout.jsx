import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/Footer";
import { useTranslateContext } from "../hooks/TranslationProvider";

const MainLayout = () => {
  const { pathname } = useLocation();
  const { t } = useTranslateContext();
  return (
    <>
      {pathname !== "/sign-in" && pathname !== "/sign-up" && <Navbar />}
      <div className="flex grow">
        <main className="flex grow flex-col gap-10">
          <Outlet />
        </main>
      </div>
      {pathname !== "/sign-in" && pathname !== "/sign-up" && <Footer />}
      <div className="flex w-full flex-col gap-4 bg-[#101012] p-2 px-[1.5rem] text-center text-sm lg:px-[5rem] 2xl:px-[15rem]">
        <p>
          {t(
            "This design was created in Figma, and all credits are attributed to the original creator",
          )}{" "}
          ({t("myself")}).
        </p>
        <p>
          {t("You can visit the design link")}{" "}
          <a
            className="font-semibold text-[--primary-color]"
            target="_blank"
            href="https://www.figma.com/design/hFBd8qytDs7d4f1x3MyTPx/Flicksy?node-id=0-1&t=JSk3QpqtGP0Bl3vk-1"
          >
            {t("here")}
          </a>
        </p>
      </div>
    </>
  );
};

export default MainLayout;
