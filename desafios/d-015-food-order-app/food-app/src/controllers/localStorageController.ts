export default class LocalStorageController {
  public static get<T>(identifier: string): T {
    const stringifiedValue = localStorage.getItem(identifier)

    if (stringifiedValue) {
      return JSON.parse(stringifiedValue)
    }
    
    throw new Error(`The storage ${identifier} wasn't found`);
  }

  public static set<T>(identifier: string, data: T) {
    const stringifiedData = JSON.stringify(data)
    localStorage.setItem(identifier, stringifiedData)
  }
}