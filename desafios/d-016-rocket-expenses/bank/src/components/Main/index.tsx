import Table from "../Table";
import { TotalOutcomesAndIncomes } from "../TotalOutcomesAndIncomes";
import { SearchForm } from "../SearchForm";

export const Main = () => {
  return (
    <main className="w-11/12 max-w-5xl mx-auto">
      <TotalOutcomesAndIncomes/>

      <SearchForm />

      <Table />
    </main>
  );
};
