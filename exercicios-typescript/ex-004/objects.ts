const dog = {
  name: "Elton",
  surname: "Jorge",
  age: 12,
};

function printName(dog: { name: string; surname: string; age: number }): void {
  console.log(`${dog.name} ${dog.surname} with ${dog.age} years`);
}

printName(dog);

let coordinate: { x: number; y: number } = { x: 25, y: 21 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

type Coordinates = {
  x: number;
  y: number;
  z?: number;
};

const thisPoint: Coordinates = {
  x: 1,
  y: 5,
  z: 23,
};

console.log(randomCoordinate());

function doublePoint(point: Coordinates): Coordinates {
  return { x: point.x * 2, y: point.y * 2 };
}

type SpotifyPattern = {
  title: string;
  artist: string;
  numStream: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: SpotifyPattern): number {
  return song.numStream * 0.0033;
}

const song: SpotifyPattern = {
  title: "Amazing Melody",
  artist: "Yung Li",
  numStream: 3212441,
  credits: {
    producer: "Castro brothers",
    writer: "Alejandro",
  },
};

function printSong(song: SpotifyPattern): void {
  console.log(song.title + " - " + song.artist);
}

console.log(calculatePayout(song));
printSong(song);

type User = {
  readonly id: number;
  username: string;
};

const newUser: User = {
  id: 23242,
  username: "cakiguru",
};

type Circle = {
  radius: number
}

type Colorful = {
  color:string
}

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
  radius: 5,
  color: "yellow"
}

type Cat = {
  numLives: number
}

type Dog = {
  breed: string
}

type CatDog = Cat & Dog & {
  age: number,
  live?:boolean
}

const christy: CatDog = {
  numLives: 9,
  breed: "Husky",
  age: 5,
  live:true
}