'use strict';

const stacksAndQueues = require('../stacks-and-queues');

describe('tests to prove the following functionality for the stack and queues', () => {
  it ('should successfully push onto a stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('reem');
    stack.push(newNode);

    expect(stack.top.value).toEqual('reem');
  });

  it ('should successfully push multiple values onto a stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('reem');
    const newNodeTwo = new stacksAndQueues.node('Bahaa');
    stack.push(newNode);
    stack.push(newNodeTwo);

    expect(stack.top.value).toEqual('Bahaa');
    expect(stack.top.next.value).toEqual('reem');
  });

  it ('should  successfully pop off the stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('reem');
    const newNodeTwo = new stacksAndQueues.node('Bahaa');
    stack.push(newNode);
    stack.push(newNodeTwo);
    let one = stack.pop();
    
    expect(one).toEqual('Bahaa');
  });

  
  it ('should  successfully pop multiple values off  the stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('reem');
    const newNodeTwo = new stacksAndQueues.node('Bahaa');
    stack.push(newNode);
    stack.push(newNodeTwo);
    let one = stack.pop();
    let two = stack.pop();

    expect(one).toEqual('Bahaa');
    expect(two).toEqual('reem');
    expect(stack.isEmpty()).toBeTruthy();
  });

  it ('should  successfuly empty a stack after multiple pops', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('reem');
    const newNodeTwo = new stacksAndQueues.node('Bahaa');
    stack.push(newNode);
    stack.push(newNodeTwo);
    let one = stack.pop();
    let two = stack.pop();

    expect(one).toEqual('Bahaa');
    expect(two).toEqual('reem');
    expect(stack.isEmpty()).toBeTruthy();
  });

  it ('should  successfully peek the next item on the stack', () => {
    const stack = new stacksAndQueues.stack();
    const newNode = new stacksAndQueues.node('reem');
    const newNodeTwo = new stacksAndQueues.node('Bahaa');
    stack.push(newNode);
    stack.push(newNodeTwo);
    let value = stack.peek();

    expect(value).toEqual('Bahaa');
  });

  it ('should successfully instantiate an empty stack', () => {
    const stack = new stacksAndQueues.stack();

    expect(stack.top).toEqual(null);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it ('should raises exception when calling pop or peek on empty stack ', () => {
    const stack = new stacksAndQueues.stack();


    expect(() => stack.pop().toEqual('it is an empty stack'));
    expect(() => stack.peek().toThrow('it is an empty stack'));
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////

    it ('should successfully enqueue into a queue', () => {
      const queue = new stacksAndQueues.queue();
      const newNode = new stacksAndQueues.node('reem');
      queue.enqueue(newNode);
  
      expect(queue.front.value).toEqual('reem');
      expect(queue.rear.value).toEqual('reem');

    });
  
    it ('should successfully enqueue multiple values into a queue', () => {
      const queue  = new stacksAndQueues.queue();
      const newNode = new stacksAndQueues.node('reem');
      const newNodeTwo = new stacksAndQueues.node('Bahaa');
      queue.enqueue(newNode);
      queue.enqueue(newNodeTwo);
  
      expect(queue.front.value).toEqual('reem');
      expect(queue.rear.value).toEqual('Bahaa');
    });
  
    it ('should successfully dequeue out of a queue the expected value', () => {
      const queue = new stacksAndQueues.queue();
      const newNode = new stacksAndQueues.node('reem');
      const newNodeTwo = new stacksAndQueues.node('Bahaa');
      queue.enqueue(newNode);
      queue.enqueue(newNodeTwo);
      let one = queue.dequeue();
      
      expect(one).toEqual('reem');
    });
  
    
    it ('should successfully peek into a queue, seeing the expected value', () => {
      const queue  = new stacksAndQueues.queue();
      const newNode = new stacksAndQueues.node('reem');
      queue.enqueue(newNode);
      let one = queue.peek();
  
      expect(one).toEqual('reem');
    });
  
    it ('should successfully empty a queue after multiple dequeues', () => {
      const queue = new stacksAndQueues.queue();
      const newNode = new stacksAndQueues.node('reem');
      const newNodeTwo = new stacksAndQueues.node('Bahaa');
      queue.enqueue(newNode);
      queue.enqueue(newNodeTwo);
      queue.dequeue();
      queue.dequeue();

      expect(queue.isEmpty()).toBeTruthy();
    });
  
  
    it ('should successfully instantiate an empty queue', () => {
      const queue = new stacksAndQueues.queue();
  
      expect(queue.isEmpty()).toBeTruthy();
    });
  
    it ('should raises exception when calling dequeue or peek on empty queue ', () => {
      const queue = new stacksAndQueues.queue();
  
      expect(() => queue.dequeue().toEqual('it is an empty queue'));
      expect(() => queue.peek().toThrow('it is an empty queue'));
    });
});