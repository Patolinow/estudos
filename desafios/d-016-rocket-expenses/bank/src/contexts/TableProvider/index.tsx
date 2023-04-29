import { TableContext } from "../TableContext";
import { localStorageManager } from "../../utils/localStorageManager";
import { PropsWithChildren, useEffect, useReducer, useState } from "react";
import ITableInputProps from "../../interfaces/ITableInputProps";
import TableInputValues from "../../interfaces/TableInputValues";

export const TableContextProvider = (props: PropsWithChildren): JSX.Element => {
  const tableKey = "tableKey";
  const hasLocalStorage = localStorageManager.has(tableKey);
  if (!hasLocalStorage) {
    localStorageManager.set(tableKey, []);
  }

  const [storageTableInputs, setStorageTableInputs] = useState(localStorageManager.get(tableKey));
  const [displayTableInputs, setDisplayTableInputs] = useState(storageTableInputs);
  const [tableInputValues, setTableInputValues] = useState<TableInputValues>({
    totalItems: 0,
    balance: 0,
    incomes: 0,
    outcomes: 0,
  });

  useEffect(() => {
    const currentTableInputs = [...storageTableInputs];
    const currentTableInputsIncomes = currentTableInputs.filter((currentTableInput) => {
      return currentTableInput.type === "income";
    });
    const currentTableInputsOutcomes = currentTableInputs.filter((currentTableInput) => {
      return currentTableInput.type === "outcome";
    });
    const finalIncome = currentTableInputsIncomes.reduce((total, actual) => total + actual.value, 0)
    const finalOutcome = currentTableInputsOutcomes.reduce((total, actual) => total + actual.value, 0)

    setTableInputValues(() => {
      const newTableInputValues: TableInputValues = {
        totalItems: currentTableInputs.length,
        incomes: finalIncome,
        outcomes: finalOutcome,
        balance: finalIncome - finalOutcome
      };
      return newTableInputValues;
    });
  }, [storageTableInputs]);

  const newTableInputHandler = (newTableInput: ITableInputProps) => {
    const allTableInputs = [newTableInput, ...storageTableInputs];

    setStorageTableInputs(() => allTableInputs);
    setDisplayTableInputs(() => allTableInputs);

    localStorageManager.set(tableKey, allTableInputs);
  };

  const searchHandler = (searchTerm: string) => {
    const currentTableInputs = [...storageTableInputs];

    setDisplayTableInputs(() => {
      const currentFilteredTableInputs = currentTableInputs.filter((currentTableInput) => {
        return currentTableInput.title.toLowerCase().indexOf(searchTerm) !== -1;
      });

      return currentFilteredTableInputs;
    });
  };

  const deleteHandler = (id: number) => {
    const currentTableInputs = [...storageTableInputs];
    const filteredCurrentTableInputs = currentTableInputs.filter((currentTableInput) => {
      return currentTableInput.id !== id;
    });

    setStorageTableInputs(() => filteredCurrentTableInputs);
    setDisplayTableInputs(() => filteredCurrentTableInputs);
    localStorageManager.set(tableKey, filteredCurrentTableInputs);
  };

  return (
    <TableContext.Provider
      value={{
        newTableInputHandler,
        searchHandler,
        tableInputList: displayTableInputs,
        totalValues: tableInputValues,
        totalItems: tableInputValues.totalItems,
        deleteHandler,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
