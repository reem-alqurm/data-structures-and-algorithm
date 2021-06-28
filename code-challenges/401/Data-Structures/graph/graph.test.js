'use strict';

const graph = require('./graph.js');


describe('Testing graph methods', () => {

  it('Vertex can be successfully added to the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    test.addVertex(one);

    // console.log(test.adjacencyList);
    // console.log(test.adjacencyList.get(one));
    expect(test.adjacencyList).toBeTruthy();
    expect(test.adjacencyList.get(one)).toEqual([]);
  });

  it('An edge can be successfully added to the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);
    const testValue = test.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];

    // console.log(test.adjacencyList.get(one));
    expect(testValue).toEqual(expectedValue);
  });

  it('A collection of all vertices can be properly retrieved from the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);
    test.addEdge(two, one);
    const testValue = test.adjacencyList.get(one);
    const testValueTwo = test.adjacencyList.get(two);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];
    const expectedValueTwo = [{ 'vertex': { 'value': 'one' }, 'weight': 0 }];
    // console.log(testValue, testValueTwo);

    expect(testValue).toEqual(expectedValue);
    expect(testValueTwo).toEqual(expectedValueTwo);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addEdge(one, two);
    test.addEdge(one, three);

    const testValue = test.getNeighbors(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }, { 'vertex': { 'value': 'three' }, 'weight': 0 }];
    // console.log(testValue);

    expect(testValue).toEqual(expectedValue);
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addEdge(one, two);
    test.addEdge(one, three);
    const testValue = test.getNeighbors(one);
    const testWeight = testValue[0]['weight'];
    const testWeightTwo = testValue[1]['weight'];
    // console.log(testWeight);

    expect(testWeight).toEqual(0);
    expect(testWeightTwo).toEqual(0);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);

    expect(test.size(one)).toEqual(2);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    test.addVertex(one);
    test.addEdge(one);
    const testValue = test.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': undefined, 'weight': 0 }];


    expect(testValue).toEqual(expectedValue);
  });

  it('An empty graph properly returns null', () => {
    let test = new graph.Graph();
    let testValue = test.adjacencyList.values();
    // let expectedValue = { };
    // console.log(test.adjacencyList.values());

    expect(testValue).not.toBeUndefined();
  });
  it('Should properly traverse a graph breadth first', () => {
    let test = new graph.Graph();
    const pandora = new graph.Vertex('Pandora');
    const arendelle = new graph.Vertex('Arendelle');
    const metroville = new graph.Vertex('Metroville');
    const monstroplolis = new graph.Vertex('Monstroplolis');
    const narnia = new graph.Vertex('Narnia');
    const naboo = new graph.Vertex('Naboo');
    test.addVertex(pandora);
    test.addVertex(arendelle);
    test.addVertex(metroville);
    test.addVertex(monstroplolis);
    test.addVertex(narnia);
    test.addVertex(naboo);
    test.addEdge(pandora, arendelle);
    test.addEdge(arendelle, metroville);
    test.addEdge(arendelle, monstroplolis);
    test.addEdge(metroville, monstroplolis);
    test.addEdge(metroville, narnia);
    test.addEdge(metroville, naboo);
    test.addEdge(monstroplolis, naboo);
    test.addEdge(narnia, naboo);

    let testValue = test.breadthFirst(pandora);  
    // console.log(testValue.has(pandora));

    expect(testValue.has(pandora)).toBeTruthy();
    expect(testValue.has(arendelle)).toBeTruthy();
    expect(testValue.has(metroville)).toBeTruthy();
  });

  it('Should properly traverse a graph breadth first and return the number of vertices', () => {
    let test = new graph.Graph();
    const pandora = new graph.Vertex('Pandora');
    const arendelle = new graph.Vertex('Arendelle');
    const metroville = new graph.Vertex('Metroville');
    const monstroplolis = new graph.Vertex('Monstroplolis');
    const narnia = new graph.Vertex('Narnia');
    const naboo = new graph.Vertex('Naboo');
    test.addVertex(pandora);
    test.addVertex(arendelle);
    test.addVertex(metroville);
    test.addVertex(monstroplolis);
    test.addVertex(narnia);
    test.addVertex(naboo);
    test.addEdge(pandora, arendelle);
    test.addEdge(arendelle, metroville);
    test.addEdge(arendelle, monstroplolis);
    test.addEdge(metroville, monstroplolis);
    test.addEdge(metroville, narnia);
    test.addEdge(metroville, naboo);
    test.addEdge(monstroplolis, naboo);
    test.addEdge(narnia, naboo);

    let testValue = test.breadthFirst(pandora);  
    // console.log(testValue.has(pandora));

    expect(testValue.size).toEqual(6);
  });

  it('Should properly traverse a graph breadth first', () => {
    let test = new graph.Graph();
    const pandora = new graph.Vertex('Pandora');
    const arendelle = new graph.Vertex('Arendelle');
    const metroville = new graph.Vertex('Metroville');
    const monstroplolis = new graph.Vertex('Monstroplolis');
    const narnia = new graph.Vertex('Narnia');
    const naboo = new graph.Vertex('Naboo');
    test.addVertex(pandora);
    test.addVertex(arendelle);
    test.addVertex(metroville);
    test.addVertex(monstroplolis);
    test.addVertex(narnia);
    test.addVertex(naboo);
    test.addEdge(pandora, arendelle);
    test.addEdge(arendelle, metroville);
    test.addEdge(arendelle, monstroplolis);
    test.addEdge(metroville, monstroplolis);
    test.addEdge(metroville, narnia);
    test.addEdge(metroville, naboo);
    test.addEdge(monstroplolis, naboo);
    test.addEdge(narnia, naboo);

    let testValue = test.breadthFirst(pandora);  
    // console.log(testValue.has(pandora));

    expect(testValue.has(monstroplolis)).toBeTruthy();
    expect(testValue.has(narnia)).toBeTruthy();
    expect(testValue.has(naboo)).toBeTruthy();
  });
 
});


describe('Testing getEdges function for graphs', () => {

  it('Should return true that a trip is possible through the graph and return the total price', () => {
    let test = new graph.Graph();
    const pandora = new graph.Vertex('Pandora');
    const arendelle = new graph.Vertex('Arendelle');
    const metroville = new graph.Vertex('Metroville');
    const monstroplolis = new graph.Vertex('Monstroplolis');
    const narnia = new graph.Vertex('Narnia');
    const naboo = new graph.Vertex('Naboo');
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

    expect(graph.businessTrip(test, [metroville, pandora])).toEqual('true, $82');
    expect(graph.businessTrip(test, [arendelle, monstroplolis, naboo])).toEqual('true, $115');
  });

  it('Should return false that a trip is not possible through the graph', () => {
    let test = new graph.Graph();
    const pandora = new graph.Vertex('Pandora');
    const arendelle = new graph.Vertex('Arendelle');
    const metroville = new graph.Vertex('Metroville');
    const monstroplolis = new graph.Vertex('Monstroplolis');
    const narnia = new graph.Vertex('Narnia');
    const naboo = new graph.Vertex('Naboo');
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

    expect(graph.businessTrip(test, [naboo, pandora])).toEqual('false, $0');
    expect(graph.businessTrip(test, [narnia, arendelle, naboo])).toEqual('false, $0');
  });
});
