import React from "react"
import { actions, useStore, tw } from "../utils"

const ToolBar = () => {
  const loading = useStore((s) => s.loading)
  const pick = useStore((s) => s.pick)
  const data = useStore((s) => s.data)

  const list = data ? data.list : []
  const max = list.length - 1

  if (loading) return <></>

  return (
    <div className="flex">
      <div
        className="refresh hover:text-clrs-red md:w-auto"
        onClick={() => actions.refresh()}
      >
        <proto-ikon-loader name="refresh" size={24} />
      </div>
      <div
        className={tw(
          "ml-auto inline-flex justify-end",
          "border border-solid border-gray-600",
          "rounded-md",
        )}
      >
        {list.map((dealer, indx) => (
          <button
            key={dealer.dealerId}
            className={tw(
              "h-8 w-8 border-none font-bold",
              indx === 0
                ? "rounded-bl-md rounded-br-none rounded-tl-md rounded-tr-none"
                : indx === max
                  ? "rounded-bl-none rounded-br-md rounded-tl-none rounded-tr-md"
                  : "rounded-none",
              pick === indx
                ? "bg-clrs-red text-white"
                : "bg-clrs-yellow text-clrs-navy",
            )}
            onClick={() => actions.updatePick(indx)}
            title={`${dealer.name} (${dealer.vehicles.length})`}
          >
            {indx + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export { ToolBar }
export default ToolBar
