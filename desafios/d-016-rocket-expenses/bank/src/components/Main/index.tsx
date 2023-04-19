import ITableInputProps from "../../interfaces/ITableInputProps";
import Table from "../Table";
import iconSearch from "../../assets/icons/iconSearch.svg";
import { TotalOutcomesAndIncomes } from "../TotalOutcomesAndIncomes";

interface MainProps {
  data: ITableInputProps[];
}

export const Main = ({ data }: MainProps) => {
  return (
    <main>
      <TotalOutcomesAndIncomes/>

      <div className="max-w-5xl w-full mx-auto flex justify-between mt-16 gap-8">
        <input
          type="text"
          className="flex-1 p-4 bg-black rounded-md "
          placeholder="Busque uma transação"
        />
        <button className="px-8 py-4 text-light-green rounded-md border-light-green border-2 border-solid text-base font-bold flex items-center hover:bg-black">
          <img src={iconSearch} alt="" className="mr-4" />
          Buscar
        </button>
      </div>

      <Table data={data} />
    </main>
  );
};
