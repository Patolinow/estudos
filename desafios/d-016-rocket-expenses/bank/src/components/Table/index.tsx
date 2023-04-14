import TableInput from "../TableInput"
import ITableInputProps from "../interfaces/ITableInputProps"   

interface TableProps {
  data: ITableInputProps[]
}
function Table({data}: TableProps){
  return (<div className="max-w-5xl w-full mx-auto mt-8">
          {data.map((info, index) => (
            <TableInput
              type={info.type}
              title={info.title}
              value={info.value}
              date={info.date}
              subject={info.subject}
            />
          ))}
        </div>)
}

export default Table