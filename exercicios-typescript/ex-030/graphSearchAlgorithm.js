"use strict";
// Algoritmos de pesquisa por gráfico possuem 2 formas de serem representados
//
// 1 - Como uma adjacency matrix, exemplo:
//      A  B  C   D            (1 = nodes conectados, 0 = nodes não conectados)
//
// A   [0, 1, 1, 0],
// B   [1, 0, 0, 0],
// C   [1, 0, 0, 1],
// D   [0, 0, 1, 0]
Object.defineProperty(exports, "__esModule", { value: true });
exports.depthFirstSearch = exports.breadthFirstSearch = exports.defineNodes = exports.adjacencyList = exports.routes = exports.airports = void 0;
exports.airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
exports.routes = [
    ["PHX", "LAX"],
    ["PHX", "JFK"],
    ["JFK", "OKC"],
    ["JFK", "HEL"],
    ["JFK", "LOS"],
    ["MEX", "LAX"],
    ["MEX", "BKK"],
    ["MEX", "LIM"],
    ["MEX", "EZE"],
    ["LIM", "BKK"],
];
exports.adjacencyList = defineNodes(exports.airports, exports.routes);
// create a adjacency list based on the list of airports and routes
function defineNodes(airports, routes) {
    const adjacencyList = new Map();
    for (const airport of airports) {
        adjacencyList.set(airport, []);
    }
    routes.forEach((route) => {
        adjacencyList.get(route[0])?.push(route[1]);
        adjacencyList.get(route[1])?.push(route[0]);
    });
    return adjacencyList;
}
exports.defineNodes = defineNodes;
// executes a BFS
function breadthFirstSearch(from, to, adjacencyList) {
    const queue = [from];
    const visitedList = new Set();
    while (queue.length !== 0) {
        const actualNode = queue[0];
        const actualAdjacencyList = adjacencyList?.get(actualNode);
        queue.shift();
        console.log(`looking to the node ${actualNode}`);
        if (actualNode === to) {
            console.log(`here's ${to}`);
            return true;
        }
        actualAdjacencyList?.forEach((actualAdjacency) => {
            console.log(`now it's their children ${actualAdjacency}`);
            if (!visitedList.has(actualAdjacency))
                queue.push(actualAdjacency);
            visitedList.add(actualNode);
        });
    }
    return false;
}
exports.breadthFirstSearch = breadthFirstSearch;
// Executes a DFS
function depthFirstSearch({ actualNode, destinyNode, visitedNodes, adjacencyList }) {
    const actualNodeAdjacencyItems = adjacencyList.get(actualNode);
    if (actualNode === destinyNode) {
        console.log("reached " + destinyNode);
        return true;
    }
    console.log("actual airport: " + actualNode);
    actualNodeAdjacencyItems?.forEach((adjacencyNode) => {
        if (!visitedNodes.has(adjacencyNode)) {
            const nextDFS = { actualNode: adjacencyNode, destinyNode, visitedNodes, adjacencyList };
            visitedNodes.add(actualNode);
            depthFirstSearch(nextDFS);
        }
    });
}
exports.depthFirstSearch = depthFirstSearch;
//# sourceMappingURL=graphSearchAlgorithm.js.map