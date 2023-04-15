import { formattedCurrency } from "../../utils/formatCurrency";
import ITableInputProps from "../../components/interfaces/ITableInputProps"

const TableInput = ({ type, title, subject, date, value }: ITableInputProps) => {
  const formattedValue = formattedCurrency(value);
  const formattedDate = new Date(date).toLocaleDateString('pt-BR');

  return (
    <div className="grid grid-cols-4 gap-8 w-full px-8 py-5 bg-medium-gray rounded-md mb-2 text-light-gray text-justify">
      <div>{title}</div>
      <div className={type === "outcome" ? "text-red" : "text-light-green"}>
        {type === "outcome" && "- "}
        {formattedValue}
      </div>
      <div className="text-left">{subject}</div>
      <div className="text-right">{formattedDate}</div>
    </div>
  );
};

export default TableInput