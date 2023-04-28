import { createContext } from "react";
import ITableInputProps from "../../interfaces/ITableInputProps";
import TableInputValues from "../../interfaces/TableInputValues";

interface TableContext {
  tableInputList: ITableInputProps[];
  totalValues: TableInputValues;
  totalItems: number;
  searchHandler: (searchTerm: string) => void;
  newTableInputHandler: (newTableInput: ITableInputProps) => void;
  deleteHandler: (id:number) => void;
}

export const TableContext = createContext<TableContext>({
  tableInputList: [],
  totalValues: { incomes: 0, outcomes: 0, balance: 0, totalItems: 0 },
  totalItems: 0,
  searchHandler: (searchTerm: string) => {},
  newTableInputHandler: (newTableInput: ITableInputProps) => {},
  deleteHandler: (id: number) => {}
});
