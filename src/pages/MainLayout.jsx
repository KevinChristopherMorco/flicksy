import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* p-5 lg:px-16 2xl:px-60 */}
        <div className="flex grow">
          <main className="flex grow flex-col gap-10 lg:mt-28">
            <Outlet />
          </main>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
