'use strict';

const linkedList = require('../ll-zip.js');

describe('testing zip lists function', () => {
  it (' return the zipped of two lists', () => {
    const list1 = new linkedList.list();
    list1.head = new linkedList.node(1);
    list1.head.next = new linkedList.node(3);
    list1.head.next.next = new linkedList.node(2);
    
    const list2 = new linkedList.list();
    list2.head = new linkedList.node(5);
    list2.head.next = new linkedList.node(9);
    list2.head.next.next = new linkedList.node(4);

    const test = linkedList.zip(list1, list2);

    expect(test).toEqual('{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> {null}');
  });

  it (' return the zipped of two lists', () => {
    const list1 = new linkedList.list();
    list1.head = new linkedList.node(1);
    list1.head.next = new linkedList.node(3);
    
    const list2 = new linkedList.list();
    list2.head = new linkedList.node(5);
    list2.head.next = new linkedList.node(9);
    list2.head.next.next = new linkedList.node(4);

    const test = linkedList.zip(list1, list2);

    expect(test).toEqual('{1} -> {5} -> {3} -> {9} -> {4} -> {null}');
  });

  it (' return the zipped of two lists', () => {
    const list1 = new linkedList.list();
    list1.head = new linkedList.node(1);
    list1.head.next = new linkedList.node(3);
    list1.head.next.next = new linkedList.node(2);
    
    const list2 = new linkedList.list();
    list2.head = new linkedList.node(5);
    list2.head.next = new linkedList.node(9);

    const test = linkedList.zip(list1, list2);

    expect(test).toEqual('{1} -> {5} -> {3} -> {9} -> {2} -> {null}');
  });
});