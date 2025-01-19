import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/sign-in" && pathname !== "/sign-up" && <Navbar />}
      <div className="flex grow">
        <main className="flex grow flex-col gap-10">
          <Outlet />
        </main>
      </div>
      {pathname !== "/sign-in" && pathname !== "/sign-up" && <Footer />}
    </>
  );
};

export default MainLayout;
