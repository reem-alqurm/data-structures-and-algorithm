'use strict';

const linkedList = require('../linked-list.js');

describe('testing functionality of linked list ', () => {
  it ('should instantiate an empty linked list', () => {
    const list = new linkedList.list();

    expect(list).toEqual({ head: null });
  });

  it('should properly insert head into linked list', () => {
    const insertNode = new linkedList.list();
    insertNode.insert('test');

    expect(insertNode.head.value).toEqual('test');
  });

  it('should properly insert multiple nodes into linked list', () => {
    const insertNode = new linkedList.list();
    insertNode.insert('test');
    insertNode.insert('test2');
    insertNode.insert('test3');

    expect(insertNode.head.value).toEqual('test3');
    expect(insertNode.head.next.value).toEqual('test2');
    expect(insertNode.head.next.next.value).toEqual('test');
  });

  it('should return true when finding a value within the linked list that exists', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const booleanValue = list.includes(2);

    expect(booleanValue).toEqual(true);
  });

  it('should return false when searching for a value in linked list that does not exist', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const booleanValue = list.includes(5);

    expect(booleanValue).toEqual(false);
  });

  it('head property will properly point to the first node', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node('test');
    console.log('this is head', list.head);

    expect(list.head).toBeTruthy();
  });

  it('should return a string of all values that exist in the linked list', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    
    const testString = list.toString();
    expect(testString).toEqual('{0} -> {1} -> {2} -> {3} -> {null}');
  });

  it('should add a new node with the given value to the end of the list', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.append(4);
    expect(list.head.next.value).toEqual(4);
  });

  it('should add multiple nodes to the end of the list', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.append(2);
    list.append(4);

    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(4);
  });


  it('should add a new node with the given new value immediately before the first value node', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.insertBefore(1, 4);

    expect(list.head.next.value).toEqual(4);
  });

  it('should add a new node with the given new value immediately before the first node', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.insertBefore(0, 4);
    console.log(list);
    expect(list.head.value).toEqual(4);
  });

  it('should add a new node with the given new value after the first value node', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.insertAfter(1, 4);

    expect(list.head.next.next.value).toEqual(4);
  });

  it('should add a new node with the given new value after the last node', () => {
    const list = new linkedList.list();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.insertAfter(2, 4);

    expect(list.head.next.next.next.value).toEqual(4);
  });
  test('should insert a node before a node located i the middle of a linked list', ()=>{
    let ll = new linkedList.list();
    let firstValue = 3;
    let secondValue = 2;
    let thirdValue = 1;
    let value= 5;
   
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    ll.insertBefore(secondValue, value)
   
    expect(ll.head.next.value).toEqual(value);
})
it('to test where k is greater than the length of linked list', () => {
  const list = new linkedList.list();
  list.head = new linkedList.node(0);
  list.head.next = new linkedList.node(1);
  const test = list.kthFromEnd(5);

  expect(test).toEqual(0);
});

it('to test where k and the length of the list are the same', () => {
  const list = new linkedList.list();
  list.head = new linkedList.node(0);
  list.head.next = new linkedList.node(1);
  const test = list.kthFromEnd(2);

  expect(test).toEqual(0);

});

it('to test where k is not a positive integer', () => {
  const list = new linkedList.list();
  list.head = new linkedList.node(0);
  list.head.next = new linkedList.node(1);
  const test = list.kthFromEnd(5);

  expect(test).toEqual(0);
});

it('to test a linkedin list of size 1', () => {
  const list = new linkedList.list();
  list.head = new linkedList.node(0);
  const test = list.kthFromEnd(1);

  expect(test).toEqual(0);
});

it('to test if the value of the node kth from the end where k is in the middle of the list', () => {
  const list = new linkedList.list();
  list.head = new linkedList.node(0);
  list.head.next = new linkedList.node(1);
  list.head.next.next = new linkedList.node(2);
  list.head.next.next.next = new linkedList.node(3);
  const test = list.kthFromEnd(3);

  expect(test).toEqual(0);
});
});