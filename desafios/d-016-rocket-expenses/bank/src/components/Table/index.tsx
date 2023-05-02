import TableInput from "../TableInput";
import { TableContext } from "../../contexts/TableContext";
import { useContext } from "react";

function Table() {
  const data = useContext(TableContext).tableInputList

  return (
    <table className="mt-8 max-md:mt-2 w-11/12 max-w-5xl mx-auto">
      <tbody>
        {data.map((info, index) => (
          <TableInput
            key={index}
            id={info.id}
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
