// Dijkstran algorytmin toiminta perustuu siihen,
// että se palauttaa kaikki nodet siinä jörjestyksessä, kun niissä on käyty.
// Se saa myös solmut osoittamaan takasisin edelliseen solmuunsa,
// jolloin voimme tehokkaasti laskea lyhyimmän polun palaamalla takaisin loppusolmusta.

export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];

  startNode.distance = 0;

  const unvisitedNodes = getAllNodes(grid);

  while(!!unvisitedNodes) {
    sortNodesByDistance(unvisitedNodes);

    const closestNode = unvisitedNodes.shift();
    //Jos tulee vastaan seinä niin skip
    if(closestNode.isWall) continue;
    //Jos lähimpään solmuun on ääretön etäisyys, niin
   //on oltava loukussa ja meidän pitäisi siksi lopettaa.
   if(closestNode.distance === Infinity) return visitedNodesInOrder;

   closestNode.isVisited = true;

   visitedNodesInOrder.push(closestNode);

   if(closestNode === finishNode) return visitedNodesInOrder;

   updateUnvisitedNeighbors(closestNode, grid);

  }
  console.log('visitedNode', visitedNodesInOrder)
}

function getAllNodes(grid) {
  const nodes = [];
  for(let row of grid){
    for(let node of row){
      nodes.push(node);
    }
  }
  return nodes;
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const {col, row} = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}