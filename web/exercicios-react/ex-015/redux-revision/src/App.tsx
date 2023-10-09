import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import { useAppDispatch, useAppSelector } from "./hooks/use-redux"
import Notification from "./components/UI/Notification"
import { useEffect } from "react"
import { fetchCartData, sendCartData } from "./store/actions/CartActions"

let isInitial = true

function App() {
  const cart = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      dispatch(fetchCartData())
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])

  return (
    <Layout>
      <Notification
        title="Something went wrong"
        message={cart.error.message}
        isOpen={cart.error.isOpen}
      />
      {cart.isOpen && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
