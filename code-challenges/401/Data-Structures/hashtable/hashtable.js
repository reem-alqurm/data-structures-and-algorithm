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

  insert(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return;
    } 
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }
}
class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size);
  
    }
  
    hash(key) {
      let asciiSum = key.split('').reduce((acc, char) => { // this gives us all characters separately
        return acc + char.charCodeAt(0); //this is something to convert string characters into ascii values - at 0 because we split it
      }, 0);
  
      return (asciiSum * 599) % this.size;
    }
  
    add(key, value) {
      let hash = this.hash(key); // index of our bucket
  
      if (!this.buckets[hash]) {
        this.buckets[hash] = new LinkedList();
      }
  
      let data = { [key]: value };
      this.buckets[hash].insert(data);
    }
  
    contains(key) {
      //does the key exist in our buckets
      //first hash
      let hash = this.hash(key);
      
      //check if bucket has thing
      if (this.buckets[hash]){
        return true;
      } else {
        return false;
      }
      
    }
  
    get(key) {
      let hash = this.hash(key);
      let bucket = this.buckets[hash];
      let current = bucket.head;
  
      while (current){
        if(current.value[key]) {
          return current.value[key];
        } else if (current.next === null) {
          return null;
        } else {
          current = current.next;
        }
      }
    }
  }
  
  module.exports = {
    Node,
    LinkedList,
    HashTable,
  };