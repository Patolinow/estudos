"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const graphSearchAlgorithm_1 = require("./graphSearchAlgorithm");
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
(0, globals_1.describe)("checking adjacency list", () => {
    (0, globals_1.test)('Return the correct adjacency list', () => {
        const result = (0, graphSearchAlgorithm_1.defineNodes)(graphSearchAlgorithm_1.airports, graphSearchAlgorithm_1.routes);
        (0, globals_1.expect)(result).toEqual(expectedOutput);
    });
    (0, globals_1.test)('Verify if all airports are in the result', () => {
        const result = (0, graphSearchAlgorithm_1.defineNodes)(graphSearchAlgorithm_1.airports, graphSearchAlgorithm_1.routes);
        graphSearchAlgorithm_1.airports.forEach((airport) => {
            (0, globals_1.expect)(result.has(airport)).toBe(true);
        });
    });
    (0, globals_1.test)('Verify if each airport has the right route', () => {
        const result = (0, graphSearchAlgorithm_1.defineNodes)(graphSearchAlgorithm_1.airports, graphSearchAlgorithm_1.routes);
        graphSearchAlgorithm_1.routes.forEach((route) => {
            const [source, destination] = route;
            (0, globals_1.expect)(result.get(source)).toContain(destination);
            (0, globals_1.expect)(result.get(destination)).toContain(source);
        });
    });
});
(0, globals_1.describe)("Testing in a BFS algorithm", () => {
    (0, globals_1.test)("Route from PHX to BKK", () => {
        (0, globals_1.expect)((0, graphSearchAlgorithm_1.breadthFirstSearch)("PHX", "BKK", graphSearchAlgorithm_1.adjacencyList)).toBe(true);
    });
    (0, globals_1.test)("Route from PHX to LAP", () => {
        (0, globals_1.expect)((0, graphSearchAlgorithm_1.breadthFirstSearch)("PHX", "LAP", graphSearchAlgorithm_1.adjacencyList)).toBe(false);
    });
    (0, globals_1.test)("Route from PHX to LIM", () => {
        (0, globals_1.expect)((0, graphSearchAlgorithm_1.breadthFirstSearch)("PHX", "LIM", graphSearchAlgorithm_1.adjacencyList)).toBe(true);
    });
    (0, globals_1.test)("Route from BKK to LIM", () => {
        (0, globals_1.expect)((0, graphSearchAlgorithm_1.breadthFirstSearch)("BKK", "LIM", graphSearchAlgorithm_1.adjacencyList)).toBe(true);
    });
    (0, globals_1.test)("Route from EZE to LAP", () => {
        (0, globals_1.expect)((0, graphSearchAlgorithm_1.breadthFirstSearch)("EZE", "LAP", graphSearchAlgorithm_1.adjacencyList)).toBe(false);
    });
});
//# sourceMappingURL=graphSearchAlgorithm.test.js.map