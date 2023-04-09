import iconIncome from "../../assets/icons/iconIncome.svg";
import iconOutcome from "../../assets/icons/iconOutcome.svg";
import iconTotal from "../../assets/icons/iconDolar.svg";
import { formattedCurrency } from "../../utils/formatCurrency";

interface ICardProps {
  type: "income" | "outcome" | "total";
  value: number;
}

export const Card = ({ type, value }: ICardProps) => {
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
    <div className={`p-6 rounded-lg ${type === "total" ? "bg-dark-green" : "bg-medium-gray"}`}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-light-gray">{cardType[type].label}</h3>
        <img src={cardType[type].icon} alt="" />
      </div>
      <h2 className="text-white font-bold text-2xl">{formattedValue}</h2>
    </div>
  );
};
