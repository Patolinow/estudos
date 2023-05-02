import { useContext } from "react";
import { Card } from "../Card";
import { TableContext } from "../../contexts/TableContext";

export const TotalOutcomesAndIncomes = () => {
  const totalValues = useContext(TableContext).totalValues
  return (
    <div className="flex justify-center -mt-16">
      <div className="grid grid-cols-3 gap-8 max-w-5xl w-full">
        <Card type="income" value={totalValues.incomes} className="max-md:ml-[5vw]"/>
        <Card type="outcome" value={totalValues.outcomes} />
        <Card type="total" value={totalValues.balance} />
      </div>
    </div>
  );
};
