import { useContext, useEffect } from "react";
import Lottie, {LottieOptions} from "lottie-react";
import CartContext from "../../contexts/CartContext";
import useFetch from "../../../hooks/use-fetch";
import CartForm from "../CartForm/CartForm";
import loadingSvg from "../../../assets/loading.svg";
import sucessAnimation from "../../../assets/success.json";
import FormDataProps from "../../../interfaces/FormData";
import styles from "./ManageCartForm.module.css"

interface ManageCartFormProps {
  onProceedReturn: () => void;
  onClose: () => void;
}

const ManageCartForm = ({ onProceedReturn, onClose }: ManageCartFormProps) => {
  const { meals, onReset } = useContext(CartContext);
  const { sendRequest, errorMessage, isLoading, isSuccessRequest } = useFetch();
  const lottieAnimation = <Lottie animationData={sucessAnimation}/>

  const orderHandler = (formData: FormDataProps) => {
    const url = "https://max-http-requests-default-rtdb.firebaseio.com/users.json";

    sendRequest({ url, requestMethod: "POST", requestMessage: { userOrder: {formData, meals} } });

  };

  useEffect(() => {
    if (isSuccessRequest) {
      onReset()
      setTimeout(() => {
      onClose();
    }, 1200);
    }
    
  }, [isSuccessRequest])


  const loading = isLoading ? <div className={styles.wrapper}><img src={loadingSvg} alt="Loading..." /></div> : undefined;
  const error = errorMessage ? <div className={styles.wrapper}><p>{errorMessage}</p></div> : undefined;
  const sucess = isSuccessRequest ? <>{lottieAnimation}</> : undefined;
  const cartForm = <CartForm onProceedReturn={onProceedReturn} onOrder={orderHandler} />;

  return (
    <>  
      {loading || error || sucess || cartForm}
    </>
  );
};

export default ManageCartForm;
