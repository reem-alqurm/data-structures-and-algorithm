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
}



function zipLists (list1, list2) {
  // make a new list
  const newList = new LinkedList();
  list1 = list1.head;
  list2 = list2.head;
  newList.head = new Node(list1.value);
  list1 = list1.next;

  while (list1 || list2) {
    if (list1 && list2) {
      newList.append(list2.value);
      newList.append(list1.value);
      list2 = list2.next;
      list1 = list1.next;
    } else if (list1 === null && list2) {
      newList.append(list2.value);
      list2 = list2.next;
    } else if (list1 && list2 === null) {
      newList.append(list1.value);
      list1 = list1.next;
    } else {
      return;
    }
  }
  // console.log(newList.toString());
  return newList.toString();
 
}

const listOne = new LinkedList();
listOne.head = new Node(0);
listOne.head.next = new Node(1);
listOne.head.next.next = new Node(2);
listOne.head.next.next.next = new Node(3);
listOne.head.next.next.next.next = new Node(4);

const listTwo = new LinkedList();
listTwo.head = new Node(5);
listTwo.head.next = new Node(6);
listTwo.head.next.next = new Node(7);
listTwo.head.next.next.next = new Node(8);

module.exports = {
  list: LinkedList,
  node: Node,
  zip: zipLists,
};