const useLocalStorage = () => {
  function get(localStorageKey: string) {
    const stringifiedValue = localStorage.getItem(localStorageKey);

    if (stringifiedValue) {
      return JSON.parse(stringifiedValue);
    }

    throw new Error(`Error: ${localStorageKey} isn't a valid localStorage Key`);
  }

  function set(localStorageKey: string, localStorageData: unknown) {
    const stringifiedLocalStorageData = JSON.stringify(localStorageData);
    localStorage.setItem(localStorageKey, stringifiedLocalStorageData);
  }

  function has(localStorageKey:string) {
    const localStorageData = localStorage.getItem(localStorageKey)
    if (localStorageData) {
      return true
    }
    return false
  }

  return {get, set, has}
};

export default useLocalStorage