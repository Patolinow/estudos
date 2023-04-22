import { createContext } from "react";
import ITableInputProps from "../../interfaces/ITableInputProps";

interface TableContext {
  tableInputList: ITableInputProps[];
  totalIncome: number;
  totalOutcome: number;
  totalItems: number;
  searchHandler: (searchTerm: string) => void;
  newTableInputHandler: (newTableInput: ITableInputProps) => void;
}

export const tableContext = createContext<TableContext>({
  tableInputList: [],
  totalIncome: 0,
  totalOutcome: 0,
  totalItems: 0,
  searchHandler: (searchTerm: string) => {},
  newTableInputHandler: (newTableInput: ITableInputProps) => {},
});
