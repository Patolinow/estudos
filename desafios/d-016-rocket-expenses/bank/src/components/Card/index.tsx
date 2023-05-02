import iconIncome from "../../assets/icons/iconIncome.svg";
import iconOutcome from "../../assets/icons/iconOutcome.svg";
import iconTotal from "../../assets/icons/iconDolar.svg";
import { formattedCurrency } from "../../utils/formatCurrency";

interface ICardProps {
  type: "income" | "outcome" | "total";
  value: number;
  className?: string;
}

export const Card = ({ type, value, className }: ICardProps) => {
  const cardType = {
    income: {
      label: "Receita",
      icon: iconIncome,
    },
    outcome: {
      label: "Despesa",
      icon: iconOutcome,
    },
    total: {
      label: "Total",
      icon: iconTotal,
    },
  };

  const formattedValue = formattedCurrency(value);

  return (
    <div className={`${className} p-6 rounded-lg ${type === "total" ? "bg-dark-green" : "bg-medium-gray"} w-full max-md:w-64`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-light-gray">{cardType[type].label}</h3>
        <img src={cardType[type].icon} />
      </div>
      <h2 className="text-white font-bold text-2xl">{formattedValue}</h2>
    </div>
  );
};
