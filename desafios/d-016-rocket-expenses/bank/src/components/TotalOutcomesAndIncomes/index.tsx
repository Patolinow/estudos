import { useContext } from "react";
import { Card } from "../Card";
import { TableContext } from "../../contexts/TableContext";

export const TotalOutcomesAndIncomes = () => {
  const totalValues = useContext(TableContext).totalValues;
  return (
    <div className="-mt-16 max-md:overflow-scroll">
      <div className="flex gap-8 max-md:min-w-[calc(52rem+10vw)] w-11/12 max-w-5xl mx-auto">
        <Card type="income" value={totalValues.incomes} className="max-md:ml-[5vw]"/>
        <Card type="outcome" value={totalValues.outcomes} />
        <Card type="total" value={totalValues.balance} />
      </div>
    </div>
  );
};
