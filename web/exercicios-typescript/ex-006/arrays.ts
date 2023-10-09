const activeIds: number[] = [1, 2, 5];
const activeUsers: Array<string> = ["robert", "alex"];
activeIds.push(2);

type Point = {
  x: number;
  y: number;
  z?: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 12 });
coords.push({ x: 69, y: 43, z: 23 });
console.log(coords);

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "X", "X"],
  ["O", "O", "O"],
];

const demo: number[][][] = [[[1]]]