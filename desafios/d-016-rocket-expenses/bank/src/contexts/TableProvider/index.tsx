import { TableContext } from "../TableContext";
import { localStorageManager } from "../../utils/localStorageManager";
import { PropsWithChildren, useReducer, useState } from "react";
import ITableInputProps from "../../interfaces/ITableInputProps";
import TableInputValues from "../../interfaces/TableInputValues";

interface Action {
  type: "income" | "outcome";
  newTableInput: ITableInputProps;
}

const reducer = (state: TableInputValues, action: Action) => {
  switch (action.type) {
    case "income":
      state.incomes += action.newTableInput.value;
      break;

    case "outcome":
      state.outcomes += action.newTableInput.value;
      break;

    default:
      throw new Error(`Type ${action.type} doesn't exist`);
  }

  state.balance = state.incomes - state.outcomes;
  state.totalItems++;

  return state;
};

export const TableContextProvider = (props: PropsWithChildren): JSX.Element => {
  const tableKey = "tableKey";
  const hasLocalStorage = localStorageManager.has(tableKey);
  if (!hasLocalStorage) {
    localStorageManager.set(tableKey, []);
  }

  const [storageTableInputs, setStorageTableInputs] = useState(localStorageManager.get(tableKey));
  const tableInputValuesInitialState: TableInputValues = {
    totalItems: 0,
    incomes: 0,
    outcomes: 0,
    balance: 0,
  };
  const [displayTableInputs, setDisplayTableInputs] = useState(storageTableInputs);

  const initialStateFunc = (initialValues: TableInputValues) => {
    const currentTableInputs = storageTableInputs;

    const incomes = currentTableInputs.filter((tableInputValue) => {
      return tableInputValue.type == "income";
    });
    initialValues.incomes = incomes.reduce((totalIncomes, actualIncome) => {
      return totalIncomes + actualIncome.value;
    }, 0);

    const outcomes = currentTableInputs.filter((tableInputValue) => {
      return tableInputValue.type == "outcome";
    });
    initialValues.outcomes = outcomes.reduce((totalOutcomes, actualOutcome) => {
      return totalOutcomes + actualOutcome.value;
    }, 0);

    initialValues.balance = initialValues.incomes - initialValues.outcomes;
    initialValues.totalItems = storageTableInputs.length;

    return initialValues;
  };

  const [tableInputValues, tableInputValuesDispatch] = useReducer(
    reducer,
    tableInputValuesInitialState,
    initialStateFunc
  );

  const newTableInputHandler = (newTableInput: ITableInputProps) => {
    const currentTableInputs = [...storageTableInputs];

    setStorageTableInputs((prevStorageTableInputs) => [...prevStorageTableInputs, newTableInput]);
    setDisplayTableInputs((prevDisplayTableInputs) => [...prevDisplayTableInputs, newTableInput])
    localStorageManager.set(tableKey, [...currentTableInputs, newTableInput]);
    tableInputValuesDispatch({ type: newTableInput.type, newTableInput: newTableInput });
  };

  const searchHandler = (searchTerm: string) => {
    const currentTableInputs = [...storageTableInputs];

    setDisplayTableInputs(() => {
      const currentFilteredTableInputs = currentTableInputs.filter((currentTableInput) => {
        return currentTableInput.title.toLowerCase().indexOf(searchTerm) !== -1
      });

      return currentFilteredTableInputs;
    });
  };

  return (
    <TableContext.Provider
      value={{
        newTableInputHandler,
        searchHandler,
        tableInputList: displayTableInputs,
        totalValues: tableInputValues,
        totalItems: tableInputValues.totalItems,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
