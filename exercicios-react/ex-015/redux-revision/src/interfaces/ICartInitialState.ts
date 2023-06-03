import ICartItemProps from "./ICartItemProps"

export default interface ICartInitalState {
  isOpen: boolean
  items: ICartItemProps[]
  totalQuantity: number
  error: {
    isOpen: boolean
    message: string
  }
  changed: boolean
}
