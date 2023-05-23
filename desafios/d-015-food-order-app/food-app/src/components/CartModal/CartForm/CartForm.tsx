import styles from "./CartForm.module.css";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import useInputChecker from "../../../hooks/use-inputChecker";
import FormDataProps from "../../../interfaces/FormData";
interface CartFormProps {
  onProceedReturn: () => void;
  onOrder: (formData: FormDataProps) => void;
}

const CartForm = ({ onProceedReturn, onOrder }: CartFormProps) => {
  const [name, setName] = useState("");
  const nameCodition = name.length > 2 && name.length <= 50;
  const nameChecked = useInputChecker({
    inputName: "Name",
    inputCondition: nameCodition,
    setInput: setName,
    styles,
  });

  const [email, setEmail] = useState("");
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const emailCondition = email.length <= 100 && email.match(emailRegex) ? true : false;
  const emailChecked = useInputChecker({
    inputName: "Email",
    inputCondition: emailCondition,
    setInput: setEmail,
    styles,
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumberRegex = /^[1-9]{2} (?:[2-8]|9[1-9])[0-9]{3} [0-9]{4}$/;
  const phoneNumberCondition = phoneNumber.match(phoneNumberRegex) ? true : false;
  const phoneNumberChecked = useInputChecker({
    inputName: "Phone",
    inputCondition: phoneNumberCondition,
    setInput: setPhoneNumber,
    styles,
  });

  const [address, setAddress] = useState("");
  const addressCondition = address.length > 5 && address.length <= 100;
  const addressChecked = useInputChecker({
    inputName: "Address",
    inputCondition: addressCondition,
    setInput: setAddress,
    styles,
  });

  const isValidSubmit = nameCodition && emailCondition && phoneNumberCondition && addressCondition;
  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();

    if (!isValidSubmit) {
      return;
    }

    const formData: FormDataProps = {
      name,
      email,
      phoneNumber,
      address,
    };

    onOrder(formData)
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={`${styles["form-group"]} ${nameChecked.hasInvalidClass}`}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Michael Jackson"
          type="text"
          name="name"
          id="name"
          onChange={nameChecked.changeHandler}
          onBlur={nameChecked.blurHandler}
          value={name}
        />
        {nameChecked.inputError}
      </div>

      <div className={`${styles["form-group"]} ${emailChecked.hasInvalidClass}`}>
        <label htmlFor="email">Email</label>
        <input
          placeholder="example@gmail.com"
          type="email"
          name="email"
          id="email"
          onChange={emailChecked.changeHandler}
          onBlur={emailChecked.blurHandler}
          value={email}
        />
        {emailChecked.inputError}
      </div>

      <div className={`${styles["form-group"]} ${phoneNumberChecked.hasInvalidClass}`}>
        <label htmlFor="phone">Phone number</label>
        <input
          placeholder="71 98765 4321"
          type="tel"
          name="phone"
          id="phone"
          onChange={phoneNumberChecked.changeHandler}
          onBlur={phoneNumberChecked.blurHandler}
          value={phoneNumber}
        />
        {phoneNumberChecked.inputError}
      </div>

      <div className={`${styles["form-group"]} ${addressChecked.hasInvalidClass}`}>
        <label htmlFor="address">Full address</label>
        <input
          placeholder="1600 Pennsylvania Ave NW, Washington"
          type="text"
          name="address"
          id="address"
          onChange={addressChecked.changeHandler}
          onBlur={addressChecked.blurHandler}
          value={address}
        />
        {addressChecked.inputError}
      </div>

      <div className={styles.actions}>
        <Button className={styles.return} onClick={onProceedReturn}>
          Return
        </Button>
        <Button disabled={!isValidSubmit} type="submit">
          Order
        </Button>
      </div>
    </form>
  );
};

export default CartForm;
