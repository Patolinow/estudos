const nums: Array<number> = [];
const colored: Array<boolean> = [];

function identity<Type>(item: Type): Type {
  return item;
}

identity(nums);
identity(colored);

function pickRandom<T>(item: T[]): T {
  return item[Math.floor(Math.random() * item.length)];
}

console.log(pickRandom([1, 2, 5, 8]));

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const merged = merge({ name: "colt" }, { pets: ["blue", "red", 5] });
console.log(merged);

type Lengthly = {
  length: number;
};

function printDoubleLength<T extends Lengthly>(thing: T): number {
  return thing.length * 2;
}

console.log(printDoubleLength("yes"));

function makeEmptyList<T = number>(): T[] {
  return [];
}

const makeStrings = makeEmptyList();

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el:T){
    this.queue.push(el)
  }
}

const songs = new Playlist<Song>()
const videos = new Playlist<Video>()
