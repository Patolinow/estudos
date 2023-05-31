import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ICartItemProps from "../../interfaces/ICartItemProps";

export interface ICartInitalState {
  isOpen: boolean;
  items: ICartItemProps[];
  totalQuantity: number;
}
const initialState: ICartInitalState = {isOpen: false, items: [], totalQuantity: 0}
const cartSlice = createSlice({name:"cart", initialState, reducers:{
  open: (state) => {
    state.isOpen = true
  },
  close: (state) => {
    state.isOpen = false
  },
  addToCart: (state, action: PayloadAction<ICartItemProps>) => {
    const itemIndex = state.items.findIndex(item => item.id === action.payload.id)

    if (itemIndex !== -1) {
      const actualItem = state.items[itemIndex]

      actualItem.quantity += 1
      actualItem.total = actualItem.quantity * actualItem.price
    }
    else {
      state.items.unshift(action.payload)
    }
  },
  changeQuantity:(state, action: PayloadAction<{id: string, type: "increase" | "decrease"}>) => {
    const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
    const actualItem = state.items[itemIndex]

    action.payload.type === "increase" ? actualItem.quantity += 1 : actualItem.quantity -= 1
    
    actualItem.total = actualItem.quantity * actualItem.price
  }
}})

export default cartSlice.reducer