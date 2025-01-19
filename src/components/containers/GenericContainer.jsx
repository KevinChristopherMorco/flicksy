import React from "react";

const GenericContainer = ({ children }) => {
  return <div className="grid gap-5 lg:gap-20">{children}</div>;
};

export default GenericContainer;
