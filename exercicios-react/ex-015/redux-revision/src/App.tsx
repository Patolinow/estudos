import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import { useAppSelector } from "./hooks/use-redux"
import Notification from "./components/UI/Notification"
import { useEffect, useState } from "react"

function App() {
  const isOpen = useAppSelector((state) => state.cart.isOpen)
  const cart = useAppSelector((state) => state.cart)
  const [errorMessage, setErrorMessage] = useState<undefined | string>()
  const [errorIsOpen, setErrorIsOpen] = useState(false)
  let isInitial = true

  const toggleHandler = () => {
    setErrorIsOpen((prevErrorIsOpen) =>  !prevErrorIsOpen)
  }
  

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return;
    } 


    fetch("https://max-http-requests-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    }).then((response) => {
      console.log("sending request...")
      if (!response.ok) {
        throw new Error("We coudn't complete request to cart");
      }
    }).catch((error: Error) => {
      setErrorMessage(error.message)
      toggleHandler()
    })
  }, [cart])

  

  return (
        <Layout>
          <Notification title="Something went wrong" message={errorMessage} isOpen={errorIsOpen} toggleHandler={toggleHandler} />
          {isOpen && <Cart />}
          <Products />
        </Layout>
  )
}

export default App
