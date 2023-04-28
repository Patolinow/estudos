import { formattedCurrency } from "../../utils/formatCurrency";
import ITableInputProps from "../../interfaces/ITableInputProps";
import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";

const TableInput = ({ id, type, title, subject, date, value }: ITableInputProps) => {
  const formattedValue = formattedCurrency(value);
  const deleteHandler = useContext(TableContext).deleteHandler
  const clickHandler = () => {
    deleteHandler(id)
  }

  return (
    <tr onClick={clickHandler} className="group/table grid grid-cols-5 gap-8 w-full px-8 py-5 bg-dark-medium-gray rounded-md mb-2 text-light-gray text-justify hover:text-light-gray/50 hover:bg-red/10 hover:cursor-pointer duration-200">
      <td className="col-span-2">{title}</td>
      <td className={type === "outcome" ? "group-hover/table:text-red/50 text-red" : "group-hover/table:text-light-green/50 text-light-green"}>
        {type === "outcome" && "- "}
        {formattedValue}
      </td>
      <td className="text-left">{subject}</td>
      <td className="text-right">{date}</td>
    </tr>
  );
};

export default TableInput