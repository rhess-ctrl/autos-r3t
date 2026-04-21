import React from "react";
import { tw } from "../utils";

const Spinner = ({ hex, class: klass, label, size }) => {
  const fill = hex || "currentColor";
  const cls = klass || "";
  const title = label || "loading...";
  const sz = size || 24;

  return (
    <svg
      className={tw(cls, "animate-spin")}
      width={sz}
      height={sz}
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      aria-label="title"
    >
      <title>{title}</title>
      <g>
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke={fill}
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill={fill}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </g>
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export { Spinner };
export default Spinner;
