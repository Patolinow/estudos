import { expect, test, describe } from "@jest/globals";
import { breadthFirstSearch, adjacencyList, routes, airports, defineNodes} from "./graphSearchAlgorithm";
const expectedOutput = new Map([
  ["PHX", ["LAX", "JFK"]],
  ["BKK", ["MEX", "LIM"]],
  ["OKC", ["JFK"]],
  ["JFK", ["PHX", "OKC", "HEL", "LOS"]],
  ["LAX", ["PHX", "MEX"]],
  ["MEX", ["LAX", "BKK", "LIM", "EZE"]],
  ["EZE", ["MEX"]],
  ["HEL", ["JFK"]],
  ["LOS", ["JFK"]],
  ["LAP", []],
  ["LIM", ["MEX", "BKK"]],
]);

describe("checking adjacency list", () => {

  test('Return the correct adjacency list', () => {
    const result = defineNodes(airports, routes);
    expect(result).toEqual(expectedOutput);
  });

  test('Verify if all airports are in the result', () => {
    const result = defineNodes(airports, routes);
    airports.forEach((airport) => {
      expect(result.has(airport)).toBe(true);
    });
  });

  test('Verify if each airport has the right route', () => {
    const result = defineNodes(airports, routes);
    routes.forEach((route) => {
      const [source, destination] = route;
      expect(result.get(source)).toContain(destination);
      expect(result.get(destination)).toContain(source);
    });
  });
});

describe("Testing in a BFS algorithm", () => {
  test("Route from PHX to BKK", () => {
    expect(breadthFirstSearch("PHX", "BKK", adjacencyList)).toBe(true);
  });

  test("Route from PHX to LAP", () => {
    expect(breadthFirstSearch("PHX", "LAP", adjacencyList)).toBe(false);
  });

  test("Route from PHX to LIM", () => {
    expect(breadthFirstSearch("PHX", "LIM", adjacencyList)).toBe(true);
  });

  test("Route from BKK to LIM", () => {
    expect(breadthFirstSearch("BKK", "LIM", adjacencyList)).toBe(true);
  });

  test("Route from EZE to LAP", () => {
    expect(breadthFirstSearch("EZE", "LAP", adjacencyList)).toBe(false);
  });
});