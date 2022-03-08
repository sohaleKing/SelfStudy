// Reducer

import { useReducer, useState } from "react";

const [state, setState] = useState("taco");

setState("smokey");

return <div>{state}</div>;

const initialState = {
  productId: "",
  cartIds: [],
  isShoppingCartShown: false,
};

function reducer(state, action) {
  // let actionType
  // if (typeof action === "string") {
  //     actionType = action
  // } else if (typeof action === "object") {
  //     actionType = action.type
  // } else {
  //     throw "you done bad"
  // }
  // switch (actionType) {

  switch (action.type) {
    case "add-to-cart":
      // Which item did they add to the cart??

      // This is wrong because we are mutating the array of the previous state
      // const newState = {...state}
      // newState.cartIds.push(action.payload)

      // If we didn't want to use immer (because you are crazy)
      // const newState = {
      //     ...state,
      //     cartIds: [...state.cartIds, action.payload],
      // }

      // NOT ALLOWED HERE
      // fetch("/user-added-to-cart").then() // This breaks purity (because it is a side-effect)
      // In the adv. react course, we will look into how to do this using the useEffect hook

      // If you are a sane person, you will use immer
      const newState = produce(state, (draft) => {
        draft.cartIds.push(action.payload);

        // NOT ALLOWED HERE
        // draft.randomNumber = Math.random() // This breaks purity (because it's not deterministic)
      });

      return newState;
    // case "product-quantity-adjustment":
    // is it add or subtract?
    // if it's subtract, are they already at 1 product --> remove product
    // if it's subtract, are they g.t. 1 prodcut --> subtract 1 product

    case "checkout":
      return initialState;
    default:
      throw `you provided an invalid action ${action}`;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);

return (
  <div>
    {state.productId}
    <button
      onClick={() => {
        dispatch({
          type: "checkout",
        });
      }}
    >
      Checkout
    </button>
    <ProductThing>
      <button
        onClick={() => {
          dispatch({
            type: "add-to-cart",
            payload: productId,
          });
        }}
      >
        Add to Cart
      </button>
    </ProductThing>
  </div>
);
