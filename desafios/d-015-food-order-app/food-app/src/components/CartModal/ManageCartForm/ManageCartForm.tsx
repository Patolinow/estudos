import useFetch from "../../../hooks/use-fetch"
import CartForm from "../CartForm/CartForm"
import loadingSvg from "../../../assets/loading.svg"

interface ManageCartFormProps {
  onProceedReturn: () => void;
}

const ManageCartForm = ({onProceedReturn}:ManageCartFormProps) => {
  const url = "https://max-http-requests-default-rtdb.firebaseio.com/users.json"
  const cartPost = useFetch({url, requestMethod: "POST", requestMessage: {teste: "test"}})

  const loading = cartPost.isLoading ? <img src={loadingSvg} alt="Loading..." /> : undefined
  const error = cartPost.errorMessage ? <p>{cartPost.errorMessage}</p> : undefined
  const sucess = cartPost.isSucessRequest ? <p>Sucess</p> : undefined
  const cartForm = <CartForm onProceedReturn={onProceedReturn}/>

  return (
    <>
    { loading || error || sucess || cartForm}
    </>
  )
}