'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


  append(value) {
    let current = this.head;

    while (current) {

      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
  }

  insert(value) {
    if (this.head === null) {
      let current = new Node(value);
      this.head = current;
    } else {
      let current = this.head;
      let newNode = new Node(value);
      newNode.next = current;
      this.head = newNode;
      current = this.head;
      return current;
    }
  }

  insertBefore(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    while (current.next !== null) {
      if (current.value === value) {
        newNode.next = current;
        this.head = newNode;
      } else if (current.next.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newVal) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let newNode = new Node(newVal);
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (value === current.value) {
        // current = current.next;
        return true;
      } else if (current.next === null) {
        return false;
      } else {
        current = current.next;
      }
    }
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      let stringTwo = current.value;
      current = current.next;
      string += `{${stringTwo}} -> `;
    }
    string += '{null}';
    return string;
  }


kthFromEnd(k) {
  //need count of how many nodes are in linked list to know where end is

  if (this.head === null || k < 1) {
    return null;
  }

  let pointerOne = this.head;
  let pointerTwo = this.head;

  for(let i = 0; i < k - 1; i++) {
    if (pointerTwo === null) {
      return null;
    }
    pointerTwo = pointerTwo.next;
  }
  while (pointerTwo.next !== null) {
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next;
  }
  console.log('pointer one', pointerOne, 'pointer two', pointerTwo);
  return pointerOne.value;
 
}
}


const ll = new LinkedList();

ll.head = new Node(0);
ll.head.next = new Node(1);
ll.head.next.next = new Node(2);
ll.head.next.next.next = new Node(3);

// ll.append(4);
ll.kthFromEnd(1);
ll.toString();
console.log('this is linked list', ll.toString());
// ll.includes(3);
// ll.insert(6);

module.exports = {
  list: LinkedList,
  node: Node,
};