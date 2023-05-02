import iconSearch from "../../assets/icons/iconSearch.svg";
import { useContext, useEffect, useRef } from "react";
import { TableContext } from "../../contexts/TableContext";

export const SearchForm = (): JSX.Element => {
  const searchHandler = useContext(TableContext).searchHandler;
  const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {},[])

  const submitHandler:React.FormEventHandler = (e) => {
    e.preventDefault()

    const searchTerm = searchRef.current.value.trim().toLowerCase()

    searchHandler(searchTerm)
  }

  return (
    <form className="flex justify-between gap-8 max-md:gap-2 md:mt-16 w-11/12 max-w-5xl mx-auto" onSubmit={submitHandler}>
      <input
        type="text"
        className="flex-1 p-4 bg-black rounded-md focus-within:border-none focus-within:outline-none placeholder:text-gray"
        placeholder="Busque uma transação"
        ref={searchRef}
      />

      <button
        className="max-md:px-4 px-8 py-4 text-light-green rounded-md border-light-green border-2 border-solid text-base font-bold flex items-center hover:bg-dark-green/10 duration-150 gap-4"
        type="submit"
      >
        <img src={iconSearch} alt="Buscar" />
        <p className="max-md:hidden">Buscar</p>
      </button>
    </form>
  );
};
