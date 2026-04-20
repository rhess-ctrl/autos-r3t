import React, { useEffect } from "react"
import {
  DealerView,
  Eswat2Io,
  Footer,
  Header,
  Spinner,
  ToolBar,
} from "./components"
import { actions, useStore, tw } from "./utils"

const App = () => {
  const loading = useStore((s) => s.loading)
  const dealer = useStore((s) => s.dealer)

  useEffect(() => {
    actions.initApp()
  }, [])

  return (
    <main className="ds1-main">
      <Eswat2Io />
      <Header label="Auto Dealers" />
      <ToolBar />
      {loading ? (
        <Spinner />
      ) : (
        <hr
          className={tw(
            "mb-4 ml-0 mr-0 mt-4",
            "border-solid border-gray-300",
            "border-b-0 border-l-0 border-r-0",
          )}
        />
      )}
      <DealerView dealer={dealer} />
      <Footer />
    </main>
  )
}

export default App
