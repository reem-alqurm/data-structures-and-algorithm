'use strict';
const Node = require('./fizzBuzzTree').Node;
const katyTree = require('./fizzBuzzTree').kayTree;
const FizzBuzzTree = require('./fizzBuzzTree').FizzBuzzTree;
describe('Binary Tree', () => {
  let tree;
    tree = new katyTree();
    tree.addNode(7);
    tree.addNode(20);
    tree.addNode(5);
    tree.addNode(6);
    tree.addNode(15);
    tree.addNode(60);
    tree.addNode(6);
    console.log(tree);
 
  it('If the value is divisible by 3, replace the value with “Fizz”', () => {
    const expected = FizzBuzzTree(tree);
    expect(expected.children[2].value).toEqual('Fizz');
  });
  it('If the value is divisible by 5, replace the value with “Buzz”', () => {
    const expected = FizzBuzzTree(tree);
    expect(expected.children[1].value).toEqual('Buzz');
  });
  it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz”', () => {
    const expected = FizzBuzzTree(tree);
    expect(expected.children[3].value).toEqual('FizzBuzz');
    expect(expected.children[4].value).toEqual('FizzBuzz');
  });
  it('If the value is not divisible by 3 or 5, simply turn the number into a String', () => {
    expect(typeof FizzBuzzTree(tree).children[0].value).toEqual('string'); // to check if its return a string 
    expect(typeof FizzBuzzTree(tree).children[5].value).toEqual('string');
  });
});