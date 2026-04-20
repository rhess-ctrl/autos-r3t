import React from "react"
import { tw } from "../utils"

const DealerCard = ({ value }) => {
  const { dealerId, name, vehicles } = value || {}
  const count = vehicles ? vehicles.length : 0

  return (
    <div
      className={tw(
        "flex flex-wrap content-center",
        "mb-4 rounded-lg bg-blue-200 p-4",
        "border border-solid border-blue-400",
      )}
    >
      <label className="text-xl font-bold">
        {name ? `${name} ` : ""}
        <sup>{count ? count : ""}</sup>
      </label>
      <label className="ml-auto self-center text-right text-sm">
        {dealerId ? dealerId : ""}
      </label>
    </div>
  )
}

export { DealerCard }
export default DealerCard
