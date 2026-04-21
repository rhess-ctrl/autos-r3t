import React from "react";
import { TW_VERSION } from "../utils";

const Footer = () => {
  return (
    <div className="mb-4 mr-2 mt-2 flex flex-row">
      <label className="text-clrs-slate4 ml-auto align-top text-xs italic">
        Tailwind {TW_VERSION}
      </label>
    </div>
  );
};

export { Footer };
export default Footer;
