import { create } from "zustand"
import { persist, createJSONStorage, devtools } from "zustand/middleware"
import FetchQL from "fetchql"

// --------------------------------------------------------[ store ]

const useStore = create(
  devtools(
    persist(
      () => ({
        loading: false,
        error: undefined,
        data: undefined,
        pick: 0,
        dealer: undefined,
      }),
      {
        name: "autos-r3t::app-data",
        storage: createJSONStorage(() => localStorage),
      },
    ),
    { name: "autos-r3t" },
  ),
)

// --------------------------------------------------------[ processing ]

const processData = (next) => {
  if (next) {
    const pick = useStore.getState().pick

    useStore.setState(
      {
        data: next,
        loading: false,
        dealer: next.list[pick ?? 0],
      },
      false,
      "processData",
    )
  } else {
    useStore.setState(
      { data: undefined, loading: false },
      false,
      "processData/clear",
    )
  }
}

const processPick = (next) => {
  const data = useStore.getState().data

  if (data && next !== undefined) {
    useStore.setState(
      { pick: next, dealer: data.list[next] },
      false,
      "processPick",
    )
  } else {
    useStore.setState(
      { pick: 0, dealer: undefined },
      false,
      "processPick/clear",
    )
  }
}

// --------------------------------------------------------[ graphQL ]

const Client = new FetchQL({
  url: "https://gt-forza.vercel.app/graphql",
})

const GET_UUID = `
  query Uuid($count: Int!) {
    uuid(count: $count)
  }
`

const GET_DEALERS = `
  query Solution($id: String!) {
    solution(id: $id) {
      id
      data {
        dealers {
          dealerId
          name
          vehicles {
            vin
            year
            make
            model
            color
          }
        }
      }
    }
  }
`

// --------------------------------------------------------[ actions ]

const initApp = () => {
  const { data, pick } = useStore.getState()

  if (data) {
    processData(data)
    if (pick) {
      processPick(pick)
    }
  } else {
    refresh()
  }
}

const refresh = () => {
  useStore.setState(
    {
      loading: true,
      error: undefined,
      pick: 0,
      data: undefined,
      dealer: undefined,
    },
    false,
    "refresh",
  )

  const count = 1

  Client.query({
    operationName: "Uuid",
    query: GET_UUID,
    variables: { count },
  }).then((response) => {
    const id = response.data.uuid[0]

    Client.query({
      operationName: "Solution",
      query: GET_DEALERS,
      variables: { id },
    }).then((response) => {
      const list = JSON.parse(
        JSON.stringify(response.data.solution.data.dealers),
      )
      const solution = { id, list }

      processData(solution)
    })
  })
}

const updatePick = (pick) => {
  processPick(pick)
}

const actions = {
  initApp,
  refresh,
  updatePick,
}

export { useStore, actions }
export default useStore
