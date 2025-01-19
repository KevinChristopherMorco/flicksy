import React from "react";

const SectionContainer = ({ children }) => {
  return (
    <section className="grid gap-5 p-[1.5rem] lg:px-[5rem] xl:gap-8 2xl:px-[15rem]">
      {children}
    </section>
  );
};

export default SectionContainer;
