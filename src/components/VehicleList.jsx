import React from "react"
import { VehicleCard } from "./VehicleCard"

const VehicleList = ({ list }) => {
  const count = list ? list.length : 0

  if (count === 0) return <></>

  return (
    <div className="flex flex-col">
      {list.map((vehicle) => (
        <VehicleCard key={vehicle.vin} value={vehicle} />
      ))}
    </div>
  )
}

export { VehicleList }
export default VehicleList
