import ITableInputProps from "../interfaces/ITableInputProps";

const set = (localStorageKey: string, newTableInputs: ITableInputProps) => {
  const stringifiedTableInputs = JSON.stringify(newTableInputs);
  localStorage.setItem(localStorageKey, stringifiedTableInputs);
};

const get = (localStorageKey: string): ITableInputProps[] => {
  const storedItems = localStorage.getItem(localStorageKey);

  if (storedItems !== null) {
    const parsedStoredItems = JSON.parse(storedItems);
    return parsedStoredItems;
  }

  throw new Error(`key error: "${localStorageKey}" isn't a valid localStorage key`);
};

const has = (localStorageKey: string): boolean => {
  const areValidItems = localStorage.getItem(localStorageKey);

  if (areValidItems) {
    return true;
  }

  return false;
};

const localStorageManager = {
  set,
  get,
  has,
};

export { localStorageManager };
