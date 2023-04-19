import ITableInputProps from "../../interfaces/ITableInputProps";
import Table from "../Table";
import iconSearch from "../../assets/icons/iconSearch.svg";
import { TotalOutcomesAndIncomes } from "../TotalOutcomesAndIncomes";

interface MainProps {
  data: ITableInputProps[];
}

export const Main = ({ data }: MainProps) => {
  return (
    <main className="w-11/12 max-w-5xl mx-auto">
      <TotalOutcomesAndIncomes/>

      <div className="flex justify-between mt-16 gap-8">
        <input
          type="text"
          className="flex-1 p-4 bg-black rounded-md "
          placeholder="Busque uma transação"
        />
        <button className="px-8 py-4 text-light-green rounded-md border-light-green border-2 border-solid text-base font-bold flex items-center hover:bg-black gap-4">
          <img src={iconSearch} alt="" />
          Buscar
        </button>
      </div>

      <Table data={data} />
    </main>
  );
};
