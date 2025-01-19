import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-grow items-center justify-center bg-[--secondary-color] text-white">
      <div className="rounded-lg border border-gray-400 p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <div>
          <p className="text-gray-200">
            Oops! The page you are looking for could not be found.
          </p>
          <p className="text-gray-200">We're still working on it!</p>
        </div>
        <Link
          to={"/"}
          className="mt-4 inline-block rounded-lg bg-[--primary-color] px-4 py-3 font-medium text-white transition-colors hover:bg-[var(--primary-color-hover)]"
        >
          {" "}
          Go back to Home{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
