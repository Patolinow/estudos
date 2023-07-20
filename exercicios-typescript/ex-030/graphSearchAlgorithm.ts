// Algoritmos de pesquisa por gráfico possuem 2 formas de serem representados
//
// 1 - Como uma adjacency matrix, exemplo:
//      A  B  C   D            (1 = nodes conectados, 0 = nodes não conectados)
//
// A   [0, 1, 1, 0],
// B   [1, 0, 0, 0],
// C   [1, 0, 0, 1],
// D   [0, 0, 1, 0]

// Vantagens do modelo acima: É mais fácil manipular edges pois o espaço ja esta na
// memória (seria só uma questão de inverter os 0 e 1)
//
// Desvantagens do metodo acima: por possuir muitos espaços vazios ela ocupa muito
// espaço na memória e é mais custoso adicionar nodes, tendo em vista que é necessário
// criar uma nova matriz sempre que um novo node é adicionado.
//
// 2 - Como adjacency list, exemplo:
// {
// A:[B,C],
// B:[A],
// C:[A,D],
// D:[C]
// }
//
// Vantagens do método acima: É mais fácil iterar sobre os nodes e edges pois eles
// tem o propio array de vizinhos que são conectados por suas edges, e ocupa menos
// espaço na memória.
//
// Desvantagens: É mais difícil de manipar edges que no método

// Formas de iterar sobre nodes
//
// 1 - DFS (depth-first search)
// Normalmente feito utilizando uma função recursiva, você faz uma busca apenas
// mos primeiros nodes até chegar ao mais profundo, após isso vc vai ao segundo
// node mais profundo e assim por diante até frequentar todos os nodes.
// Pseudo code:
// function visit(N) { // N = Node atual
//   if (N !== "visited") {
//     visit(N)
//   }
//   return;
// }
//
// 2 - BFS (breadth-first search)
// Uma forma de pesquisa mais abrangente que busca em todos os nodes que estão
// conectados ao node atual da pesquisa, assim que todos os nodes conectados ao
// node atual foram verificados, ele começa a verificar a partir do node seguinte.
// Pseudo code:
// let Q = [s] // s = árvore de nodes
// while (Q.length !== 0) {
//   const N = Q.dequeue() // função utilizada para desplugar o node atual do resto da árvore
//
//   for (const value of N.children) {
//     Q.equeue(value) // função para plugar novamente o node, agr sem o children que foi desplugado e verificado
//   }
// }

type Airports = string[];
type Routes = string[][];
export type AdjacencyNodes = Map<string,string[]>

const airports: Airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
const routes: Routes = [
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
export const adjacencyNodes: AdjacencyNodes = new Map()



export function hasRouteFrom(from: string, to: string, adjacency: AdjacencyNodes): boolean {

  
  return false;
}

// Saida => tds os nodes como adjacencyList 
export function defineNodes(airports: Airports, routes: Routes, adjacencyList: AdjacencyNodes):AdjacencyNodes{
    
      for (const airport of airports) {
        adjacencyList.set(airport, [])
      }

      routes.forEach((route) => {
        adjacencyList.get(route[0])?.push(route[1])
        adjacencyList.get(route[1])?.push(route[0])
      })
    
  return adjacencyList
}

const test = defineNodes(airports, routes, adjacencyNodes)
console.log(test)


// wrong aproach
// for (let i = 0; i < adjacency.length; i++) {
//   const possibleAdjacency = [adjacency[i].join(""), adjacency[i].reverse().join("")];

//   const isRoute = possibleAdjacency.includes(from + to);
//   if (isRoute) {
//     return isRoute;
//   }
// }