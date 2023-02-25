function triplify(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

const thisNum = triplify(2);
const thiString = triplify("hi");

console.log(thisNum, thiString);

function equalityNarrowing(a: string | number, b: string | boolean) {
  if (a == b) {
    a;
    b;
  }
}

interface Movies {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movies | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

const amadeus = {
  title: "Amadeus",
  duration: 170,
};

console.log(getRuntime(amadeus));

function printFullDate(date: string | Date) {
  if (!(date instanceof Date)) {
    date = new Date();
  }

  console.log(date.getFullYear);
}

class Users {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printsName(entity: Users | Company) {
  if (entity instanceof Company) {
    entity.name;
  }
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return "Meow";
  }
  return "Bark";
}
interface Rooster {
  name: string;
  weight: number;
  age: number;
  __type: "Rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  __type: "Cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  __type: "Pig";
}

export type FarmAnimal = Pig | Rooster | Cow;

export default function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.__type) {
    case "Pig":
      return "Oink!";
    case "Cow":
      return "Moo!";
    case "Rooster":
      return "Co Co";
    default:
      const sNGH: never = animal;
  }
}

export const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 5,
  age: 24,
  __type: "Rooster",
};

console.log(getFarmAnimalSound(stevie));
