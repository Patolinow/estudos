import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import Modal from "../Modal";

export const Header = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)

  const openCloseHandler = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true)
  }

  return (
    <>
    {isVisible && <Modal openCloseHandler={openCloseHandler}/>}
    <header className="flex justify-between bg-black h-[212px]">
      <div className="flex justify-between w-11/12 max-w-5xl mx-auto pt-10 h-fit">

        <div className="flex flex-1 items-center gap-4">
          <img src={reactLogo} alt="logo" />

          <h3 className=" text-3xl">DT</h3>
        </div>

        <button className="bg-light-green p-4 rounded-md font-bold hover:bg-dark-green duration-200" onClick={openCloseHandler}>
          Nova transação
        </button>
        
      </div>
    </header>
    </>
  );
};
