import { expect, test, describe } from "@jest/globals";
import { breadthFirstSearch, adjacencyNodes } from "./graphSearchAlgorithm";

describe.skip("Testing every single possible route", () => {
  test("Route from PHX to BKK", () => {
    expect(breadthFirstSearch("PHX", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from PHX to OKC", () => {
    expect(breadthFirstSearch("PHX", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from PHX to JFK", () => {
    expect(breadthFirstSearch("PHX", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from PHX to LAX", () => {
    expect(breadthFirstSearch("PHX", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from PHX to MEX", () => {
    expect(breadthFirstSearch("PHX", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from PHX to EZE", () => {
    expect(breadthFirstSearch("PHX", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from PHX to HEL", () => {
    expect(breadthFirstSearch("PHX", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from PHX to LOS", () => {
    expect(breadthFirstSearch("PHX", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from PHX to LAP", () => {
    expect(breadthFirstSearch("PHX", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from PHX to LIM", () => {
    expect(breadthFirstSearch("PHX", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to PHX", () => {
    expect(breadthFirstSearch("BKK", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to OKC", () => {
    expect(breadthFirstSearch("BKK", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to JFK", () => {
    expect(breadthFirstSearch("BKK", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to LAX", () => {
    expect(breadthFirstSearch("BKK", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to MEX", () => {
    expect(breadthFirstSearch("BKK", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to EZE", () => {
    expect(breadthFirstSearch("BKK", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to HEL", () => {
    expect(breadthFirstSearch("BKK", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to LOS", () => {
    expect(breadthFirstSearch("BKK", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from BKK to LAP", () => {
    expect(breadthFirstSearch("BKK", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from BKK to LIM", () => {
    expect(breadthFirstSearch("BKK", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to PHX", () => {
    expect(breadthFirstSearch("OKC", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to BKK", () => {
    expect(breadthFirstSearch("OKC", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to JFK", () => {
    expect(breadthFirstSearch("OKC", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to LAX", () => {
    expect(breadthFirstSearch("OKC", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to MEX", () => {
    expect(breadthFirstSearch("OKC", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to EZE", () => {
    expect(breadthFirstSearch("OKC", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to HEL", () => {
    expect(breadthFirstSearch("OKC", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to LOS", () => {
    expect(breadthFirstSearch("OKC", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from OKC to LAP", () => {
    expect(breadthFirstSearch("OKC", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from OKC to LIM", () => {
    expect(breadthFirstSearch("OKC", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to PHX", () => {
    expect(breadthFirstSearch("JFK", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to BKK", () => {
    expect(breadthFirstSearch("JFK", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to OKC", () => {
    expect(breadthFirstSearch("JFK", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to LAX", () => {
    expect(breadthFirstSearch("JFK", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to MEX", () => {
    expect(breadthFirstSearch("JFK", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to EZE", () => {
    expect(breadthFirstSearch("JFK", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to HEL", () => {
    expect(breadthFirstSearch("JFK", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to LOS", () => {
    expect(breadthFirstSearch("JFK", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from JFK to LAP", () => {
    expect(breadthFirstSearch("JFK", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from JFK to LIM", () => {
    expect(breadthFirstSearch("JFK", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to PHX", () => {
    expect(breadthFirstSearch("LAX", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to BKK", () => {
    expect(breadthFirstSearch("LAX", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to OKC", () => {
    expect(breadthFirstSearch("LAX", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to JFK", () => {
    expect(breadthFirstSearch("LAX", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to MEX", () => {
    expect(breadthFirstSearch("LAX", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to EZE", () => {
    expect(breadthFirstSearch("LAX", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to HEL", () => {
    expect(breadthFirstSearch("LAX", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to LOS", () => {
    expect(breadthFirstSearch("LAX", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from LAX to LAP", () => {
    expect(breadthFirstSearch("LAX", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from LAX to LIM", () => {
    expect(breadthFirstSearch("LAX", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to PHX", () => {
    expect(breadthFirstSearch("MEX", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to BKK", () => {
    expect(breadthFirstSearch("MEX", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to OKC", () => {
    expect(breadthFirstSearch("MEX", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to JFK", () => {
    expect(breadthFirstSearch("MEX", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to LAX", () => {
    expect(breadthFirstSearch("MEX", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to EZE", () => {
    expect(breadthFirstSearch("MEX", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to HEL", () => {
    expect(breadthFirstSearch("MEX", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to LOS", () => {
    expect(breadthFirstSearch("MEX", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from MEX to LAP", () => {
    expect(breadthFirstSearch("MEX", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from MEX to LIM", () => {
    expect(breadthFirstSearch("MEX", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to PHX", () => {
    expect(breadthFirstSearch("EZE", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to BKK", () => {
    expect(breadthFirstSearch("EZE", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to OKC", () => {
    expect(breadthFirstSearch("EZE", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to JFK", () => {
    expect(breadthFirstSearch("EZE", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to LAX", () => {
    expect(breadthFirstSearch("EZE", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to MEX", () => {
    expect(breadthFirstSearch("EZE", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to HEL", () => {
    expect(breadthFirstSearch("EZE", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to LOS", () => {
    expect(breadthFirstSearch("EZE", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from EZE to LAP", () => {
    expect(breadthFirstSearch("EZE", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from EZE to LIM", () => {
    expect(breadthFirstSearch("EZE", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to PHX", () => {
    expect(breadthFirstSearch("HEL", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to BKK", () => {
    expect(breadthFirstSearch("HEL", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to OKC", () => {
    expect(breadthFirstSearch("HEL", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to JFK", () => {
    expect(breadthFirstSearch("HEL", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to LAX", () => {
    expect(breadthFirstSearch("HEL", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to MEX", () => {
    expect(breadthFirstSearch("HEL", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to EZE", () => {
    expect(breadthFirstSearch("HEL", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to LOS", () => {
    expect(breadthFirstSearch("HEL", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from HEL to LAP", () => {
    expect(breadthFirstSearch("HEL", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from HEL to LIM", () => {
    expect(breadthFirstSearch("HEL", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to PHX", () => {
    expect(breadthFirstSearch("LOS", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to BKK", () => {
    expect(breadthFirstSearch("LOS", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to OKC", () => {
    expect(breadthFirstSearch("LOS", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to JFK", () => {
    expect(breadthFirstSearch("LOS", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to LAX", () => {
    expect(breadthFirstSearch("LOS", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to MEX", () => {
    expect(breadthFirstSearch("LOS", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to EZE", () => {
    expect(breadthFirstSearch("LOS", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to HEL", () => {
    expect(breadthFirstSearch("LOS", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from LOS to LAP", () => {
    expect(breadthFirstSearch("LOS", "LAP", adjacencyNodes)).toBe(false);
  });

  test("Route from LOS to LIM", () => {
    expect(breadthFirstSearch("LOS", "LIM", adjacencyNodes)).toBe(true);
  });

  test("Route from LAP to PHX", () => {
    expect(breadthFirstSearch("LAP", "PHX", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to BKK", () => {
    expect(breadthFirstSearch("LAP", "BKK", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to OKC", () => {
    expect(breadthFirstSearch("LAP", "OKC", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to JFK", () => {
    expect(breadthFirstSearch("LAP", "JFK", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to LAX", () => {
    expect(breadthFirstSearch("LAP", "LAX", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to MEX", () => {
    expect(breadthFirstSearch("LAP", "MEX", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to EZE", () => {
    expect(breadthFirstSearch("LAP", "EZE", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to HEL", () => {
    expect(breadthFirstSearch("LAP", "HEL", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to LOS", () => {
    expect(breadthFirstSearch("LAP", "LOS", adjacencyNodes)).toBe(false);
  });

  test("Route from LAP to LIM", () => {
    expect(breadthFirstSearch("LAP", "LIM", adjacencyNodes)).toBe(false);
  });

  test("Route from LIM to PHX", () => {
    expect(breadthFirstSearch("LIM", "PHX", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to BKK", () => {
    expect(breadthFirstSearch("LIM", "BKK", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to OKC", () => {
    expect(breadthFirstSearch("LIM", "OKC", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to JFK", () => {
    expect(breadthFirstSearch("LIM", "JFK", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to LAX", () => {
    expect(breadthFirstSearch("LIM", "LAX", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to MEX", () => {
    expect(breadthFirstSearch("LIM", "MEX", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to EZE", () => {
    expect(breadthFirstSearch("LIM", "EZE", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to HEL", () => {
    expect(breadthFirstSearch("LIM", "HEL", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to LOS", () => {
    expect(breadthFirstSearch("LIM", "LOS", adjacencyNodes)).toBe(true);
  });

  test("Route from LIM to LAP", () => {
    expect(breadthFirstSearch("LIM", "LAP", adjacencyNodes)).toBe(false);
  });
});

describe("checking adjacency list", () => {
  test.todo("check");
});
