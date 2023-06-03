import { AppDispatch } from ".."
import { cartActions } from "../reducers/CartSlice"
import ICartInitalState from "../../interfaces/ICartInitialState"
const url = "https://max-http-requests-default-rtdb.firebaseio.com/cart.json"

export const fetchCartData = () => {
  return async (dispatch: AppDispatch) => {
    ;(async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("We couldn't fetch cart data")
        }

        const data: ICartInitalState = await response.json()

        if (data.items) dispatch(cartActions.replaceCart(data))
      } catch (error) {
        const err = error as Error
        dispatch(cartActions.sendErrorMessage(err.message))
        dispatch(cartActions.toggleError())
      }
    })()
  }
}

export const sendCartData = (cart: ICartInitalState) => {
  return async (dispatch: AppDispatch) => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(cart),
    })
      .then((response) => {
        console.log("sending request...")
        if (!response.ok) {
          throw new Error("We coudn't complete request to cart data")
        }
      })
      .catch((error: Error) => {
        dispatch(cartActions.sendErrorMessage(error.message))
        dispatch(cartActions.toggleError())
      })
  }
}
