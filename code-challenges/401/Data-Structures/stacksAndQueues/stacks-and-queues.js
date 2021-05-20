'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty(){
      return this.top=== null;
  }
  
  push(node) {
    if (this.isEmpty()) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }
    return this.top;
  }

  pop() {
    if (this.isEmpty()){
      return 'it is an empty stack';
    } else {
      let temp = this.top;
  
      this.top = temp.next;
      return temp.value;
    }
  }

  peek() {
    if (this.isEmpty()){
      return 'it is an empty stack';
    } else {
      return this.top.value;
    }
  }

}
///////////////////////////////////////////////
class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }

    isEmpty() {
        return this.front === null;
      }
    enqueue(node) {
      if (this.isEmpty()) {
        this.front = node;
        this.rear = node;
      } else {
        this.rear = node;
        this.rear.next = node;
        
      }
    }
  
    dequeue() {
      if (this.isEmpty()){
        return 'it is an empty queue';
      } else {
        let temp = this.front;
    
        this.front = temp.next;
        return temp.value;
      }
    }
  
    peek() {
      if (this.isEmpty()){
        return 'it is an empty queue';
      } else {
        return this.front.value;
      }
    }
  
  }
module.exports = {
  stack: Stack,
  queue: Queue,
  node: Node,
};