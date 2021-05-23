'use strict';

const queuewithStack = require('../queueWithStacks/queue-with-stacks.js');

describe('testing pseudoqueue ', () => {
  const pseudoQueue = new queuewithStack.queue();
  const nodeA = new queuewithStack.node(20);
  const nodeB = new queuewithStack.node(15);
  const nodeC = new queuewithStack.node(10);
  const nodeD = new queuewithStack.node(5);
  pseudoQueue.enqueue(nodeA);
  pseudoQueue.enqueue(nodeB);
  pseudoQueue.enqueue(nodeC);
  pseudoQueue.enqueue(nodeD);

  it ('should insert value into the pseudoQueue first', () => {

    expect(pseudoQueue.rear.top.value).toEqual(5);
  });

  it ('should insert value into the empty pseudoque', () => {

    const pseudoQueueNew = new queuewithStack.queue();
    const nodeA = new queuewithStack.node(5);

    pseudoQueueNew.enqueue(nodeA);
  });

  it ('should output value of last node in pseudoqueue', () => {
    pseudoQueue.dequeue();

    expect(pseudoQueue.dequeue().value).toEqual(15);
  });
});