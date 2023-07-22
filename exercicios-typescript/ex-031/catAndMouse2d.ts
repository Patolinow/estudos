import { expect } from "@jest/globals";

type CatMouseReturn = "Caught!" | "Escaped!" | "boring without two animals";

function catMouse(map: string, moves: number): CatMouseReturn {
  console.log(map);
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

  test("", () => {
    const map = 
`..C......
.........
.........`;
    expect(catMouse(map, 5)).toBe("boring without two animals");
  });
});
