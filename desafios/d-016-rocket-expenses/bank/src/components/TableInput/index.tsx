import { formattedCurrency } from "../../utils/formatCurrency";
import ITableInputProps from "../../interfaces/ITableInputProps";
import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import iconArrow from "../../assets/icons/iconArrow.svg";
import iconDate from "../../assets/icons/iconDate.svg";

const TableInput = ({ id, type, title, subject, date, value }: ITableInputProps) => {
  const formattedValue = formattedCurrency(value);
  const deleteHandler = useContext(TableContext).deleteHandler;
  const clickHandler = () => {
    deleteHandler(id);
  };

  return (
    <tr
      onClick={clickHandler}
      className="group/table grid grid-cols-5  w-full px-8 py-5 bg-dark-medium-gray rounded-md mb-2 text-light-gray text-justify hover:text-light-gray/50 hover:bg-red/10 hover:cursor-pointer duration-200 max-md:px-4 max-md:py-2 max-md:grid-cols-2 max-md:grid-rows-3"
    >
      <td className="col-span-2 max-md:self-end">{title}</td>
      
      <td
        className={`${
          type === "outcome"
            ? "group-hover/table:text-red/50 text-red"
            : "group-hover/table:text-light-green/50 text-light-green"
        } max-md:col-span-2 max-md:text-lg max-md:font-medium`}
      >
        {type === "outcome" && "- "}
        {formattedValue}
      </td>

      <td className="text-left max-md:text-gray max-md:text-sm max-md:self-center max-md:flex max-md: gap-1">
        <img src={iconArrow} className="md:hidden" />
        <p>{subject}</p>
      </td>

      <td className="text-right max-md:text-gray max-md:text-sm max-md:self-center max-md:flex max-md:gap-1 max-md:justify-end">
        <img src={iconDate} className="md:hidden" />
        <p>{date}</p>
      </td>
    </tr>
  );
};

export default TableInput;
