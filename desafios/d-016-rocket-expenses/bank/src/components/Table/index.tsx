import TableInput from "../TableInput"
import ITableInputProps from "../../interfaces/ITableInputProps"

interface TableProps {
  data: ITableInputProps[]
}

function Table({data}: TableProps){
  return (<table className="w-full mt-8">
          {data.map((info, index) => (
            <TableInput key={index}
              type={info.type}
              title={info.title}
              value={info.value}
              date={info.date}
              subject={info.subject}
            />
          ))}
        </table>)
}

export default Table