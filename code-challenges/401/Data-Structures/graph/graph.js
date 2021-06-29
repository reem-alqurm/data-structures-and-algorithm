'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex,
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex){
    //this could be added as LinkedList, using an array to keep it simple
    this.adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex)){
      throw new Error('Invalid start vertex');
    }
    //create a new edge and add that to adjacency list for the vertex
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight)); // adds an edge to the vertex's list of connections
  }

  //helper function to help with traversals
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)){
      throw new Error('no neighbors for that vertex');
    }
    return [...this.adjacencyList.get(vertex)]; // don't want to mutate data, spreading into new array
  }




  size(vertex){
    const queue = [];
    const visited = new Set();

    queue.unshift(vertex);
    visited.add(vertex);

    while(queue.length) {
      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex); //gives an array of all neighbors

      for (let neighbor of neighbors) { // each neighbor is an edge
        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)){ //if we have already visited skip
          continue;
        } else { // if not add to visited list, and queue it up
          visited.add(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }
    return visited.size;
  }
  breadthFirst(vertex){
    const queue = []; //order of visited nodes will be FIFO
    const visited = new Set(); // track visited vertices, Set()this works a lot like a map - throws errors for trying to add duplicates, could use a lot of things here (can do an array, and use array.includes)
    //this is also helpful if you think your linked list has a cycle

    queue.unshift(vertex);
    visited.add(vertex);

    while(queue.length) {
      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex); //gives an array of all neighbors

      for (let neighbor of neighbors) { // each neighbor is an edge
        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)){ //if we have already visited skip
          continue;
        } else { // if not add to visited list, and queue it up
          visited.add(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }
    return visited;
  }
  


}
function businessTrip(graph, cityArray) {
  let totalCost = 0;
  let check = false;

  for (let i = 0; i < cityArray.length - 1; i++) {
    let neighbors = graph.getNeighbors(cityArray[i]);
    for (let j = 0; j <= neighbors.length - 1; j++) {
      if (cityArray[i + 1] === neighbors[j].vertex) {
        totalCost += neighbors[j].weight;
        check = true;
      }
    }
    if (check === false) {
      totalCost = 0;
      check = false;
      return `${check}, $${totalCost}`;
    }
  }

  return `${check}, $${totalCost}`;
}

function depthFirstTraversal (graph, vertex) {
  // const stack = [];
  const visitedVertices = new Set();

  // stack.push(vertex);
  visitedVertices.add(vertex); // this could be a good opportunity for recursion as well

  const traverse = (current, visited) => {
    
    visited.add(current);
    
    const neighbors = graph.getNeighbors(current);

    for (let neighbor of neighbors) {
      if(!visited.has(neighbor.vertex)){
        traverse(neighbor.vertex, visited);
      }
    }
  };

  traverse(vertex, visitedVertices);
  return visitedVertices;
}



let test = new Graph();
const pandora = new Vertex('Pandora');
const arendelle = new Vertex('Arendelle');
const metroville = new Vertex('Metroville');
const monstroplolis = new Vertex('Monstroplolis');
const narnia = new Vertex('Narnia');
const naboo = new Vertex('Naboo');
test.addVertex(pandora);
test.addVertex(arendelle);
test.addVertex(metroville);
test.addVertex(monstroplolis);
test.addVertex(narnia);
test.addVertex(naboo);
test.addEdge(pandora, arendelle, 150);
test.addEdge(metroville, pandora, 82);
test.addEdge(arendelle, metroville, 99);
test.addEdge(arendelle, monstroplolis, 42);
test.addEdge(metroville, monstroplolis, 105);
test.addEdge(metroville, narnia, 37);
test.addEdge(metroville, naboo, 26);
test.addEdge(monstroplolis, naboo, 73);
test.addEdge(narnia, naboo, 250);

// console.log(getEdge(test, [metroville, pandora, arendelle]));

// console.log(depthFirstTraversal(test, pandora));

module.exports = {
  Vertex,
  Edge,
  Graph,
  businessTrip,
  depthFirstTraversal
};
