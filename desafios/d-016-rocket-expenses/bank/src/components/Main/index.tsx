import Table from "../Table";
import { TotalOutcomesAndIncomes } from "../TotalOutcomesAndIncomes";
import { SearchForm } from "../SearchForm";
import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";

export const Main = () => {
  const totalItems = useContext(TableContext).totalItems;

  return (
    <main>
      <TotalOutcomesAndIncomes />

      <div className="flex justify-between mt-4 mb-2 md:hidden w-11/12 max-w-5xl mx-auto">
        <p className="text-light-gray text-lg">Transações</p>
        <p className="text-gray">{totalItems} itens</p>
      </div>

      <SearchForm />

      <Table />
    </main>
  );
};
