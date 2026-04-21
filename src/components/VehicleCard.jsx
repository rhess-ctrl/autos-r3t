import React from "react";
import { tw } from "../utils";

const racingRegex = /^\#[0-9]*/;

const isRacing = (model) => model.match(racingRegex) != null;

const isExotic = (year) => year === 2554;

const isModern = (year) => year > 2010;

const VehicleCard = ({ value }) => {
  const { vin, make, model, year, color } = value || {};

  return (
    <div
      className={tw(
        "flex align-middle",
        "mb-1 rounded-lg p-4",
        "border border-solid",
        isExotic(year)
          ? "border-clrs-navy bg-clrs-navy text-clrs-white"
          : isRacing(model)
            ? "border-yellow-600 bg-yellow-300"
            : isModern(year)
              ? "border-green-600 bg-green-200"
              : "border-gray-600 bg-gray-300",
      )}
    >
      <div className="mr-1.5 flex flex-col">
        <label className="mb-2 text-xs">{vin ? vin : ""}</label>
        <label className="text-lg font-bold">{make ? make : ""}</label>
        <label className="mb-2 text-sm italic">{model ? model : ""}</label>
        <label>
          {year ? year : ""}, {color ? color : ""}
        </label>
        <label>
          {isExotic(year)
            ? "- exotic... [ Sierra 117 ]"
            : isRacing(model)
              ? "- track only..."
              : ""}
        </label>
      </div>
      <proto-ikon-loader
        class="ikon ml-auto self-center"
        name={make}
        label={make ? make.toLowerCase() : ""}
      />
    </div>
  );
};

export { VehicleCard };
export default VehicleCard;
