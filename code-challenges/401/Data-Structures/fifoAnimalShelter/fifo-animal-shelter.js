'use strict';

class Stack {
  constructor(){
    this.storage = [];
  }
  push(value){
    this.storage.push(value);
  }
  pop(){
    this.storage.pop();
  }
}
class Queue {
  constructor(){
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  enqueue(value){
    this.stackOne.push(value);
  }
  dequeue(){
    if(this.stackTwo.storage.length === 0){
      if(this.stackOne.storage.length === 0) 
      {return 'There is nothing in the Queue';}
      while(this.stackOne.storage.length > 0){
        let p = this.stackOne.storage.pop();
        this.stackTwo.storage.push(p);
      }
    }
    return this.stackTwo.storage.pop();
  }
}
class AnimalShelter{
  constructor(){
    this.dog = new Queue();
    this.cat = new Queue();
  }
  enqueue(animal){
    if(animal.type === 'cat'){
      this.cat.enqueue(animal)
    }
    if(animal.type === 'dog'){
      this.dog.enqueue(animal)
    }
  }
  dequeue(pref){
    if(pref === 'dog'){
      return this.dog.dequeue(pref);
    } else if (pref === 'cat'){
      return this.cat.dequeue(pref);
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;