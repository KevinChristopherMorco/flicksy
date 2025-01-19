import React from "react";
import { Link } from "react-router-dom";

const FooterList = ({ linkname }) => {
  return (
    <Link
      to={"page-list"}
      className="cursor-pointer font-medium text-gray-400 underline"
    >
      <p className="2xl:text-lg">{linkname}</p>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="grid gap-14 p-[1.5rem] py-20 lg:px-[5rem] 2xl:px-[15rem]">
      <div>
        <FooterList linkname={"Questions? Contact Us."} />
      </div>
      <div className="grid gap-1 lg:grid-cols-4 lg:gap-x-10">
        {[
          "FAQ",
          "Help Center",
          "Account",
          "Media Center",
          "Investor Relations",
          "Jobs",
          "Redeem Gift Cards",
          "Buy Gift Cards",
          "Ways to Watch",
          "Terms of Use",
          "Privacy",
          "Cookie Preferences",
          "Corporate Information",
          "Contact Us",
          "Speed Test",
          "Legal Notices",
          "Only on Netflix",
        ].map((linkname, index) => {
          return <FooterList key={index} linkname={linkname} />;
        })}
      </div>
    </footer>
  );
};

export default Footer;
