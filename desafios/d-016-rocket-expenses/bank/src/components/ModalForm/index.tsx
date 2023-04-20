import iconClose from "../../assets/icons/iconClose.svg";
import iconIncome from "../../assets/icons/iconIncome.svg";
import iconOutcome from "../../assets/icons/iconOutcome.svg";
import { Input } from "../Input";
import { RadioLabel } from "../RadioLabel";

interface ModalFormProps {
  openCloseHandler():void
}

export const ModalForm = ({openCloseHandler}:ModalFormProps): JSX.Element => {
  const submitHandler:React.FormEventHandler = (e) => {
    e.preventDefault()
    console.log("sent")
  };
  return (
    <form
      className=" text-white w-11/12 max-w-lg h-[33rem] fixed bg-dark-gray z-30 bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 py-10 px-12 shadow-2xl rounded-md max-md:bottom-0 max-md:translate-y-0 max-md:rounded-t-3xl max-md:w-full"
      onSubmit={submitHandler}
    >
      {" "}
      <img
        src={iconClose}
        alt="Fechar"
        className="cursor-pointer hover:brightness-125 duration-200 fixed top-6 right-6"
        onClick={openCloseHandler}
      />
      <fieldset className="flex flex-col group-[rounded-md]:">
        <legend className="text-2xl font-bold mb-8">Nova transação</legend>

        <Input type="text" name="description" id="description" placeholder="Descrição" />

        <Input type="number" name="value" id="value" placeholder="Valor" className="my-4" />

        <Input type="text" name="category" id="category" placeholder="Categoria" />

        <fieldset className="mt-6 mb-10 flex gap-4">
          <Input
            type="radio"
            name="type"
            id="income"
            className="peer/income"
            defaultChecked
            hidden
            
          />
          <RadioLabel
            htmlFor="income"
            className="peer-checked/income:bg-light-green/20"
          >
            <img src={iconIncome} />
            <p>Income</p>
          </RadioLabel>

          <input
            type="radio"
            name="type"
            id="outcome"
            hidden
            className="peer/outcome"
            
          />
          <RadioLabel
            htmlFor="outcome"
            className="peer-checked/outcome:bg-red/20"
          >
            <img src={iconOutcome} />
            <p>Outcome</p>
          </RadioLabel>
        </fieldset>

        <button
          type="submit"
          className="p-4 bg-light-green rounded-md hover:bg-dark-green duration-300"
        >
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
};
