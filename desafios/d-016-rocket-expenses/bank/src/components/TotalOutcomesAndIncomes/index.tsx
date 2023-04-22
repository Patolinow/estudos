import { Card } from "../Card";

export const TotalOutcomesAndIncomes = () => {
  const total = {
    incomes: 450000 + 50000,
    outcomes: 5000 + 7000,
    balance: 450000 + 50000 - (5000 + 7000),
  };
  return (
    <div className="flex justify-center -mt-16">
      <div className="grid grid-cols-3 gap-8 max-w-5xl w-full">
        <Card type="income" value={total.incomes} />
        <Card type="outcome" value={total.outcomes} />
        <Card type="total" value={total.balance} />
      </div>
    </div>
  );
};
