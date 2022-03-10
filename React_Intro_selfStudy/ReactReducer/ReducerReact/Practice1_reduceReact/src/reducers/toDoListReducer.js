export const reducer = (state, action) => {
 switch (action.type) {
  //   case "add-todo": {
  //    // Prepare the new state

  //    const newState = produce(state, (draft) => {
  //     draft.push(action.payload)
  //     return draft // add this extra line that you would not normally have to do if you were using immer for real
  //    })

  //    return newState
  //   }

  case "completed":
   // Prepare the new state

   return //newState

  //   case "swap": {
  //    const newState = produce(state, (draft) => {
  //     const { indexA, indexB } = action.payload

  //     const a = draft[indexA]
  //     const b = draft[indexB]

  //     draft[indexA] = b
  //     draft[indexB] = a

  //     return draft // add this extra line that you would not normally have to do if you were using immer for real
  //    })

  //    return newState
  //   }

  //   case "delete-todo": // your choice whether by id or by array index (in the payload)
  //    return //newState

  //   // case "delete-everything": //optional -for this one you could combine it with delete action and add a flag in the payload to delete everything
  //   // case "update-todo": optional -(don't focus too hard on this one, or don't do it at all is fine)

  //   case "duplicate": //try to do this one, but I think it's hard so it's (kindof) optional
  //    return //newState

  // Can you try to come up with another action (extra / optional)
  // You can also try doing all of this in react using the useReducer hook

  default:
   throw `you provided an invalid action ${action}`
 }
}

// const [state, dispatch] = useReducer(reducer, toDoListsData)

// const newState1 = reducer(initialState, {
//  type: "add-todo",
//  payload: {
//   id: "skdngksjnqmwofiwog",
//   title: "Grocery shopping",
//   description: "get 3 tomatos",
//   date: new Date(),
//   completed: false,
//  },
// })

// const newState2 = reducer(newState1, {
//  type: "swap",
//  payload: {
//   indexA: 0,
//   indexB: 2,
//  },
// })
// console.log(newState2)
