import Dog from "./dog";

export default class ShelterDog extends Dog {
  constructor(
    name: string,
    breed: string,
    age: number,
    public hasShelter: boolean
  ) {
    super(name, breed, age);
  }
}
