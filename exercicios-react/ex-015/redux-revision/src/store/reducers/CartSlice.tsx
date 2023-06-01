import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ICartItemProps from "../../interfaces/ICartItemProps";

export interface ICartInitalState {
  isOpen: boolean;
  items: ICartItemProps[];
  totalQuantity: number;
}
const initialState: ICartInitalState = {isOpen: false, items: [], totalQuantity: 0}
const cartSlice = createSlice({name:"cart", initialState, reducers:{
  openClose: (state) => {
    state.isOpen = !state.isOpen
  },
  addToCart: (state, action: PayloadAction<ICartItemProps>) => {
    const itemIndex = state.items.findIndex(item => item.id === action.payload.id)

    if (itemIndex !== -1) {
      const actualItem = state.items[itemIndex]

      actualItem.quantity += action.payload.quantity
      actualItem.total = actualItem.quantity * actualItem.price
    }
    else {
      state.items.unshift(action.payload)
    }

    state.totalQuantity = state.items.reduce((total, item) => total + item.quantity,0)
  },
  changeQuantity:(state, action: PayloadAction<{id: string, type: "increase" | "decrease"}>) => {
    const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
    const actualItem = state.items[itemIndex]

    switch (action.payload.type) {
      case "increase":
      actualItem.quantity += 1
      break

      case "decrease":
      actualItem.quantity -= 1
      state.items = state.items.filter(item => item.quantity > 0)
      break

      default:
        throw new Error(`${action.payload.type} isn't a valid type`);
        
    }
    
    actualItem.total = actualItem.quantity * actualItem.price
    state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0)
  }
}})
export const cartActions = cartSlice.actions
export default cartSlice.reducer