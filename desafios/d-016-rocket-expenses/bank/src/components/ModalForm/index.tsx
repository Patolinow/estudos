import React, { useRef, useImperativeHandle, forwardRef, useContext } from "react";
import iconClose from "../../assets/icons/iconClose.svg";
import iconIncome from "../../assets/icons/iconIncome.svg";
import iconOutcome from "../../assets/icons/iconOutcome.svg";
import { Input } from "../Input";
import { RadioLabel } from "../RadioLabel";
import ITableInputProps from "../../interfaces/ITableInputProps";
import { TableContext } from "../../contexts/TableContext";

interface ModalFormProps {
  openCloseHandler(): void;
}

interface RefsOptions extends ITableInputProps {
  [key: string]: number | string
}

export const ModalForm = ({ openCloseHandler }: ModalFormProps): JSX.Element => {
  
  const newInputHandler = useContext(TableContext).newTableInputHandler
  const allRefs= {
    title: useRef() as React.MutableRefObject<HTMLInputElement>,
    value: useRef() as React.MutableRefObject<HTMLInputElement>,
    subject: useRef() as React.MutableRefObject<HTMLInputElement>,
    income: useRef() as React.MutableRefObject<HTMLInputElement>,
    outcome: useRef() as React.MutableRefObject<HTMLInputElement>
  } ;

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();

    const refs: RefsOptions = {
      id: Math.random(),
      title: allRefs.title.current.value,
      subject: allRefs.subject.current.value,
      value: Number(allRefs.value.current.value) * 100,
      type: allRefs.income.current.checked ? "income" : "outcome",  
      date: new Date().toLocaleDateString(),
    };

    for (const refKey in refs) {
      const actualValue = refs[refKey]
      const isString = typeof(actualValue) === "string"
      const isNumber = typeof(actualValue) === "number"

      if (isString && actualValue.trim() === "") {
        return;
      }

      if (isNumber && actualValue <= 0) {
        return;
      }
    }

    newInputHandler(refs)
    openCloseHandler()
  };

  return (
    <form
      className=" text-white w-11/12 max-w-lg h-[33rem] fixed bg-dark-gray z-30 bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 py-10 px-12 rounded-md max-md:bottom-0 max-md:translate-y-0 max-md:rounded-t-3xl max-md:w-full"
      onSubmit={submitHandler}
    >
      <img
        src={iconClose}
        alt="Fechar"
        className="cursor-pointer hover:brightness-125 duration-200 fixed top-6 right-6"
        onClick={openCloseHandler}
      />
      <fieldset className="flex flex-col group-[rounded-md]:">
        <legend className="text-2xl font-bold mb-8">Nova transação</legend>

        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Descrição"
          autoComplete="off"
          ref={allRefs.title}
        />

        <Input
          type="number"
          name="value"
          id="value"
          placeholder="Valor"
          className="my-4"
          ref={allRefs.value}
        />

        <Input
          type="text"
          name="category"
          id="category"
          placeholder="Categoria"
          autoComplete="off"
          ref={allRefs.subject}
        />

        <fieldset className="mt-6 mb-10 flex gap-4">
          <Input
            type="radio"
            name="type"
            id="income"
            className="peer/income"
            value="income"
            ref={allRefs.income}
            defaultChecked
            hidden
          />
          <RadioLabel htmlFor="income" className="peer-checked/income:bg-light-green/20">
            <img src={iconIncome} />
            <p>Receita</p>
          </RadioLabel>

          <input
            type="radio"
            name="type"
            id="outcome"
            value="outcome"
            className="peer/outcome"
            ref={allRefs.outcome}
            hidden
          />
          <RadioLabel htmlFor="outcome" className="peer-checked/outcome:bg-red/20">
            <img src={iconOutcome} />
            <p>Despesa</p>
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
