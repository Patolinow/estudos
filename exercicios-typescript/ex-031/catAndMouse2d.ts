import { expect } from "@jest/globals";

type CatMouseReturn = "Caught!" | "Escaped!" | "boring without two animals";

function catMouse(map: string, moves: number): CatMouseReturn {
  const mapArray = map.split("\n")
  const mapMatrix = mapArray.map(mapRow =>  mapRow.split(""))

  console.log(mapMatrix)
  return "boring without two animals";
}

describe("basic test to verify main states", () => {
  test("expect to caught", () => {
    const map = 
`..C......
.........
....m....`;
    expect(catMouse(map, 5)).toBe("Caught!");
  });

  test("expect to escape", () => {
    const map = 
`.C.......
.........
......m..`;
    expect(catMouse(map, 5)).toBe("Escaped!");
  });

  test("if don't has 2 animals", () => {
    const map = 
`..C......
.........
.........`;
    expect(catMouse(map, 5)).toBe("boring without two animals");
  });
});
