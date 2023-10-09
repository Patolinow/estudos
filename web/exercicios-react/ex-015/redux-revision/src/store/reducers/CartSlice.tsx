import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import ICartItemProps from "../../interfaces/ICartItemProps"
import ICartInitalState from "../../interfaces/ICartInitialState"

interface IChangeQuantityPayload {
  id: string
  type: "increase" | "decrease"
}

const initialState: ICartInitalState = {
  isOpen: false,
  items: [],
  totalQuantity: 0,
  error: {
    isOpen: false,
    message: "",
  },
  changed: false,
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openClose: (state) => {
      state.isOpen = !state.isOpen
    },
    replaceCart: (state, action: PayloadAction<ICartInitalState>) => {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    },
    addToCart: (state, action: PayloadAction<ICartItemProps>) => {
      state.changed = true

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (itemIndex !== -1) {
        const actualItem = state.items[itemIndex]

        actualItem.quantity += action.payload.quantity
        actualItem.total = actualItem.quantity * actualItem.price
      } else {
        state.items.unshift(action.payload)
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0,
      )
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      state.changed = true

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      )
      const actualItem = state.items[itemIndex]

      switch (action.payload.type) {
        case "increase":
          actualItem.quantity += 1
          break

        case "decrease":
          actualItem.quantity -= 1
          state.items = state.items.filter((item) => item.quantity > 0)
          break

        default:
          throw new Error(`${action.payload.type} isn't a valid type`)
      }

      actualItem.total = actualItem.quantity * actualItem.price
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0,
      )
    },
    toggleError: (state) => {
      state.error.isOpen = !state.error.isOpen
    },
    sendErrorMessage: (state, action: PayloadAction<string>) => {
      state.error.message = action.payload
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
