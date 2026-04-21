import React from "react";
import { tw } from "../utils";

const Header = ({ label }) => {
  return (
    <h1
      className={tw(
        "text-clrs-red text-center uppercase",
        "mb-11 ml-0 mr-0 mt-11",
        "text-6xl font-thin",
      )}
    >
      {label}
    </h1>
  );
};

export { Header };
export default Header;
