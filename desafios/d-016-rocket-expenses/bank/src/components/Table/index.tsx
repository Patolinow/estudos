import TableInput from "../TableInput";
import { TableContext } from "../../contexts/TableContext";
import { useContext } from "react";

function Table() {
  const data = useContext(TableContext).tableInputList

  return (
    <table className="w-full mt-8">
      <tbody>
        {data.map((info, index) => (
          <TableInput
            key={index}
            type={info.type}
            title={info.title}
            value={info.value}
            date={info.date}
            subject={info.subject}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
