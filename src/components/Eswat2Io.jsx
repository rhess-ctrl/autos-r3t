import React from "react";

const url = "https://eswat2.dev";
const who = "eswat2";

const Eswat2Io = () => {
  return (
    <a
      className="text-clrs-gray hover:text-clrs-navy absolute right-0 top-0 mr-6 mt-6"
      href={url}
      aria-label={who}
      target="blank"
      title={who}
    >
      <proto-ikon-loader name="fingerprint" size={24} label="eswat2" />
    </a>
  );
};

export { Eswat2Io };
export default Eswat2Io;
