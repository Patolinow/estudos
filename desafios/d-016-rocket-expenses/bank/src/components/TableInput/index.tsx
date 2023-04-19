import { formattedCurrency } from "../../utils/formatCurrency";
import ITableInputProps from "../../interfaces/ITableInputProps";

const TableInput = ({ type, title, subject, date, value }: ITableInputProps) => {
  const formattedValue = formattedCurrency(value);
  const formattedDate = new Date(date).toLocaleDateString('pt-BR');

  return (
    <tr className="grid grid-cols-5 gap-8 w-full px-8 py-5 bg-medium-gray rounded-md mb-2 text-light-gray text-justify">
      <td className="col-span-2">{title}</td>
      <td className={type === "outcome" ? "text-red" : "text-light-green"}>
        {type === "outcome" && "- "}
        {formattedValue}
      </td>
      <td className="text-left">{subject}</td>
      <td className="text-right">{formattedDate}</td>
    </tr>
  );
};

export default TableInput