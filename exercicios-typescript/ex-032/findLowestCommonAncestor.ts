import { expect } from "@jest/globals";

type NodeIdSet = Set<number>;
class Node {
  public up: null | Node = null;
  public down: null | Node = null;
  public left: null | Node = null;
  public right: null | Node = null;

  constructor(public readonly id: number) {
    this.id = id;
  }
}

function LCA(node1: Node, node2: Node) {
  if (node1.id === node2.id) {
    return node1.id;
  }

  const visitedNodes1Id: NodeIdSet = new Set();
  const visitedNodes2Id: NodeIdSet = new Set();
  const bothNodes = [node1, node2];

  bothNodes.forEach((node, index) => {
    const queue = [node];

    while (queue.length !== 0) {
      const currentNode = queue.shift();

      if (currentNode) {
        index === 0 ? visitedNodes1Id.add(currentNode.id) : visitedNodes2Id.add(currentNode.id);
        currentNode.up ? queue.push(currentNode.up) : undefined
      }
    }
  });

  for (const visitedNodeId of visitedNodes1Id) {
    if (visitedNodes2Id.has(visitedNodeId)) {
      return visitedNodeId
    }
  }

  return 5;
}

describe("Solution tests", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);

  node1.down = node2;
  node2.up = node1;
  node3.up = node1;
  node2.right = node3;
  node3.left = node2;
  node2.down = node4;
  node4.up = node2;

  describe("Example tests", () => {
    it(`1. A node is the LCA of itself`, () => {
      expect(LCA(node1, node1)).toEqual(1);
      expect(LCA(node2, node2)).toEqual(2);
      expect(LCA(node3, node3)).toEqual(3);
      expect(LCA(node4, node4)).toEqual(4);
    });

    it(`2. Nodes in the same branch have one of both nodes as LCA`, () => {
      expect(LCA(node1, node2)).toEqual(1);
      expect(LCA(node1, node3)).toEqual(1);
      expect(LCA(node1, node4)).toEqual(1);
      expect(LCA(node2, node4)).toEqual(2);
    });

    it(`3. Nodes in different branches have the pivot node where both branches join as LCA`, () => {
      expect(LCA(node3, node4)).toEqual(1);
    });
  });
});
