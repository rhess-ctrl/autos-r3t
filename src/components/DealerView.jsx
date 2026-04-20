import React from "react"
import { DealerCard } from "./DealerCard"
import { VehicleList } from "./VehicleList"

const DealerView = ({ dealer }) => {
  const vehicles = dealer ? dealer.vehicles : []

  if (!dealer) return <></>

  return (
    <div className="flex flex-col">
      <DealerCard value={dealer} />
      <VehicleList list={vehicles} />
    </div>
  )
}

export { DealerView }
export default DealerView
